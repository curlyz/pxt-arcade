/// <reference path="../node_modules/pxt-core/localtypings/pxteditor.d.ts" />

namespace pxt.editor {
    if (true) {
        function patchBlocks(pkgTargetVersion: string, dom: Element) {
            const allEventNodes = U.toArray(
                dom.querySelectorAll("block[type=spritesoverlap]")
            )
                .concat(U.toArray(dom.querySelectorAll("block[type=spritesoncreated]")))
                .concat(U.toArray(dom.querySelectorAll("block[type=spritesondestroyed]")))
                .concat(U.toArray(dom.querySelectorAll("block[type=spritesollisions]")));

            allEventNodes.forEach((node) => {
                // Don't rewrite if already upgraded, i.e. if there are argument_reporter_custom
                // shadows already present
                if (
                    node.querySelectorAll("shadow[type=argument_reporter_custom]").length >
                    0
                ) {
                    return;
                }

                const paramValues = U.toArray(node.children).filter((child) => {
                    return (
                        child.tagName == "value" &&
                        child.getAttribute("name").indexOf("HANDLER_DRAG_PARAM_") !== -1
                    );
                });
                const statementsRoot = node.querySelector("statement[name=HANDLER]");
                const usedVariables = U.toArray(
                    statementsRoot.querySelectorAll("block[type=variables_get]")
                );

            paramValues.forEach(value => {
                let oldVariableName = "";

                const handlerVarShadow = getShadow(value, "variables_get_reporter");

                if (!handlerVarShadow) {
                    return;
                }

                const connectedVarBlock = getChildBlock(value, "variables_get");

                    if (connectedVarBlock) {
                        // A variable is connected to the shadow variable reporter; use the name for
                        // the argument reporter and delete the variable
                        const connectedVarField = getField(connectedVarBlock, "VAR");
                        oldVariableName = connectedVarField.textContent;
                        value.removeChild(connectedVarBlock);
                    }

                const handlerVarField = getField(handlerVarShadow, "VAR");
                const argReporterName = handlerVarField.textContent;
                oldVariableName = oldVariableName || argReporterName;
                changeVariableToSpriteReporter(handlerVarShadow, argReporterName);

                    // Change all references to this variable inside the handler to argument reporters
                    usedVariables.forEach((usedVarBlock) => {
                        const usedVarField = getField(usedVarBlock, "VAR");
                        if (usedVarField && usedVarField.textContent === oldVariableName) {
                            // This variable is a reference to a handler parameter; change it to an
                            // argument reporter
                            changeVariableToSpriteReporter(usedVarBlock, argReporterName);
                        }
                    });
                });
            });

            /**
             * Upgrade for scene.setTile() which went from being expandable to not
             */
            U.toArray(dom.querySelectorAll("block[type=gamesettile]")).forEach(
                (block) => {
                    const mutation = getMutation(block);

                    if (!mutation) return; // Already upgraded

                    const expanded = mutation.getAttribute("_expanded") !== "0";
                    block.removeChild(mutation);

                    if (expanded) {
                        // The value input must already be in the XML, so no changes needed
                        return;
                    } else {
                        // There might be a value input present, but we should remove it
                        // and replace it with the default to replicate the unexpanded behavior
                        const value = getChildNode(block, "value", "name", "wall");
                        if (value) {
                            block.removeChild(value);
                        }

                        const newValue = replaceToggle("wall", "toggleOnOff", "on", "false");
                        block.appendChild(newValue);
                    }
                }
            );
            /**
             * Upgrade for game.over() which went from being expandable twice to being expandable once
             */
            if (pxt.semver.strcmp(pkgTargetVersion || "0.0.0", "0.10.0") < 0) {
                U.toArray(dom.querySelectorAll("block[type=gameOver]")).forEach(
                    (block) => {
                        const mutation = getMutation(block);
                        const value = getChildNode(block, "value", "name", "win");
                        const expansion = mutation.getAttribute("_expanded");

                        if (expansion !== "0") {
                            // Decrement expansion level, as win is now required
                            mutation.setAttribute("_expanded", Number(expansion) - 1 + "");
                        } else {
                            // Remove old value to replace it default to maintain current behavior
                            if (value) {
                                block.removeChild(value);
                            }

                            const newValue = replaceToggle(
                                "win",
                                "toggleWinLose",
                                "win",
                                "false"
                            );
                            block.appendChild(newValue);
                        }
                    }
                );
            }

            /**
             * Upgrade for enum SpriteKind -> SpriteKindLegacy
             */
            if (pxt.semver.strcmp(pkgTargetVersion || "0.0.0", "0.11.20") < 0) {
                /**
                       * Sometimes the getters for these omit the enum member's # improperly,
                       * so we need to map those numbers to the new values.
                       * e.g.
                       * bad:
                      <value name="kind">
                          <shadow type="spritekind">
                              <field name="MEMBER">Cow</field>
                          </shadow>
                          <block type="spritetype">
                              <field name="MEMBER">Player</field>
                          </block>
                      </value>
                       *
                       * good:
                      <value name="kind">
                          <shadow type="spritekind">
                              <field name="MEMBER">7Cow</field>
                          </shadow>
                          <block type="spritetype">
                              <field name="MEMBER">1Player</field>
                          </block>
                      </value>
                       */
                const legacyKindConversions: pxt.Map<string> = {};

                pxt.U.toArray(dom.querySelectorAll("variable[type=SpriteKind]")).forEach(
                    (block) => {
                        block.setAttribute("type", "SpriteKindLegacy");
                        const kindValue = (block.textContent || "").trim();
                        const withoutNum = /[0-9]*([^0-9].*)/.exec(kindValue);
                        if (withoutNum) {
                            legacyKindConversions[withoutNum[1]] = kindValue;
                        }
                    }
                );

                pxt.U.toArray(
                    dom.querySelectorAll("shadow[type=spritetype], block[type=spritetype]")
                ).forEach((block) => {
                    const memberField = getField(block, "MEMBER");
                    const cont = (memberField?.textContent || "").trim();

                    if (legacyKindConversions[cont]) {
                        memberField.textContent = legacyKindConversions[cont];
                    }
                });
            }

            if (pxt.semver.strcmp(pkgTargetVersion || "0.0.0", "0.18.9") < 0) {
                /**
                       * Add draggable param for tile that was hit as child of sprite hit wall block
                      <value name="HANDLER_DRAG_PARAM_location">
                          <shadow type="argument_reporter_custom">
                              <mutation typename="tiles.Location"/>
                              <field name="VALUE">location</field>
                          </shadow>
                      </value>
                       */
                U.toArray(dom.querySelectorAll("block[type=spriteshitwall]")).forEach(
                    (block) => {
                        const doc = block.ownerDocument;
                        const tileHitParam = doc.createElement("value");
                        tileHitParam.setAttribute("name", "HANDLER_DRAG_PARAM_location");

                        const shadow = doc.createElement("shadow");
                        shadow.setAttribute("type", "argument_reporter_custom");

                        const mut = doc.createElement("mutation");
                        mut.setAttribute("typename", "tiles.Location");

                        const field = doc.createElement("field");
                        field.setAttribute("name", "VALUE");
                        field.textContent = "location";

                        shadow.appendChild(mut);
                        shadow.appendChild(field);

                        tileHitParam.appendChild(shadow);
                        block.appendChild(tileHitParam);
                    }
                );
            }

            /**
             * move from tilemap namespace to tiles namespace
             * <block type="tilemap_locationXY">
                    <field name="xy">tilemap.XY.column</field>
                    <value name="location">
                        <block type="variables_get">
                            <field name="VAR" id="L%xa3_Yy]Kq+]Q|yE{Fv">location</field>
                        </block>
                    </value>
                </block>
             */
            U.toArray(dom.querySelectorAll("block[type=tilemap_locationXY]")).forEach(block => {
                const xyField = getField(block, "xy");
                xyField.textContent = (xyField.textContent || "").replace(/^tilemap./, "tiles.");
            });
        }

        if (pxt.semver.strcmp(pkgTargetVersion || "0.0.0", "1.12.34") < 0) {
            const lang = pxt.BrowserUtils.getCookieLang();
            if (lang == "es-MX") {
                // on player 2 a button pressed
                pxt.U.toArray(dom.querySelectorAll("block[type=ctrlonbuttonevent]"))
                .forEach(eventRoot => {
                    swapFieldIfNotMatching(eventRoot, "button", "controller", "ControllerButton.");
                });
            } else if (lang === "es-ES") {
                pxt.U.toArray(dom.querySelectorAll("[type=music_sounds]>field[name=note]"))
                    .forEach(node => node.setAttribute("name", "name"));
                // on a button pressed
                pxt.U.toArray(dom.querySelectorAll("block[type=keyonevent]"))
                    .forEach(eventRoot => {
                        swapFieldIfNotMatching(eventRoot, "event", "button", "ControllerButtonEvent.");
                    });
                // on player 2 a button pressed
                pxt.U.toArray(dom.querySelectorAll("block[type=ctrlonbuttonevent]"))
                    .forEach(eventRoot => {
                        swapFieldIfNotMatching(eventRoot, "button", "controller", "ControllerButton.");
                    });
            } else if (lang === "de") {
                pxt.U.toArray(dom.querySelectorAll("block[type=image_create]>value[name=heNacht]"))
                    .forEach(node => node.setAttribute("name", "height"));
            }
        }

        if (pxt.semver.strcmp(pkgTargetVersion || "0.0.0", "1.0.0") < 0) {
            // At some point Sprite.z switched from being a getter/setter to a property
            pxt.U.toArray(dom.querySelectorAll("block[type=Sprite_blockCombine_set]>field[name=property]"))
                .forEach(node => {
                    if (node.textContent.trim() === "Sprite.z@set") {
                        node.textContent = "Sprite.z";
                    }
                });


            // The kind field used by the legacy animation editor switched to including the numerical
            // enum value in the field (e.g. Walking -> 0Walking)
            const actionKinds = pxt.U.toArray(dom.querySelectorAll("variable[type=ActionKind]"));

            if (actionKinds.length) {
                pxt.U.toArray(dom.querySelectorAll("block[type=action_enum_shim]>field[name=MEMBER]"))
                    .concat(pxt.U.toArray(dom.querySelectorAll("shadow[type=action_enum_shim]>field[name=MEMBER]")))
                    .forEach(node => {
                        const value = node.textContent;
                        if (!/^\d/.test(value)) {
                            // The correct numerical value will be in the variables
                            for (const kind of actionKinds) {
                                const match = /^\d+(.*)/.exec(kind.textContent);
                                if (match?.[1] === value) {
                                    node.textContent = kind.textContent;
                                    break;
                                }
                            }
                        }
                    });
            }
        }
    }

