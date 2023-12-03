//This code prints Hello world!!
console.log("Hello world!!");

//Arithmetic Operators
let a=5;
let b=2;
console.log("a = ", a, " & b =", b);
console.log("a + b =",a+b);
console.log("a - b =",a-b);
console.log("a * b =",a*b);
console.log("a / b =",a/b);
console.log("a % b =",a%b);
console.log("a^b =",a^b);
console.log("a ** b =",a**b);

//Unary Operators
a++;
console.log("a++ =",a);
console.log("a++ =",a);
console.log("a =",++a);
b--;
console.log("b--=",b);

//Assignment Operators
a += 4;
console.log("a=", a);
a /= 2;
console.log("a=", a);

//Comparison Operators
x=2;
y=3; //number
z="3"; //string
console.log("2==3", x==y);
console.log("2==3", x!=y);
console.log("3==='3'", y===z);
console.log("3==='3'", y!==z);
console.log("2<3", x<y);
console.log("2>=3", x>=y);
console.log("2<=3", x<=y);

//Logical Operators
let m = 6;
let n = 5;
let cond1 = m>n; //true
let cond2 = m === 6; //true
let cond3 = m===1
console.log("cond1 && cond2 = ",cond1 && cond2);
console.log("cond1 || cond2 = ",cond1 || cond2);
console.log("cond1 && cond3 = ",cond1 && cond3);
console.log("cond1 || cond3 = ",cond1 || cond3);
console.log("!(6<5)) = ", !(m<n));

//Conditional Statement
let age = 25;

//if statement
if (age > 18){
    console.log("You can vote");
}

let mode = "light";
let color;
if(mode == "dark"){
    color = "black";
}
if(mode == "light"){
    color = "white";
}

console.log(color);

//if-else statement

// if(mode == "dark"){
//     color = "black";
// }else{
//     color = "white";
// }

//odd or even
let num = 10;
if (num % 2 === 0){
   console.log(num,"=even");
} else{
    console.log(num," = odd");
}

//else-if statement
if(mode == "dark"){
    color = "black";
}

else if(mode == "pink"){
    color = "pink";
}
else{
    color = "light";
}
console.log(color);

//ternary operator --> simpler or compact if else
let i = 4000;
let result = i > 2000 ? "expensive": "cheap";
console.log(result);
// let result = i > 2000 ? console.log("expensive"): console.log("cheap");

// alert("hello"); //one time pop up
// prompt("hello"); //pop up + can take input
// let name = prompt("hello!");
// console.log(name);

//q1
// let number = prompt("Enter a number");
// console.log(number);
// if( number % 5 ===0){
//     console.log(number,"is a multiple of 5");
// }else{
//     console.log(number,"is not multiple of 5");
// }


//q2

let score = prompt("Enter your score(0-100)");
let grade;
if(score >=90 && score<=100){
    grade = "A";
}else if(score >=70 && score<=89){
    grade = "B";
}else if(score >=60 && score<=69){
    grade = "C";
}else if(score >=50 && score<=59){
    grade = "D";
}else{
    grade = "not qualified";
}
console.log(grade);

