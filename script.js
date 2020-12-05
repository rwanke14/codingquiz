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


var startQuizBtn = document.getElementById("startQuizBtn");
var quizTimer = document.getElementById("quizTimer");
var questions = document.getElementById("questions");
var answers = document.getElementById("answers");
var rightWrong = document.getElementById("rightWrong");

//var nextButton = document.createElement ("button");

//Set variables with values for later. Timer value and Score value set.
var timerValue = 60;
var score = 0

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

var quesitonIndex = 0
var allQuestions = questionDetails.length

console.log(questionDetails[0]);
console.log(questionDetails[1]);







function startQuiz() {

    questions.innerHTML = questionDetails[0].question;

    var countDown = setInterval(function () {
        timerValue--;
        quizTimer.innerHTML = timerValue;

        if (timerValue === 0) {
            clearInterval(countDown);
        }

    }, 1000);

    var currentChoicesIndex = 0
    
    questionDetails[currentChoicesIndex].choices.forEach(function (item, index) {
        var choiceBtn = document.createElement("button");
        choiceBtn.innerHTML = item;
        answers.appendChild(choiceBtn)
        choiceBtn.addEventListener("click", selectAnswer);
        console.log(choiceBtn)
        allQuestions++

        

    }); 

    //nextQuestion();

}

function selectAnswer () {

    quesitonIndex = 0;

    if (this.value !== questionDetails[quesitonIndex].answer){
        rightWrong.textContent = "Right!";
        
    } 
    
    else {
        rightWrong.textContent = "Wrong!";
    }
    
    allQuestions++
    console.log ("Right!")
        console.log (rightWrong);
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