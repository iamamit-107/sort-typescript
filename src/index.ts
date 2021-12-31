import { CharacterCollection } from "./characterCollection";
import { LinkedList } from "./linkedlist";
import { NumberCollection } from "./numberCollection";

const numberCollection = new NumberCollection([10, 5, 18, -3]);
numberCollection.sort();
console.log(numberCollection.data);

const charcterCollection = new CharacterCollection("khjuifkwa");
charcterCollection.sort();
console.log(charcterCollection.characters);

const linedlistCollection = new LinkedList();
linedlistCollection.addNode(500);
linedlistCollection.addNode(-200);
linedlistCollection.addNode(5);
linedlistCollection.addNode(4);
linedlistCollection.sort();
console.log(linedlistCollection.print());
