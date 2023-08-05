import { assert } from 'chai';

import { TrieNode } from '../src/trieNode';

describe("Trie Node class Tests", () => {
  const node = new TrieNode("a");

  it("should have value a", () => {
    assert.equal(node.char, "a");
  });

  it("should not be end", () => {
    assert.isFalse(node.end);
  });

  it("should have a child with char a", () => {
    const child = new TrieNode("a");

    node.childs[0] = child;
    assert.isTrue(node.get("a"));
  });
});
