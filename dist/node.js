"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(char, end) {
        if (end === void 0) { end = false; }
        this.end = false;
        this.childs = [];
        this.end = end;
        this.char = char;
    }
    Node.prototype.get = function (key) {
        for (var _i = 0, _a = this.childs; _i < _a.length; _i++) {
            var child = _a[_i];
            if (typeof child !== undefined)
                if (key === child.char)
                    return true;
        }
        return false;
    };
    return Node;
}());
exports.Node = Node;
