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
var hideStart = document.getElementById("jumbotron");
var startQuizBtn = document.getElementById("startQuizBtn");
var quizTimer = document.getElementById("quizTimer");
var rightWrong = document.getElementById("rightWrong");
var quizTitle = document.getElementById("h1El");
var para1Jumbo = document.getElementById("p1Text");
var para2Jumbo = document.getElementById("p2Text");
var container = document.getElementById("container");
var submitScore = document.getElementById("submitScore");
var scoreContainer = document.getElementById("scoreDetails");
var quizArea = document.getElementById("quizArea");
var submitBtn = document.getElementById("button-addon2");
var inputIntials = document.getElementsByTagName("inputBox")

//set quesiton array, choices, and answers.

var questionDetails = [
    {
        question: "How would the doctor describe time?",
        choices: [
            "It’s more like a big ball of wibbly-wobbly time-y wimey stuff.", 
            "Physicists define time as the progression of events.          ", 
            "Time can be considered to be the fourth dimension of reality. ", 
            "There’s always something to look at if you open your eyes!    "],
        answer: "It’s more like a big ball of wibbly-wobbly time-y wimey stuff.",
    },
    {
        question: "After regenerating what was the first food the eleventh doctor ate?",
        choices: ["Banana Pudding", "Fish Custard", "Hamburger", "Jello"],
        answer: "Fish Custard",
    },
    {
        question: "What episode is this quote from? Don’t blink. Don’t even blink. Blink and you’re dead. Don’t turn your back. Don’t look away. And don’t blink.",
        choices: ["Season 7, Episode 10", "Season 5, Episode 5", "Season 3, Episode 10", "Season 5, Episode 4 "],
        answer: "Season 3, Episode 10",
    },
    {
        question: "Which doctor had the rule of Rule 1: The Doctors Lies!",
        choices: ["Ninth Doctor", "Eleventh Doctor", "Twelfth Doctor", "Tenth Doctor"],
        answer: "Eleventh Doctor",

    },
    {
        question: "What year did Doctor Who first air on televison?",
        choices: ["1963", "1989", "2005", "1972"],
        answer: "1963",
    },
    {
        question: "Which enemy in Doctor Who says Exterminate?",
        choices: ["Weeping Angels", "Cybermen", "Daleks", "Zygons"],
        answer: "Daleks",

    }

]

//set values.
var questionDetailsIndex = 0;
var rightAnswer = "";

//var stopQuest = questionDetails[1].choices;
var score = 0;
var timerValue = 60;
var wrongQuest = 5;
var correctQuest = 10;

//hiding questions and timer at the start until start button is selected.
quizArea.style.visibility = "hidden";
quizTimer.style.visibility = "hidden";
submitScore.style.visibility = "hidden";
scoreContainer.style.visibility = "hidden";
//highScoreList.style.visibility = "visible";
//highScoresSec.style.visibility = "visible";



