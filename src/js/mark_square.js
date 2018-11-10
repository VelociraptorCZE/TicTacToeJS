/**
 * TicTacToeJS
 * Copyright (C) Simon Raichl 2018
 * MIT License
 */

export default class MarkSquare {
    constructor(string, elem, inlineCss = "") {
        let newElem = document.createElement("div");
        newElem.innerText = string;
        newElem.classList.add("tic-tac-toe-mark");
        newElem.style = inlineCss;
        elem.appendChild(newElem);
    }
}