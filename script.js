let humanScore = 0;
let computerScore = 0;
let humanChoice = "rock";
let computerChoice = "rock";

//Button event
const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => {
    playerSelection("rock");
    result = playRound("rock", computerSelection());
    displayResults(result);
});

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => {
    playerSelection("paper");
    result = playRound("paper", computerSelection());
    displayResults(result);
});

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => {
    playerSelection("scissors");
    result = playRound("scissors", computerSelection());
    displayResults(result);
});

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

    // console.log(randomValue);
    let choices = ["rock", "paper", "scissors"];
    let chosen = choices[Math.floor(randomValue * 3) % 3];
    computerChoice = chosen;
    return chosen;
}

function playerSelection(selected){
    if(selected === "rock"){
        humanChoice = "rock"; 
        console.log(`Human Choice: ${humanChoice}`);
    } else if(selected === "paper"){
        humanChoice = "paper"; 
        console.log(`Human Choice: ${humanChoice}`);
    } else {
        humanChoice = "scissors"; 
        console.log(`Human Choice: ${humanChoice}`);
    } 
}

function displayResults(result){

    const bodyElement = document.querySelector("#container");  // access container
    const resultDiv = document.createElement("div");  //create div element and assign to variable.

    if (result === "draw"){
            console.log(`Draw! Both threw ${humanChoice} and ${computerChoice}`);
            resultDiv.textContent = `Draw! Both threw ${humanChoice} and ${computerChoice}`;
        } else if (result === "win"){
            console.log(`You ${result}! ${humanChoice} beats ${computerChoice}`);
            resultDiv.textContent = `You ${result}! ${humanChoice} beats ${computerChoice}`;
        } else {
            console.log(`You ${result}! ${computerChoice} beats ${humanChoice}`);
            resultDiv.textContent = `You ${result}! ${computerChoice} beats ${humanChoice}`;
        }

        bodyElement.appendChild(resultDiv);
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