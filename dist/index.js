"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var trie_1 = require("./trie");
var data_1 = require("./data");
var trie = new trie_1.Trie();
var data = (0, data_1.getData)("svenska-ord.txt");
data.forEach(function (word) { return trie.insert(word.toLowerCase()); });
var pref = trie.findPrefix("data");
console.log(pref);
