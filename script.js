let humanScore = 0;
let computerScore = 0;
playGame();

function playGame(){
    

    for(let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }

    if(humanScore === computerScore){
        console.log(`The match was a DRAW!  Score: ${humanScore} to ${computerScore}`);
    } else if(humanScore > computerScore){
        console.log(`Congratulations! You WIN!  Score: ${humanScore} to ${computerScore}`);
    } else {
        console.log(`Better luck next time! Score: ${humanScore} to ${computerScore}`);
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

    if (result === "draw"){
        console.log(`Draw! Both threw ${humanChoice} and ${computerChoice}`);
    } else if (result === "win"){
        console.log(`You ${result}! ${humanChoice} beats ${computerChoice}`);
    } else {
        console.log(`You ${result}! ${computerChoice} beats ${humanChoice}`);
    }
}

function getComputerChoice(){
    let randomValue = Math.random();

    // console.log(randomValue);

    if(randomValue <= 0.33){
        //console.log("rock");
        return "rock";
    } else if ((randomValue > 0.33) && (randomValue <=0.66)) {
        //console.log("paper");
        return "paper";
    } else {
        //console.log("scissors");
        return "scissors";
    }
}

function getHumanChoice(){
    let humanChoice = "";
    while(true){
        humanChoice = prompt("Please provide your choice of: rock, paper or scissors.", "rock");

        if(humanChoice.toLowerCase() !== "rock" && humanChoice.toLowerCase() !== "paper" && humanChoice.toLowerCase() !== "scissors"){
            alert("Please ensure to only choose from the provided options!");
        } else {
            break;
        }
    }

    return humanChoice.toLowerCase();
}