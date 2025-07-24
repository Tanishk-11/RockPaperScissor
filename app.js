let userScore=0;
let computerScore=0;

const choices= document.querySelectorAll(".choice");

const options = ["rock", "paper", "scissors"];
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
};


const drawGame=()=>{
    msg.textContent = "It's a draw!";
}


const playGame=(userChoice)=>{
    console.log("User choice:", userChoice);
    const compChoice=genCompChoice();
    console.log("Computer choice:", compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin= true;
        if(userChoice=== "rock" && compChoice==="paper"){
            userWin= false;
        }
        else if(userChoice=== "paper" && compChoice==="scissors"){
            userWin= false;
        }
        else if(userChoice=== "scissors" && compChoice==="rock"){
            userWin= false;
        }
        if (userWin) {
    userScore++;
    userScorePara.textContent = userScore;
    msg.textContent = `You win! ${userChoice} beats ${compChoice}`;
} 
    else {
    computerScore++;
    compScorePara.textContent = computerScore;
    msg.textContent = `You lose! ${compChoice} beats ${userChoice}`;
}

    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id;
        playGame(userChoice);
    });
});
