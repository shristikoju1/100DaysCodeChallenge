let arr = [1, 2, 3, 4, 5];

//  arr.forEach(function printVal(val){ //each value at each index
//     console.log(val);
//  });

 arr.forEach((val) =>{
    console.log(val);
 });

 let cities = ["kathmandu", "bhaktapur", "lalitpur"];
 cities.forEach((key, idx, arr) => {
    console.log(key.toUpperCase(), idx, arr);
 });

 //practice q1

 let nums = [2, 3, 4, 5, 6, 7];
 calcSquare = (num) => {
    console.log(num * num);   //num ** 2
 };
 nums.forEach(calcSquare);

//  nums.forEach((num) => {
//     console.log(num * num);   //num ** 2
//  });


//-------------------------------map------------------------------------
let items = [2, 3, 4, 5, 6, 7];

items.map((val) =>{
    console.log(val);
})

newItems = items.map((val) => {
    return val * 2;
});
console.log(newItems);

//--------------------------------filter---------------------------------
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenArr = array.filter((val) => {
    return val % 2 === 0;
});
console.log(evenArr);

//---------------------------------reduce-----------------------------

//sum of all numbers
output = array.reduce((res, current) => {
return res + current;
});
console.log(output);

//to print largest number
largest = array.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
    });
    console.log(largest);

 //practice q1
 let marks = [23,  45, 65, 64, 76, 92, 87, 99];
 
 let toppers = marks.filter((val) => {
    return val > 90;
 })
 console.log(toppers);

 //practice q2

 let n = prompt("Enter a number");
 let ar =[];
 for (let i = 0; i <= n; i++){
    ar[i-1] = i;
 }
 console.log(ar);

 sum = ar.reduce((res, curr) => {
    return res + curr;
 });
 console.log("sum = ",sum);

 factorial = ar.reduce((res, curr) => {
    return res * curr;
 });
 console.log(`factorial = ${factorial}`);

