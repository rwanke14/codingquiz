/*
```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

*/

var hideJumbotron = document.getElementById ("container");
var startQuizBtn = document.getElementById("startQuizBtn");
var quizTimer = document.getElementById("quizTimer");
var questions = document.getElementById("questions");
var answers = document.getElementById("answers");
var rightWrong = document.getElementById("rightWrong");
var quizContent = document.getElementsByClassName("card");
var currentChoicesIndex = 0

//var nextButton = document.createElement ("button");

//Set variables with values for later. Timer value and Score value set.
var timerValue = 150;
var score = 0;
var questionIndex = 0;
var quizAnswers = "";
//var endQuest = questionDetails[1].choices;



var questionDetails = [
    {
        question: "What is the color of the sky?",
        choices: ["blue", "green", "yellow", "white"],
        answer: "blue"
    },
    {
        question: "What is does 1+1 equal?",
        choices: ["5", "10", "2", "1"],
        answer: "1",
    },
]






//var choiceBtn = document.createElement("button");



function nextQuestion () {

    var currentQuestion = questionDetails[questionIndex];
    currentQuestion.answer;
    questions.textContent = currentQuestion.question;
    answers.textContent 
    

    for ( var i = 0 < currentQuestion.choices.length; i++;){

        var choiceBtn = document.createElement("button");
        answers.textContent = currentQuestion.choices[i];
        answers.appendChild(choiceBtn)
        //choiceBtn.addEventListener("click", selectAnswer);
        if (i === 1){
            break;
        }
    }
    console.log(currentQuestion);
    console.log(currentQuestion);
console.log(currentQuestion.answer);
console.log(questionIndex)
}

console.log (questions);
function startQuiz() {

    questions.innerHTML = questionDetails[0].question;

    var countDown = setInterval(function () {
        timerValue--;
        quizTimer.innerHTML = timerValue;

        if (timerValue === 0) {
            clearInterval(countDown);
        }

    }, 1000);

    

    nextQuestion();
    
}




startQuizBtn.addEventListener("click", startQuiz);









//function endQuiz (){

    //var clear = document.getElementsByTagName("body");
    //clear.createElement("jumbotron jumbotron-fluid");
    


//}
/*
function nextQuestion() {

    
}

/*answers.addEventListener ("click", function(){
     if (answers === "blue") {
         alert ("correct answer!")
         startQuiz(questionDetails[1].question);

     } else {
         alert("wrong!")

     }

 }) 


var replaceQuestion = document.getElementById ("questions");
    replaceQuestion.replaceChild (questionDetails)


    questions.innerHTML = questionDetails[1].question; 

    questionDetails[1].choices.forEach(function (item, index) {
        var choiceBtn = document.createElement("button");
        choiceBtn.innerHTML = item;
        answers.appendChild(choiceBtn)
    });





function timerCount() {


}


//nextButton.addEventListener("click", nextQuestion);
startQuizBtn.addEventListener("click", startQuiz);




/*might need a second HTML for logging scores. */