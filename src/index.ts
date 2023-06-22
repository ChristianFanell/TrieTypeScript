import { Trie } from "./trie";


const trie = new Trie()
const names = ['Anna', 'Bea', 'Christine', 'Lina', 'Lisa', 'Lotta', 'Petronella', 'Petunia', 'Pölly']

for (let name of names)
  trie.insert(name.toLowerCase())

const finded = trie.findPrefix('pe')
// const finded = trie.getTrieList()

// console.log(trie.printTrieFast());
// console.log(trie.getTrieList());
console.log(finded);