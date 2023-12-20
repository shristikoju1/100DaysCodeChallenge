class Parent {
    hello(){
        console.log("hello");
    }
}

 class Child extends Parent {}

 let obj = new Child();



class Person {
    constructor(name){
        console.log("Enter parent constructor");
        this.species = "Homo Sapiens";
        this.name = name;
    }

    eat(){
        console.log("eats");
    }
    sleep(){
        console.log("sleeps");
    }
    work(){
        console.log("do nothing");
    }
}

class Engineer extends Person{
    constructor(name){
        console.log("Enter child constructor");
        super(name);  //to invoke parents class constructor
        // this.branch = branch;
        console.log("Exit child constructor");
    }
    work(){
        console.log("solve problems, build something");
    }
}

 let shristiObj = new Engineer("xyz");
    