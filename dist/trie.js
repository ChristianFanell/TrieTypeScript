"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trie = void 0;
var trieNode_1 = require("./trieNode");
var Trie = /** @class */ (function () {
    function Trie() {
        this.alphabet = "abcdefghijklmnopqrstuvwxyzåäö";
        this.root = new trieNode_1.TrieNode();
    }
    Trie.prototype.insert = function (key) {
        var node = this.root;
        for (var i = 0; i < key.length; i++) {
            var char = key[i];
            var index = this.findIndex(char);
            if (node.childs[index] === undefined) {
                node.childs[index] = new trieNode_1.TrieNode(char);
            }
            node = node.childs[index];
        }
        node.end = true;
    };
    Trie.prototype.findPrefix = function (search) {
        var str = "";
        var node = this.root;
        for (var i = 0; i < search.length; i++) {
            var index = this.findIndex(search[i]);
            if (node.childs[index] === undefined) {
                return [];
            }
            if (search[i] === node.childs[index].char) {
                str += node.childs[index].char;
                node = node.childs[index];
            }
        }
        return this.findPrefixRec(node, str.toLowerCase(), []);
    };
    Trie.prototype.printTrieFast = function () {
        return this.printTrieFastRec(this.root, "");
    };
    Trie.prototype.getTrieList = function () {
        return this.getTrieListRec(this.root, "", []);
    };
    Trie.prototype.getTrieListRec = function (node, chars, list) {
        if (node.char)
            chars += node.char;
        if (node.end)
            list.push(chars);
        for (var i = 0; i < node.childs.length; i++) {
            if ((node === null || node === void 0 ? void 0 : node.childs[i]) !== undefined)
                this.getTrieListRec(node.childs[i], chars, list);
        }
        return list;
    };
    Trie.prototype.printTrieFastRec = function (node, chars) {
        if (node.char)
            chars += node.char;
        if (node.end)
            console.log(chars);
        for (var i = 0; i < node.childs.length; i++) {
            var element = node.childs[i];
            if (element)
                this.printTrieFastRec(node.childs[i], chars);
        }
    };
    Trie.prototype.findPrefixRec = function (node, prefix, list) {
        if (node.end)
            list.push(prefix);
        for (var i = 0; i < node.childs.length; i++) {
            if (node.childs[i] !== undefined) {
                this.findPrefixRec(node.childs[i], prefix + node.childs[i].char, list);
            }
        }
        return list;
    };
    Trie.prototype.findIndex = function (char) {
        var charAt = this.alphabet.indexOf(char);
        return charAt;
    };
    return Trie;
}());
exports.Trie = Trie;
