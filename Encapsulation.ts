class Encapsulation{
    private name : string="";

    setName(name:string){
        this.name=name;
    }

    getName(){
        return this.name;
    }
}

const obj = new Encapsulation();
obj.setName("Badri");
console.log(obj.getName());

let str : [number,string]=[1,"purna"];
console.log(typeof(str));

enum good{
    chrome,
    browser,
    javascript
}
console.log(good);