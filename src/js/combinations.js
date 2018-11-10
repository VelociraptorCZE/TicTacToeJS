/**
 * TicTacToeJS
 * Copyright (C) Simon Raichl 2018
 * MIT License
 */

export default class Combinations {
    constructor() {
        this.combinations = [
            [0, 1, 2],
            [0, 3, 6],
            [0, 4, 8],
            [1, 4, 7],
            [2, 4, 6],
            [2, 5, 8],
            [3, 4, 5],
            [6, 7, 8],
        ];
    }

    checkCombinations(args) {
        let res;
        for (let patternId = 0; patternId < this.combinations.length; patternId++) {
            let pattern = "[" + this.combinations[patternId].join("") + "]";
            pattern = new RegExp(pattern, "g");
            try {
                res = args.sortArray()
                    .join("")
                    .match(pattern)
                    .compareArrays(this.combinations[patternId]
                        .map(item => item.toString()));
            }
            catch {}
            if (res) break;
        }
        return res;
    }
}

/**
 *  FIELD ARRAY:
 *
 *  [0, 1, 2],
 *  [3, 4, 5],
 *  [6, 7, 8],
 *
*/