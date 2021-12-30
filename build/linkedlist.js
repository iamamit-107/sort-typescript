"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    addNode(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    }
    get length() {
        if (!this.head) {
            return 0;
        }
        let length = 1;
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }
        return length;
    }
    at(index) {
        if (!this.head) {
            throw new Error("Out of boudns!");
        }
        let count = 0;
        let node = this.head;
        while (node) {
            if (count === index) {
                return node;
            }
            count++;
            node = node.next;
        }
        throw new Error("Index out of boundS!");
    }
    compare(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error("No data!");
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }
    swap(leftIndex, rightIndex) {
        let left = this.at(leftIndex);
        let right = this.at(rightIndex);
        let leftData = left.data;
        left.data = right.data;
        right.data = leftData;
    }
    print() {
        if (!this.head) {
            return;
        }
        let node = this.head;
        while (node.next) {
            console.log(node.data);
            node = node.next;
        }
    }
}
exports.LinkedList = LinkedList;
