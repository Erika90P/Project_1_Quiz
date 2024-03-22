/* My logic

* Set constantes and variables.
* Create a function that every time the btn next is pressed calls the question that is connected to the html (inner.text).
* Create a function to display the questions.
* Create a function to reset the question and answer.
* Creat a function to see the score.




/*-------------------------------- Constants --------------------------------*/
const questions = [
    {
        question: "What is the capital of Hungary?",
        answers: [
            { text: "Budapest", correctAnswer: true },
            { text: "Miskolc", correctAnswer: false }

        ],

        image: "https://mavericklodges.com/media/visit-budapest-parlament.jpg"
    },

    {
        question: " What is the capital of Ireland??",
        answers: [
            { text: "Cork", correctAnswer: false },
            { text: "Dublin", correctAnswer: true }

        ],

        image: "https://r7c7u2r3.rocketcdn.me/wp-content/uploads/2019/08/bigstock-Ha-penny-Bridge-Dublin-Irela-298857532.jpg"
    },
    {
        question: " What is the capital of Slovenia??",
        answers: [
            { text: "Maribor", correctAnswer: false },
            { text: "Ljubljana", correctAnswer: true }

        ],

        image: "https://cdn.britannica.com/68/93068-050-E7C71026/Ljubljana-Ljubljanica-River-Slovenia.jpg"
    },
    {
        question: " What is the capital of Croatia?",
        answers: [
            { text: "Zagreb", correctAnswer: true },
            { text: "Zadar", correctAnswer: false }

        ],
        image: "https://www.travellingking.com/wp-content/uploads/2022/12/Zagreb-Aerial-view-on-cathedral-in-Zagreb-city-capital-town-of-Croatia-european-landmarks..jpg"
    },
    {
        question: " What is the capital of Poland?",
        answers: [
            { text: "Warsaw", correctAnswer: true },
            { text: "Lublin", correctAnswer: false }

        ],
        image: "https://www.worldatlas.com/r/w960-q80/upload/b8/7e/7b/shutterstock-190990370.jpg"
    },
    {
        question: " What is the capital of Latvia?",
        answers: [
            { text: "Jūrmala", correctAnswer: false },
            { text: "Riga", correctAnswer: true }

        ],

        image: "https://upload.wikimedia.org/wikipedia/commons/6/61/Riga_Latvia_City_View_%28262449009%29.jpeg"
    },
    {
        question: " What is the capital of Luxembourg?",
        answers: [
            { text: "Diekirch", correctAnswer: false },
            { text: "Luxembourg City", correctAnswer: true }

        ],

        image: "https://www.luxembourg-city.com/thumbs/0827faa0-1f55-11eb-a4c6-7103ad98fc41.webp"
    },
    {
        question: " What is the capital of Belgium??",
        answers: [
            { text: "Brussels", correctAnswer: true },
            { text: "Bruges", correctAnswer: false }

        ],
        image: "https://www.brussels.be/sites/default/files/styles/article_image__hd_/public/Manneken-Pis_1.jpg?itok=Sj9G92Kw"
    }
]

// DOM elements//

const questionGame = document.getElementById('question');
const pictureDiv = document.getElementById('picture')
const answerButton = document.getElementById('answerButtons');
const nextBtn = document.getElementById('next-btn')
const defeatSound = document.getElementById('defeat');
const victorySound = document.getElementById('victory-sound');









/*---------------------------- Variables (state) ----------------------------*/

let score = 0;
let currentQuestionIndex = 0;

/*-------------------------------- Functions --------------------------------*/

// function to start the game 

function startQuestion() { 
    currentQuestionIndex = 0
    score = 0
    nextBtn.innerHTML = "Next"
}

// function to show the questions

showQuestion();

function showQuestion() {
    resetState();

    // reset previos questions and answer 

    let currentQuestion = questions[currentQuestionIndex]; //request index questions
    questionGame.innerHTML = currentQuestion.question; // this is the <h2 id= question del html>


    // In this function, the code dynamically creates HTML elements to display the question's image and answer buttons in the game.

    const imageElement = document.createElement('img');     
    imageElement.src = currentQuestion.image;
    imageElement.classList.add('question-image');
    answerButton.appendChild(imageElement);

    currentQuestion.answers.forEach(answer => {

        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);
        if (answer.correctAnswer) {
            button.dataset.correctAnswer = answer.correctAnswer;
        }
        button.addEventListener('click', selectAnswer);  //go through all the possible answers to the questions
    });
}
 // Function to reset the state of the response buttons

function resetState() {
    nextBtn.style.display = 'none';
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

// Function to handle the selection of an answer

//This function selectAnswer is triggered when a user clicks on one of the answer buttons. It handles the logic for checking if the selected answer is correct or incorrect, updates the score accordingly, provides visual feedback to the user (celebration emoji for correct answers and sad emoji for incorrect answers), disables all answer buttons once an answer is selected, and displays the "Next" button (nextBtn) to allow the user to proceed to the next question.

function selectAnswer(e) {
    const selectedbtn = e.target;
    const isCorrect = selectedbtn.dataset.correctAnswer === 'true'

    if (isCorrect) {
        selectedbtn.classList.add('correct');
        score++;

        const celebrationEmoji = document.createElement('span');
        celebrationEmoji.innerHTML = ' 🎉🎉🎉 ';
        celebrationEmoji.classList.add('celebration-emoji');
        selectedbtn.appendChild(celebrationEmoji);

    } else {
        selectedbtn.classList.add('incorrect');

        const sadEmoji = document.createElement('span');
        sadEmoji.innerHTML = ' 😢😢😢 ';
        sadEmoji.classList.add('sad-emoji');
        selectedbtn.appendChild(sadEmoji);
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correctAnswer === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });

    nextBtn.style.display = 'block';
}



//Function to display the final score and play the corresponding sound

function showScore() {
    resetState();

    questionGame.innerHTML = `You scored ${score} out of ${questions.length}!`;

    if (score < 5){
        const defeatSound = document.getElementById('defeat');
        defeatSound.play();
        const sadEmoji = document.createElement('span');
        sadEmoji.innerHTML = '😭😭😭 ';
        sadEmoji.classList.add('sad-emoji');
        questionGame.appendChild(sadEmoji);
    
        

    } else {
        const victorySound = document.getElementById('victory-sound');
        victorySound.play();
        const celebrationEmoji = document.createElement('span');
        celebrationEmoji.innerHTML = ' 🎉🎉🎉 ';
        celebrationEmoji.classList.add('celebration-emoji');
        questionGame.appendChild(celebrationEmoji);
        

    };

    nextBtn.innerHTML = 'Play Again'
    nextBtn.style.display = 'none'; // Oculta el botón "Next"
    nextBtn.style.display = 'block'
}


//Function to handle the "Next" button

function handleNextbtn() {
    currentQuestionIndex++; // increases the question 
    if (currentQuestionIndex < questions.length) {
        showQuestion();

    } else {
        showScore();
        cancelAnimationFrame(animationId);
    };
};

// Event listener for the botton "Next"

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        console.log('questions.length, ', questions.length)
        handleNextbtn();
        console.log('this handleNextbtn function is being executed')
    } else {
        startQuestion();
        currentQuestionIndex = -1 
        console.log('this startquestion function is being executed')
    }
});

