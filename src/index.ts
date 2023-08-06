import { Trie } from "./trie";
import { getData } from "./data";

const trie = new Trie();
const data = getData("svenska-ord.txt");

data.forEach((word) => trie.insert(word.toLowerCase()));

const pref = trie.findPrefix("data");

console.log(pref);
