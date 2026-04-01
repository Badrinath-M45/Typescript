// // Factorial 
// //fact = (120)5*4*3*2*1; 
// let fact=1;
// let num=5;
// console.log("---Factorial---");
// for(let i = num ;i>0;i--){
//     fact=fact*i;
// }
// console.log(fact);
// // Odd numbers
// console.log("---Odd Numbers---");
// let num1=100;
// for(let i=1;i<=num1;i+=2){
//     /* if(i%2!=0){
//         console.log("Odd numbers is : "+i);
//     }else{
//         console.log("Don't Mind");
//     }*/
//     console.log("odd number : "+i);  
// }
// // Even numbers
// console.log("-------");
// console.log("---Even numbers---");
// let num2=50;
// for(let i=0;i<=num2;i+=2){
//     /*if(i%2==0){
//         console.log("Even numbers : "+i);
//     }*/
//     console.log("Even numbers-2 : "+i);
// }
// string reverse (method & for-loop)
// let name1 :string = "Hello world";
// console.log("Normal str : "+name1);
// let empStr : string = " ";
// console.log("The length : "+name1.length);
// // let empStr1:string = name1.split(" ").reverse().join();
// // console.log(empStr1);
// let revStr = " ";
// for(let i=name1.length-1;i>=0;i--){
//         // console.log(name1[i]);
//         revStr=revStr+name1[i];
// }
// console.log("revStr : "+revStr);
// palindrome for string and number.
// console.log("---palindrome---");
// let oStr = "Radar".toLowerCase();
// let pStr = "";
// for(let i=oStr.length-1;i>=0;i--){
//     pStr+=oStr[i].toLowerCase();
// }
// if( pStr === oStr){
//     console.log(pStr)
//     console.log(pStr+": is equal to : "+oStr+" is a palindrome");
// }else{
//     console.log("else"+pStr);
//         console.log(pStr+": is not equal to : "+oStr+" is not a palindrome");
// }
// palindrome number
var num = 122;
var dup = num;
var reserved = 0;
while (num > 0) {
    var digit = num % 10; //(121%10)=1, //(12%10)=2, //(1%10)=1
    console.log(digit + " digit"); //1,2,1
    reserved = reserved * 10 + digit; //0*10+1=1, //1*10+2=12, //12*10+1=121
    num = Math.floor(num / 10); //(121/10)=12 //(12/10)=1 //0
}
console.log(reserved);
if (dup == reserved) {
    console.log("Palindrome...!!!");
}
else {
    console.log("Not a palindrome");
}
