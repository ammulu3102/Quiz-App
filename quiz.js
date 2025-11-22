let questions = [
  {
    q: "What does HTML stand for?",
    correct: "Hyper Text Markup Language",
    options: [
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Markup Language",
      "Hyper Tool Multi Language",
    ],
  },
  {
    q: "Which tag is used to define a hyperlink in HTML?",
    correct: "<a>",
    options: ["<a>", "<link>", "<href>", "<url>"],
  },
  {
    q: "Which HTML element is used to display images?",
    correct: "<img>",
    options: ["<image>", "<img>", "<src>", "<pic>"],
  },
  {
    q: "Which tag is used to display the largest heading?",
    correct: "<h1>",
    options: ["<heading>", "<h6>", "<h1>", "<head>"],
  },
  {
    q: "What is the correct HTML tag for inserting a line break?",
    correct: "<br>",
    options: ["<break>", "<br>", "<lb>", "<line>"],
  },
  {
    q: "Which tag is used to define an unordered list?",
    correct: "<ul>",
    options: ["<ol>", "<ul>", "<list>", "<li>"],
  },
  {
    q: "Which tag is used to make text bold?",
    correct: "<b>",
    options: ["<bold>", "<b>", "<strong>", "<text>"],
  },
  {
    q: "Which attribute specifies the URL of an image?",
    correct: "src",
    options: ["src", "link", "href", "url"],
  },
  {
    q: "Which HTML tag is used to create a table row?",
    correct: "<tr>",
    options: ["<td>", "<th>", "<tr>", "<row>"],
  },
  {
    q: "Which tag is used to add a background color?",
    correct: "style",
    options: ["color", "style", "bg", "background"],
  },
  {
    q: "Which HTML tag defines emphasized text?",
    correct: "<em>",
    options: ["<italic>", "<em>", "<i>", "<stress>"],
  },
  {
    q: "Which tag is used to group block elements?",
    correct: "<div>",
    options: ["<span>", "<group>", "<div>", "<container>"],
  },
  {
    q: "Which HTML element defines the title of a document?",
    correct: "<title>",
    options: ["<meta>", "<title>", "<header>", "<head>"],
  },
  {
    q: "Which tag creates a numbered list?",
    correct: "<ol>",
    options: ["<ul>", "<ol>", "<li>", "<dl>"],
  },
  {
    q: "Which tag is used for inserting a horizontal line?",
    correct: "<hr>",
    options: ["<line>", "<hr>", "<break>", "<horizontal>"],
  },
  {
    q: "How can you open a link in a new tab?",
    correct: "target='_blank'",
    options: [
      "target='_self'",
      "target='_newtab'",
      "target='_blank'",
      "new='tab'",
    ],
  },
  {
    q: "Which HTML tag is used to display a video?",
    correct: "<video>",
    options: ["<media>", "<video>", "<movie>", "<source>"],
  },
  {
    q: "Which tag is used to define a table header?",
    correct: "<th>",
    options: ["<td>", "<th>", "<tr>", "<thead>"],
  },
  {
    q: "What is the correct HTML element for playing audio files?",
    correct: "<audio>",
    options: ["<mp3>", "<sound>", "<music>", "<audio>"],
  },
  {
    q: "Which tag is used to define a paragraph?",
    correct: "<p>",
    options: ["<text>", "<p>", "<para>", "<pg>"],
  },

  {
    q: "What does CSS stand for?",
    correct: "Cascading Style Sheets",
    options: [
      "Creative Style System",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
  },
  {
    q: "Which CSS property controls text size?",
    correct: "font-size",
    options: ["text-style", "font-style", "text-size", "font-size"],
  },
  {
    q: "Which property changes background color?",
    correct: "background-color",
    options: ["color", "bgcolor", "background-color", "background"],
  },
  {
    q: "How do you select an element with id 'demo'?",
    correct: "#demo",
    options: ["demo", ".demo", "#demo", "*demo"],
  },
  {
    q: "How do you select elements with class 'btn'?",
    correct: ".btn",
    options: ["#btn", "btn", ".btn", "*btn"],
  },
  {
    q: "Which property changes the text color?",
    correct: "color",
    options: ["font-color", "text-color", "color", "background-color"],
  },
  {
    q: "Which property adds shadow to a box?",
    correct: "box-shadow",
    options: ["shadow", "text-shadow", "box-shadow", "background-shadow"],
  },
  {
    q: "Which property changes font?",
    correct: "font-family",
    options: ["font-family", "font-style", "font-weight", "text-font"],
  },
  {
    q: "Which property controls spacing inside an element?",
    correct: "padding",
    options: ["margin", "padding", "border", "gap"],
  },
  {
    q: "Which property sets the space outside an element?",
    correct: "margin",
    options: ["padding", "margin", "border", "spacing"],
  },
  {
    q: "Which CSS property makes text uppercase?",
    correct: "text-transform",
    options: ["text-transform", "text-case", "transform", "font-case"],
  },
  {
    q: "Which CSS property controls the line height?",
    correct: "line-height",
    options: ["line-height", "height", "text-height", "spacing"],
  },
  {
    q: "How can you center text horizontally?",
    correct: "text-align: center;",
    options: [
      "align: center;",
      "text-align: center;",
      "center-text;",
      "font-align: center;",
    ],
  },
  {
    q: "Which property changes an element's width?",
    correct: "width",
    options: ["size", "length", "width", "max-width"],
  },
  {
    q: "Which CSS unit is relative to the parent font size?",
    correct: "em",
    options: ["px", "em", "cm", "%"],
  },
  {
    q: "Which property controls the visibility of an element?",
    correct: "visibility",
    options: ["display", "hidden", "visibility", "opacity"],
  },
  {
    q: "Which property sets the text alignment?",
    correct: "text-align",
    options: ["align", "text-align", "justify", "align-items"],
  },
  {
    q: "Which property makes corners rounded?",
    correct: "border-radius",
    options: ["corner", "round", "border-radius", "radius"],
  },
  {
    q: "Which CSS property controls z-index stacking?",
    correct: "z-index",
    options: ["index", "z-index", "layer", "order"],
  },
  {
    q: "Which CSS property sets element opacity?",
    correct: "opacity",
    options: ["visibility", "alpha", "opacity", "display"],
  },

  {
    q: "what is the correct way to declare a varible in javascript?",
    correct: "var x = 10",
    options: ["variable x = 10", "var x = 10", " let x = 10 ", "int x = 10 "],
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
let skippedCount = 0;
let myquestions = [];
let correctAnswerList = [];
let wrongAnswerList = [];
let skippedQuestionsList = [];
let timerInterval;
let timeLeft = 20;
let answered = false;

function startquiz() {
  myquestions = [...questions].sort(() => Math.random() - 0.5).slice(0, 20);

  console.log("Total questions in main array:", questions.length);
  console.log("Selected questions for quiz:", myquestions.length);

  current = 0;
  score = 0;
  correctCount = 0;
  wrongCount = 0;
  skippedCount = 0;
  correctAnswerList = [];
  wrongAnswerList = [];
  skippedQuestionsList = [];
  document.getElementById("quizContainer").style.display = "none";
  document.getElementById("quizbox").style.display = "block";
  document.getElementById("totalQuestions").textContent = myquestions.length;
  showQuestion();
}

function showQuestion() {
  clearInterval(timerInterval);
  timeLeft = 20;
  answered = false;

  const q = myquestions[current];
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
      if (!answered) {
        skippedCount++;
        skippedQuestionsList.push({ q: q.q, correct: q.correct });
      }
      nextQuestion();
    }
  }, 1000);
}

