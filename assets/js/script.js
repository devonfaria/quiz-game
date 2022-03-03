// DEFINING ELEMENT SELECTORS
var startScreen = document.querySelector('.start-screen');
var questionScreen = document.querySelector('.question-screen');
var endScreen = document.querySelector('.end-screen');
var highscoreScreen = document.querySelector('.highscore-screen');
var startButton = document.querySelector('.start-button');
var answerButton = document.querySelectorAll('.answer-button');
var initialsSubmitButton = document.querySelector('.initials-submit-button');
var goBackButton = document.querySelector('.go-back-button');
var clearHighscoresButton = document.querySelector('.clear-highscores-button');
var initialsInput = document.querySelector('.initials-input');

// STARTING CONDITIONS
var cursor = 0;
var correct = 0;
var questionSpace = document.querySelector('.question-show').innerHTML;

// DEFINING SCREEN CHANGE FUNCTIONS
// Show start screen
var showStart = function () {
  startScreen.style.display = 'block';
  questionScreen.style.display = 'none';
  endScreen.style.display = 'none';
  highscoreScreen.style.display = 'none';
};
// Show question screen
var showQuestion = function () {
  startScreen.style.display = 'none';
  questionScreen.style.display = 'block';
  endScreen.style.display = 'none';
  highscoreScreen.style.display = 'none';
};
// Show end screen
var showEnd = function () {
  startScreen.style.display = 'none';
  questionScreen.style.display = 'none';
  endScreen.style.display = 'block';
  highscoreScreen.style.display = 'none';
};
// Show highscores screen
var showHighscores = function () {
  startScreen.style.display = 'none';
  questionScreen.style.display = 'none';
  endScreen.style.display = 'none';
  highscoreScreen.style.display = 'block';
};

// DEFINING GAME FUNCTIONS
// Rendering next question
var renderQuestion = function () {
  document.querySelector('.question-show').innerHTML = `${questions[0].text}`;
  // for (var i = 0; i < 4; i++) {
  document.querySelector('.answer1').innerHTML = `${questions[0].possible[0]}`;
  document.querySelector('.answer2').innerHTML = `${questions[0].possible[1]}`;
  document.querySelector('.answer3').innerHTML = `${questions[0].possible[2]}`;
  document.querySelector('.answer4').innerHTML = `${questions[0].possible[3]}`;
  questions.shift(); 
};

var checkAnswer = function () {
  event.preventDefault();

}

// STORING INFORMATION IN LOCAL STORAGE
var finalScore = {
  initials: '',

}

var addFinalScore = function () {
  event.preventDefault();
}

// QUESTION INFO
var questions = [
  {
    text: "What is the method that adds values to the end of an array?",
    possible: [
      ".push",
      ".assign",
      ".concat",
      ".end",
    ],
    correct: 0
  },
  {
    text: "What language is predominantly used to style and animate elements of a webpage?",
    possible: [
      "C++",
      "Javascript",
      "Ruby",
      "CSS",
    ],
    correct: 3
  },
  {
    text: "What is considered the most widely used browser for coding debugging?",
    possible: [
      "Mozilla Firefox",
      "Safari",
      "Microsoft Edge",
      "Google Chrome",
    ],
    correct: 3
  },
  {
    text: "What is the terminal command for adding a directory?",
    possible: [
      "git push",
      "git clone",
      "mkdir",
      "git pull upstream main",
    ],
    correct: 2
  },
  {
    text: "What is a commonly used database of reactive CSS designs and stylings?",
    possible: [
      "GitHub",
      "Bootstrap",
      "Google Designs",
      "Fullstack Slack",
    ],
    correct: 1
  },
  {
    text: "What is the common name reference for Modern Javascript?",
    possible: [
      "ES6",
      "ES2021",
      "ES2015",
      "Java",
    ],
    correct: 0
  },
  {
    text: "What is the main difference between arrays and objects?",
    possible: [
      "Arrays are used in CSS, and objects are used in Javascript",
      "Arrays are comma deliniated, whereas objects are dash deliniated",
      "Arrays take in values alone, as where objects can take in arguments and values",
      "Arrays are limited in size, as where objects are unlimited",
    ],
    correct: 2
  },
  {
    text: "What are the usual details needed to run a loop function?",
    possible: [
      "declared variable, condition, incrementer",
      "width, height, and padding",
      "declared variable, incrementer, position, key",
      "event, declared variable, value",
    ],
    correct: 0
  },
  {
    text: "What is a commonly used method for running a function over a set of variables?",
    possible: [
      "Init Function",
      "If Method",
      "Loop function",
      "Concat Function",
    ],
    correct: 2
  },
  {
    text: "When you submit a directory to GitHub, what three terminal calls do you use?",
    possible: [
      "git pull upstream main, git add -A, git commit",
      "~, git add -A, git push",
      "cd, mkdir, git push",
      'git add -A, git commit -m "message", git push',
    ],
    correct: 3
  }
];

// BUTTON FUNCTIONALITY
// startButton.addEventListener('click', showQuestion);
// answerButton.addEventListener('click', renderQuestion);
// initialsSubmitButton.addEventListener('click', addFinalScore);
// goBackButton.addEventListener('click', );
// clearHighscoresButton.addEventListener('click', );


// var checkAnswer = function () {
//   event.preventDefault();
//   if ((questions[i].correct) === ) {

//   }


// BUTTON CLASS FOR CHECKING CORRECT ANSWERS

// var whatAnswer = function(event) {
//   var answer = possible[]
// }


// LOOP FOR QUESTION LOADING
for (var i = 0; i < 10; i++) {
  // Logic for producing correct values
console.log(questions[i].possible[0]);
console.log(questions[i].correct);
}

document.querySelector('.answer4').addEventListener('click', renderQuestion);





var answer
