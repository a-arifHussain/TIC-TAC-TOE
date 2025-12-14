let winningArray = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [3, 4, 5], [1, 4, 7], [2, 5, 8], [6, 7, 8], [6, 4, 2]];
let firstTurn="o"
let turn = [...firstTurn];
let turnCount = 0;
let anyWin = false;
let winPopUp = document.querySelector(".winPopUp");
let victoryLogo = document.querySelector(".victory-Img");
let resultMsg = document.querySelector("#resultMsg");
let winWord = document.querySelector("#winWord");
let playAgainBtn = document.querySelector("#playAgainBtn");
let mainMenuBtn = document.querySelector("#mainMenuBtn");
let inputPopUp = document.querySelector(".inputPopUp");
let startGameBtn = document.querySelector("#startGameBtn");
let player1Name = document.querySelector("#player1-name");
let player2Name = document.querySelector("#player2-name");
let playerX;
let playerO;


let btnbox = document.querySelectorAll(".box");
let xWinCount = 0;
let yWinCount = 0;

let player1Win = document.querySelector("#player1-win");
let player2Win = document.querySelector("#player2-win");

player1Win.innerText = xWinCount;
player2Win.innerText = yWinCount;

btnbox.forEach((box) =>{
    box.addEventListener("click", () => {
        box.innerText = turn;
        box.disabled = true;
    
        if (turn === "x") {
            turn = "o";
            box.setAttribute("id", "redX");
            console.log(turn, firstTurn);
        }
        else {
            turn = "x";
            box.setAttribute("id", "blueO");
            console.log(turn, firstTurn);
            

        }

        turnCount += 1;


        checkWin();
       if (anyWin==false) {
         checkDraw();
       }
       

    })
})

function checkWin() {
     for (const winningBox of winningArray) {

         if (btnbox[winningBox[0]].innerText === btnbox[winningBox[1]].innerText &&
             btnbox[winningBox[1]].innerText === btnbox[winningBox[2]].innerText &&
             btnbox[winningBox[2]].innerText !== "") {
           
             anyWin = true;

             if (btnbox[winningBox[0]].innerText === "x") {
                 xWinCount += 1;
                 player1Win.innerText = xWinCount;
                 victoryLogo.style.backgroundImage = "url('xVictoryLogo.png')";
                 winWord.innerText = "X";
                 resultMsg.innerText = `VICTORY ACHIEVED...!   ${playerX.toUpperCase()} WINS...!`;

                 

             }
             else {
                 yWinCount += 1;
                 player2Win.innerText = yWinCount;
                 victoryLogo.style.backgroundImage = "url('oVictoryLogo.png')";
                 winWord.innerText = "O";
                 resultMsg.innerText = `VICTORY ACHIEVED...!   ${playerO.toUpperCase()} WINS...!`;

                 

             }
            
             winPopUp.style.visibility = "visible";   
             

            btnbox.forEach((box)=>{
                box.disabled = true;
            })
         }
        

       
    }
}

function checkDraw() {
     if (turnCount=== 9) {
         resultMsg.innerText = "MATCH DRAW...!";
         winPopUp.style.visibility = "visible";   
         victoryLogo.style.backgroundImage = "url('drawImg.png')";
   
        

         }
}

function reSetGame() {
    if (firstTurn==="o") {
        firstTurn = "x";
                
    }else {
        firstTurn = "o";
    }
    turnCount = 0;
    turn = firstTurn;

    btnbox.forEach((box)=>{
         box.disabled = false;
         box.innerText = "";
    })
    
    winPopUp.style.visibility = "hidden";   
    anyWin = false;
}

let restartBtn = document.querySelector("#restart-btn");
restartBtn.addEventListener("click", reSetGame);


playAgainBtn.addEventListener("click", reSetGame);


startGameBtn.addEventListener("click", (event) => {
    inputPopUp.style.visibility = "hidden";
    event.preventDefault();
    reSetGame();

    playerX = document.querySelector("#playerX-name").value;
    playerO = document.querySelector("#playerO-name").value;
    player1Name.innerText = playerX;
    player2Name.innerText = playerO;

   
});

mainMenuBtn.addEventListener("click", () => {
    inputPopUp.style.visibility = "visible";
    reSetGame();
    player2Win.innerText = 0;
    player1Win.innerText = 0;

});
quitBtn.addEventListener("click", () => {
     inputPopUp.style.visibility = "visible";
    reSetGame();
    player2Win.innerText = 0;
    player1Win.innerText = 0;

})