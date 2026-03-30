let arr : number[]=[1,2,3];
console.log(arr);
console.log(arr[1]);

console.log("----------");

let arr1 : string[]=["john","snow","trophy","new"];
console.log(arr1);
console.log(arr[2]);
console.log("----------");

let arr2:any[]=[1,2,3,4,"haidi","deva"];
console.log(arr2);
console.log(arr2[2]);

console.log("------");

// using generics...!!!
let employeeNames:Array<string>=["tom","jerry","ninja hatori","kemomaki"];
console.log(employeeNames);
console.log(employeeNames[2]);

console.log("----------");

let employeeId : Array<number> = [1,2,3,4,5,6,7,8654,444];
for(let e in employeeId){
    console.log(e+" : "+employeeId[e]);
}

console.log("----------");
let empInfo : Array<any> = [2,3,45,56,766,"hdbb","njdnje",true,null];
for(let e in employeeId){
    console.log(e+" : "+empInfo[e]);
}

//multi-type array

console.log("-------");
console.log("----Multi-type array------");
let values : (number | string)[] = [100,"-police",108,"-ambulance",104,"-arogya bheema"];
console.log(values);
console.log(values[2]);

let values1 : Array<number>;
values1=[23,45,18,7,93];
console.log(values1);

// iterate the array using for loop

let arr4 : Array<string | number>=["nandu","johnwick","stark","wolf","king landing",12,23,435,55,6,66];
for(let i =0;i<arr4.length;i++){
    console.log(i+" : "+arr4[i]);
}

// for in loop ....!!!
console.log("----for in ----");
arr4.push("Rajasaab","khaidi");
for(let e in arr4){
    console.log(e+" : "+arr4[e]);
}



