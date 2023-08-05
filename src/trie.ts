import { TrieNode } from "./trieNode";

export class Trie {
  private readonly alphabet: string = "abcdefghijklmnopqrstuvwxyzåäö";
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(key: string) {
    let node: TrieNode = this.root;

    for (let i = 0; i < key.length; i++) {
      const char = key[i];
      const index = this.findIndex(char);

      if (node.childs[index] === undefined) {
        node.childs[index] = new TrieNode(char);
      }
      node = node.childs[index];
    }
    node.end = true;
  }

  findPrefix(search: string) {
    let str = "";
    let node = this.root;

    for (let i = 0; i < search.length; i++) {
      console.log(i);
      let index = this.findIndex(search[i]);
      if (node.childs[index] === undefined) {
        return [];
      }
      if (search[i] === node.childs[index].char) {
        str += node.childs[index].char;
        node = node.childs[index];
      }
    }
    return this.findPrefixRec(node, str.toLowerCase(), []);
  }

  printTrieFast() {
    return this.printTrieFastRec(this.root, "");
  }

  getTrieList() {
    return this.getTrieListRec(this.root, "", []);
  }

  private getTrieListRec(
    node: TrieNode,
    chars: string,
    list: string[]
  ): string[] {
    if (node.char) chars += node.char;
    if (node.end) list.push(chars);
    for (let i = 0; i < node.childs.length; i++) {
      if (node?.childs[i] !== undefined)
        this.getTrieListRec(node.childs[i], chars, list);
    }
    return list;
  }

  private printTrieFastRec(node: TrieNode, chars: string) {
    if (node.char) chars += node.char;
    if (node.end) console.log(chars);
    for (let i = 0; i < node.childs.length; i++) {
      const element = node.childs[i];

      if (element) this.printTrieFastRec(node.childs[i], chars);
    }
  }

  private findPrefixRec(node: TrieNode, prefix: string, list: string[]) {
    if (node.end) list.push(prefix);
    for (let i = 0; i < node.childs.length; i++) {
      if (node.childs[i] !== undefined) {
        this.findPrefixRec(node.childs[i], prefix + node.childs[i].char, list);
      }
    }
    return list;
  }

  private findIndex(char: string): number {
    const charAt = this.alphabet.indexOf(char);

    return charAt;
  }
}
