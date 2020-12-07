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

//set variables to grab later on down the road from the HTML.
var hideStart = document.getElementById("hideJumbotron");
var startQuizBtn = document.getElementById("startQuizBtn");
var quizTimer = document.getElementById("quizTimer");
var questCard = document.getElementById("questionCard");
var rightWrong = document.getElementById("rightWrong");


//set quesiton array, choices, and answers.

var questionDetails = [
    {
        question: "How would the doctor describe time?",
        choices: [
            "“People assume that time is a strict progression of cause to effect, but actually from a non-linear, non-subjective viewpoint – it’s more like a big ball of wibbly-wobbly time-y wimey stuff.”", 
            "Physicists define time as the progression of events from the past to the present into the future."                , 
            "Time can be considered to be the fourth dimension of reality, used to describe events in three-dimensional space.", 
            "“There’s something that doesn’t make sense. Let’s go and poke it with a stick.”"                                  ],
        answer: "“People assume that time is a strict progression of cause to effect, but actually from a non-linear, non-subjective viewpoint – it’s more like a big ball of wibbly-wobbly time-y wimey stuff.”",
    },
    {
        question: "What is does 1+1 equal?",
        choices: ["5", "10", "2", "1"],
        answer: "1",
    },
]

//set values.
var questionDetailsIndex = 0;
var rightAnswer = "";
//var stopQuest = questionDetails[1].choices;
var score = "";
var timerValue = 120;

//hiding questions and timer at the start until start button is selected.
//questCard.style.visibility = "hidden";
//quizTimer.style.visibility = "hidden";



//var choiceBtn = document.createElement("button");
//var currentQuestion = questionDetails[questionDetailsIndex];

function nextQuestion () {

    var currentQuestion = questionDetails[questionDetailsIndex];
    questCard.textContent = currentQuestion.question;
    console.log (questionDetails[questionDetailsIndex]);

    for (var i = 0; i < currentQuestion.choices.length; i++){


        var liEl = document.createElement("li");
        liEl.setAttribute("data-index", i);
        


        var choiceBtn = document.createElement("button");
        choiceBtn.style.color = "whitesmoke";
        choiceBtn.style.backgroundColor = "darkblue";
        choiceBtn.style.borderRadius = ".25rem";
        choiceBtn.style.width = "80%";
        choiceBtn.style.height = "30%";
        choiceBtn.style.margin = "2%";
        choiceBtn.style.textAlign = "left";
        choiceBtn.style.opacity = "100%";
        choiceBtn.textContent = currentQuestion.choices[i];
        
        //choiceBtn.style.borderRadius = "10%";

        
        
        liEl.appendChild(choiceBtn);
        questCard.appendChild(liEl);

        console.log(liEl);

        choiceBtn.addEventListener("click", selectAnswer);
        rightAnswer = currentQuestion.correct;

        console.log(questionDetailsIndex);
        console.log(choiceBtn)
        
    }
    
   
}

function selectAnswer (event) {

    var element = event.target;

    if (element.textContent == questionDetails[questionDetailsIndex].answer) {

        score++;
        timerValue + 15;
        rightWrong.textContent = "Correct Answer! Gain 15 seconds!";
        //add gif here of fez doctor

    } else {

        timerValue - 15;
        rightWrong.textContent = "Wrong Answer, loose 15 seconds!";

    } 

    questionDetailsIndex++;

    if (questionDetailsIndex >= questionDetails.length) {

        stopQuiz();
        

    } if (timerValue === 0) {
        
        stopQuiz();

    } else {

        nextQuestion();
    }
    /*
    if (currentQuestion.answer === true && questionDetailsIndex < 1) {
        ++score;
        console.log(score);
        
        localStorage.setItem("score", JSON.stringify(score));
        questionDetailsIndex++;
    } if (currentQuestion.answer === false && questionDetailsIndex < 1){
        score - 5;
        console.log(score);
        questionDetailsIndex++;
    } else {
        stopQuiz();
    } */
    
    

}

function stopQuiz() {

    

}

function startQuiz() {

    //quizTimer.style.visibility = "visible";
    //questCard.style.visibility = "visible";
    //hideStart.style.display = "none";

    var countDown = setInterval(function () {
        timerValue--;
        quizTimer.innerHTML = timerValue;

        if (timerValue === 0) {
            clearInterval(countDown);
        }

    }, 1000);
 
    nextQuestion();

}




//choiceBtn.addEventListener("click", selectAnswer);
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