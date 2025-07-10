// Initialize user and computer scores to zero
let userScore = 0;
let compScore = 0;

// Select all elements with the class 'choice' and store them in the 'choices' NodeList
const choices = document.querySelectorAll(".choice");

// Select the element with id 'msg' to display messages to the user
const msg = document.querySelector("#msg");

// Select the paragraph element that will display the user's score
const userScorePara = document.querySelector("#user-score");

// Select the paragraph element that will display the computer's score
const compScorePara = document.querySelector("#comp-score");

// Function to generate a random choice for the computer
const genCompChoice = () => {
  // Array of possible choices
  const options = ["rock", "paper", "scissors"];
  // Generate a random index between 0 and 2
  const randIdx = Math.floor(Math.random() * 3);
  // Return the computer's choice based on the random index
  return options[randIdx];
};

// Function to handle a draw game scenario
const drawGame = () => {
  // Set the message text to indicate a draw
  msg.innerText = "Game was Draw. Play again.";
  // Change the background color of the message to indicate a neutral result
  msg.style.backgroundColor = "#081b31";
};

// Function to show the winner and update scores accordingly
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    // Increment the user's score if the user wins
    userScore++;
    // Update the displayed user's score
    userScorePara.innerText = userScore;
    // Set the message text to indicate the user won and display the choices
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    // Change the background color of the message to green for a win
    msg.style.backgroundColor = "green";
  } else {
    // Increment the computer's score if the user loses
    compScore++;
    // Update the displayed computer's score
    compScorePara.innerText = compScore;
    // Set the message text to indicate the user lost and display the choices
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    // Change the background color of the message to red for a loss
    msg.style.backgroundColor = "red";
  }
};

// Function to play the game with the user's choice
const playGame = (userChoice) => {
  // Generate the computer's choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    // If choices are the same, it's a draw
    drawGame();
  } else {
    // Determine if the user wins or loses
    let userWin = true;
    if (userChoice === "rock") {
      // Rock loses to paper, wins against scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // Paper loses to scissors, wins against rock
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // Scissors lose to rock, win against paper
      userWin = compChoice === "rock" ? false : true;
    }
    // Show the result of the game
    showWinner(userWin, userChoice, compChoice);
  }
};

// Add click event listeners to each choice element
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    // Get the user's choice based on the clicked element's id
    const userChoice = choice.getAttribute("id");
    // Play the game with the selected user choice
    playGame(userChoice);
  });
});