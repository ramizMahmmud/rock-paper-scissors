function getComputerChoice(){
    let computerChoice;
    let x = (Math.random() * 10) %3;
    x = Math.floor(x)
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
