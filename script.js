//Buttons
const btnRock = document.querySelector(`#rock`);
const btnPaper = document.querySelector(`#paper`);
const btnScissor = document.querySelector(`#scissor`);
const btnPlayAgain = document.querySelector(`#play-again`)
const containerChoice = document.querySelector(`#choices`)
//Text
const txtRound = document.querySelector(`#round`);
const txtHumanScore = document.querySelector(`#score_human`);
const txtComputerScore = document.querySelector(`#score_computer`);
const txtResult = document.querySelector(`#result-text`);
//Images
const imgHuman = document.querySelector(`#humChoice`);
const imgComputer = document.querySelector(`#comChoice`);

//SCORE
let playerScore = 0;
let computerScore = 0;
let gameRound = 1;
let computerHand = ``;
let humanHand = ``;

//Enable or Disable Button
function buttonState() {
    console.log(`button state function`)
    if (playerScore === 5 || computerScore === 5) {
        btnRock.style.pointerEvents = "none";
        btnPaper.style.pointerEvents = "none";
        btnScissor.style.pointerEvents = "none";
    } else {
        btnRock.style.pointerEvents = "auto";
        btnPaper.style.pointerEvents = "auto";
        btnScissor.style.pointerEvents = "auto";
    }
}

//Win Function
function win() {
    if (playerScore === computerScore) {
        txtResult.textContent = (`It's a TIE`);
    } else if (playerScore > computerScore) {
        txtResult.textContent = ('you WIN');
    } else {
        txtResult.textContent = ('you LOSE');
    }
    playAgain();
}

//Update Computer Hand Image
function updateComputerHand() {
    let rps = computerHand.toString();
    if (rps === `rock`) {
        imgComputer.setAttribute(`src`, "./images/rock.png");
    } else if (rps === `paper`) {
        imgComputer.setAttribute(`src`, "./images/paper.png");
    } else if (rps === `scissor`) {
        imgComputer.setAttribute(`src`, "./images/scissor.png");
    } else {
        imgComputer.setAttribute(`src`, "./images/star.png");
    }
}

//add Round
function addRound() {
    gameRound++;
    txtRound.textContent = (`Round ${gameRound}`);
}

//Score Update
function scoreUpdate() {
    txtHumanScore.textContent = playerScore;
    txtComputerScore.textContent = computerScore;
}

//Check Score for Winner
function checkWinner() {
    buttonState();
    if ((computerScore == 5 && playerScore < 5) || (computerScore < 5 && playerScore == 5)) {
        console.log(`may winner na`)
        win();
    } else {
        //playRound();
    }

}

function playAgain() {
    console.log(`playAgain?`)
    btnPlayAgain.setAttribute("class", `visible`);
    containerChoice.setAttribute("class", `hide`);
    btnPlayAgain.addEventListener('click', () => {
        reset();
        buttonState();
    });
}

//Button Choice
function chooseHand() {
    buttonState();
    btnRock.addEventListener('click', evt => {
        humanHand = `rock`;
        playRound();

    });
    btnPaper.addEventListener('click', evt => {
        humanHand = `paper`;
        playRound();

    });
    btnScissor.addEventListener('click', evt => {
        humanHand = `scissor`;
        playRound();

    });
}

//Reset Game
function reset() {
    playerScore = 0;
    computerScore = 0;
    gameRound = 1;
    computerHand = ``;
    updateComputerHand();
    txtRound.textContent = (`Round ${gameRound}`);
    txtResult.textContent = (``);
    imgHuman.setAttribute(`src`, "./images/star.png");
    btnPlayAgain.setAttribute("class", `hide`);
    containerChoice.setAttribute("class", `visible`);
    scoreUpdate();
}

//Play Round
function playRound(playerSelection, computerSelection) {
    //Get User Input
    playerSelection = humanHand;
    if (playerSelection === `rock`) {
        imgHuman.setAttribute(`src`, "./images/rock.png");
    } else if (playerSelection === `paper`) {
        imgHuman.setAttribute(`src`, "./images/paper.png");
    } else {
        imgHuman.setAttribute(`src`, "./images/scissor.png");
    }

    //Get Computer Input
    const HandChoice = ["rock", "paper", "scissor"];
    const computerChoice = Math.floor(Math.random() * HandChoice.length);
    computerSelection = HandChoice[computerChoice];
    computerHand = computerSelection;

    //Compare Inputs
    if (playerSelection === computerSelection) {
        txtResult.textContent = `It's a tie!`;
    } else if (playerSelection === `rock`) {
        if (computerSelection === `scissor`) {
            txtResult.textContent = `Rock smashes scissor, you WIN!`
            playerScore++;
        } else {
            txtResult.textContent = `Paper covers rock, you LOSE!`;
            computerScore++;
        }
    } else if (playerSelection === `paper`) {
        if (computerSelection === `rock`) {
            txtResult.textContent = `Paper covers rock, you WIN!`;
            playerScore++;
        } else {
            txtResult.textContent = 'Scissor cuts paper, you LOSE!';
            computerScore++;
        }
    } else if (playerSelection === `scissor`) {
        if (computerSelection === `paper`) {
            txtResult.textContent = 'Scissor cuts paper, you WIN!';
            playerScore++;
        } else {
            txtResult.textContent = 'Rocks smashes scissor, you LOSE!';
            computerScore++;
        }

    }
    addRound();
    updateComputerHand();
    scoreUpdate();
    checkWinner();
}



chooseHand();