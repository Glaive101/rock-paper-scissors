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

console.log(getHumanChoice());