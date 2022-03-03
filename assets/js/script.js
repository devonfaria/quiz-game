// DEFINING ELEMENT SELECTORS
var startScreen = document.querySelector('.start-screen');
var questionScreen = document.querySelector('.question-screen');
var endScreen = document.querySelector('.end-screen');
var highscoreScreen = document.querySelector('.highscore-screen');
var startButton = document.querySelector('.start-button');
var answerButton1 = document.querySelector('.answer-button1');
var answerButton2 = document.querySelector('.answer-button2');
var answerButton3 = document.querySelector('.answer-button3');
var answerButton4 = document.querySelector('.answer-button4');

var initialsSubmitButton = document.querySelector('.initials-submit-button');
var goBackButton = document.querySelector('.go-back-button');
var clearHighscoresButton = document.querySelector('.clear-highscores-button');
var initialsInput = document.querySelector('.initials-input');

// STARTING CONDITIONS
var cursor = 0;
var correct = 0;
var score = 0;
var count = 0;
var questionSpace = document.querySelector('.question-show').innerHTML;
var finalScore = {
  initials: '',
  score: score,
}


// DEFINING SCREEN CHANGE FUNCTIONS
// Show start screen
var showStart = function () {
  startScreen.style.display = 'block';
  questionScreen.style.display = 'none';
  endScreen.style.display = 'none';
  highscoreScreen.style.display = 'none';
};
// showStart();
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
  document.querySelector('.answer-button1').innerHTML = `${questions[0].possible[0]}`;
  document.querySelector('.answer-button2').innerHTML = `${questions[0].possible[1]}`;
  document.querySelector('.answer-button3').innerHTML = `${questions[0].possible[2]}`;
  document.querySelector('.answer-button4').innerHTML = `${questions[0].possible[3]}`;
};

// Checking if the innerHTMl matches the events text
var checkAnswer = function (event) {
  count++;
  console.log(count);
  if (count === 10) {
    showEnd();
    document.querySelector('.final-score').innerHTML = `Your final score is ${score}.`;
    return;
  };
  if ((questions[0].correct) == (event.target.innerHTML)) {
    score++;
    console.log('score: ' + score);
    eliminateQuestion();
    renderQuestion();
    console.log('Correct Answer!', )
    
  } else {
    console.log('Not correct answer!');
    eliminateQuestion();
    renderQuestion();
  }
};

// Changes question
var eliminateQuestion = function () {
    questions.shift(); 
};

// STORING INFORMATION IN LOCAL STORAGE
var storesScore = function () {
  finalScore.initials = initialsInput.value;
  finalScore.score = score;
  console.log(finalScore);
  window.localStorage.setItem("finalScore", JSON.stringify(finalScore));
  showHighscores();
};

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
    correct: '.push',
  },
  {
    text: "What language is predominantly used to style and animate elements of a webpage?",
    possible: [
      "C++",
      "Javascript",
      "Ruby",
      "CSS",
    ],
    correct: "CSS",
  },
  {
    text: "What is considered the most widely used browser for coding debugging?",
    possible: [
      "Mozilla Firefox",
      "Safari",
      "Microsoft Edge",
      "Google Chrome",
    ],
    correct: "Google Chrome",
  },
  {
    text: "What is the terminal command for adding a directory?",
    possible: [
      "git push",
      "git clone",
      "mkdir",
      "git pull upstream main",
    ],
    correct: "mkdir",
  },
  {
    text: "What is a commonly used database of reactive CSS designs and stylings?",
    possible: [
      "GitHub",
      "Bootstrap",
      "Google Designs",
      "Fullstack Slack",
    ],
    correct: "Bootstrap",
  },
  {
    text: "What is the common name reference for Modern Javascript?",
    possible: [
      "ES6",
      "ES2021",
      "ES2015",
      "Java",
    ],
    correct: "ES6",
  },
  {
    text: "What is the main difference between arrays and objects?",
    possible: [
      "Arrays are used in CSS, and objects are used in Javascript",
      "Arrays are comma deliniated, whereas objects are dash deliniated",
      "Arrays take in values alone, as where objects can take in arguments and values",
      "Arrays are limited in size, as where objects are unlimited",
    ],
    correct: "Arrays take in values alone, as where objects can take in arguments and values",
  },
  {
    text: "What are the usual details needed to run a loop function?",
    possible: [
      "declared variable, condition, incrementer",
      "width, height, and padding",
      "declared variable, incrementer, position, key",
      "event, declared variable, value",
    ],
    correct: "declared variable, condition, incrementer",
  },
  {
    text: "What is a commonly used method for running a function over a set of variables?",
    possible: [
      "Init Function",
      "If Method",
      "Loop function",
      "Concat Function",
    ],
    correct: "Loop function",
  },
  {
    text: "When you submit a directory to GitHub, what three terminal calls do you use?",
    possible: [
      "git pull upstream main, git add -A, git commit",
      "~, git add -A, git push",
      "cd, mkdir, git push",
      'git add -A, git commit -m "message", git push',
    ],
    correct: 'git add -A, git commit -m "message", git push',
  }
];

// BUTTON FUNCTIONALITY
// Start button
startButton.addEventListener('click', function () {
  showQuestion();
  renderQuestion();
});

initialsSubmitButton.addEventListener('click', storesScore);
goBackButton.addEventListener('click', showStart);
// clearHighscoresButton.addEventListener('click', );

// ANSWER BUTTONS
document.querySelector('.answer-button1').addEventListener('click', checkAnswer);
document.querySelector('.answer-button2').addEventListener('click', checkAnswer);
document.querySelector('.answer-button3').addEventListener('click', checkAnswer);
document.querySelector('.answer-button4').addEventListener('click', checkAnswer);
