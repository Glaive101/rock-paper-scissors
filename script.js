//let rounds = 0;

let humanScore = 0;
let computerScore = 0;
let humanChoice = "rock";
let computerChoice = "rock";

const bodyElement = document.querySelector("#container");  // main body container access.

//create score keeping element
const scoreElement = document.createElement("div");
scoreElement.textContent = `Current Score: H:${humanScore} to C:${computerScore}`;
bodyElement.insertBefore(scoreElement, document.querySelector("rock"));

//Create round result element
const resultDiv = document.createElement("div");  //create div element and assign to variable.
bodyElement.appendChild(resultDiv);

/*************************************************************/
/*                     Button events                         */
/*************************************************************/

const buttons = ['rock', 'paper', 'scissors'];
buttons.forEach((button) => {
    const element = document.querySelector(`#${button}`);
    element.addEventListener("click", () => buttonEventHandler(button));
});

function buttonEventHandler(input){
    result = playRound(input, computerSelection());
    displayResults(result);
    checkWin();
}

function checkWin(){
    if(humanScore === 5 || computerScore === 5){
        if(humanScore === computerScore){
            //console.log(`The match was a DRAW!  Score: ${humanScore} to ${computerScore}`);
            alert(`The match was a DRAW!  Score: ${humanScore} to ${computerScore}`);
        } else if(humanScore > computerScore){
            //console.log(`Congratulations! You WIN!  Score: ${humanScore} to ${computerScore}`);
            alert(`Congratulations! You WIN!  Score: ${humanScore} to ${computerScore}`);
        } else {
            //console.log(`Better luck next time! Score: ${humanScore} to ${computerScore}`);
            alert(`Better luck next time! Score: ${humanScore} to ${computerScore}`);
        }

//  reset tracking variables
    humanScore = 0;
    computerScore = 0;

    scoreElement.textContent = `Current Score: H:${humanScore} to C:${computerScore}`;
    }
}

function playRound(humanChoice, computerChoice){
let result = "";

    if(humanChoice === computerChoice){
        result = "draw";
    } else if(humanChoice === "rock"  && computerChoice === "scissors"){
        result = "win";
        humanScore += 1;
    } else if(humanChoice === "paper"  && computerChoice === "rock"){
        result = "win";
        humanScore += 1;
    } else if(humanChoice === "scissors"  && computerChoice === "paper"){
        result = "win";
        humanScore += 1;
    } else {
        result = "lose";
        computerScore += 1;
    }

    return result;
}

function computerSelection(){
    let randomValue = Math.random();
    let choices = ["rock", "paper", "scissors"];
    let chosen = choices[Math.floor(randomValue * 3) % 3];

    computerChoice = chosen;

    return chosen;
}

function displayResults(result){
    scoreElement.textContent = `Current Score: H:${humanScore} to C:${computerScore}`;  // update scoring element

    if (result === "draw"){
        //console.log(`Draw! Both threw ${humanChoice} and ${computerChoice}`);
        resultDiv.textContent = `Draw! Both threw ${humanChoice} and ${computerChoice}`;
    } else if (result === "win"){
        //console.log(`You ${result}! ${humanChoice} beats ${computerChoice}`);
        resultDiv.textContent = `You ${result}! ${humanChoice} beats ${computerChoice}`;
    } else {
        //console.log(`You ${result}! ${computerChoice} beats ${humanChoice}`);
        resultDiv.textContent = `You ${result}! ${computerChoice} beats ${humanChoice}`;
    }
}

/*************************************************************/
/*              Removed functions from previous task         */
/*************************************************************/


// function playGame(){
//     for(let i = 0; i < 5; i++){
//         playRound(getHumanChoice(), getComputerChoice());
//     }

//     if(humanScore === computerScore){
//         console.log(`The match was a DRAW!  Score: ${humanScore} to ${computerScore}`);
//     } else if(humanScore > computerScore){
//         console.log(`Congratulations! You WIN!  Score: ${humanScore} to ${computerScore}`);
//     } else {
//         console.log(`Better luck next time! Score: ${humanScore} to ${computerScore}`);
//     }
// }

// function getHumanChoice(){
//     let humanChoice = "";
//     while(true){
//         humanChoice = prompt("Please provide your choice of: rock, paper or scissors.", "rock");

//         if(humanChoice.toLowerCase() !== "rock" && humanChoice.toLowerCase() !== "paper" && humanChoice.toLowerCase() !== "scissors"){
//             alert("Please ensure to only choose from the provided options!");
//         } else {
//             break;
//         }
//     }

//     return humanChoice.toLowerCase();
// }