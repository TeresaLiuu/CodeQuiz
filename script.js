
var startEl = document.getElementById('start');
var quizEl = document.getElementById('quiz');
var questionEl = document.getElementById('question');
var counterEl = document.getElementById('counter');
var scoreCount = document.getElementById('score');
var h1Tag = document.getElementById('title');
var pTag = document.getElementById('rule');
var timerEl = document.getElementById('timer');
var buttonEl = document.getElementById('choices');
var button1 = document.getElementById('choice1');
var button2 = document.getElementById('choice2');
var button3 = document.getElementById('choice3');
var button4 = document.getElementById('choice4');
var showAns = document.getElementById('result');
var enterName = document.getElementById('enterName');
var submitBttn = document.getElementById('submitBttn');
var choicesIndex = 0;
var questionsIndex = 0;
var time = questions.length * 15;
var timeInterval;
var nameInput = document.getElementById('nameInput');

function timer() {
    --time;
    timerEl.innerHTML = 'Timer:' + time;

    if (time <= 0) {
        gameOver();
    }
}

function gameOver() {
    questionEl.innerHTML = "";
    buttonEl.innerHTML = "";
    showAns.innerHTML = "";
    clearInterval(timeInterval);
    enterName.classList.remove('d-none');
    scoreCount.innerHTML = 'Your score is ' + time;
}

function validateAnswer(choice) {


    if (choice === questions[questionsIndex - 1].correct) {
        showAns.innerHTML = 'correct';

    }
    else {
        showAns.innerHTML = 'wrong';
        time = time - 15;
    }

    setTimeout(generateQuestion, 1000);

}

function generateQuestion() {
    if (questionsIndex >= questions.length) {
        gameOver();
    }
    else {
        showAns.innerHTML = "";
        button1.innerHTML = questions[questionsIndex].choices[0];
        button2.innerHTML = questions[questionsIndex].choices[1];
        button3.innerHTML = questions[questionsIndex].choices[2];
        button4.innerHTML = questions[questionsIndex].choices[3];

        startEl.style.display = 'none';
        h1Tag.style.display = 'none';
        pTag.style.display = 'none';
        questionEl.style.display = 'block';
        buttonEl.style.display = 'block';

        questionEl.innerHTML = questions[questionsIndex].question;
        ++questionsIndex;
    }
}

function startQuiz() {
    timeInterval = setInterval(timer, 1000);
    generateQuestion();
}

function storeScore() {
    nameInput.value;
    localStorage.setItem(nameInput.value, time);
}

