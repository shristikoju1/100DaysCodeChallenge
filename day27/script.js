let isGameStarted = false;
//player 1 --> "X" & player 2 --> "0"
let playerTurn = "1";

let input1 = document.getElementById("input-1");
let input2 = document.getElementById("input-2");
let input3 = document.getElementById("input-3");
let input4 = document.getElementById("input-4");
let input5 = document.getElementById("input-5");
let input6 = document.getElementById("input-6");
let input7 = document.getElementById("input-7");
let input8 = document.getElementById("input-8");
let input9 = document.getElementById("input-9");

let gameStatus = document.getElementById("game-status");

const getWinner = ( ) => {
   let winner;
   const combinations = [
    [input1,input2,input3]
    [input4,input5,input6]
    [input7,input8,input9]
    [input1,input4,input7]
    [input2,input5,input8]
    [input3,input6,input9]
    [input1,input5,input9]
    [input3,input5,input7]
   ];

   combinations.map(([a, b, c]) => {
    // console.log(a.value);
    if (a.value && a.value === b.value && a.value === c.value) {
        winner = a.value === "X" ? "Player 1 is winner" : "Player 2 is winner";
    }
   });

   if(winner){
    const div = document.getElementById("winner");
    const p = document.createElement("p");
    p.id = "winner";
    p.style = "color : red; font-size : 24px";
    p.append(winner);
    div.appendChild(p);
   }
};

const handleInputClick = (id) => {
    if (!isGameStarted){
        isGameStarted = true;
        gameStatus.innerHTML = "Game started";
        gameStatus.style = "color:blueviolet";
    }
    const input = document.getElementById(id);
    if(playerTurn===1){
        input.value = "X";
        playerTurn = 2;
    }else{
        input.value = "0";
        playerTurn = 1;
    }
    input.disabled = true;

};

const resetInput = (input) => {
    console.log(input.value);
    input.value = "";
    input.disabled = false;
};

const handleReset = () =>{
    isGameStarted = false;
    playerTurn = 1;
    gameStatus.innerHTML = "Game not started";
    gameStatus.style = "color : brown";
    const winner = document.getElementById("winner");
    console.log(winner);
    // winner.remove();
    resetInput(input1);
    resetInput(input2);
    resetInput(input3);
    resetInput(input4);
    resetInput(input5);
    resetInput(input6);
    resetInput(input7);
    resetInput(input8);
    resetInput(input9);
};