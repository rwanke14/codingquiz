var startQuizBtn = document.getElementById("startQuizBtn");
var quizTimer = document.getElementById("quizTimer");
var questions = document.getElementById("questions");
var answers = document.getElementById("answers");
var rightWrong = document.getElementById("rightWrong");

var currentQuestion = 0;
var score = 0;
var allQuestions = questionDetails.length;


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



function startQuiz() {

    quizTimer();
    numofQuest = 0
    score = 0
    allQuestions = [...questionDetails];
    nextQuestion();

}


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


function nextQuesiton (questionDetailsIndex) {

    //include score details && local storage information goes in here or create another function.

    var getQuestion = questionDetails[questionDetailsIndex];
    questions.textContent = (questionDetailsIndex + 1) + '. ' + getQuestion.question;

    questionDetails[questionDetailsIndex].choices.forEach(function (item, index) {
        var choiceBtn = document.createElement("button");
        choiceBtn.innerHTML = item;
        answers.appendChild(choiceBtn)
        choiceBtn.addEventListener("click", selectAnswer);
        console.log(choiceBtn)
        allQuestions++});


}

function selectAnswer () {}

startQuizBtn.addEventListener("click", startQuiz);