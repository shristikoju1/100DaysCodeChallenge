let marks = [23, 42, 76, 82, 99];
console.log(marks);
console.log(marks.length);
console.log(typeof marks);
marks[0] = 45;
console.log(marks);

let heroes = ["superman" , "thor", "suyan", "ironman"];
console.log(heroes);
console.log(heroes.length);

//for loop
for(let idx = 0; idx < heroes.length; idx++){
    console.log(heroes[idx]);
}

//for-of loop
for(let hero of heroes){
    console.log(hero.toUpperCase);
}

//practice q1
let m = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let val of marks){
    console.log(val);
    sum = sum + val;   
}
console.log(sum);
let avg = sum / marks.length;
console.log(`The average marks of the class = ${avg}.`);

//practice q2
let idx = 0;
let items = [250, 645, 300, 900, 50];
// for (let price of items){
//     console.log(`Price at index ${idx} = ${price}`);
//     let offer = price / 10;
//     items[idx] = items [idx] - offer;
//     console.log(`Value after offer = ${items[idx]}`);
//     idx++;
// }

for(let i = 0; i < items.length ; i++){
    let offer = items[i] / 10;
    items[i] -=offer;
}
console.log(items);
