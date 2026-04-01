class A{
    one(){
        console.log("First method");
    }

    two(){
        console.log("Second method");
    }
}

class B extends A{
    three(){
        console.log("child third method");
    }

    four(){
        console.log("fourth method");
    }

}

class C extends A{
    secondkid(){
        console.log("Second kid");
    }

}

const obj2 = new B();
obj2.one();
obj2.two();
obj2.three();
obj2.four();

const obj3 = new C();
obj3.secondkid();