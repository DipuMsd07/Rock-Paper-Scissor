const game = () => {
  let pScore = 0;
  let cScore = 0;
  const winner = document.querySelector(".winner");
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    const computerOptions = ["rock", "paper", "scissor"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        const playerChoice = this.textContent;

        setTimeout(() => {
          compareHands(playerChoice, computerChoice);
          updateScore();
          playerHand.src = `img/${playerChoice}.png`;
          computerHand.src = `img/${computerChoice}.png`;
        }, 2000);

        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";

      if(pScore == 3 || cScore == 3)
      {
        if(pScore == 3)
        {
          winner.textContent = "Player Wins the 3 Round Game";
          pScore = 0;
        }
        else if(cScore == 3)
        {
          winner.textContent = "Computer Wins the 3 Round Game";
          pScore = 0;
          cScore = 0;
          cScore = 0;
        }
        console.log(pScore);
        console.log(cScore);
        game();
      }
      });
    });

    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.innerHTML = pScore;
      computerScore.innerHTML = cScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
      // FOR SAME CHOICE
      if (playerChoice == computerChoice) {
        winner.textContent = "It's Draw Play Again";
        return;
      }

      // FOR ROCK AS CHOICE
      if (playerChoice == "rock" && computerChoice == "scissor") {
        winner.textContent = "Player Wins!!!";
        pScore += 1;
        return;
      } else if (playerChoice == "scissor" && computerChoice == "rock") {
        winner.textContent = "Computer Wins!!!";
        cScore += 1;
        return;
      }
      // FOR PAPER AS CHOICE
      if (playerChoice == "paper" && computerChoice == "rock") {
        winner.textContent = "Player Wins!!!";
        pScore += 1;
        return;
      } else if (playerChoice == "rock" && computerChoice == "paper") {
        winner.textContent = "Computer Wins!!!";
        cScore += 1;
        return;
      }
      // FOR SCISSOR AS CHOICE
      if (playerChoice == "scissor" && computerChoice == "paper") {
        winner.textContent = "Player Wins!!!";
        pScore += 1;
        return;
      } else if (playerChoice == "paper" && computerChoice == "scissor") {
        winner.textContent = "Computer Wins!!!";
        cScore += 1;
        return;
      }
    };
  };
  startGame();
  playMatch();
};
game();