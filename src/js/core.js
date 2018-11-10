/**
 * TicTacToeJS
 * Copyright (C) Simon Raichl 2018
 * MIT License
 */

import Combinations from "./combinations.js";
import AI           from "./ai.js";
import Squares      from "./squares.js";
import MarkSquare   from "./mark_square.js";

// PLUGINS
import {Alert}      from "../../plugins/js/alerts.js"

export default class Core {
    constructor() {
        this.canvas = document.getElementById("js-tic-tac-toe");
        this.combinations = new Combinations();
        this.ai = new AI();
        this.message = {
            player_win: "<h4>* Clap clap *</h4>",
            AI_win: "<h4>AI won, you are such a looser!</h4>",
            draw: "<h4>We have no winner here!</h4>"
        };
    }

    init() {
        this.initFieldPos();
        this.initField();
        this.initFieldListeners();
    }

    initFieldPos() {
        this.field  = {
            player: [],
            ai:     []
        };
    }

    initField() {
        for (let elemId = 0; elemId < 9; elemId++) {
            let elem = document.createElement("div");
            elem.setAttribute("data-id", elemId.toString());
            elem.classList.add("tic-tac-toe-square");
            this.canvas.appendChild(elem);
        }
    }

    initFieldListeners() {
        Squares.get().forEach(elem => {
            elem.addEventListener("click", _ => {
                let elemId = parseInt(elem.getAttribute("data-id"));
                if (!this.field.player.includes(elemId) && !this.field.ai.includes(elemId)) {
                    new MarkSquare("x", elem, "transform: scaleX(1.25)");
                    this.field.player.push(elemId);
                    let res = this.combinations.checkCombinations(this.field.player);
                    if (!res) {
                        let ai_field = this.ai.makeTurn(this.field);
                        if (ai_field) {
                            this.field.ai = ai_field;
                            let resEnemy = this.combinations.checkCombinations(this.field.ai);
                            resEnemy ? this.gameEnd(this.message.AI_win) : null;
                        }
                        else {
                            this.gameEnd(this.message.draw);
                        }
                    }
                    res ? this.gameEnd(this.message.player_win) : null;
                }
            });
        });
    }

    gameEnd(arg) {
        new Alert({
                title: "Game over",
                text: arg
            },
            {
                first: {
                    text: "Again",
                    dismiss: true,
                    color: "green"
                },
            },
            {
                noescape: true,
                color: "green"
            }).show();

        setTimeout(() => {
            this.canvas.innerHTML = "";
            this.init();
        }, 2000);
    }
}