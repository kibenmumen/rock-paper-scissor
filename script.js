

//SCORE

let playerScore = 0;
let computerScore = 0;
game();




function win(){
    console.log(`Human: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);
    if(playerScore === computerScore){
        console.log(`It's a TIE`);
    }else if(playerScore > computerScore) {
        console.log('you WIN');
    }else{
        console.log('you LOSE');
    }
}

function playRound(playerSelection, computerSelection) {
        // your code here!

        //Get User Input
        playerSelection = prompt(`Rock, Paper, or Scissor!?`).toLowerCase();
        console.log(`Player: ${playerSelection}`);

        //Get Computer Input
        const HandChoice = ["rock", "paper", "scissor"];
        const computerChoice =  Math.floor(Math.random() * HandChoice.length);
        //console.log(HandChoice[computerChoice]);

        computerSelection = HandChoice[computerChoice];
        console.log(`Computer: ${computerSelection}`);
        
        if(playerSelection === computerSelection){
            console.log(`It's a tie!`)
        } else if (playerSelection === `rock`){
            if (computerSelection === `scissor`){
                console.log(`Rock smashes scissor, you WIN!`)
                playerScore++;
            }else{
                console.log(`Paper covers rock, you LOSE!`)
                computerScore++;
            }
        } else if (playerSelection === `paper`){
            if(computerSelection === `rock`){
                console.log('Paper covers rock, you WIN!');
                playerScore++;
            }else {
                console.log('Scissor cuts paper, you LOSE!');
                computerScore++;
            }
        } else if (playerSelection === `scissor`){
            if(computerSelection === `paper`){
                console.log('Scissor cuts paper, you WIN!');
                playerScore++;
            }else {
                console.log('Rocks smashes scissor, you LOSE!');
                computerScore++;
            }
        }
    }

function game(){
    playRound();
    for (let i = 1; i < 6;) {
        //your code here!
        console.log(`Round ${i}`);
        playRound();
        
        i++
    }
    win();
}

