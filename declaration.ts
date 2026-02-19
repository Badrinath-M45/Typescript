//TS - statically and Js - Dynamic

// Type annotaion scope varname : type ; as below
var nam : string = "john";
console.log(nam);

var nam1 : number = 1234567;
console.log(nam1);

//type inference

let nam2 = "johnny...";  //type=string -- CT --> Type inference
console.log(nam2);

let num2 = 10202303040;
console.log(num2);

// null and undefined

let num3 : null = null;
console.log(num3);

let num4 : undefined = undefined;
console.log(num4);

//any

let num5 : any;
num5=2345;
console.log(num5);
num5="Pandu";
console.log(num5);
num5 = true;
console.log(num5);