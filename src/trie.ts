import { Node } from "./node";

export class Trie {
  private readonly alphabet: string = "abcdefghijklmnopqrstuvwxyz";
  root: Node;

  constructor() {
    this.root = new Node();
  }

  findIndex(char: string) {
    const charAt = this.alphabet.indexOf(char);

    if (char === "å") return 27;
    if (char === "ä") return 28;
    if (char === "ö") return 29;

    return this.alphabet.charCodeAt(charAt) - this.alphabet.charCodeAt(0);
  }

  insert(key: string) {
    let node: Node = this.root;

    for (let i = 0; i < key.length; i++) {
      const char = key[i];
      const index = this.findIndex(char);

      if (node.childs[index] === undefined) {
        node.childs[index] = new Node(char);
      }
      node = node.childs[index];
    }
    node.end = true;
  }

  get(key: string) {
    let node = this.root;

    for (let i = 0; i < key.length; i++) {
      const char = key[i];
      const index = this.findIndex(char);

      if (node.childs[index] === undefined) return false;
      node = node.childs[index];
    }
    return true;
  }

  getTrieList() {
    return this.getTrieListRec(this.root, "", []);
  }

  private getTrieListRec(node: Node, chars: string, list: string[]): string[] {
    if (node.char) chars += node.char;
    if (node.end) list.push(chars);
    for (let i = 0; i < node.childs.length; i++) {
      if (node?.childs[i] !== undefined)
        this.getTrieListRec(node.childs[i], chars, list);
    }
    return list;
  }

  printTrieFast() {
    return this.printTrieFastRec(this.root, "");
  }

  private printTrieFastRec(node: Node, chars: string) {
    if (node.char) chars += node.char;
    if (node.end) console.log(chars);
    for (let i = 0; i < node.childs.length; i++) {
      const element = node.childs[i];

      if (element) this.printTrieFastRec(node.childs[i], chars);
    }
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
    return this.findPrefixRec(node, str, []);
  }

  private findPrefixRec(node: Node, prefix: string, list: string[]) {
    console.log(list, prefix, node);
    if (node.end) list.push(prefix);
    for (let i = 0; i < node.childs.length; i++) {
      if (node.childs[i] !== undefined) {
        console.log(node.childs[i], prefix, list);
        this.findPrefixRec(node.childs[i], prefix + node.childs[i].char, list);
      }
      return list;
    }
  }
}
