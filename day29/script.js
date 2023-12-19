const student = {
    fullName : "Shristi Koju",
    age : 22,
    marks : 98.2,
    printMarks : function(){
        console.log(`marks = ${this.marks}`);  //student.marks -> this.marks (marks lai direct access garna namilne vako le)

    },
};

const employee = {
    calcTax(){
        console.log("Tax rate is 10%");
    },
    // calcTax : function(){
    //     console.log("Tax rate is 10%"); 
    // }
};

const karan = {
    salary : 50000,
    calcTax(){
        console.log("Tax rate is 20%");     //this will execute
    }
};

karan.__proto__ = employee;



class Car{
    constructor(brand, mileage){
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    // setBrand(brand){
    //     this.brand = brand;
    // }
}

let fortuner = new Car("fortuner", 10);
console.log(fortuner);
let mercedes = new Car("xyz", 12); //constructor invoke
console.log(mercedes);

// fortuner.setBrand("fortuner");

//-----------------interitance in js---------------------------
class Parent{
    hello(){
        console.log("hello");
    }
}
class Child extends Parent {}

let obj = new Child();