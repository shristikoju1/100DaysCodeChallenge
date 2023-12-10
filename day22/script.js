let div = document.querySelector("div");
console.dir(div);

let id = div.getAttribute("id");
console.dir(id);

let para = document.querySelector("p");
console.dir(para);

// console.log(para.setAttribute("class", "123"));

div.style.backgroundColor = "purple";
// div.style.fontSize = "25px";
// div.innerText = "Hello!";

let newBtn = document.createElement("button");
newBtn.innerText = "Click me !";

newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";
console.log(newBtn);

// let div = document.querySelector("div");
para.after(newBtn);

let heading = document.createElement("h1");
heading.innerHTML = "<i>Hi, I am Shristi !</i>";
console.log(heading);
div.before(heading);

//q2
para.classList.add("newClass");