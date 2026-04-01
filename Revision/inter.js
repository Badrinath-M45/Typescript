var BC = /** @class */ (function () {
    function BC() {
        this.name = "name mentioned";
    }
    BC.prototype.inone = function () {
        console.log("interface imp one");
    };
    BC.prototype.intwo = function () {
        console.log("interface imp two");
    };
    return BC;
}());
var obj5 = new BC();
obj5.intwo();
obj5.inone();
console.log(obj5.name);
