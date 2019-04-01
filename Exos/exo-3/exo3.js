// you can write js here
console.log('exo-3');

function getUserChoice(userInput){
    userInput.toLowerCase();
    switch (userInput){
        case 'rock':
        return userInput;
        break;
        case 'paper':
        return userInput;
        break;
        case 'scissors':
        return userInput;
        break;
        case 'bomb':
        return userInput;
        break;
        default:
        console.log('Choix invalide');
    }
}

function getComputerChoice(){
    let choiceCPU=Math.floor(Math.random()*3);
    switch (choiceCPU){
        case 0:
        return 'rock';
        break;
        case 1:
        return 'paper';
        break;
        case 2:
        return 'scissors'
        break;
        default:
        console.log('CPU Error');
        break;
    }
}

function determineWinner(userChoice,computerChoice){
    if(userChoice==='bomb'){
        return 'WIN';
    }
    if(userChoice===computerChoice){
        return 'Tied';
    }
    if(userChoice==='rock'){
        if(computerChoice==='scissors'){
            return 'Win';
        }else{
            return 'Lost';
        }
    }
    else if(userChoice==='paper'){
        if(computerChoice==='scissors'){
            return 'Lost';
        }else{
            return 'Win';
        }
    }else{
        if(computerChoice==='rock'){
            return 'Lost';
        }else{
            return 'Win';
        }
    }
}

function playGame(){
    let userInput=prompt('Rock,paper or scissors');
    let uChoice=getUserChoice(userInput);
    let computerChoice=getComputerChoice();
    console.log('Your choice: '+uChoice);
    console.log('Computer Choice: '+computerChoice);
    console.log(determineWinner(uChoice,computerChoice));
}

playGame();