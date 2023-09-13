function getComputerChoice() {
    let computerChoice;
    let x = (Math.random() * 10) % 3;
    x = Math.floor(x);
    switch (x) {
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
function playRound(playerSelection, computerSelection) {


    if (playerSelection === "rock" && computerSelection === "rock") {
        return "Tie";
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats rocks";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors.";
    }

    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! scissors beats paper.";
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Tie";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock";
    }


    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! scissors beats paper.";
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "Tie";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors";
    }

    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! scissors beats paper.";
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Tie";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock";
    }

}
// function fiveRoundGame(){
//     let yourWin = 0;
//     let computerWin = 0;
//     while(yourWin+computerWin<5){
//         const playerSelection = prompt("Enter rock or paper or scissors!");
//         const computerSelection = getComputerChoice();
//         const result = playRound(playerSelection,computerSelection);
//         console.log(result)
//         if(result === "Tie"){
//             continue;
//         }
//         else if(result.slice(0,8) ==="You win!"){
//             yourWin++;
//         }
//         else computerWin++;
//     }
//     console.log("Your win:" + yourWin + " and " + "Computer Win: " + computerWin);
// }
// fiveRoundGame()

function playRock() {
    let computerChoice = getComputerChoice();
    let playerChoice = 'rock';
    let message = playRound(playerChoice, computerChoice);
    const result = document.querySelector('#result');
    const show = document.createElement('div');
    show.textContent = message;
    result.appendChild(show);
}

function playPaper() {
    let computerChoice = getComputerChoice();
    let playerChoice = 'paper';
    let message = playRound(playerChoice, computerChoice);
    const result = document.querySelector('#result');
    const show = document.createElement('div');
    show.textContent = message;
    result.appendChild(show);
}

function palyScissors() {
    let computerChoice = getComputerChoice();
    let playerChoice = 'scissors';
    let message = playRound(playerChoice, computerChoice);
    const result = document.querySelector('#result');
    const show = document.createElement('div');
    show.textContent = message;
    result.appendChild(show);
}


const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', palyScissors);

const rock = document.querySelector('#rock');
rock.addEventListener('click', playRock);

const paper = document.querySelector('#paper');
paper.addEventListener('click', playPaper);