function nextQuestion () {

    var currentQuestion = questionDetails[questionDetailsIndex];
    quizArea.textContent = currentQuestion.question;
    quizArea.style.backgroundColor = "whitesmoke";
    console.log (questionDetails[questionDetailsIndex]);

    for (var i = 0; i < currentQuestion.choices.length; i++){


        var liEl = document.createElement("li");
        liEl.setAttribute("data-index", i);
        


        var choiceBtn = document.createElement("button");
        choiceBtn.style.color = "whitesmoke";
        choiceBtn.style.backgroundColor = "darkblue";
        choiceBtn.style.borderRadius = ".25rem";
        choiceBtn.style.width = "60%";
        choiceBtn.style.height = "30%";
        choiceBtn.style.margin = "2%";
        choiceBtn.style.textAlign = "left";
        choiceBtn.style.opacity = "100%";
        choiceBtn.style.fontSize = "1rem"
        choiceBtn.style.fontFamily = "'Fira Sans', sans-serif"
        choiceBtn.style.padding = "2%"
        choiceBtn.textContent = currentQuestion.choices[i];
        
        //choiceBtn.style.borderRadius = "10%";

        
        
        liEl.appendChild(choiceBtn);
        quizArea.appendChild(liEl);

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

        score = score + 10;
        rightWrong.textContent = "Correct Answer! Gain 15 seconds!";
        //add gif here of fez doctor
        console.log(score)

    } else {
        score = score - 5;
        timerValue = timerValue - 15;
        
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

}

function stopQuiz() {

    quizTimer.style.visibility = "hidden";
    quizArea.style.visibility = "hidden";

    var imgEl = document.createElement ("img");
    imgEl.setAttribute("src", "https://media1.tenor.com/images/8a63ed5cc169b8df24f0d9f2125e69ca/tenor.gif?itemid=14827556")
    imgEl.style.margin = "10%";

    var h1El = document.createElement ("h1");
    h1El.textContent = "Everything has it's time and everything ends.";
    var h2El = document.createElement ("h2");
    h2El.textContent = "Quiz Over!"
    var scoreEl = document.createElement ("h2");
    scoreEl.textContent = "You got a score of " + score + "!"
    var enterEl = document.createElement ("h2");
    enterEl.textContent = "Please enter your intitials below to submit your score!"
    enterEl.style.marginBottom = "20%"

    
    scoreContainer.style.visibility = "visible";
    submitScore.style.visibility = "visible";
    container.style.visibility = "visible";
    container.style.backgroundImage = "https://mcdn.wallpapersafari.com/small/20/24/H3zFaD.jpg"
    
    scoreContainer.appendChild(imgEl);
    scoreContainer.appendChild(h1El);
    scoreContainer.appendChild(h2El);
    scoreContainer.appendChild(scoreEl);
    hideStart.remove();

    
    submitScores();
    

}

function startQuiz() {

    quizTimer.style.visibility = "visible";
    quizArea.style.visibility = "visible";


    quizTitle.style.visibility = "hidden";
    para1Jumbo.style.visibility = "hidden";
    para2Jumbo.style.visibility = "hidden";
    startQuizBtn.style.visibility = "hidden";
    container.style.visibility = "hidden";
    hideStart.style.visibility = "hidden";

    var countDown = setInterval(function () {
        timerValue--;
        quizTimer.innerHTML = timerValue;

        if (timerValue === 0) {
            clearInterval(countDown);
        }

    }, 1000);
 
    nextQuestion();

}



// variables for highscores portion.

var gameScores = [];
var pastGames = [];
console.log (gameScores)
console.log (pastGames)

//storing high scores



var submitBtn = document.getElementById("button-addon2");
var inputIntials = document.getElementsByTagName("inputBox")
var highScoresSec = document.getElementById("HighScores");
var highScoreList = document.getElementById("highScoreList");
var scoreList = document.getElementById("orderedScores");
var highScores = [];

function submitScores () {

submitBtn.addEventListener("click", function () {
    
    if (inputIntials === null) {
        alert("Please enter initials!")

    } else {

        //Set visibility of sections to switch out containers.
        scoreContainer.style.visibility = "hidden";
        submitScore.style.visibility = "hidden";
        container.style.visibility = "visible";
        //highScoreList.style.visibility = "visible";
        //highScoresSec.style.visibility = "visible";
        highScoresSec.style.backgroundColor = "lightblue";
        
        var inputList = {
            userLog: inputIntials.value,
            score: score,
        }

        console.log (inputList)

        var oldScores = JSON.parse(localStorage.getItem("highScores"));
        console.log (oldScores)

        var userScore = JSON.parse(localStorage.setItem("highScores"));
        userScore.sort((a,b) => a.score - b.score);

        console.log(userScore);

        for (var i = 0; i < highScores.length; i++){
            var liEl = document.createElement("li");
            liEl.appendChild("scoreList");
            liEl.textContent = inputList;

        }
  

    }
    
    

})

}


startQuizBtn.addEventListener("click", startQuiz);

