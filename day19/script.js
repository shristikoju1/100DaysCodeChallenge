function myFunction(){
    console.log("I am Shristi !");
    console.log("I am learning JS from Apna College");
}
myFunction();

function msg(msg) {
    //parameter-->input
    console.log(msg)
}
msg("I love JS");

// function --> sum of 2 numbers

function sum(a,b){
    console.log(a+b);
}
sum(3,9);

//return value
function multiply(x,y){
    z = x * y;
    return z;
}
let val = multiply(3,9);
console.log(val);

//sum function
function sum(a , b) {
    return a + b;
}

const arrowSum = (a , b) => {         //arrow function
    console.log(a + b);
};

//multiplication function
function mul(a, b) {
    return a * b;
}
const arrowMul = (a , b) => {         //arrow function
    console.log(a * b);
};

const printHello = () => {          //single funtion -> no parameter
    console.log("hello");
};

//practice q1
function countVowel(str){
    //"ShristiKoju", count = 4;
    let count = 0;
    for(const char of str) {
        if (char === "a" || char ==="e" || char === "i" || char ==="o" || char ==="u"){
            count ++;
        }
    }
    return count;
}


//practice q2

const countVow = (str) =>  { let count = 0;
for(const char of str) {
    if (char === "a" || char ==="e" || char === "i" || char ==="o" || char ==="u"){
        count ++;
    }
}
return count;
}
