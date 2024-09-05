// you can write js here
console.log('exo-3');


var playerInput = prompt("Your choice ( rock, paper, scissors) ?")
playerInput = playerInput.toLowerCase();



function getPlayerChoice(playerInput){

    if (playerInput === 'rock' || playerInput === 'paper' || playerInput === 'scissors' || playerInput === 'bombe'){
        return playerInput;        
    }
    else{
        console.log('error');
    }

}
let playerChoice = getPlayerChoice(playerInput);


 

function getComputerChoice(){
    
    let computertirage = Math.floor(Math.random() * 3);

    if (computertirage === 0){
        return 'rock';
    }
    else if (computertirage === 1){
        return 'paper';
    }
    else if (computertirage === 2){
        return 'scisssors';
    };
}
var computerChoice = getComputerChoice();



function findWinner(playerChoice, computerChoice){

    if (playerChoice == computerChoice){
    return 'Tied - égalité';
    }
    else if (playerChoice == 'rock'){
        if(computerChoice == 'scissors'){
            return 'player wins';
        }
        else{
            return 'computer wins';
        }
    }
    else if(playerChoice == 'paper'){
        if(computerChoice == 'rock'){
            return 'player wins';
        }
        else{
            return 'computer wins'
        }
    }
    else if(playerChoice == 'scissors'){
        if(computerChoice == 'paper'){
            return 'player wins';
        }
        else{
            return 'computer wins';
        }
    }
    else if(playerChoice == 'bombe'){
        return 'player destroyed computer'
    }
    
}

function playgame(){
    let uChoice = getPlayerChoice(playerInput);
    let cChoice = getComputerChoice();
    console.log('player choice : ' + uChoice);
    console.log('computer choice : ' +cChoice);
    console.log(findWinner(uChoice, cChoice));
}
playgame();
