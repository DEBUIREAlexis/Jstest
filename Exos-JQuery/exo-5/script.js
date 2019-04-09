console.log("exercice 5");

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
    //let userInput=prompt('Rock,paper or scissors');
    //let uChoice=getUserChoice(userInput);
    let uChoice;
    $('#rock').on('click',()=>{
        uChoice='rock';
        console.log("rock");
        next(uChoice);
    });
    $('#paper').on('click',()=>{
        uChoice='paper';
        console.log("paper");
        next(uChoice);
    });
    $('#scissor').on('click',()=>{
        uChoice='scissors';
        console.log("scissors");
        next(uChoice);
    });
        
}

function next(uChoice){
    $('#userChoice').remove();
    $('#computerChoice').remove();
    $('#result').remove();
    let computerChoice=getComputerChoice();
        console.log('Your choice: '+uChoice);
        console.log('Computer Choice: '+computerChoice);
        let $result=(determineWinner(uChoice,computerChoice));
        $('body').append("<div id='userChoice'><p>"+uChoice+"</p></div>");
        $('body').append("<div id='computerChoice'><p>"+computerChoice+"</p></div>");
        $('body').append("<div id='result'><p>"+$result+"</p></div>");
        if($result==='Win'){
            $('#result').css("color","green");
        }else if($result==='Lost'){
            $('#result').css("color","red");
        }else{
            $('#result').css("color","grey");
        }
        
        
}

$(document).ready(()=>{
 playGame();
})

