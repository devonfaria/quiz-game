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
var timeEl = document.querySelector('.timer');
var headerLink = document.querySelector('.header-scores');
var questionSpace = document.querySelector('.question-show').innerHTML;
var initialsSubmitButton = document.querySelector('.initials-submit-button');
var goBackButton = document.querySelector('.go-back-button');
var clearHighscoresButton = document.querySelector('.clear-highscores-button');
var initialsInput = document.querySelector('.initials-input');
var scoreList = document.getElementById('highscore-list');

// STARTING CONDITIONS
var questions = [];
var correct = 0;
var score = 0;
var count = 0;
var secondsLeft = 60;
var storedHighscores = [
  {
    initials: 'DF',
    score: 9,
  }
];
var finalScore = {
  initials: '',
  score: score,
}

// INITIATE FUNCTION
var init = function () {
  showStart();
  correct = 0;
  score = 0;
  count = 0;
  secondsLeft = 60;
  finalScore = {
    initials: '',
    score: 0}
  initialsInput.value = '';
  questions = [
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
    ]
  };


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
  timeEl.style.display = 'none';
  document.querySelector('.final-score').innerHTML = `Your final score is ${score}.`;
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

// Checking if the innerHTMl matches the event target's text
var checkAnswer = function (event) {
  count++;
  if (count === 10) {
    showEnd();
    return;
  };
  if ((questions[0].correct) == (event.target.innerHTML)) {
    score++;
    eliminateQuestion();
    renderQuestion();
  } else {
    secondsLeft = (secondsLeft - 10);
    eliminateQuestion();
    renderQuestion();
  }
};

// Changes question
var eliminateQuestion = function () {
    questions.shift(); 
};

// TIMER FUNCTION
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";
    if(secondsLeft <= 0) {
      clearInterval(timerInterval);
      showEnd();
    }
  }, 1000);
};

var test = function () {
  var data = JSON.parse(localStorage.getItem("storedHighscores"));
  var previousHighscore;
  if (data) {
    previousHighscore = data.sort(function (a, b) {
      return b.score - a.score;
    });
  } else {
    previousHighscore = [];
  }
  console.log(previousHighscore);
  scoreList.innerHTML = '';
  for (var i = 0; i < previousHighscore.length; i++) {
    var createLi = document.createElement('li');
    createLi.textContent = `User: ${previousHighscore[i].initials}; Score:${previousHighscore[i].score}`;
    scoreList.appendChild(createLi);
  }
};

// STORING INFORMATION IN LOCAL STORAGE
var storesScore = function () {
  finalScore.initials = initialsInput.value;
  finalScore.score = score;
  console.log(finalScore);
  var data = JSON.parse(localStorage.getItem("storedHighscores"));
  var previousHighscore;
  if (data) {
    previousHighscore = data.sort(function (a, b) {
      return b.score - a.score;
    });
  } else {
    previousHighscore = [];
  }
  // document.querySelector('.highscoreLog').innerHTML = `User: ${finalScore.initials};   Highscore ${finalScore.score}`;
  previousHighscore.push(finalScore)
  console.log(previousHighscore);
  localStorage.setItem("storedHighscores", JSON.stringify(previousHighscore));
  test();
  showHighscores();
};

// CLEARING LOCAL STORAGE
var clearStorage = function () {
  window.localStorage.clear();
  document.querySelector('.highscoreLog').innerHTML = '';
}

// BUTTON FUNCTIONALITY
startButton.addEventListener('click', function () {
  showQuestion();
  renderQuestion();
  setTime();
});
initialsSubmitButton.addEventListener('click', function () {
  console.log('Working');
  storesScore();
});
goBackButton.addEventListener('click', init);
headerLink.addEventListener('click', showHighscores);
clearHighscoresButton.addEventListener('click', clearStorage);

// ANSWER BUTTONS
document.querySelector('.answer-button1').addEventListener('click', checkAnswer);
document.querySelector('.answer-button2').addEventListener('click', checkAnswer);
document.querySelector('.answer-button3').addEventListener('click', checkAnswer);
document.querySelector('.answer-button4').addEventListener('click', checkAnswer);

// INITAITE STARTING CONDITIONS
init();