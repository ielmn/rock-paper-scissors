function playRound(playerSelection , computerSelection) {
    if(playerSelection == 'rock' && computerSelection == 'paper'){
        return "You Lose! Paper beats Rock";
    }else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        return "You Lose! Scissors beats paper";
    }else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        return "You Lose! Rock beats Scissors";
    }else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        return "You Win! Scissors beats paper";
    }else if (playerSelection == 'Paper' && computerSelection == 'rock'){
        return "You Win! Paper beats Rock";
    }else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        return "You Win! Rock beats Scissors";
    }else{
        return "draw";
    }
}

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

const playersChoice = 'rock';
const computersChoice = getComputerChoice();

console.log(playRound(playersChoice, computersChoice));