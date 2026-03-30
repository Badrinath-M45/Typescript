// enums or enumerations we use to store set of constants.
//numeric
//string
//heterogenous
// numeric
var Browser;
(function (Browser) {
    Browser[Browser["chrome"] = 0] = "chrome";
    Browser[Browser["webkit"] = 2] = "webkit";
    Browser[Browser["firefox"] = 3] = "firefox";
    Browser[Browser["edge"] = 4] = "edge";
})(Browser || (Browser = {}));
console.log(Browser);
/*console.log("--------");
for(const e in Browser){
    console.log(e+":"+Browser[e]);
}*/
//-----------------------------------------------------------------
var web;
(function (web) {
    web[web["firefox"] = 0] = "firefox";
    web[web["chrome"] = 1] = "chrome";
    web[web["edge"] = fn(101)] = "edge";
    web[web["internetExplorer"] = 3] = "internetExplorer";
    web[web["safari"] = fn1("safari") * 2] = "safari";
})(web || (web = {}));
console.log("---------functions-------");
function fn(num) {
    if (num > 100) {
        return 115;
    }
    else {
        return -1;
    }
}
console.log(web.edge);
console.log("----fn1-----");
function fn1(str) {
    if (str == "safari") {
        return 15;
    }
    else {
        return -1;
    }
}
console.log(web.safari);
console.log(web);
//--------------------------------------------------------------------
// string
console.log("-----Environment-----");
var Environment;
(function (Environment) {
    Environment["dev"] = "dev";
    Environment["QA"] = "qa";
    Environment["STAGE"] = "stage";
    Environment["Prod"] = "prod";
})(Environment || (Environment = {}));
console.log(Environment);
console.log(Environment.STAGE);
console.log(Environment['dev']);
//--------------------------------------------------------------
// heterogeneous
console.log("---Heterogeneous----");
var statuss;
(function (statuss) {
    statuss["Active"] = "active";
    statuss[statuss["Deactive"] = 1] = "Deactive";
    statuss[statuss["pending"] = 2] = "pending";
})(statuss || (statuss = {}));
console.log(statuss.Active);
console.log(statuss.Deactive);
console.log(statuss.pending);
