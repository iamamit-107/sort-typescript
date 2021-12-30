import { CharacterCollection } from "./characterCollection";
import { NumberCollection } from "./numberCollection";
import { Sorter } from "./sorter";

const numberCollection = new NumberCollection([10, 5, 18, -3]);
const charcterCollection = new CharacterCollection("zhjekba");

const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data);

const sorter2 = new Sorter(charcterCollection);
sorter2.sort();
console.log(charcterCollection.characters);
