abstract class ABC{
    abstract greet():void;
    greeting(){
        console.log("How r u guyz..!!");
    }
}
class GHI extends ABC{
    greet() {
        console.log("Hi Good Morning simple")
    }
}
const obj1 = new GHI();
obj1.greet();
obj1.greeting();


interface User{
     one():void;
    two():void;
}
class Animal implements User{
    one(){
        console.log("one...!!!");
    }
    two(){
        console.log("Two...!!!")
    }
}
const num = new Animal();
num.one();
num.two();