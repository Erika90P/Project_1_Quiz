/*-------------------------------- Constants --------------------------------*/
const questions = [ 
{  
    question: "What is the capital of Hungary?", 
    answers: [
        {text: "Budapest", correctAnswer: true },
        {text: "Miskolc", correctAnswer: false },
        
        //image: "https://mavericklodges.com/media/visit-budapest-parlament.jpg"
    ]
},

{  
    question: " What is the capital of Ireland??", 
    answers: [
        {text: "Cork" , correctAnswer: false },
        {text: "Dublin" , correctAnswer: true }


        //image: "https://r7c7u2r3.rocketcdn.me/wp-content/uploads/2019/08/bigstock-Ha-penny-Bridge-Dublin-Irela-298857532.jpg"
    
    ]
},
{
question: " What is the capital of Croatia?", 
answers: [
    {text: "Zagreb" , correctAnswer: true },
    {text: "Zadar" , correctAnswer: false },
    
    //image: "https://www.travellingking.com/wp-content/uploads/2022/12/Zagreb-Aerial-view-on-cathedral-in-Zagreb-city-capital-town-of-Croatia-european-landmarks..jpg"
]
},
{  
question: " What is the capital of Belgium??", 
answers: [
    {text: "Brussels" , correctAnswer: true },
    {text: "Bruges" , correctAnswer: false }

    //image: "https://www.brussels.be/sites/default/files/styles/article_image__hd_/public/Manneken-Pis_1.jpg?itok=Sj9G92Kw"
]
}
]
 const alertMesagge = "Game Over"

// My game have 3 buttons//


const alertMessage = "Game Over"
const questionGame = document.getElementById('question');
const answerButton = document.getElementById('answerButtons');
const nextBtn = document.getElementById('next-btn')


/*---------------------------- Variables (state) ----------------------------*/


let score = 0;
let currentQuestionIndex = 0;

/*-------------------------------- Functions --------------------------------*/

// necesito una funcion que cada vez que presione el btn next me de la opcion de llamar a la pregunta que este conectada con html(inner.text)

function startQuestion() { // con esta funcion estoy empezando a utilizar la pregunta

    currentQuestionIndex = 0 
    score = 0
    nextBtn.innerHTML = "next" 

}
    showQuestion();

function showQuestion() { 
    resetState();

 // reset previos questions and answer 

    let currentQuestion = questions[currentQuestionIndex]; 
    // porque le estoy pidiendo que me de las preguntas contenidas este index
    
    let questionNum = currentQuestionIndex + 1;
    
    // necesito el numero de la pregunta si en index la pregunta es cero va a mostrar la primera, despues la segunda y asi sucesivamente
    
    questionGame.innerHTML = currentQuestion.question; // this is the <h2 id= question del html>
    
    // '.' son para separar el numero de pregunta con la pregunta .

    //necesito crear una funcion que cuando le de click me de las posibles respuestas de la pregunta

    
    
    currentQuestion.answers.forEach(answer => {

        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);
        if(answer.correctAnswer){
            button.dataset.correctAnswer = answer.correctAnswer;
        }
        button.addEventListener('click', selectAnswer);
        // because I need recorrer all posible answer of the question
    });
}

function resetState(){
nextBtn.style.display = 'none';
while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
}
}


function selectAnswer(e){
    const selectedbtn = e.target;
    const isCorrect = selectedbtn.dataset.correctAnswer === 'true'
    if(isCorrect){
        selectedbtn.classList.add('correct');
        score++; 

    }else {
        selectedbtn.classList.add('incorrect');
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correctAnswer === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
        });

        nextBtn.style.display = 'block';
    }
        function showScore(){
            resetState();
            questionGame.innerHTML = `you scored ${score}out of ${questions.length}!`;
            nextBtn.innerHTML = 'Play Again!';
            nextBtn.style.display='block'
        }
        function handleNextbtn() {
            currentQuestionIndex++; // increases the question 
            if (currentQuestionIndex < questions.length){
            showQuestion();

        } else {
            showScore();
        }

    }

    nextBtn.addEventListener('click', ()=>{
        if(currentQuestionIndex < questions.length){
            handleNextbtn();

        }else { 
            startQuestion();
        }        
    });
startQuestion();




//console.log(showQuestion(currentCuestionIndex));



// necesito crear una funcion que cuando le de click me de las posibles respuestas de la pregunta



// necesito crear una funion que cuando selecciones la respuesta incorrecta me salga alerts de "Game Over "
// necesito crear una funcion que al dar click me una alerta si la respuesta es correcta o incorrecta pasando por html y usando conficion if

// necesito crear una funcion