import { NumberCollection } from "./numberCollection";
import { Sorter } from "./sorter";

const numberCollection = new NumberCollection([10, 5, 18, -3]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data);
