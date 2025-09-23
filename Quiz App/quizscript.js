let questions = [
{
    q: "what is the correct way to declare a varible in javascript?",
    correct: "var x = 10",
    options: ["variable x = 10", "var x = 10", " let = x 10 ", "int x = 10 "],
},
{
    q: "Which of the following is a javascript data type?",
    correct: "Number",
    options: ["Number", " Character", " Float", "Integer"],
},
{
    q: "what will console.log(typeof NaN)?",
    correct: "Number",
    options: ["Undefined", "null", "Number", "object"],
},
{
    q: "Which operator is used to assign a value?",
    correct: "=",
    options: ["==", "=", "===", "!="],
},
{
    q: "How do you write a comment in javascript?",
    correct: "//This is a comment",
    options: [
    "<!--This is a comment-->",
    "#This is a comment",
    "//This is a comment",
    "**This is a comment**",
    ],
},
{
    q: "What does === check for",
    correct: "Equality of both value and type",
    options: [
    "Equality of values only",
    "Equality of types only",
    "Equality of both value and type",
    "Assignment of value",
    ],
},
{
    q: "How can you convert a string to a number in javascript",
    correct: "parseInt()",
    options: ["parseInt()", " string()", "toUpperCase()", "join()"],
},
{
    q: "Which of these is a loop structue in javascript",
    correct: "do-while",
    options: ["do-while", "loop-until", "repeat-for", "foreach-if"],
},
{
    q: "which method is used to remove the last element from an array",
    correct: "pop()",
    options: ["shift()", "pop()", "unshift()", "push()"],
},
{
    q: "what is a closure in javascript",
    correct:
    "A Function inside another function that remember its outer variables",
    options: [
    "A Function inside another function that remember its outer variables",
    "A loop structure",
    " A Block of code executed once",
    "A way to stop script execution",
    ],
},
{
    q: "How do you create a new promise",
    correct: "new Promise(function(resolve,reject){ })",
    options: [
    "new Promise(function(resolve,reject){ })",
    " new Promise { resolve, reject }",
    "Promise.create(function(resolve, reject) { }) ",
    "Promise(function(resolve, reject) { })",
    ],
},
{
    q: "Which keyword is used to define a constant? ",
    correct: "const",
    options: [" constant", " let", "var", "const"],
},
{
    q: "What is the result of this expression? true && false",
    correct: "false",
    options: ["true", "false", "undefined", "null"],
},
{
    q: "Which of the following is correct about arrow functions?",
    correct: "They don’t have their own this",
    options: [
    "They have their own this context",
    "They can't be used as callbacks",
    " They always return undefined",
    "They don’t have their own this",
    ],
},
{
    q: "What does JSON.parse() do?",
    correct: " Converts JSON into a JavaScript object ",
    options: [
    " Converts JSON into a JavaScript object ",
    "Converts a JavaScript object into JSON",
    "Deletes a property from JSON",
    "Makes JSON immutable",
    ],
},
{
    q: "What will the following code output?",
    correct: "undefined",
    options: ["0", "undefined", "null", "error"],
},
{
    q: "Which method adds one or more elements to the beginning of an array?",
    correct: "unshift()",
    options: ["push()", " pop()", "unshift()", "splice()"],
},
{
    q: "What is the purpose of try...catch?",
    correct: "To handle errors in code execution",
    options: [
    "To loop over arrays",
    "To handle errors in code execution",
    "To define constants",
    "To compare two values",
    ],
},
{
    q: "How do you access the first element of an array named arr? ",
    correct: " arr[0] ",
    options: ["arr(0)", " arr[0] ", "arr.first()", "arr.get(0)"],
},
{
    q: "What will the following code output?  console.log(typeof undefined);",
    correct: "undefined",
    options: ["null", "undefined", "object", "number"],
},
];

let current = 0;
let score = 0;
let correctCount = 0;
let wrongCount = 0;
let timerInterval;
let timeLeft = 20;

function startquiz() {
current = 0;
score = 0;
correctCount = 0;
wrongCount = 0;
document.getElementById("quizContainer").style.display = "none";
document.getElementById("quizBox").style.display = "block";
document.getElementById("totalQuestions").textContent = questions.length;
showQuestion();
}

function showQuestion() {
clearInterval(timerInterval);
timeLeft = 20;
const q = questions[current];
document.getElementById("qNumber").textContent = current + 1;
document.getElementById("question").textContent = q.q;
document.getElementById("timer").textContent = timeLeft;
const optionsDiv = document.getElementById("options");
optionsDiv.innerHTML = "";
const labels = ["a", "b", "c", "d"];
q.options.forEach((opt, index) => {
    const btn = document.createElement("div");
    btn.textContent = labels[index] + ") " + opt;
    btn.className = "option";
    btn.onclick = () => answerQuestion(btn, opt);
    optionsDiv.appendChild(btn);
});

timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;
    if (timeLeft <= 0) {
    clearInterval(timerInterval);
    score -= 1;
    nextQuestion();
    }
}, 1000);
}

function answerQuestion(element, selected) {
clearInterval(timerInterval);
const q = questions[current];
if (selected === q.correct) {
    element.classList.add("correct");
    score += 1;
    correctCount += 1;
} else {
    element.classList.add("wrong");
    score -= 1;
    wrongCount += 1;
}
setTimeout(nextQuestion, 1000);
}

function nextQuestion() {
current++;
if (current < questions.length) {
    showQuestion();
} else {
    clearInterval(timerInterval);
    document.getElementById("quizBox").style.display = "none";
    const resultBox = document.getElementById("resultBox");
    resultBox.style.display = "block";

    let message = `<h2>Quiz Finished!</h2>`;
    message += `<p>Total Questions: ${questions.length}</p>`;
    message += `<p> Correct Answers : ${correctCount} </p>`;
    message += `<p> Wrong Answers : ${wrongCount} </p>`;
    message += `<p>Your Score: ${score}</p>`;

    if (score > 15) {
    message += `<p>🎉 Congratulations! Excellent work!</p>`;
    } else {
    message += `<p>👍 Good try! Keep practicing!</p>`;
    }
    message += `<br><button  id= "playAgain" onclick="playAgain()">Play Again</button>`;

    resultBox.innerHTML = message;
}
}
function playAgain() {
  resultBox.style.display = "none"; // hide result box
  startquiz(); // restart quiz immediately
}
