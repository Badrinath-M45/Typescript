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
var ABC = /** @class */ (function () {
    function ABC() {
    }
    ABC.prototype.greeting = function () {
        console.log("How r u guyz..!!");
    };
    return ABC;
}());
var GHI = /** @class */ (function (_super) {
    __extends(GHI, _super);
    function GHI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GHI.prototype.greet = function () {
        console.log("Hi Good Morning simple");
    };
    return GHI;
}(ABC));
var obj1 = new GHI();
obj1.greet();
obj1.greeting();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.one = function () {
        console.log("one...!!!");
    };
    Animal.prototype.two = function () {
        console.log("Two...!!!");
    };
    return Animal;
}());
var num = new Animal();
num.one();
num.two();
