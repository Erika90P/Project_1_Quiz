WANDERER

Quiz Game




Description


This project is a quiz game that tests your knowledge of European capitals. You will be presented with a series of questions, each with two answers. Select the correct answer to earn points and see how well you know the capitals of Europe!


Technologies Used

JavaScrip
HTML
CSS

How to Play

Click the "Start" button to begin the game.
Read each question carefully and select the answer you believe is correct.
Click the "Next" button to move on to the next question.
After answering all questions, your final score will be displayed.

Pseudocode Explanation

Constants
questions: An array of objects, each representing a question. Each question object contains the question itself, an array of answer objects (with the text of the answer and whether it's correct), and an image related to the question.

Variables (state)
score: The player's current score.
currentQuestionIndex: The index of the current question being displayed.

Functions
startQuestion: Initializes the game by setting the currentQuestionIndex to 0 and resetting the score to 0. It also sets the innerHTML of the nextBtn to "Next".
showQuestion: Displays the current question and its answers. It resets the state of the answer buttons, sets the question text, and creates buttons for each answer. It also displays the image related to the question.
resetState: Resets the state of the answer buttons by hiding the nextBtn and removing all child elements from the answerButton element.
selectAnswer: Handles the selection of an answer. It checks if the selected answer is correct, updates the score, displays a celebration or sad emoji, disables all answer buttons, and displays the nextBtn.
showScore: Displays the final score and plays a sound effect based on the score. It also changes the innerHTML of the nextBtn to "Play Again" and displays it.
handleNextbtn: Handles the "Next" button click. It increases the currentQuestionIndex and checks if there are more questions to show or if the game is over.