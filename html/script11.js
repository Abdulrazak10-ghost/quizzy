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
    question: "What is the value of x in the equation 2x + 5 = 11?",
    answers: [
      { text: "2", correct: false },
      { text: "3", correct: true },
      { text: "4", correct: false },
      { text: "5", correct: false },
    ]
  },
  {
    question: "If a bakery sells 250 loaves of bread per day, how many loaves will it sell in 5 days?",
    answers: [
      { text: "1000", correct: false },
      { text: "1250", correct: true },
      { text: "1500", correct: false },
      { text: "2000", correct: false },
    ]
  },
  {
    question: "What is the sum of the interior angles of a triangle?",
    answers: [
      { text: "180°", correct: true },
      { text: "270°", correct: false },
      { text: "360°", correct: false },
      { text: "90°", correct: false },
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
    question: "What is the value of x in the equation x - 3 = 7?",
    answers: [
      { text: "4", correct: false },
      { text: "5", correct: false },
      { text: "10", correct: true },
      { text: "11", correct: false },
    ]
  },
  {
    question: "If a book costs ₦500 and a 10% discount is applied, how much will you pay?",
    answers: [
      { text: "₦450", correct: true },
      { text: "₦400", correct: false },
      { text: "₦550", correct: false },
      { text: "₦600", correct: false },
    ]
  },
  {
    question: "What is the perimeter of a rectangle with a length of 8 cm and a width of 5 cm?",
    answers: [
      { text: "18 cm", correct: false },
      { text: "20 cm", correct: false },
      { text: "26 cm", correct: true },
      { text: "30 cm", correct: false },
    ]
  },
  {
    question: "If a water tank can hold 1000 liters of water and 300 liters are already in the tank, what percentage of the tank is filled?",
    answers: [
      { text: "20%", correct: false },
      { text: "30%", correct: true },
      { text: "40%", correct: false },
      { text: "50%", correct: false },
    ]
  },
  {
    question: "What is the value of x in the equation 4x = 28?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
    ]
  },
  {
    question: "If a pencil is 15 cm long and it is divided into 5 parts, how long is each part?",
    answers: [
      { text: "2 cm", correct: false },
      { text: "3 cm", correct: true },
      { text: "4 cm", correct: false },
      { text: "5 cm", correct: false },
    ]
  },

  {
    question: "What is the area of a rectangle with a length of 6 cm and a width of 4 cm?",
    answers: [
      { text: "10 cm²", correct: false },
      { text: "12 cm²", correct: false },
      { text: "20 cm²", correct: false },
      { text: "24 cm²", correct: true },
    ]
  },
  {
    question: "If a shirt costs ₦800 and a 15% discount is applied, how much will you pay?",
    answers: [
      { text: "₦680", correct: true },
      { text: "₦700", correct: false },
      { text: "₦720", correct: false },
      { text: "₦750", correct: false },
    ]
  },
  {
    question: "What is the value of x in the equation x + 2 = 9?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
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
    question: "What is the volume of a cube with a side length of 5 cm?",
    answers: [
      { text: "100 cm³", correct: false },
      { text: "125 cm³", correct: true },
      { text: "150 cm³", correct: false },
      { text: "200 cm³", correct: false },
    ]
  },
  {
    question: "If a bakery sells 150 cakes per day, how many cakes will it sell in 6 days?",
    answers: [
      { text: "600", correct: false },
      { text: "700", correct: false },
      { text: "800", correct: false },
      { text: "900", correct: true },
    ]
  },
  {
    question: "What is the value of x in the equation 2x - 4 = 12?",
    answers: [
      { text: "6", correct: false },
      { text: "7", correct: false },
      { text: "8", correct: true },
      { text: "9", correct: false },
    ]
  },
  {
    question: "If a water tank can hold 500 liters of water and 250 liters are already in the tank, what percentage of the tank is filled?",
    answers: [
      { text: "25%", correct: false },
      { text: "50%", correct: true },
      { text: "75%", correct: false },
      { text: "100%", correct: false },
    ]
  },
  {
    question: "What is the perimeter of a square with a side length of 6 cm?",
    answers: [
      { text: "12 cm", correct: false },
      { text: "18 cm", correct: false },
      { text: "24 cm", correct: true },
      { text: "30 cm", correct: false },
    ]
  },
  {
    question: "If a book costs ₦400 and a 20% discount is applied, how much will you pay?",
    answers: [
      { text: "₦280", correct: false },
      { text: "₦320", correct: true },
      { text: "₦360", correct: false },
      { text: "₦400", correct: false },
    ]
  },


  {
    question: "What is the sum of the angles in a quadrilateral?",
    answers: [
      { text: "180°", correct: false },
      { text: "270°", correct: false },
      { text: "360°", correct: true },
      { text: "450°", correct: false },
    ]
  },
  {
    question: "If a pencil costs ₦50 and you buy 12 pencils, how much will you pay?",
    answers: [
      { text: "₦500", correct: false },
      { text: "₦550", correct: false },
      { text: "₦600", correct: true },
      { text: "₦650", correct: false },
    ]
  },
  {
    question: "What is the value of x in the equation x/4 = 9?",
    answers: [
      { text: "36", correct: true },
      { text: "40", correct: false },
      { text: "45", correct: false },
      { text: "50", correct: false },
    ]
  },
  {
    question: "If a car travels 180 km in 3 hours, what is its average speed?",
    answers: [
      { text: "40 km/h", correct: false },
      { text: "50 km/h", correct: false },
      { text: "60 km/h", correct: true },
      { text: "70 km/h", correct: false },
    ]
  },
  {
    question: "What is the area of a triangle with a base of 5 cm and a height of 6 cm?",
    answers: [
      { text: "12 cm²", correct: false },
      { text: "15 cm²", correct: true },
      { text: "18 cm²", correct: false },
      { text: "20 cm²", correct: false },
    ]
  },
  {
    question: "If a shirt costs ₦1000 and a 25% discount is applied, how much will you pay?",
    answers: [
      { text: "₦750", correct: true },
      { text: "₦800", correct: false },
      { text: "₦850", correct: false },
      { text: "₦900", correct: false },
    ]
  },
  {
    question: "What is the value of x in the equation 3x + 2 = 14?",
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false },
      { text: "6", correct: false },
    ]
  },
  {
    question: "If a water tank can hold 800 liters of water and 400 liters are already in the tank, what percentage of the tank is filled?",
    answers: [
      { text: "25%", correct: false },
      { text: "50%", correct: true },
      { text: "75%", correct: false },
      { text: "100%", correct: false },
    ]
  },
  {
    question: "What is the perimeter of a rectangle with a length of 10 cm and a width of 6 cm?",
    answers: [
      { text: "26 cm", correct: false },
      { text: "30 cm", correct: false },
      { text: "32 cm", correct: true },
      { text: "36 cm", correct: false },
    ]
  },
  {
    question: "If a book costs ₦600 and a 10% discount is applied, how much will you pay?",
    answers: [
      { text: "₦520", correct: false },
      { text: "₦540", correct: true },
      { text: "₦560", correct: false },
      { text: "₦580", correct: false },
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