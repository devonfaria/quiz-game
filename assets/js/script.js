// DEFINING ELEMENT SELECTORS
var startScreen = document.querySelector('.start-screen');
var questionScreen = document.querySelector('.question-screen');
var endScreen = document.querySelector('.end-screen');
var highscoreScreen = document.querySelector('.highscore-screen');
var startButton = document.querySelector('.start-button');
var answerButton = document.querySelector('.answer-button');
var submitButton = document.querySelector('.submit-button');
var clearHighscoresButton = document.querySelector('.clear-highscores-button');
var initialsInput = document.querySelector('.initials-input');

// DEFINING FUNCTIONS
// Show start screen
var showStart = function () {
  startScreen.style.display = 'block';
  questionScreen.style.display = 'none';
  endScreen.style.display = 'none';
  highscoreScreen.style.display = 'none';
}
// Show question screen
var showQuestion = function () {
  startScreen.style.display = 'none';
  questionScreen.style.display = 'block';
  endScreen.style.display = 'none';
  highscoreScreen.style.display = 'none';
}
// Show end screen
var showEnd = function () {
  startScreen.style.display = 'none';
  questionScreen.style.display = 'none';
  endScreen.style.display = 'block';
  highscoreScreen.style.display = 'none';
}
// Show highscores screen
var showHighscores = function () {
  startScreen.style.display = 'none';
  questionScreen.style.display = 'none';
  endScreen.style.display = 'none';
  highscoreScreen.style.display = 'block';
}
