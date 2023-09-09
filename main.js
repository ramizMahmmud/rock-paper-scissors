function getComputerChoice(){
    let computerChoice;
    let x = (Math.random() * 10) %3;
    x = Math.floor(x);
    switch(x){
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    // playerSelection Rock
    if(playerSelection === "rock" && computerSelection ==="rock"){
        return "Tie";
    }
    else if(playerSelection === "rock" && computerSelection ==="paper"){
        return "You Lose! Paper beats rocks";
    }
    else if(playerSelection === "rock" && computerSelection ==="scissors"){
        return "You win! Rock beats scissors.";
    }
    // playerSelection Paper
    else if(playerSelection === "paper" && computerSelection ==="scissors"){
        return "You lose! scissors beats paper.";
    }
    else if(playerSelection === "paper" && computerSelection ==="paper"){
        return "Tie";
    }
    else if(playerSelection === "paper" && computerSelection ==="rock"){
        return "You win! Paper beats rock";
    }

    // playerSelection Scissors
    else if(playerSelection === "scissors" && computerSelection ==="paper"){
        return "You win! scissors beats paper.";
    }
    else if(playerSelection === "scissors" && computerSelection ==="scissors"){
        return "Tie";
    }
    else if(playerSelection === "scissors" && computerSelection ==="rock"){
        return "You lose! Rock beats scissors";
    }

    else if(playerSelection === "paper" && computerSelection ==="scissors"){
        return "You lose! scissors beats paper.";
    }
    else if(playerSelection === "paper" && computerSelection ==="paper"){
        return "Tie";
    }
    else if(playerSelection === "paper" && computerSelection ==="rock"){
        return "You win! Paper beats rock";
    }

}
const playerSelection = "paper";
const computerSelection = getComputerChoice();
const result = playRound(playerSelection,computerSelection);
console.log(result);
