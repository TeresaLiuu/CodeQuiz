var startEl = document.getElementById("start");
var quizEl = document.getElementById("quiz");
var questionEl = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var counterEl = document.getElementById("counter");
var scoreCount = document.getElementById("score");
var h1Tag = document.getElementById ("title");
var pTag = document.getElementById ("rule");


startEl.addEventListener("click", startQuiz);



function startQuiz(){
    startEl.style.display= "none";
    h1Tag.style.display= "none";
    pTag.style.display = "none";
    

}

var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",

        choiceA: "<javascript>",
        choiceB: "<script>",
        choiceC: "<scripting>",
        correct: "B"
    },

    {
        question: "Where is the correct place to insert a JavaScript?",

        choiceA: "Both the <head> and <body> section are correct",
        choiceB: "The <body> section",
        choiceC: "The <head> section",
        correct: "A"

    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",

        choiceA: "<script src = 'xxx.js'>",
        choiceB: "<script href = 'xxx.js'>",
        choiceC: "<script name='xxx.js'>",
        correct: "A"

    },
    {
        question: "The external JavaScript file must contain the <script> tag",
        
        choiceA: "True",
        choiceB: "False",
        correct: "B"

        },
    {
        question: "How do you create a function in JavaScript?",
        choiceA: "Function =myFunction()",
        choiceB: "Function myFunction()",
        choiceC: "Function:myFunction()",
        correct: "B"

        }

]

// need to put questions array to quesiton div 
// then style.display = block