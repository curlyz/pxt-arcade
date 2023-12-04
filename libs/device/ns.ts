//% color=#8854d0
//% advance=true //gb.override: hide the irrelevant block
namespace game {
    /**
     * Reset the current game. This is usually equivalent to pressing
     * the reset button to restart the current program
     */
    //% blockId=arcade_game_reset block="reset game"
    //% group="Gameplay" weight=10
    //% help=game/reset advance=true
    export function reset() {
        control.reset();
    }
}

//% color="#4b6584"
//% advance=true //gb.override: hide the irrelevant block
namespace scene {

}

//% color="#cf6a87"
//% advance=true //gb.override: hide the irrelevant block
namespace info {

}

//% color=#E30FC0
namespace music {

}

//% color=#B09EFF
namespace player {

}

//% color=#FF5722 weight=90 advanced=true
namespace control {

}
