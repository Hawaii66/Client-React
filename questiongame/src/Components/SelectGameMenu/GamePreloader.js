import React from 'react'

//GAMES
import Game1T2L from "../Games/1Truth2LiesGame/Game1Truth2LiesMain.js";
import GameLOM from "../Games/LoveOMeterGame/GameLoveOMeterMain.js";

function GamePreloader({ gameIndex }) {

    if (gameIndex === -1) {
        return (
            <div>
                <p>Error please reload page</p>
            </div>
        )
    }

    if (gameIndex === 0) {
        return (
            <div>
                <Game1T2L />
            </div>
        )
    }
    if (gameIndex === 1) {
        return (
            <div>
                <GameLOM />
            </div>
        )
    }
}

export default GamePreloader
