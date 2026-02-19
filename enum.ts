// enums or enumerations we use to store set of constants.

//numeric
//string
//heterogenous


// numeric
enum Browser{
    chrome,
    webkit=2,
    firefox,
    edge
}
console.log(Browser);

/*console.log("--------");
for(const e in Browser){
    console.log(e+":"+Browser[e]);
}*/

//-----------------------------------------------------------------
enum web{
    firefox,
    chrome,
    edge=fn(101),
    internetExplorer=3,
    safari = fn1("safari")*2
}
console.log("---------functions-------");

function fn(num:number):number{
    if(num>100){
        return 115;
    }else{
        return -1;
    }
}
console.log(web.edge);

console.log("----fn1-----");
function fn1(str: string):number{
    if(str == "safari"){
        return 15;
    }else{
        return -1;
    }
}
console.log(web.safari);
console.log(web);

//--------------------------------------------------------------------

// string
console.log("-----Environment-----");

enum Environment{
    dev = "dev",
    QA ="qa",
    STAGE = "stage",
    Prod = "prod"
}
console.log(Environment);

console.log(Environment.STAGE);
console.log(Environment['dev']);

//--------------------------------------------------------------
// heterogeneous

console.log("---Heterogeneous----");

enum statuss {
    Active = "active",
    Deactive = 1,
    pending
}

console.log(statuss.Active);
console.log(statuss.Deactive);
console.log(statuss.pending);
