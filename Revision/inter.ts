interface A{
     name:string;
     inone():void;
     intwo():void;
}

class BC implements A{
  inone(){
        console.log("interface imp one")
  }
  intwo() {
      console.log("interface imp two");
  }
  name: string="name mentioned";
    
}

const obj5 = new BC();
obj5.intwo();
obj5.inone();
console.log(obj5.name);