    function swapFieldIfNotMatching(
        eventRoot: Element,
        fieldAName: string,
        fieldBName: string,
        fieldAShouldStartWith: string
    ) {
        const fieldA = eventRoot.querySelector(`field[name=${fieldAName}]`);
        const fieldB = eventRoot.querySelector(`field[name=${fieldBName}]`);
        if (!fieldB || !fieldA) return;
        if (!fieldA.innerHTML.startsWith(fieldAShouldStartWith)
                && fieldB.innerHTML.startsWith(fieldAShouldStartWith)) {
            // swapped by invalid translation we now catch; swap back
            fieldA.setAttribute("name", fieldBName);
            fieldB.setAttribute("name", fieldAName);
        }
    }


    function changeVariableToSpriteReporter(varBlockOrShadow: Element, reporterName: string) {
        const varField = getField(varBlockOrShadow, "VAR");
        varBlockOrShadow.setAttribute("type", "argument_reporter_custom");
        varField.setAttribute("name", "VALUE");
        varField.textContent = reporterName;
        varField.removeAttribute("variabletype");
        varField.removeAttribute("id");
        const mutation = varBlockOrShadow.ownerDocument.createElement("mutation");
        mutation.setAttribute("typename", "Sprite");
        varBlockOrShadow.insertBefore(mutation, varBlockOrShadow.firstChild);
    }

