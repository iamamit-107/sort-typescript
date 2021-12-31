import { Sorter } from "./sorter";

export class CharacterCollection extends Sorter {
  constructor(public characters: string) {
    super();
  }

  get length(): number {
    return this.characters.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.characters[leftIndex].toLowerCase() >
      this.characters[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const chars = this.characters.split("");

    const left = chars[leftIndex];
    chars[leftIndex] = chars[rightIndex];
    chars[rightIndex] = left;

    this.characters = chars.join("");
  }
}
