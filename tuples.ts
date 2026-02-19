// tuples vs arrays.
// tuples - fixed size and maintains order.
// arrays - dynamic : in runtime we can add more values to the array but we can't add in tuples.

let arr : [string,number]=["john",45];
console.log(arr);

let  arr1 : [string,boolean] = ["devagan ",false];
console.log(arr1);

 let arr2 :[string,boolean,null];
 arr2=["kumar",true,null];
 console.log(arr2);

console.log("----for in----");
 for(let e in arr2){
    console.log(e+" : "+arr2[e]);
 }

 // Many values insert in array as a pair.
 
 let many : [number,string][] = [[1,"john"],[2,"kiran"],[3,"tommy"]];
 console.log(many);
 console.log(many[0]);
 console.log(many[0][1]);

 many.push([4,"none"]);  // adding pair using push method.
 console.log(many);

 let many1 : [string,number] = ["nara",1];
 console.log(many1);
 many1.push("hardik",34);
 console.log(many1);