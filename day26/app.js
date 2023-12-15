let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    //rock, paper, scissors
    return options[randomIdx];
}


const drawGame = () => {
    msg.innerText = "DRAW,PLAY AGAIN!";
    msg.style.backgroundColor = "grey";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You Win.");
        msg.innerText = `You Win. Your ${userChoice} beats computer's ${compChoice}` ;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You Lose.");
        msg.innerText = `You Lost. Computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
   
}

const playGame = (userChoice) => {
    // console.log("user choice = ", userChoice);
    //Generate computer choice -> modular
    const compChoice = genCompChoice();
    // console.log("computer choice = ", compChoice);

    if (userChoice === compChoice){
        //draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock") {
            //scissors, paper
            userWin = compChoice ==="paper" ? false : true;
        }else if(userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;       
         }else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
         }
         showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
    // console.log("Choice was clicked", userChoice);
    playGame(userChoice);
});
});


