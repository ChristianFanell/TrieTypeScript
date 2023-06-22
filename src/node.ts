export class Node {
  end: boolean = false;
  childs: Node[] = [];
  char: string | undefined;

  constructor(char?: string, end = false) {
    this.end = end;
    this.char = char;
  }

  get(key: string): boolean {
    for (const child of this.childs) {
      if (typeof child !== undefined)
        if (key === child.char) return true;
    }

    return false;
  }
}