        function getField(parent: Element, name: string) {
            return getChildNode(parent, "field", "name", name);
        }

        function getShadow(parent: Element, type: string) {
            return getChildNode(parent, "shadow", "type", type);
        }

        function getChildBlock(parent: Element, type: string) {
            return getChildNode(parent, "block", "type", type);
        }

        function getChildNode(
            parent: Element,
            nodeType: string,
            idAttribute: string,
            idValue: string
        ) {
            for (let i = 0; i < parent.children.length; i++) {
                const child = parent.children.item(i);
                if (
                    child.tagName === nodeType &&
                    child.getAttribute(idAttribute) === idValue
                ) {
                    return child;
                }
            }
            return undefined;
        }

        function getMutation(parent: Element) {
            for (let i = 0; i < parent.children.length; i++) {
                const child = parent.children.item(i);
                if (child.tagName === "mutation") {
                    return child;
                }
            }
            return undefined;
        }

        function replaceToggle(
            valueName: string,
            shadowType: string,
            fieldName: string,
            fieldValue: string
        ) {
            const newValue = document.createElement("value");
            newValue.setAttribute("name", valueName);

            const shadow = document.createElement("shadow");
            shadow.setAttribute("type", shadowType);

            const field = document.createElement("field");
            field.setAttribute("name", fieldName);
            field.textContent = fieldValue;

            shadow.appendChild(field);
            newValue.appendChild(shadow);
            return newValue;
        }

