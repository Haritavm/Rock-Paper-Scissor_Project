let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".circle");
const msg = document.querySelector("#msg");
const scoreUser = document.querySelector("#user-score");
const scoreCompt = document.querySelector("#computer-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const showWinner = (userWin, userChoice, comptChoice) => {
    if(userWin){
        userScore++;
        scoreUser.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} defeats ${comptChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        scoreCompt.innerText = compScore;
        msg.innerText = `You Lose! ${comptChoice} defeats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    // console.log("user choice= ", userChoice)
    //generate computer choice
    const comptChoice = genCompChoice();
    // console.log("computer choice = ", comptChoice);

    if(userChoice === comptChoice){
        // console.log("Game Draws!");
        msg.innerText = "Game Draws!. Play again!";    
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor , papper
            userWin =  comptChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            // rock paper
            userWin = comptChoice === "scissors" ? false : true;
        } else {
            userWin = comptChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, comptChoice);
    }
}
choices.forEach((circle) => {
    circle.addEventListener("click", () => {
        const userChoice = circle.getAttribute("id");
        playGame(userChoice)
    })
})
