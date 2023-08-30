let startButton = document.querySelector(".start-button")
let score = document.querySelector(".score")
let timer = document.querySelector(".timer")
let Q1o1 = document.querySelector(".ques1-opt1")
let Q1o2 = document.querySelector(".ques1-opt2")
let Q1o3 = document.querySelector(".ques1-opt3")
let Q1o4 = document.querySelector(".ques1-opt4")
let Q2o1 = document.querySelector(".ques2-opt1")
let Q2o2 = document.querySelector(".ques2-opt2")
let Q2o3 = document.querySelector(".ques2-opt3")
let Q2o4 = document.querySelector(".ques2-opt4")
let Q3o1 = document.querySelector(".ques3-opt1")
let Q3o2 = document.querySelector(".ques3-opt2")
let Q3o3 = document.querySelector(".ques3-opt3")
let Q3o4 = document.querySelector(".ques3-opt4")
let Q4o1 = document.querySelector(".ques4-opt1")
let Q4o2 = document.querySelector(".ques4-opt2")
let Q4o3 = document.querySelector(".ques4-opt3")
let Q4o4 = document.querySelector(".ques4-opt4")
let Q5o1 = document.querySelector(".ques5-opt1")
let Q5o2 = document.querySelector(".ques5-opt2")
let Q5o3 = document.querySelector(".ques5-opt3")
let Q5o4 = document.querySelector(".ques5-opt4")


// the function is called when the start button is pressed and the timer begins to go 
function startButton() {
    timerCount = 90;
}

//the function is called when the timer is up
function endQuiz() {
    wordBlank.textContent = "Time's up!";
    loseCounter++
  }


// the function is called when the score is final
  function highScore() {
    wordBlank.textContent ="Here is your score!";
  }

****
  // The start timer function is initiated when the start button is pressed 
  function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {

        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        quizOver();
      }
    }, 90000);
  }

if (Q1o2 )


