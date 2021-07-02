const game =()=>{
    let pScore=0;
    let cScore=0;
    const startGame=()=>{
        const playBtn= document.querySelector(".intro button");
        const introScreen=document.querySelector(".intro");
        const match= document.querySelector(".match");
        const score= document.querySelector(".score");
        const hrline= document.querySelector(".hrline");
        
        playBtn.addEventListener("click",()=>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
            score.classList.add("fadeIn");
            hrline.classList.add("fadeIn");
        });
    };

    //Playing the Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });
    //three options for computer
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //comparing the hands of player and computer
          compareHands(this.textContent, computerChoice);
          //Update Images to respective choices
          playerHand.src = `${this.textContent}.png`;
          computerHand.src = `${computerChoice}.png`;
        }, 2000);
        //Animation for both hands
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Display the result
    const result = document.querySelector(".result");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      result.textContent = "It is a tie";
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        result.textContent = "Player Wins!";
        pScore++;
        updateScore();
        return;
      } else {
        result.textContent = "Computer Wins!";
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        result.textContent = "Computer Wins!";
        cScore++;
        updateScore();
        return;
      } else {
        result.textContent = "Player Wins!";
        pScore++;
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        result.textContent = "Computer Wins!";
        cScore++;
        updateScore();
        return;
      } else {
        result.textContent = "Player Wins!";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  //Is call all the inner function
  startGame();
  playMatch();
};

//start the game function
game();
