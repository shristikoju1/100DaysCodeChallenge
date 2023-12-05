let str = "Shristis";
let str2 = ' Khwopa College Of Engineering ';
console.log(str[4]); //s
console.log(str2.toUpperCase());
// newStr2 = str2.toUpperCase();
// console.log(newStr2);
console.log(str2.toLowerCase());

console.log(str2.trim());

console.log(str2.slice(1,20));

string1 = "Java";
string2 = "Script";
let res =  string1.concat(string2); //let res = string1 + string2;
console.log(res);

console.log(str.replace("s","o"));
console.log(str.replaceAll("s","o"));
console.log(str.replace("S","o"));

console.log(str.charAt(5));


//Template Literals
let specialString = `This is a template literal ${1+2*9}`;
console.log(specialString);
console.log(typeof specialString);

let obj = {
    item : "pen",
    price : 10,
};

console.log("The cost of",obj.item, "is", obj.price, "rupees.");
let output = `The cost of ${obj.item} is ${obj.price} rupees.`
console.log(output);

//practice q1
let fullName = prompt("Enter your full name without space");
let userName = "@" + fullName + fullName.length ;
console.log(userName); 