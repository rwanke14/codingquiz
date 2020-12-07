var startQuizBtn = document.getElementById("startQuizBtn");
var quizTimer = document.getElementById("quizTimer");
var questions = document.getElementById("questions");
var answers = document.getElementById("answers");
var rightWrong = document.getElementById("rightWrong");

//Variables to set the questions to start at the first one (0); start score at 0 and create a variable to get the full quesitonDetails array.
var currentQuestion = 0;
var score = 0;



var questionDetails = [
    {
        question: "What is the color of the sky?",
        choices: ["blue", "green", "yellow", "white"],
        answer: "blue",
    },
    {
        question: "What is does 1+1 equal?",
        choices: ["5", "10", "2", "1"],
        answer: "1",
    },
]

var allQuestions = questionDetails.length;




//questions.innerHTML = questionShown.question;

function quizTimer () {

  var countDown = setInterval(function () {
    timerValue--;
    quizTimer.innerHTML = timerValue;

    if (timerValue === 0) {
        clearInterval(countDown);
    }

}, 1000);  

}



function nextQuestion (questionDetailsIndex) {

   
    questions.innerHTML = questionDetails[0].question;
    
    var questionIndex = questionDetails.length

   questionIndex.choices.forEach(function (item, index) {
        var choiceBtn = document.createElement("button");
        choiceBtn.innerHTML = item;
        answers.appendChild(choiceBtn)
        choiceBtn.addEventListener("click", nextQuestion);
        console.log(choiceBtn)
        questionIndex++

        if (questionDetails === 0) {
            questionDetails[1]
        } else {

        }
    });

}

function startQuiz() {

    //quizTimer();
    nextQuestion();

}

function selectAnswer () {}


startQuizBtn.addEventListener("click", startQuiz);