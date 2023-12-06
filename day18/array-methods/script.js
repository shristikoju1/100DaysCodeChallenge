let veggies = ["potato", "cabbages", "tomato", "cauliflower", "spinach"];
let marks = [1,25,87, 21 , 65];
veggies.push("brinjal");
console.log(veggies);
let deletedItem = veggies.pop();
console.log(veggies.toString());
console.log(`The deleted item is ${deletedItem}`);
console.log(marks.toString());

let fruits = ["apple", "banana", "mango", "papaya"];
let junk = ["pizza", "burger"]
let foods = veggies.concat(fruits, junk);
console.log(foods);

// let newFoods = foods.unshift("momos"); //add to the start
let newFoods = foods.shift(); //delete the start
console.log(newFoods);
console.log(foods);

let heroes = ["thor", "ironman", "ANTMAN", "spiderman", "dr. strange"];
console.log(heroes);
console.log(heroes.slice(1,4));

let arr = [1,2,3,4,5,6,7,8,9,0];
// arr.splice(2,2,101,102);          //replace element
// arr.splice(2,0,101);            //add element
arr.splice(3,1);                 //delete element

//practice q1
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);
// companies.shift();                                 //a
// companies.splice(2,1,"Ola");                       //b
companies.push("Amazon");                             //c