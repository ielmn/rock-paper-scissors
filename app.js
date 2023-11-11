function playRound(playerSelection , computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection == 'rock' && computerSelection == 'paper'){
        computerScore++;
        return "You Lose! Paper beats Rock";
    }else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        computerScore++;
        return "You Lose! Scissors beats paper";
    }else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        computerScore++;
        return "You Lose! Rock beats Scissors";
    }else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        playerScore++;
        return "You Win! Scissors beats paper";
    }else if (playerSelection == 'paper' && computerSelection == 'rock'){
        playerScore++;
        return "You Win! Paper beats Rock";
    }else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        playerScore++;
        return "You Win! Rock beats Scissors";
    }else{
        return "draw";
    }
}

let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const pick = Math.floor(Math.random() * 3);
    let res = '';
    switch (pick) {
        case 0:
            res = 'rock'
            break;
        case 1:
            res = 'paper'
            break;
        case 2:
            res = 'scissors'
    }
    return res;
}

function game(){
    for(i = 1; i <= 5; i++){
        const playersChoice = prompt('Write your weapon:');
        const computersChoice = getComputerChoice();
        console.log(playRound(playersChoice, computersChoice));
    }
    let result = (playerScore > computerScore)?`You Won! your score: ${playerScore} computer score: ${computerScore}` :(playerScore < computerScore)? `Computer Won! your score: ${playerScore} computer score: ${computerScore}`: `Draw! your score: ${playerScore} computer score: ${computerScore}`;
    console.log(result);
}
game();



