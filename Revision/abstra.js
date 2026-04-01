var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Abc = /** @class */ (function () {
    function Abc() {
    }
    Abc.prototype.normal = function () {
        console.log("Normal Method");
    };
    return Abc;
}());
var Imp = /** @class */ (function (_super) {
    __extends(Imp, _super);
    function Imp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Imp.prototype.one = function () {
        console.log("Implemented method in child class");
    };
    return Imp;
}(Abc));
var obj1 = new Imp();
obj1.normal();
obj1.one();
