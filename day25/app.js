let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() =>{
    console.log("Choice was clicked");
});
});

// const choices = document.querySelectorAll('.choice'); // Replace '.choice' with the actual selector for your choices

// // Convert NodeList to an array
// const choicesArray = Array.from(choices);

// choicesArray.forEach((choice) => {
//     console.log(choice);
//     choice.addEventListener("click", () => {
//         console.log("Choice was clicked");
//     });
// });