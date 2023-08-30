let startButton = document.querySelector(".start-button")
let score = document.querySelector(".score")
let timerEl = document.querySelector(".timer")
let countdown = document.querySelector(".timer_sec")
let timeLeft = 90 
let countdowntimerEl =
let timeText =document.querySelector(".time_text")

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


let question1 = document.querySelector(".question-1")
let question2 = document.querySelector(".question-2")
let question3 = document.querySelector(".question-3")
let question4 = document.querySelector(".question-4")
let question5 = document.querySelector(".question-5")

startButton.addEventListener("click", function(event) {
    startTimer();
  } );
  
  var timerCount = 90;
  var isWin;
  
    // The start timer function is initiated when the start button is pressed 
    function startTimer() {
      // Sets timer
      timerEl = setInterval(function() {
  
        let timerEl = document.querySelector(".timer")
        timerCount--;
        timerEl.innerHTML = `Time Left: ${timerCount}`;
  
        if (timerCount >= 0) {
  
          if (isWin && timerCount > 0) {
            // Clears interval and stops timer
            clearInterval(timerEl);
            winGame();
          }
        }
        // Tests if time has run out
        if (countdown === 0) {
          // Clears interval
          clearInterval(timerEl);
          quizOver();
        }
      }, 1000);
    }


//what happens when the correct answer has been picked 
if (question1 == Q1o2) {
    alert("Correct!");

}   else { (question1 === Q1o1 && Q1o3 && Q1o4)

    alert("Incorrect!"); 
}


if (question2 == Q2o3) {
    alert("Correct!");
    
}   else { (question2 === Q2o1 && Q2o2 && Q2o4)

    alert("Incorrect!"); 
}


if (question3 == Q3o1) {
    alert("Correct!");
    
}   else { (question3 === Q3o2 && Q3o3 && Q3o4)

    alert("Incorrect!"); 
}




if (question4 == Q4o4) {
    alert("Correct!");
    
}   else { (question4 === Q4o1 && Q4o2 && Q4o3)

    alert("Incorrect!"); 
}


if (question5 == Q5o4) {
    alert("Correct!");
    
}   else { (question5 === Q5o1 && Q5o2 && Q5o3)

    alert("Incorrect!"); 
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


