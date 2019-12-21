
var startEl = document.getElementById("start");
var quizEl = document.getElementById("quiz");
var questionEl = document.getElementById("question");
// var choice1 = document.getElementById("A");
// var choice2 = document.getElementById("B");
// var choice3 = document.getElementById("C");
// var choice4 = document.getElementById("D");
var counterEl = document.getElementById("counter");
var scoreCount = document.getElementById("score");
var h1Tag = document.getElementById("title");
var pTag = document.getElementById("rule");
var time = 100;
var timerElement = document.getElementById('timer');
var questionsIndex = 0;
var buttonEl = document.getElementById('choices');
var button1 = document.getElementById('choice1');
var button2 = document.getElementById('choice2');
var button3 = document.getElementById('choice3');
var button4 = document.getElementById('choice4');
var choicesIndex = 0;




// startEl.addEventListener("click", startQuiz);

function timer() {
    // Decrement time variable by 1
    --time;
    // Update HTML dom
    timerElement.innerHTML = time;

    // If time ever reaches 0, end the game
    if (time === 0) {
        gameOver();
    }
}

function gameOver() {

    // This function runs when the timer hits 0
    // This function runs when the Array of questions = 0; 
    // AKA when you are out of questions to ask
    // Score screen
}

function validateAnswer(choice) {
    // choice=0



    //choice=0,1,2,3
    if (choice===questions[questionsIndex-1].correct){
        alert("dffgfg");
    };
    // Check if the button they clicked is the answer
    // If not, subtract 10 seconds from time
    // Run this each time they click a button
}

function generateQuestion() {

    // TitleElement.innerHTML = '';
    // ButtonEl.innerHTML = '';

    // Create new question title
    // Iterate through question choices
    // Create button for each choice
    // LOOP 
    // Create button variable
    // Add class attribute = 'question-buttons'
    // Add class attribute to each button, responding to their text
    // Add text content to each button
    button1.innerHTML = questions[questionsIndex].choices[0];
    button2.innerHTML = questions[questionsIndex].choices[1];
    button3.innerHTML = questions[questionsIndex].choices[2];
    button4.innerHTML = questions[questionsIndex].choices[3];

    // Add this.addEventListener('click', generateQuestions);
    // Append button to button element DIV

    startEl.style.display = "none";
    h1Tag.style.display = "none";
    pTag.style.display = "none";
    questionEl.style.display = "block";
    buttonEl.style.display= "block";
   

    // bootstrap class hide/show

    questionEl.innerHTML = questions[questionsIndex].question;

    ++questionsIndex;
}

function startQuiz() {

    //Set each element class = 'hide';

    //Set questions elements class = 'show';

    // Start the countdown
    setInterval(timer, 1000);

    // Run generate question function
    generateQuestion();
}





