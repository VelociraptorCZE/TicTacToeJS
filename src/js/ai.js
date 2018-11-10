/**
 * TicTacToeJS
 * Copyright (C) Simon Raichl 2018
 * MIT License
 */

import Squares from "./squares.js";
import MarkSquare from "./mark_square.js";

export default class AI{
    makeTurn(field) {
        let fieldArray = field.player.concat(field.ai);
        if (fieldArray.length < 9) {
            let square = 0;

            while (fieldArray.includes(square)) {
                square = Math.ceil(Math.random() * 8);
            }

            new MarkSquare("o", Squares.get()[square]);
            let aiArray = field.ai;
            aiArray.push(square);

            return aiArray;
        }
        else {
            return null;
        }
    }
}