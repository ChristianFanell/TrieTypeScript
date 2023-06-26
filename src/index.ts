import { Trie } from './trie';

const trie = new Trie()
const names = ['Anna', 'Bea', 'Christine', 'Lina', 'Lisa', 'Lotta', 'Petronella', 'Petunia', 'Pölly']

for (let name of names)
  trie.insert(name.toLowerCase())
