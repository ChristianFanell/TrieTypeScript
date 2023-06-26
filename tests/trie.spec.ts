import { assert } from 'chai';

import { Trie } from '../src/trie';

const mockDataArray = ['Anna', 'Bea', 'Christine', 'Lina', 'Lisa', 'Lotta', 'Petronella', 'Petunia', 'Pölly']
const setUp = () => {
  const trie = new Trie()
  
  mockDataArray.forEach(name => trie.insert(name.toLowerCase()))
  return () => trie;
}
const setUpTrie = setUp();

describe("Trie class Tests", () => {
  it("Should have the same size as names array", () => {
    const trie = setUpTrie();

    assert.equal(trie.getTrieList().length, mockDataArray.length)     
  });
  it("Should return two match names for 'li'", () => {
    const trie = setUpTrie();
    const prefixes = trie.findPrefix('li')
    
    assert.isTrue(prefixes?.some(pf => pf === 'lisa'))
    assert.isTrue(prefixes?.some(pf => pf === 'lina'))
    assert.equal(prefixes?.length, 2)
  });
});
