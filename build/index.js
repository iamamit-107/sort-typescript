"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numberCollection_1 = require("./numberCollection");
const sorter_1 = require("./sorter");
const numberCollection = new numberCollection_1.NumberCollection([10, 5, 18, -3]);
const sorter = new sorter_1.Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data);
