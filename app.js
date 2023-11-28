const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissors');
const reset = document.querySelector('#reset');

let yourScore = document.querySelector('#your-score');
let enemyScore =  document.querySelector('#enemy-score');

const weapons = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function isGameOver(){
    if (playerScore == 5 || computerScore == 5){
        return true;
    }
    return false;
}

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissor.addEventListener('click', playRound);


function playRound(e) {
    const result = document.querySelector('#result');

    let playerSelection = e.target.id;
    let computerSelection = getComputerChoice();

    if(isGameOver()){
        isWinner(playerScore, computerScore);
    }
    else{
    if(playerSelection == 'rock' && computerSelection == 'paper'){
        computerScore++;
        result.textContent = "Computer Won!";
    }else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        computerScore++;
        result.textContent = "Computer Won!";
    }else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        computerScore++;
        result.textContent = "Computer Won!";
    }else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        playerScore++;
        result.textContent = "You Won!";
    }else if (playerSelection == 'paper' && computerSelection == 'rock'){
        playerScore++;
        result.textContent = "You Won!";
    }else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        playerScore++;
        result.textContent = "You Won!";
    }else{
        result.textContent = "Draw!";
    }
    showScore(playerScore,computerScore);
}
}

function showScore(playerOne, playerTwo){
    yourScore.textContent = `${playerOne}`;
    enemyScore.textContent = `${playerTwo}`;
};

function getComputerChoice(){
    const pick = Math.floor(Math.random() * 3);
    return weapons[pick];
}

function isWinner(playerOne, playerTwo) {

    if (playerScore > computerScore){
        result.textContent = "You Beat The Enemy!";
    }else{
        result.textContent = "You Got Beaten!";
    }
}

reset.addEventListener('click', () => window.location.reload())