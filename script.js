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
var nextButton = document.createElement ("button");

var timerValue = 60;
var currentIndex = 0;

var questionDetails = [
    {
        question: "What is the color of the sky?",
        choices: ["blue", "green", "yellow", "white"],
        answer: "blue"
    },
    {
        question: "What is does 1+1 equal?",
        choices: ["5", "10", "2", "1"],
        answer: "1"
    },
]

var questionShown = questionDetails[currentIndex];

//quesitonDetails.forEach(quizQuesitons);

//var questionIndex = questionDetails[questionDetails.length];



function startQuiz() {

    questions.innerHTML = questionDetails[0].question;

    var countDown = setInterval(function () {
        timerValue--;
        quizTimer.innerHTML = timerValue;

        if (timerValue === 0) {
            clearInterval(countDown);
        }

    }, 1000);


    questionShown.choices.forEach(function (item, i) {
        var choiceBtn = document.createElement("button");
        choiceBtn.innerHTML = item;
        answers.appendChild(choiceBtn)
        choiceBtn.addEventListener("click", selectAnswer);
        
        
    });

}

function selectAnswer () {

    

    if (questionDetails[0].choices = "blue") {
        
        rightWrong.textContent = "Correct Answer!"
        
        
    } else {
        rightWrong.textContent = "Wrong Answer!"
        
    }

    nextQuestion();
    

}

function nextQuestion() {

    questions.innerHTML = questionDetails[1].question; 

    questionDetails[1].choices.forEach(function (item, index) {
        var choiceBtn = document.createElement("button");
        choiceBtn.innerHTML = item;
        answers.appendChild(choiceBtn)
    }); 

}

/*answers.addEventListener ("click", function(){
     if (answers === "blue") {
         alert ("correct answer!")
         startQuiz(questionDetails[1].question);

     } else {
         alert("wrong!")

     }

 }) */








function timerCount() {


}

/*
    var liEl1 = questionDetails[0].choices[0]
    var liEl2 = quesitonDetails[0].choices[1]
    var liEl3 = questionDetails[0].choices[2]
    var liEl4 = quesitonDetails[0].choices[3]
    liEl1.createElement("li");
    liEl2.createElement("li");
    liEl3.createElement("li");
    liEl4.createElement("li");
    */

nextButton.addEventListener("click", nextQuestion);
startQuizBtn.addEventListener("click", startQuiz);


/*
answers.addEventListener ("click", function(){
    if (answers !== "blue") {
        alert("wrong!")
        startQuiz();

    } else {
        alert ("correct answer!")
        startQuiz()

    }

})

/*might need a second HTML for logging scores. */