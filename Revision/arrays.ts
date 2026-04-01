let arr1:number[]=[1,2,3,4,5,6,7];
console.log(arr1);

console.log("for of");

for(const i of arr1){
    console.log(i)
}

console.log("for each");
arr1.forEach((e)=>{
console.log(e);
})

let arr2:string[] = ["pandu","suri","sathish","none"];
console.log(arr2[2]);

let arr3:any[] = [1,2,3,4,"Number","two","three"];
arr3.push(45);
arr3.unshift(18);
console.log(arr3);

//----------------------using generic------------------]

let arr4:Array<string>=["one","Two","Three","Four"];
for(const con of arr4){
    console.log(con);
}

let arr5:Array<string|number>=[23,45,18,"pandu","sathish","suri"];
arr5.forEach((e)=>console.log(e));

let arr6:(string|number)[]=["njdej",234,"hdhjdj",377];
arr6.forEach(element => {
    console.log(element);
});

