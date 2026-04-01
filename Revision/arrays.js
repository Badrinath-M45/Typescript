var arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr1);
console.log("for of");
for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
    var i = arr1_1[_i];
    console.log(i);
}
console.log("for each");
arr1.forEach(function (e) {
    console.log(e);
});
var arr2 = ["pandu", "suri", "sathish", "none"];
console.log(arr2[2]);
var arr3 = [1, 2, 3, 4, "Number", "two", "three"];
arr3.push(45);
arr3.unshift(18);
console.log(arr3);
//----------------------using generic------------------]
var arr4 = ["one", "Two", "Three", "Four"];
for (var _a = 0, arr4_1 = arr4; _a < arr4_1.length; _a++) {
    var con = arr4_1[_a];
    console.log(con);
}
var arr5 = [23, 45, 18, "pandu", "sathish", "suri"];
arr5.forEach(function (e) { return console.log(e); });
var arr6 = ["njdej", 234, "hdhjdj", 377];
arr6.forEach(function (element) {
    console.log(element);
});
