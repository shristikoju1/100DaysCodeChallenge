//--------------------for loop------------------

//to print hello 5 times
for(let i = 1; i<=5; i++){
    console.log("hello");
    console.log("i = ",i);
}

//to calculate sum 1 to 5
let sum = 0;
let n = 5;
for(let x = 1; x<=n; x++){
    sum = sum + x;
}
console.log("sum =",sum);


//-------------------------------------while loop-------------------------------------------
let a = 1;
while (a<=5){
   console.log(a); 
   a++;
}

//-----------------do-while loop-------------------
let b=1;
do{
    console.log("shristi");
    b++
}while(b<=5);

//--------------------for-of loop----------------------

let str = "JavaScript";
let size = 0;
for (let val of str){
   console.log(val); 
   size++;
}
console.log("string size = ",size)  //10

//-------------for-in loop-------------------
let student = {
    name: "Ram Shrestha",
    age:20,
    gpa:3.39,
    isPass:true,

};
for(let key in student){
    console.log("key = ", key, "value =", student[key]);
}

// Practice q1
for (let num=0; num<=100; num++){
    if(num % 2 === 0){
    console.log("num =",num);
    }
}

//Practice q2
let gameNum = 25;
let userNum = prompt("Guess the game number :");
console.log(userNum);
while(userNum != gameNum){
    let userNum = prompt("You enetered the wrong number. Guess again :");
    console.log(userNum);
}
console.log("Congratulations! You enetered the right number")
