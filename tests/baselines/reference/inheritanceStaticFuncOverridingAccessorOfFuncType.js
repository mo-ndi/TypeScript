//// [inheritanceStaticFuncOverridingAccessorOfFuncType.ts]
class a {
    static get x(): () => string {
        return null;
    }
}

class b extends a {
    static x() {
        return "20";
    }
}

//// [inheritanceStaticFuncOverridingAccessorOfFuncType.js]
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var a = (function () {
    function a() {
    }
    Object.defineProperty(a, "x", {
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    return a;
}());
var b = (function (_super) {
    __extends(b, _super);
    function b() {
        return _super.apply(this, arguments) || this;
    }
    b.x = function () {
        return "20";
    };
    return b;
}(a));
