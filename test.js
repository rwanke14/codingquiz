var startQuizBtn = document.getElementById("startQuizBtn");
var quizTimer = document.getElementById("quizTimer");
var questions = document.getElementById("questions");
var answers = document.getElementById("answers");
var rightWrong = document.getElementById("rightWrong");
var nextButton = document.createElement ("button");

var timerValue = 60;
var currentIndex = 0;

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

var questionShown = questionDetails[currentIndex];





function startQuiz() {

    questions.innerHTML = questionShown.question;

    var countDown = setInterval(function () {
        timerValue--;
        quizTimer.innerHTML = timerValue;

        if (timerValue === 0) {
            clearInterval(countDown);
        }

    }, 1000);

  

    for (var i = 0; i < questionDetails.length; i++) {

        if (response === questions[i].answer){
            score++;
            rightWrong.textContent = "Correct Answer!";

        } else {
            score--;
            rightWrong.textContent = "Wrong Answer!";
        }
    }
}