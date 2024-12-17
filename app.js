let userscore = 0;
let compscore = 0;
let choices = document.querySelectorAll(".choice");
let playerimg = document.querySelector("#userchooseimg");
let compimg = document.querySelector("#compchooseimg");
let msg = document.querySelector("#winner");
let result = document.querySelector(".result");
let playagain = document.querySelector("#playagain");
let playerScore = document.querySelector("#user-score");
let computerScore = document.querySelector("#comp-score");

const images = {
  rock: "rock.png",
  paper: "paper.png",
  scissor: "scissors.png",
};
const gencompchoice = () => {
  const option = ["rock", "paper", "scissor"];
  const ranidx = Math.floor(Math.random() * 3);
  return option[ranidx];
};
const drawgame = () => {
  msg.innerText = "The game is draw";
  console.log("the game is draw");
};
const wingame = (userwin) => {
  if (userwin == true) {
    userscore++;
    playerScore.innerText = userscore;
    winner.innerText = "congratulation , you win";
  } else {
    compscore++;
    computerScore.innerText = compscore;
    winner.innerText = "you loss";
  }
};
const playgame = (playerChoice) => {
  console.log(playerChoice);
  let compChoice = gencompchoice();
  console.log(compChoice);
  if (playerChoice === compChoice) {
    drawgame();
  } else {
    let userwin = true;
    if (playerChoice === "paper") {
      userwin = compChoice === "scissor" ? false : true;
    } else if (playerChoice === "scissor") {
      userwin = compChoice === "rock" ? false : true;
    } else {
      userwin = compChoice === "paper" ? false : true;
    }
    wingame(userwin);
  }
  playerimg.src = images[playerChoice];
  compimg.src = images[compChoice];
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const playerChoice = choice.getAttribute("id");
    playgame(playerChoice);
    result.classList.remove("hide");
  });
});
playagain.addEventListener("click", () => {
  result.classList.add("hide");
});
