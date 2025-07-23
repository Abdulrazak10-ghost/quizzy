let menuList = document.getElementById("menuList")
        menuList.style.maxHeight = "0px";

        function toggleMenu(){
            if(menuList.style.maxHeight == "0px")
            {
                menuList.style.maxHeight = "600px";
            }
            else{
                menuList.style.maxHeight = "0px";
            }
        }
const questions = [
    {
    question: "If x + 2y = 7 and 2x - y = 4, what is the value of x + y?",
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "5", correct: true },
      { text: "6", correct: false },
    ]
  },
  {
    question: "A cylinder has a radius of 4 cm and a height of 10 cm. What is its volume?",
    answers: [
      { text: "160π cm³", correct: false },
      { text: "160 cm³", correct: false },
      { text: "640π cm³", correct: false },
      { text: "160π cm³", correct: true },
    ]
  },
  {
    question: "If a function f(x) = 2x² + 3x - 5, what is the value of f(-2)?",
    answers: [
      { text: "-3", correct: false },
      { text: "-1", correct: false },
      { text: "3", correct: true },
      { text: "5", correct: false },
    ]
  },
  {
    question: "A bag contains 5 red balls and 3 blue balls. If 2 balls are drawn at random without replacement, what is the probability that both balls are red?",
    answers: [
      { text: "5/14", correct: true },
      { text: "5/16", correct: false },
      { text: "3/8", correct: false },
      { text: "1/4", correct: false },
    ]
  },
  {
    question: "What is the equation of the circle with center (2,3) and radius 4?",
    answers: [
      { text: "(x-2)² + (y-3)² = 16", correct: true },
      { text: "(x+2)² + (y+3)² = 16", correct: false },
      { text: "(x-2)² + (y+3)² = 16", correct: false },
      { text: "(x+2)² + (y-3)² = 16", correct: false },
    ]
  },
  {
    question: "If a = 2 and b = 3, what is the value of (a + b)²?",
    answers: [
      { text: "13", correct: false },
      { text: "25", correct: true },
      { text: "36", correct: false },
      { text: "49", correct: false },
    ]
  },
  {
    question: "A cone has a radius of 3 cm and a height of 7 cm. What is its volume?",
    answers: [
      { text: "21π cm³", correct: true },
      { text: "63π cm³", correct: false },
      { text: "42π cm³", correct: false },
      { text: "84π cm³", correct: false },
    ]
  },
  {
    question: "If x - 2y = 5 and 3x + y = 11, what is the value of x?",
    answers: [
      { text: "4", correct: false },
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
    ]
  },
  {
    question: "A car travels from city A to city B at an average speed of 60 km/h and returns at an average speed of 40 km/h. What is the average speed for the entire trip?",
    answers: [
      { text: "48 km/h", correct: true },
      { text: "50 km/h", correct: false },
      { text: "52 km/h", correct: false },
      { text: "54 km/h", correct: false },
    ]
  },
  {
    question: "If a function f(x) = x³ - 2x² + x - 1, what is the value of f(2)?",
    answers: [
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: false },
    ]
  },

  {
    question: "If log₂x = 3, what is the value of x?",
    answers: [
      { text: "6", correct: false },
      { text: "8", correct: true },
      { text: "9", correct: false },
      { text: "10", correct: false },
    ]
  },
  {
    question: "A triangle has sides of length 3, 4, and 5. What is the area of the triangle?",
    answers: [
      { text: "6", correct: true },
      { text: "8", correct: false },
      { text: "10", correct: false },
      { text: "12", correct: false },
    ]
  },
  {
    question: "If a car travels 250 km in 5 hours, what is its average speed?",
    answers: [
      { text: "40 km/h", correct: false },
      { text: "50 km/h", correct: true },
      { text: "60 km/h", correct: false },
      { text: "70 km/h", correct: false },
    ]
  },
  {
    question: "What is the sum of the interior angles of a hexagon?",
    answers: [
      { text: "360°", correct: false },
      { text: "540°", correct: false },
      { text: "720°", correct: true },
      { text: "900°", correct: false },
    ]
  },
  {
    question: "If a function f(x) = 2x + 1, what is the value of f(3)?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
    ]
  },
  {
    question: "A cylinder has a radius of 5 cm and a height of 10 cm. What is its volume?",
    answers: [
      { text: "250π cm³", correct: true },
      { text: "500π cm³", correct: false },
      { text: "750π cm³", correct: false },
      { text: "1000π cm³", correct: false },
    ]
  },
  {
    question: "If x + y = 7 and x - y = 3, what is the value of x?",
    answers: [
      { text: "4", correct: false },
      { text: "5", correct: true },
      { text: "6", correct: false },
      { text: "7", correct: false },
    ]
  },
  {
    question: "What is the equation of the line that passes through the points (2,3) and (4,5)?",
    answers: [
      { text: "y = x + 1", correct: true },
      { text: "y = x - 1", correct: false },
      { text: "y = 2x + 1", correct: false },
      { text: "y = 2x - 1", correct: false },
    ]
  },
  {
    question: "If a bag contains 4 red balls and 6 blue balls, what is the probability of drawing a red ball?",
    answers: [
      { text: "2/5", correct: true },
      { text: "3/5", correct: false },
      { text: "4/5", correct: false },
      { text: "1/2", correct: false },
    ]
  },
  {
    question: "What is the value of x in the equation 2^x = 16?",
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false },
      { text: "6", correct: false },
    ]
  },

  {
    question: "If a function f(x) = x² + 2x - 3, what is the value of f(-1)?",
    answers: [
      { text: "-4", correct: true },
      { text: "-2", correct: false },
      { text: "0", correct: false },
      { text: "2", correct: false },
    ]
  },
  {
    question: "A sphere has a radius of 6 cm. What is its volume?",
    answers: [
      { text: "144π cm³", correct: false },
      { text: "216π cm³", correct: false },
      { text: "288π cm³", correct: true },
      { text: "360π cm³", correct: false },
    ]
  },
  {
    question: "If x + 3y = 9 and 2x - y = 5, what is the value of x?",
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false },
      { text: "6", correct: false },
    ]
  },
  {
    question: "What is the sum of the exterior angles of a polygon?",
    answers: [
      { text: "180°", correct: false },
      { text: "360°", correct: true },
      { text: "540°", correct: false },
      { text: "720°", correct: false },
    ]
  },
  {
    question: "If a car travels 120 km in 2 hours, what is its average speed?",
    answers: [
      { text: "40 km/h", correct: false },
      { text: "50 km/h", correct: false },
      { text: "60 km/h", correct: true },
      { text: "70 km/h", correct: false },
    ]
  },
  {
    question: "A cone has a radius of 4 cm and a height of 9 cm. What is its volume?",
    answers: [
      { text: "48π cm³", correct: true },
      { text: "60π cm³", correct: false },
      { text: "72π cm³", correct: false },
      { text: "96π cm³", correct: false },
    ]
  },
  {
    question: "If log₅x = 2, what is the value of x?",
    answers: [
      { text: "10", correct: false },
      { text: "25", correct: true },
      { text: "50", correct: false },
      { text: "100", correct: false },
    ]
  },
  {
    question: "What is the equation of the circle with center (0,0) and radius 5?",
    answers: [
      { text: "x² + y² = 25", correct: true },
      { text: "x² + y² = 36", correct: false },
      { text: "x² + y² = 49", correct: false },
      { text: "x² + y² = 64", correct: false },
    ]
  },
  {
    question: "If a function f(x) = 3x - 2, what is the value of f(4)?",
    answers: [
      { text: "8", correct: false },
      { text: "10", correct: true },
      { text: "12", correct: false },
      { text: "14", correct: false },
    ]
  },
  {
    question: "A bag contains 5 red balls and 3 blue balls. If 2 balls are drawn at random without replacement, what is the probability that both balls are blue?",
    answers: [
      { text: "3/28", correct: true },
      { text: "3/32", correct: false },
      { text: "1/8", correct: false },
      { text: "1/4", correct: false },
    ]
  },

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild)
        answerButtons.removeChild(answerButtons.firstChild);
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else{
            startQuiz();
        }
    
});

startQuiz();