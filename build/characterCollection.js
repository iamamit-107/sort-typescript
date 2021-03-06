"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
const sorter_1 = require("./sorter");
class CharacterCollection extends sorter_1.Sorter {
    constructor(characters) {
        super();
        this.characters = characters;
    }
    get length() {
        return this.characters.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.characters[leftIndex].toLowerCase() >
            this.characters[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const chars = this.characters.split("");
        const left = chars[leftIndex];
        chars[leftIndex] = chars[rightIndex];
        chars[rightIndex] = left;
        this.characters = chars.join("");
    }
}
exports.CharacterCollection = CharacterCollection;
