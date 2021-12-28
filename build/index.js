"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    //   bubble sort
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                //   Only work for array
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        const temp = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = temp;
                    }
                }
                // only work for string
                if (typeof this.collection === "string") {
                }
            }
        }
    }
}
const sorter = new Sorter([10, 5, 18, -3]);
sorter.sort();
console.log(sorter.collection);