function answerQuestion(element, selected) {
  clearInterval(timerInterval);
  answered = true;
  const q = myquestions[current];
  if (selected === q.correct) {
    element.classList.add("correct");
    score += 1;
    correctCount += 1;
    correctAnswerList.push({ q: q.q, correct: q.correct });
  } else {
    element.classList.add("wrong");
    score -= 1;
    wrongCount += 1;
    wrongAnswerList.push({ q: q.q, correct: q.correct, selected: selected });
  }
  setTimeout(nextQuestion, 500);
}

function nextQuestion() {
  if (!answered) {
    const q = myquestions[current];
    skippedCount++;
    skippedQuestionsList.push({ q: q.q, correct: q.correct });
  }
  current++;
  if (current < myquestions.length) {
    showQuestion();
  } else {
    showResults();
  }
}
function showResults() {
  document.getElementById("quizbox").style.display = "none";
  const resultBox = document.getElementById("resultBox");
  resultBox.style.display = "block";

  let message = `<h2>Quiz Finished!</h2>`;
  message += `<p>Total Questions: ${myquestions.length}<a href="#" onclick="showAllQuestions()">click me</a></p> `;
  message += `<p> Correct Answers : ${correctCount} <a href="#" onclick="showList('correct')">click me</a></p> `;
  message += `<p> Wrong Answers : ${wrongCount} <a href="#" onclick="showList('wrong')">click me</a>  </p>`;
  message += ` <p> Skipped Questions: ${skippedCount}<a href="#" onclick="showList('skipped')">click me</a> </p>`;
  message += `<p>Your Score: ${score}</p>`;

  if (score > 15) {
    message += `<p>🎉 Congratulations! Excellent work!</p>`;
  } else {
    message += `<p>👍 Good try! Keep practicing!</p>`;
  }
  message += `<br><button  id= "playAgain" onclick="playAgain()">Play Again</button>`;
  resultBox.innerHTML = message;
}

function showList(type) {
  let list;
  let title;

  if (type === "correct") {
    list = correctAnswerList;
    title = "correct Answers";
  } else if (type === "wrong") {
    list = wrongAnswerList;
    title = "Wrong Answers";
  } else if (type === "skipped") {
    list = skippedQuestionsList;
    title = "Skipped Questions";
  }

  if (!list || list.length === 0) {
    alert("No questions in this category.");
    return;
  }

  let output = `${title}\n\n`;
  list.forEach((item, i) => {
    output += `${i + 1}. ${item.q}\nCorrect Answer: ${item.correct}`;
    if (item.selected) output += `\nYour Answer: ${item.selected}`;
    output += `\n\n`;
  });
  alert(output);
}

function showAllQuestions() {
  if (!myquestions || myquestions.length === 0) {
    alert("No questions avaliable.");
    return;
  }

  let output = " All 20 Questions";
  myquestions.forEach((item, i) => {
    output += `\n ${i + 1}. ${item.q} \n Correct Answer: ${item.correct}\n`;
  });
  alert(output);
}

function playAgain() {
  document.getElementById("resultBox").style.display = "none";
  startquiz();
}
