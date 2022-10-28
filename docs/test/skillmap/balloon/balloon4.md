# Two Player

### @explicitHints true


## {Intro @showdialog}

This tutorial will help you turn your game into a two-player event!

![Use what you've learned to add a second player](/static/skillmap/balloon/balloon4.gif "We can add a second mouse and balloon." )




## {2. Play Your Game}


**Play the game!**

- :binoculars: Look at your project in the game window.

Press the (A) button or **space bar** as fast as you can.  You should see a mouse pumping up a balloon that gets bigger and bigger until it crosses the line and wins the game.

~hint My game doesn't work ⚠️

---

If your code doesn't work, start by looking to see if you can figure out what is going wrong.  Make sure each block is in the correct event container.

```blocks

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.player1.changeScoreBy(1)
    scaling.scaleByPixels(myBalloon, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
    myMouse.setImage(assets.image`mouse1-down`)
})

controller.A.onEvent(ControllerButtonEvent.Released, function () {
    myMouse.setImage(assets.image`mouse1-up`)
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Booth, function (sprite, otherSprite) {
carnival.onGameOverExpanded(carnival.WinTypes.Multi)
})

let myMouse: Sprite = null
let myBalloon: Sprite = null
carnival.startCountdownGame(20, carnival.WinTypes.Score)
scene.setBackgroundColor(1)
myBalloon = sprites.create(assets.image`balloon-1`, SpriteKind.Player)
myBalloon.setPosition(80, 93)
let myBooth = sprites.create(assets.image`booth`, SpriteKind.Booth)
myMouse = sprites.create(assets.image`mouse1-up`, SpriteKind.Mouse)
myMouse.setPosition(80, 93)

```

If those steps don't solve your problem, click <br/>"Replace my code"<br/>
 to replace the blocks in your workspace with new starter code.

hint~




## {3. Add Second Player}

Follow the steps from previous levels to add a second player that reacts to the (B) button!

- :lightbulb: Can you figure out what to do by yourself?

**Don't forget to try your game after each step!**




## {4. Add a Second Button Event}

- :lightbulb: Start by adding an <br/>
``||controller:on [B] button [Pressed]||`` <br/>
block to the workspace and also add a point for **player 2** each time it's clicked.


~hint Tell me more... 🕵🏽

- :paper plane: From the ``||controller: Controller||`` category in the toolbox, grab the<br/>
``||controller(noclick): on [B] button [pressed]||`` <br/>
bundle and drop it onto an empty area of your workspace.


hint~


~hint Show me... 🕵🏽


![balloon multiplayer](azuremedia:9f8857ec-6232-4390-9e1e-cdcabfbd13d9/Multiplayer-Mouse-Level.ism?start=0&end=24)

hint~


#### ~ tutorialhint
```blocks
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.player2.changeScoreBy(1)
})
```


## {5. Add the Balloon}

- :lightbulb: Can you figure out how to add the second balloon for the second player?

_(You'll also need to move player 1 to the left, and set player 2 further right.)_


~hint Tell me more... 🕵🏽

- :paper plane: From the ``||sprites: Sprites||`` category in the toolbox, grab <br/>
``||variables(sprites): set [myBalloon2] to sprite [ ] of kind [Player]||`` <br/>
and snap it inside at the **end** of the
``||loops(noclick): on start||``
block already in your workspace.

- :mouse pointer: Select the image of the blue balloon.

- :mouse pointer: Grab <br/>
``||sprites: set [myBalloon2] position to x [110] y [93]||`` <br/>
and snap it inside at the **end** of the
``||loops(noclick): on start||``
block already in your workspace.

- :mouse pointer: Change the positions for the original **myBalloon** and **myMouse** to each have an x value of **50**.


hint~

~hint Show me! 🕵🏽


![balloon multiplayer](azuremedia:9f8857ec-6232-4390-9e1e-cdcabfbd13d9/Multiplayer-Mouse-Level.ism?start=24&end=89)

hint~



#### ~ tutorialhint
```blocks
let myBalloon2: Sprite = null
let myMouse: Sprite = null
let myBalloon: Sprite = null
carnival.startCountdownGame(20, carnival.WinTypes.Score)
scene.setBackgroundColor(1)
myBalloon = sprites.create(assets.image`balloon-1`, SpriteKind.Player)
myBalloon.setPosition(50, 93)
let myBooth = sprites.create(assets.image`booth`, SpriteKind.Booth)
myMouse = sprites.create(assets.image`mouse1-up`, SpriteKind.Mouse)
myMouse.setPosition(50, 93)
myBalloon2 = sprites.create(assets.image`balloon-2`, SpriteKind.Player)
myBalloon2.setPosition(110, 93)
```





## {6. Add the Mouse}

- :lightbulb: Now it's time to add the second mouse in front of the second balloon.


~hint Tell me more... 🕵🏽

- :paper plane: From the ``||sprites: Sprites||`` category in the toolbox, grab <br/>
``||variables(sprites): set [myMouse2] to sprite [ ] of kind [Mouse]||`` <br/>
and snap it inside at the **end** of the
``||loops(noclick): on start||``
block already in your workspace.

- :mouse pointer: Select the **mouse2-up** image.

- :mouse pointer: Grab <br/>
``||sprites: set [myMouse2] position to x [110] y [93]||`` <br/>
block and snap it inside at the **end** of the
``||loops(noclick): on start||``
block already in your workspace.

hint~

~hint Show me! 🕵🏽


![balloon multiplayer](azuremedia:9f8857ec-6232-4390-9e1e-cdcabfbd13d9/Multiplayer-Mouse-Level.ism?start=89&end=116)

hint~



```blockconfig.local
let myMouse2 = sprites.create(img`.`, SpriteKind.Mouse)
myMouse2.setPosition(110, 93)
myMouse2.setImage(img`.`)
controller.B.onEvent(ControllerButtonEvent.Released, function () {
        myMouse2.setImage(img`.`)
})
```

#### ~ tutorialhint
```blocks
let myBalloon2: Sprite = null
let myMouse: Sprite = null
let myBalloon: Sprite = null
let myMouse2: Sprite = null
carnival.startCountdownGame(20, carnival.WinTypes.Score)
scene.setBackgroundColor(1)
myBalloon = sprites.create(assets.image`balloon-1`, SpriteKind.Player)
myBalloon.setPosition(50, 93)
let myBooth = sprites.create(assets.image`booth`, SpriteKind.Booth)
myMouse = sprites.create(assets.image`mouse1-up`, SpriteKind.Mouse)
myMouse.setPosition(50, 93)
myBalloon2 = sprites.create(assets.image`balloon-2`, SpriteKind.Player)
myBalloon2.setPosition(110, 93)
myMouse2 = sprites.create(assets.image`mouse2-up`, SpriteKind.Mouse)
myMouse2.setPosition(110, 93)
```




## {7. Push Mouse 2}

You're almost there!

- :lightbulb: Make the second mouse look like it's pushing and releasing the handle when the (B) button is pushed and released.

Don't forget to test your game using the (B) button in the **game window** or the **enter** key on the keyboard!


~hint Tell me more... 🕵🏽

- :game: From the ``||controller: Controller||`` category in the toolbox, grab the <br/>
``||controller(noclick):on [B] button [Released]||``<br/>
bundle and drop it into an empty area of the workspace.

- :mouse pointer: Click the empty box and choose **mouse2-up** from **My Assets**.

- :paper plane: From the ``||sprites: Sprites||`` category in the toolbox, grab another <br/>
``||sprites: set [myMouse2] image to [ ]||`` <br/>
block and snap it into the <br/>
``||controller(noclick): on [B] button [Pressed]||`` <br/>
block already in your workspace.

- :mouse pointer: Click the empty box and choose **mouse2-down** from **My Assets**.


hint~

~hint Show me! 🕵🏽


![balloon multiplayer](azuremedia:9f8857ec-6232-4390-9e1e-cdcabfbd13d9/Multiplayer-Mouse-Level.ism?start=127&end=172)

hint~



```blockconfig.local
let myMouse2 = sprites.create(img`.`, SpriteKind.Mouse)
myMouse2.setPosition(110, 93)
myMouse2.setImage(img`.`)
controller.B.onEvent(ControllerButtonEvent.Released, function () {
        myMouse2.setImage(img`.`)
})
```


#### ~ tutorialhint
```blocks
    let myMouse2: Sprite = null

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.player2.changeScoreBy(1)
    myMouse2.setImage(assets.image`mouse2-down`)
})

controller.B.onEvent(ControllerButtonEvent.Released, function () {
        let myMouse2: Sprite = null
    myMouse2.setImage(assets.image`mouse2-up`)
})
```


## {8. Inflate the Balloon}


- :lightbulb: Time to make sure that the second balloon gets bigger with each step.


~hint Tell me more... 🕵🏽

- :arrows alternate vertical: From the ``||scaling: Scaling||`` category in the toolbox, grab <br/>
``||scaling: change [myBalloon2] scale by [1] pixels [uniformly] anchor [bottom]|| `` <br/>
and snap it into the <br/>
``||controller(noclick): on [B] button [pressed]||`` <br/>
block already in the workspace.


hint~

~hint Show me! 🕵🏽


![balloon multiplayer](azuremedia:9f8857ec-6232-4390-9e1e-cdcabfbd13d9/Multiplayer-Mouse-Level.ism?start=172&end=194)

hint~



```blockconfig.local
let myMouse2 = sprites.create(img`.`, SpriteKind.Mouse)
myMouse2.setPosition(110, 93)
myMouse2.setImage(img`.`)
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.player2.changeScoreBy(1)
    myMouse2.setImage(img`.`)
    scaling.scaleByPixels(myBalloon2, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
})
```


#### ~ tutorialhint
```blocks
    let myMouse2: Sprite = null

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.player2.changeScoreBy(1)
    myMouse2.setImage(assets.image`mouse2-down`)
    scaling.scaleByPixels(myBalloon2, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
})

controller.B.onEvent(ControllerButtonEvent.Released, function () {
    myMouse2.setImage(assets.image`mouse2-up`)
})
```




## {8. Play Your Game!}

**Try your game!**

- :binoculars: Look at your project in full-screen by clicking the **resize** button on the normal game window!

Find a friend and have them press the (A) button or **space bar** while you press the (B) button or **enter** key.  Who makes it to the top first?








## {9. Add a Label}

Last step!

- :lightbulb: Add a label to the booth so everyone knows the name of the game!

**Play your finished game a few times!  Who can get the best 2 out of three?**


~hint Tell me more... 🕵🏽

- :arrows alternate vertical: From the ``||scene: Scene||`` category in the toolbox, grab <br/>
``||scene: add label [Burstin' Balloons] to [middle] of window || `` <br/>
and snap it into the **top** of the ``||loops(noclick): on start||``
block already in the workspace.


hint~

💡 ** Tip:** _Now that you have someone to race against, you can right-click <br/>
``||info: start countdown [20] (s) and game over [high score]||``<br/>
inside ``||loops(noclick): on start||`` and choose **Delete Blocks**._

~hint Show me! 🕵🏽


![balloon multiplayer](azuremedia:9f8857ec-6232-4390-9e1e-cdcabfbd13d9/Multiplayer-Mouse-Level.ism?start=212&end=250)

hint~



```blockconfig.local
let myMouse2 = sprites.create(img`.`, SpriteKind.Mouse)
myMouse2.setPosition(110, 93)
myMouse2.setImage(img`.`)
controller.B.onEvent(ControllerButtonEvent.Released, function () {
        myMouse2.setImage(img`.`)
})
```


#### ~ tutorialhint
```blocks
let myBalloon2: Sprite = null
let myMouse: Sprite = null
let myBalloon: Sprite = null
let myMouse2: Sprite = null
carnival.startCountdownGame(20, carnival.WinTypes.Score)
scene.setBackgroundColor(1)
myBalloon = sprites.create(assets.image`balloon-1`, SpriteKind.Player)
myBalloon.setPosition(50, 93)
let myBooth = sprites.create(assets.image`booth`, SpriteKind.Booth)
myMouse = sprites.create(assets.image`mouse1-up`, SpriteKind.Mouse)
myMouse.setPosition(50, 93)
myBalloon2 = sprites.create(assets.image`balloon-2`, SpriteKind.Player)
myBalloon2.setPosition(110, 93)
myMouse2 = sprites.create(assets.image`mouse2-up`, SpriteKind.Mouse)
myMouse2.setPosition(110, 93)
//@highlight
carnival.addLabelTo("Burstin' Balloons", carnival.Areas.Mid)

```



## {10. Finale}

**🥳 You've done it 🥳**

You've finished the entire skillmap!

When you're ready, click **Done** to return to the skillmap and click the button in the side panel to share your game with friends!



```blockconfig.global
let myBalloon2: Sprite = null
let myMouse2: Sprite = null
info.player2.changeScoreBy(1)
carnival.startCountdownGame(20, carnival.WinTypes.Score)
myBalloon2 = sprites.create(img`.`, SpriteKind.Player)
scene.setBackgroundColor(1)
myBalloon2.setPosition(110, 93)
scaling.scaleByPixels(myBalloon2, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Booth, function (sprite, otherSprite) { })
carnival.onGameOverExpanded(carnival.WinTypes.Multi)
myMouse2.setImage(img`.`)

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.player2.changeScoreBy(1)
})

carnival.addLabelTo("Burstin' Balloons", carnival.Areas.Mid)
```


```package
pxt-sprite-scaling=github:microsoft/pxt-common-packages/libs/sprite-scaling
carnival=github:microsoft/arcade-tutorial-extensions/carnival/
simple-blocks=github:microsoft/arcade-tutorial-extensions/simple-blocks/
```


```template

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.player1.changeScoreBy(1)
    scaling.scaleByPixels(myBalloon, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
    myMouse.setImage(assets.image`mouse1-down`)
})

controller.A.onEvent(ControllerButtonEvent.Released, function () {
    myMouse.setImage(assets.image`mouse1-up`)
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Booth, function (sprite, otherSprite) {
carnival.onGameOverExpanded(carnival.WinTypes.Multi)
})

let myMouse: Sprite = null
let myBalloon: Sprite = null
carnival.startCountdownGame(20, carnival.WinTypes.Score)
scene.setBackgroundColor(1)
myBalloon = sprites.create(assets.image`balloon-1`, SpriteKind.Player)
myBalloon.setPosition(80, 93)
let myBooth = sprites.create(assets.image`booth`, SpriteKind.Booth)
myMouse = sprites.create(assets.image`mouse1-up`, SpriteKind.Mouse)
myMouse.setPosition(80, 93)

```




```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "custom.ts": "",
  "images.g.jres": "{\n    \"image7\": {\n        \"data\": \"hwQRACAAAAAA//8AAAAAAAAAAAAAAAAA8Lu7DwAAAP8AAP//////D787M/////C7D/DR3d3d3fS/MzO/u7v/u///TURERETyvzvzu7u7+/+/+01ERERE8vC7v7u7u7tPv/tN9P//RPIA/7+7+7+7T7/7TfT0RETyAAC/u7u7v0+/+030/0RE8gAAv7u7+79P//9NRERERPIAAL+7u7u/T7/7TURP9ETyAP+/u/u/u0+/+030//9E8vC7v7u7u7tPv/tNRET0RPK/O/O7u7v7/7/7TURERETyvzMzv7u7/7v//01ERERE8r87M/////C7D/AkIiIiIvLwu7sPAAAA/w8A//////8PAP//AAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"mouse1-up\"\n    },\n    \"image8\": {\n        \"data\": \"hwQRACAAAAAA//8AAAAAAAAAAAAAAAAA8Lu7DwAAAADwD///////D787M////wAAv/vR3d3d3fS/MzO/u7sP/7/7TURERETyvzvzu7u7+7v7/01ERERE8vC7v7u7u7u/+/RN9P//RPIA/7+7+7+7v/v0TfT0RETyAAC/u7u7v7/79E30/0RE8gAAv7u7+7+/+/RNRERERPIAAL+7u7u/v/v0TURP9ETyAP+/u/u/u7/79E30//9E8vC7v7u7u7u/+/RNRET0RPK/O/O7u7v7u/v/TURERETyvzMzv7u7D/+/+01ERERE8r87M////wAAv/skIiIiIvLwu7sPAAAAAPAP//////8PAP//AAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"mouse1-down\"\n    },\n    \"image10\": {\n        \"data\": \"hwQRACAAAAAA//8AAAAAAAAAAAAAAAAA8Lu7DwAAAADwD///////D787M////wAAv/sREREREfm/MzO/u7sP/7/7kZmZmZn4vzvzu7u7+7v7/5GZmZmZ+PC7v7u7u7u/+/mR+f//mfgA/7+7+7+7v/v5kfn5mZn4AAC/u7u7v7/7+ZH5/5mZ+AAAv7u7+7+/+/mRmZmZmfgAAL+7u7u/v/v5kfmZ/5n4AP+/u/u/u7/7+ZH5+fmZ+PC7v7u7u7u/+/mRmZ/5mfi/O/O7u7v7u/v/kZmZmZn4vzMzv7u7D/+/+5GZmZmZ+L87M////wAAv/uJiIiIiPjwu7sPAAAAAPAP//////8PAP//AAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"mouse2-down\"\n    },\n    \"image9\": {\n        \"data\": \"hwQRACAAAAAA//8AAAAAAAAAAAAAAAAA8Lu7DwAAAP8AAP//////D787M/////C7D/AREREREfm/MzO/u7v/u///kZmZmZn4vzvzu7u7+/+/+5GZmZmZ+PC7v7u7u7ufv/uR+f//mfgA/7+7+7+7n7/7kfn5mZn4AAC/u7u7v5+/+5H5/5mZ+AAAv7u7+7+f//+RmZmZmfgAAL+7u7u/n7/7kfmZ/5n4AP+/u/u/u5+/+5H5+fmZ+PC7v7u7u7ufv/uRmZ/5mfi/O/O7u7v7/7/7kZmZmZn4vzMzv7u7/7v//5GZmZmZ+L87M/////C7D/CJiIiIiPjwu7sPAAAA/wAA//////8PAP//AAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"mouse2-up\"\n    },\n    \"image6\": {\n        \"data\": \"hwQUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAP8iIiL/AAAAAAAA8C8RISEiDwAAAAAA/xIRIREi8gAAAAAALxEiIiIiIg8AAADwEiEiIiIiIvLwAADwIiIiIiIiIiIvAADwIiIiIiIiIvLwAAAALyIiIiIiIg8AAAAA/yIiIiIi8gAAAAAA8C8iIiIiDwAAAAAAAP8iIiL/AAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"balloon-1\"\n    },\n    \"image11\": {\n        \"data\": \"hwQUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAP+IiIj/AAAAAAAA8I8RgYGIDwAAAAAA/xgRgRGI+AAAAAAAjxGIiIiIiA8AAADwGIGIiIiIiPjwAADwiIiIiIiIiIiPAADwiIiIiIiIiPjwAAAAj4iIiIiIiA8AAAAA/4iIiIiI+AAAAAAA8I+IiIiIDwAAAAAAAP+IiIj/AAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"balloon-2\"\n    },\n    \"image4\": {\n        \"data\": \"hwSgAHgAAAARERERERERES8iIiJftS8iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLyEREREREREREREREREfEiIiJftS8iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLyEREREREREREREREREdEvIiJftS8iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLyEREREREREREREREREdH///9ftf//////////////////////////////////////////////////////EREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiL///9ftf//////////////////////////////////////////////////////JCIiIiIkIiIi3S0iIvIiIiJftS8iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLyJCIiIiIkIiIiIiIiIi8iIiJftS8iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLyJCIiIiIiIiIiIiIi/yIiIiJftS8iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLyJCIiIiI=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"booth\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image7\":\n            case \"mouse1-up\":return img`\n..fff.......fff..\n.fbbbf.....fbbbf.\nfbb3bbf...fbb3bbf\nfb333bf...fb333bf\nfb333fffffff333bf\nfb33fbbbbbbbf33bf\n.fffbbbbbbbbbfff.\n..fbbbbbbbbbbbf..\n..fbbbbbbbbbbbf..\n..fbbbfbbbfbbbf..\n..fbbbfbbbfbbbf..\n..fbbbbbfbbbbbf..\n...fbbbfffbbbf...\n..fffbbbbbbbfff..\n.fbbfffffffffbbf.\n.fbbf4444444fbbf.\n..ffffffffffffff.\n...fbbbbfbbbbf...\n...fbbbbfbbbbf...\n..fffffffffffff..\n.f1ddddddddddd4f.\n.fd444444444442f.\n.fd444444444442f.\n.fd44fff44f4442f.\n.fd44f4f4ff4442f.\n.fd44fff44f4442f.\n.fd44f4444f4442f.\n.fd44f444fff442f.\n.fd444444444442f.\n.fd444444444442f.\n.f4222222222222f.\n..fffffffffffff..\n`;\n            case \"image8\":\n            case \"mouse1-down\":return img`\n..fff.......fff..\n.fbbbf.....fbbbf.\nfbb3bbf...fbb3bbf\nfb333bf...fb333bf\nfb333fffffff333bf\nfb33fbbbbbbbf33bf\n.fffbbbbbbbbbfff.\n..fbbbbbbbbbbbf..\n..fbbbbbbbbbbbf..\n..fbbbfbbbfbbbf..\n..fbbbfbbbfbbbf..\n..fbbbbbfbbbbbf..\n...fbbbfffbbbf...\n....fbbbbbbbf....\n...fbfffffffbf...\n...fbbbbbbbbbf...\n..ffbbbbbbbbbff..\n.fbbfffffffffbbf.\n.fbbf4444444fbbf.\n..fffffffffffff..\n.f1ddddddddddd4f.\n.fd444444444442f.\n.fd444444444442f.\n.fd44fff44f4442f.\n.fd44f4f4ff4442f.\n.fd44fff44f4442f.\n.fd44f4444f4442f.\n.fd44f444fff442f.\n.fd444444444442f.\n.fd444444444442f.\n.f4222222222222f.\n..fffffffffffff..\n`;\n            case \"image10\":\n            case \"mouse2-down\":return img`\n..fff.......fff..\n.fbbbf.....fbbbf.\nfbb3bbf...fbb3bbf\nfb333bf...fb333bf\nfb333fffffff333bf\nfb33fbbbbbbbf33bf\n.fffbbbbbbbbbfff.\n..fbbbbbbbbbbbf..\n..fbbbbbbbbbbbf..\n..fbbbfbbbfbbbf..\n..fbbbfbbbfbbbf..\n..fbbbbbfbbbbbf..\n...fbbbfffbbbf...\n....fbbbbbbbf....\n...fbfffffffbf...\n...fbbbbbbbbbf...\n..ffbbbbbbbbbff..\n.fbbfffffffffbbf.\n.fbbf9999999fbbf.\n..fffffffffffff..\n.f1111111111119f.\n.f1999999999998f.\n.f1999999999998f.\n.f199fff9ff9998f.\n.f199f9f999f998f.\n.f199fff99f9998f.\n.f199f999f99998f.\n.f199f999fff998f.\n.f1999999999998f.\n.f1999999999998f.\n.f9888888888888f.\n..fffffffffffff..\n`;\n            case \"image9\":\n            case \"mouse2-up\":return img`\n..fff.......fff..\n.fbbbf.....fbbbf.\nfbb3bbf...fbb3bbf\nfb333bf...fb333bf\nfb333fffffff333bf\nfb33fbbbbbbbf33bf\n.fffbbbbbbbbbfff.\n..fbbbbbbbbbbbf..\n..fbbbbbbbbbbbf..\n..fbbbfbbbfbbbf..\n..fbbbfbbbfbbbf..\n..fbbbbbfbbbbbf..\n...fbbbfffbbbf...\n..fffbbbbbbbfff..\n.fbbfffffffffbbf.\n.fbbf9999999fbbf.\n..fffffffffffff..\n...fbbbbfbbbbf...\n...fbbbbfbbbbf...\n..fffffffffffff..\n.f1111111111119f.\n.f1999999999998f.\n.f1999999999998f.\n.f199fff9ff9998f.\n.f199f9f999f998f.\n.f199fff99f9998f.\n.f199f999f99998f.\n.f199f999fff998f.\n.f1999999999998f.\n.f1999999999998f.\n.f9888888888888f.\n..fffffffffffff..\n`;\n            case \"image6\":\n            case \"balloon-1\":return img`\n....................\n.........fff........\n.......ff222ff......\n......ff21222ff.....\n.....ff2112222ff....\n.....f211222222f....\n....f21122222222f...\n....f21122222222f...\n....f21122222222f...\n....f22222222222f...\n....f21122222222f...\n....f22122222222f...\n.....f222222222f....\n.....f222222222f....\n......f2222222f.....\n.......f22222f......\n........f222f.......\n.........f2f........\n..........f.........\n.........f2f........\n`;\n            case \"image11\":\n            case \"balloon-2\":return img`\n....................\n.........fff........\n.......ff888ff......\n......ff81888ff.....\n.....ff8118888ff....\n.....f811888888f....\n....f81188888888f...\n....f81188888888f...\n....f81188888888f...\n....f88888888888f...\n....f81188888888f...\n....f88188888888f...\n.....f888888888f....\n.....f888888888f....\n......f8888888f.....\n.......f88888f......\n........f888f.......\n.........f8f........\n..........f.........\n.........f8f........\n`;\n            case \"image4\":\n            case \"booth\":return img`\n1111111444444444111111144444444411111114444444441111111444444444111111144444444411111114444444441111111444444444111111144444444411111114444444441111111444444442\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd222\n111111122d122d22111111122d122d22111111122d122d22111111122d122d22111111122d122d22111111122d122d22111111122d122d22111111122d122d22111111122d122d22111111122d122d22\n111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22\n111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22\n1111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d222\n11111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d2222\n11111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d2222\n1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f\n111111df2222222f111111df2222222f111111df2222222f111111df2222222f111111df2222222f111111df2222222f111111df2222222f111111df2222222f111111df2222222f111111df2222222f\nf1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f2\n2fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f22\n22fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\n5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555\n5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\n222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\n1111111444444444111111144444444411111114444444441111111444444444111111144444444411111114444444441111111444444444111111144444444411111114444444441111111444444444\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable type=\"KIND_SpriteKind\" id=\"xdO@[$nW`4LDKLg#s^bz\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"bU#zm0=UP]u:}b/slhf$\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"zAFx`|$CRYV(#oP.n0um\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"NSZT%yrFP/(yEppCW+,,\">Enemy</variable><variable type=\"KIND_SpriteKind\" id=\"6,XcYCTZ$`~q!WN=ZLib\">Text</variable><variable type=\"KIND_SpriteKind\" id=\"p^C#95SSLD{u`5KR)yI;\">Booth</variable><variable type=\"KIND_SpriteKind\" id=\"KDrdsHZeu6_]66c^Zqc8\">Mouse</variable><variable id=\"^Ja9]?}+=p;vbofy@HVc\">mouse2</variable><variable id=\"7D`plCR=oBiOlmy$llaz\">myBalloon2</variable><variable id=\"/@$2f;zkY^{4IS;VP#R/\">mouse</variable><variable id=\"AAvaaW@7n2t{jE/(~.r~\">myBalloon</variable><variable id=\"^Wf-N]+O=H?)Xxqr_?(I\">booth</variable><variable id=\",O8rw%td!O5y$|YYktLm\">textSprite</variable></variables></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"balloon race - assets only\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\",\n        \"simple-blocks\": \"github:microsoft/arcade-tutorial-extensions/simple-blocks#8267594819b733e5d5fe55c71fc21ea246e8319d\",\n        \"arcade-sprite-util\": \"github:jwunderl/arcade-sprite-util#v0.2.5\",\n        \"sprite-scaling\": \"*\",\n        \"arcade-character-animations\": \"github:microsoft/arcade-character-animations#v0.0.2\",\n        \"arcade-text\": \"github:microsoft/arcade-text#v1.3.0\",\n        \"Timers\": \"github:microsoft/arcade-timers#v1.1.0\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"custom.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.8.26\",\n        \"tag\": \"v1.8.26\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/6434cb63948fe7c1d1a7498115a4bc495495512c\",\n        \"target\": \"1.8.26\",\n        \"pxt\": \"7.4.27\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```
