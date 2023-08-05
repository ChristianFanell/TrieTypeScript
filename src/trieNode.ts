export class TrieNode {
  end: boolean = false;
  childs: TrieNode[] = [];
  char: string | undefined;

  constructor(char?: string, end = false) {
    this.end = end;
    this.char = char;
    this.childs = new Array(30);
  }

  get(key: string): boolean {
    for (const child of this.childs) {
      if (typeof child !== undefined)
        if (key === child.char) return true;
    }

    return false;
  }
}
