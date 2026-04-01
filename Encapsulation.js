var Encapsulation = /** @class */ (function () {
    function Encapsulation() {
        this.name = "";
    }
    Encapsulation.prototype.setName = function (name) {
        this.name = name;
    };
    Encapsulation.prototype.getName = function () {
        return this.name;
    };
    return Encapsulation;
}());
var obj = new Encapsulation();
obj.setName("Badri");
console.log(obj.getName());
var str = [1, "purna"];
console.log(typeof (str));
var good;
(function (good) {
    good[good["chrome"] = 0] = "chrome";
    good[good["browser"] = 1] = "browser";
    good[good["javascript"] = 2] = "javascript";
})(good || (good = {}));
console.log(good);
