abstract class Abc{
    abstract one():any;

    normal(){
        console.log("Normal Method");
    }
}

class Imp extends Abc{
        one(){
            console.log("Implemented method in child class");
        }
}

const obj1 = new Imp();
obj1.normal();
obj1.one();