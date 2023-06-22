import { assert } from "chai";
import { Trie } from "../src/trie";

const names = ['Anna', 'Bea', 'Christine', 'Lina', 'Lisa', 'Lotta', 'Petronella', 'Petunia', 'Pölly']

const setUp = () => {
  const trie = new Trie()
  
  names.forEach(name => trie.insert(name.toLowerCase()))
  return () => trie;
}
const setUpTrie = setUp();

describe("Trie Node class Tests", () => {
  it("Should have the same size as names array", () => {
    const trie = setUpTrie();

    assert.equal(trie.getTrieList().length, names.length)     
  });
  // it("should not be end", () => {
  //   assert.isFalse(node.end);
  // });
  // it("should have no childs", () => {
  //   assert.lengthOf(node.childs, 0);
  // });
  // it("should have a child with char a", () => {
  //   const child = new Node("a");

  //   node.childs[0] = child;
  //   assert.isTrue(node.get("a"));
  // });
});
