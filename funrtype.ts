
// void -- it won't return 

function fun():void{

    console.log("how r u guyz...!!!");
}
fun();

// number // It return number.
function fun2(n1:number,n2:number):number{
    return n1+n2;
}
console.log(fun2(5,4));


// string -- It returns string.
function fun3(name:string):string{
    return name;
}
console.log(fun3("surendra"));

function fun4(n1:number,str:string):any
{
    return n1+str;
}
console.log(fun4(6,"sathish"));

