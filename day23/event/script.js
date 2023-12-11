let btn1 = document.querySelector(".btn1");

// btn1.onclick = (e) => {
//     console.log("button was clicked");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
//     let a =25;
//     a++;
//     console.log(a);
// }

btn1.addEventListener("click", (evt) => {
    console.log("button1 was clicked - handler1");
    // console.log(evt);
    // console.log(evt.type);
});

const handler2 = () => {
    console.log("button1 was clicked - handler2");
};
btn1.addEventListener("click",handler2);

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler3");
});

btn1.removeEventListener("click", handler2);

let box = document.querySelector(".box");

box.onmouseover = () => {
    console.log("You are inside the box");
}

