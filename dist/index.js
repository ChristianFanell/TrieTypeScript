"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var trie_1 = require("./trie");
var trie = new trie_1.Trie();
var names = ['Anna', 'Bea', 'Christine', 'Lina', 'Lisa', 'Lotta', 'Petronella', 'Petunia', 'Pölly'];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    trie.insert(name_1.toLowerCase());
}
var nameList = trie.findPrefix('pö');
console.log(nameList, trie.getTrieList());
console.log(trie.printTrieFast());
