const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissors');
const reset = document.querySelector('#reset');
const playerWeapon = document.querySelector('#player-weapon');
const enemyWeapon = document.querySelector('#enemy-weapon');
const yourScore = document.querySelector('#your-score');
const enemyScore =  document.querySelector('#enemy-score');

const weapons = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;

function isGameOver(){
    return playerScore == 5 || computerScore == 5
}

rock.addEventListener('click', () => handleSelect('rock'));
paper.addEventListener('click', () => handleSelect('paper'));
scissor.addEventListener('click', () => handleSelect('scissors'));

function playRound(weapon, enemy) {
    const result = document.querySelector('#result');

    let playerSelection = weapon;
    let computerSelection = enemy;

    if(
    (playerSelection == 'rock' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'rock')) 
    {
        enemyWeapon.style.animation = "fa-bounce 1s infinite linear";
        computerScore++;
        result.textContent = "Computer Won!";
    }
    else if (
    (playerSelection == 'scissors' && computerSelection == 'paper') || 
    (playerSelection == 'paper' && computerSelection == 'rock') || 
    (playerSelection == 'rock' && computerSelection == 'scissors'))
    {
        playerWeapon.style.animation = "fa-bounce 1s infinite linear";
        playerScore++;
        result.textContent = "You Won!";
    }else{
        playerWeapon.style.animation = "fa-shake 1s infinite linear";
        enemyWeapon.style.animation = "fa-shake 1s infinite linear";
        result.textContent = "Draw!";
    }
}

function handleSelect(weapon){
    if(isGameOver()) return isWinner(playerScore, computerScore);
    
    enemyWeapon.style.animation = "";
    playerWeapon.style.animation = "";

    let computerSelection = getComputerChoice();
    playRound(weapon, computerSelection);
    showScore(playerScore,computerScore);
    showChoices(weapon, computerSelection);

    if(isGameOver()) isWinner(playerScore, computerScore);
}

function showChoices(playerSelection, computerSelection){
    playerWeapon.removeAttribute('class');
    enemyWeapon.removeAttribute('class');

    switch(playerSelection) {
        case 'rock':
            playerWeapon.setAttribute('class', 'fa-solid fa-hand-fist')
            break;
        case 'paper':
            playerWeapon.setAttribute('class', 'fa-solid fa-hand')
            break;
        case 'scissors':
            playerWeapon.setAttribute('class', 'fa-solid fa-hand-scissors');
            break;
    }

    switch(computerSelection) {
        case 'rock':
            enemyWeapon.setAttribute('class', 'fa-solid fa-hand-fist');
            break;
        case 'paper':
            enemyWeapon.setAttribute('class', 'fa-solid fa-hand');
            break;
        case 'scissors':
            enemyWeapon.setAttribute('class', 'fa-solid fa-hand-scissors');
            break;
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