"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrieNode = void 0;
var TrieNode = /** @class */ (function () {
    function TrieNode(char, end) {
        if (end === void 0) { end = false; }
        this.end = false;
        this.childs = [];
        this.end = end;
        this.char = char;
        this.childs = new Array(30);
    }
    TrieNode.prototype.get = function (key) {
        for (var _i = 0, _a = this.childs; _i < _a.length; _i++) {
            var child = _a[_i];
            if (typeof child !== undefined)
                if (key === child.char)
                    return true;
        }
        return false;
    };
    return TrieNode;
}());
exports.TrieNode = TrieNode;
