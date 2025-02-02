# Rock-Paper-Scissor_Project
This JavaScript file implements the logic for a Rock-Paper-Scissors game. Here's a breakdown of the key components:

Variables:

userScore: Tracks the user's score.
compScore: Tracks the computer's score.
DOM Elements:

choices: Selects all elements with the class "circle" (presumably the buttons for rock, paper, and scissors).
msg: Selects the element with the ID "msg" to display game messages.
scoreUser: Selects the element with the ID "user-score" to display the user's score.
scoreCompt: Selects the element with the ID "computer-score" to display the computer's score.
Functions:

genCompChoice: Generates a random choice for the computer from the options "rock", "paper", and "scissors".
showWinner: Updates the scores and displays a message indicating whether the user won or lost the round.
playGame: Handles the game logic when the user makes a choice. It generates the computer's choice, compares it with the user's choice, and updates the game state accordingly.
Game Logic:

The game compares the user's choice with the computer's choice.
If the choices are the same, it declares a draw.
If the user's choice beats the computer's choice, it increments the user's score and displays a winning message.
If the computer's choice beats the user's choice, it increments the computer's score and displays a losing message.
