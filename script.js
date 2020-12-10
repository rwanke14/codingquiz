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
var quizArea = document.getElementById("quizArea");
var submitBtn = document.getElementById("button-addon2");
var inputIntials = document.getElementsByTagName("inputBox")
var submitBtn = document.getElementById("button-addon2");
var inputIntials = document.getElementById("inputBox")
var submitBtn = document.getElementById("button-addon2");
var inputIntials = document.getElementById("inputBox")
var highScoresSec = document.getElementById("HighScores");
var correct = document.getElementById("correct");
var wrong = document.getElementById("wrong");
var giphYes = document.getElementById("giphYes");
var giphNo = document.getElementById("giphNo");

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

//hiding questions and timer at the start until start button is selected.
quizArea.style.visibility = "hidden";
quizTimer.style.visibility = "hidden";
submitScore.style.visibility = "hidden";
scoreContainer.style.visibility = "hidden";
highScoresSec.style.visibility = "hidden";
giphNo.style.visibility = "hidden";
giphYes.style.visibility = "hidden";
correct.style.visibility = "hidden";
wrong.style.visibility = "hidden";



//This is my function for looping through the quesitons to be asked in the quiz.

function nextQuestion () {

    //setting up quesiton content.
    var currentQuestion = questionDetails[questionDetailsIndex];
    quizArea.textContent = currentQuestion.question;
    quizArea.style.backgroundColor = "whitesmoke";
    console.log (questionDetails[questionDetailsIndex]);
    var quizUl = document.createElement("ul");
    quizUl.setAttribute("style","list-style-type:none");

    container.style.width = "15px";
    container.style.height = "15px";
    // for loop - loops through questions and choices as user hits the answer.  This is one of the areas I collobrated on with my group mentioned in the readme.

    for (var i = 0; i < currentQuestion.choices.length; i++){


        var liEl = document.createElement("li");
        liEl.setAttribute("data-index", i);
        

        //stylizing the choiceBtn and creating it.
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

        liEl.appendChild(choiceBtn);
        quizUl.appendChild(liEl);
        quizArea.appendChild(quizUl);

        console.log(liEl);

        choiceBtn.addEventListener("click", selectAnswer);
        rightAnswer = currentQuestion.correct;

        console.log(questionDetailsIndex);
        console.log(choiceBtn)
        
    }
    
   
}


//this function determines whether and answer is wrong or right and then either adds to the score or subtracts from it.

function selectAnswer (event) {

    var element = event.target;

    //setting up if/else statement for what happens if you get a question wrong or right.

    if (element.textContent == questionDetails[questionDetailsIndex].answer) {

        score = score + 10;
        timerValue = timerValue + 15;

        correct.style.visibility = "visible";
        giphYes.style.visibility = "visible";
        

        
        setTimeout(function() {
            correct.style.visibility = "hidden";
            giphYes.style.visibility = "hidden";
        }, 2000)


    } else {

        score = score - 5;
        timerValue = timerValue - 15;

        correct.appendChild(wrong);
        rightWrong.appendChild(giphNo);

        wrong.style.visibility = "visible";
        giphNo.style.visibility = "visible";
        

        setTimeout(function() {
            wrong.style.visibility = "hidden";
            giphNo.style.visibility = "hidden";
        }, 2000)
       
        
    } 

    questionDetailsIndex++;
    rightWrong
    //This statement tells the quiz to end either when there are no more questions or the timer has run out. If not nextquestion.

    if (questionDetailsIndex >= questionDetails.length || timerValue <= 0) {

        stopQuiz();

    } else {

        nextQuestion();
    }

}


//This function sets up my submission/end of quiz page. Mostly setting up the elements.

function stopQuiz() {

    timerValue = 0

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
    //container.style.backgroundImage = url("https://mcdn.wallpapersafari.com/small/20/24/H3zFaD.jpg");
    
    scoreContainer.appendChild(imgEl);
    scoreContainer.appendChild(h1El);
    scoreContainer.appendChild(h2El);
    scoreContainer.appendChild(scoreEl);
    hideStart.remove();

    
    submitScores();
    

}

//This function takes effect when the start button is clicked and then mainly sets the timer and the visibility of the HTML that should be hidden or visible.

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

        if (timerValue <= 0) {
            clearInterval(countDown);
        }

    }, 1000);
 
    nextQuestion();

}



//This function creates an event that when the user logs their intials their score and initials are logged into localstorage and then pushed to the high score page.

function submitScores () {

submitBtn.addEventListener("click", function () {
    


    if (inputIntials === null) {
        alert("Please enter initials!")

    } else {

        //Set visibility of sections to switch out containers.
        scoreContainer.style.visibility = "hidden";
        submitScore.style.visibility = "hidden";
        container.style.visibility = "visible";
        scoreContainer.style.height = "15px";
        

        highScoresSec.style.backgroundColor = "lightblue";


        console.log(inputIntials.value)
        
        
        var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

        var inputList = {
            userLog: inputIntials.value,
            score: score,
        }

        highScores.push(inputList)

        console.log (inputList)

 
        localStorage.setItem("highScores", JSON.stringify(highScores));
        

        
        console.log(highScores);
        highScores.push(inputList);

        //Some of the next pieces of code were framed up from a study session I had with my group - see readme for references.
        
        highScores.sort((a, b) => a.score - b.score);
        highScores.reverse()


        for (var i = 0; i < highScores.length; i++){


            var divEl = document.createElement("div");
            var liEl = document.createElement("li");
            liEl.className = "scoreList";
            highScoresSec.appendChild(divEl);
            divEl.appendChild(liEl);
            liEl.textContent = "Intials: " + highScores[i].userLog + " Score: " + highScores[i].score;
            console.log(liEl)
            highScoresSec.style.visibility= "visible";

        }
  
        
    }
    
    

})

}

//event for the start quiz button

startQuizBtn.addEventListener("click", startQuiz);