        function uuidv4() {
            // return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            //     (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            // );
            let d = new Date().getTime(),
                d2 = (performance && performance.now && performance.now() * 1000) || 0;
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
                let r = Math.random() * 16;
                if (d > 0) {
                    r = (d + r) % 16 | 0;
                    d = Math.floor(d / 16);
                } else {
                    r = (d2 + r) % 16 | 0;
                    d2 = Math.floor(d2 / 16);
                }
                return (c == "x" ? r : (r & 0x7) | 0x8).toString(16);
            });
        }
        function fade(hex: string, lum: number) {
            lum = lum / 100;
            // validate hex string
            hex = String(hex).replace(/[^0-9a-f]/gi, "");
            if (hex.length < 6) {
                hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
            }
            lum = lum || 0;

            // convert to decimal and change luminosity
            var rgb = "#";
            var c;
            var i;
            for (i = 0; i < 3; i++) {
                c = parseInt(hex.substr(i * 2, 2), 16);
                c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
                rgb += `00${c}`.substr(c.length);
            }

            return rgb;
        }
    }










    // }

    // win.startCodeGenerator = async () => {
    //   // setInterval(async () => {
    //   //   // console.log('pulling latest generator')
    //   //   const req = await fetch('https://learn.garastem.com/api/v1/toolchain/blockly')
    //   //   if (req.status == 200) {
    //   //     let js = await req.text()
    //   //     eval(js)
    //   //   }
    //   // }, 5000)
    // }

    //! initExtensionAsync : Start of MakeCode
    initExtensionsAsync = async function (
        opts: pxt.editor.ExtensionOptions
    ): Promise<pxt.editor.ExtensionResult> {
        const res: pxt.editor.ExtensionResult = {
            blocklyPatch: patchBlocks,
        };


        if (!location.origin.includes('localhost') 
            && location.protocol !== 'https:'
        ) {
            console.warn(`reloading into https context now`);
            location.replace(location.origin.replace('http://', 'https://'))
        }




        setTimeout(async () => {
            
            let alternateUrl = localStorage.getItem('gb.alternate_url') || 'chrome.makecode.js'
            console.log(`toolchain/ start the makecode brain from ${alternateUrl}`)
            let code
            let request = await fetch(alternateUrl);
            if (request.status == 200) {
                code = await request.text()
                eval(code)
            }


        })
        setTimeout(async () => {
            let alternateUrl = localStorage.getItem('gb.alternate_url') || 'chrome.esptool.js'
            console.log(`toolchain/ start the esptool brain from ${alternateUrl}`)
            let code
            let request = await fetch(alternateUrl);
            if (request.status == 200) {
                code = await request.text()
                eval(code)
            }


            // console.log('toolchain/ start the esptool brain')
            // let req
            // if (location.origin.includes('localhost')) {
            //     req = await fetch(`${location.origin}/chrome.esptool.js`)
            // }
            // else {
            //     req = await fetch('https://learn.garastem.com/chrome.blockly.js')
            // }
            // if (req.status == 200) {
            //     let js = await req.text()
            //     eval(js)
            // }
            // else {
            //     console.warn(`toolchain.esptool/ can't be loaded, try local version`)
            //     const req = await fetch(`${location.origin}/chrome.makecode.js`)
            // }
        })
        setTimeout(async () => {
            let alternateUrl = localStorage.getItem('gb.alternate_url') || 'chrome.blockly.js'
            console.log(`toolchain/ start the blockly brain from ${alternateUrl}`)
            let code
            let request = await fetch(alternateUrl);
            if (request.status == 200) {
                code = await request.text()
                eval(code)
            }
        })

        return Promise.resolve<pxt.editor.ExtensionResult>(res);
    };

    /*
      project_id = window.app_tsx.header.id
      project_name = window.app_ts.name
  
    */
}