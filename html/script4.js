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
    question: "What is the value of x in the equation 2x + 2 = 12?",
    answers: [
      { text: "4", correct: false },
      { text: "5", correct: true },
      { text: "6", correct: false },
      { text: "7", correct: false },
    ]
  },
  {
    question: "If a rectangular plot of land measures 12m by 8m, what is its area?",
    answers: [
      { text: "80m²", correct: false },
      { text: "96m²", correct: true },
      { text: "100m²", correct: false },
      { text: "120m²", correct: false },
    ]
  },
  {
    question: "What is the value of 15% of 200?",
    answers: [
      { text: "20", correct: false },
      { text: "25", correct: false },
      { text: "30", correct: true },
      { text: "40", correct: false },
    ]
  },
  {
    question: "If a book costs ₦800 and a discount of 10% is given, how much will the book cost?",
    answers: [
      { text: "₦700", correct: false },
      { text: "₦720", correct: true },
      { text: "₦750", correct: false },
      { text: "₦780", correct: false },
    ]
  },
  {
    question: "What is the perimeter of a square with a side length of 8cm?",
    answers: [
      { text: "24cm", correct: false },
      { text: "28cm", correct: false },
      { text: "32cm", correct: true },
      { text: "36cm", correct: false },
    ]
  },
  {
    question: "If a water tank can hold 2400 liters of water and 1200 liters are already in the tank, what percentage of the tank is filled?",
    answers: [
      { text: "25%", correct: false },
      { text: "50%", correct: true },
      { text: "60%", correct: false },
      { text: "75%", correct: false },
    ]
  },
  {
    question: "What is the value of 24 ÷ 0.8?",
    answers: [
      { text: "20", correct: false },
      { text: "25", correct: false },
      { text: "30", correct: true },
      { text: "35", correct: false },
    ]
  },
  {
    question: "If a bicycle costs ₦15000 and a VAT of 5% is added, how much will the bicycle cost?",
    answers: [
      { text: "₦15500", correct: false },
      { text: "₦15750", correct: true },
      { text: "₦16000", correct: false },
      { text: "₦16500", correct: false },
    ]
  },
  {
    question: "What is the sum of the interior angles of a triangle?",
    answers: [
      { text: "180°", correct: true },
      { text: "270°", correct: false },
      { text: "360°", correct: false },
      { text: "450°", correct: false },
    ]
  },
  {
    question: "If a group of friends want to share some money equally, and they have ₦1800, how much will each friend get if there are 12 friends?",
    answers: [
      { text: "₦100", correct: false },
      { text: "₦150", correct: true },
      { text: "₦200", correct: false },
      { text: "₦250", correct: false },
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
    question: "If a cylindrical tank has a radius of 4m and a height of 10m, what is its volume?",
    answers: [
      { text: "160π m³", correct: true },
      { text: "120π m³", correct: false },
      { text: "100π m³", correct: false },
      { text: "80π m³", correct: false },
    ]
  },
  {
    question: "What is the value of 25 × 0.4?",
    answers: [
      { text: "8", correct: false },
      { text: "10", correct: true },
      { text: "12", correct: false },
      { text: "15", correct: false },
    ]
  },
  {
    question: "If a shirt costs ₦1200 and a discount of 15% is given, how much will the shirt cost?",
    answers: [
      { text: "₦1000", correct: false },
      { text: "₦1020", correct: true },
      { text: "₦1050", correct: false },
      { text: "₦1100", correct: false },
    ]
  },
  {
    question: "What is the value of 18²?",
    answers: [
      { text: "300", correct: false },
      { text: "320", correct: false },
      { text: "324", correct: true },
      { text: "350", correct: false },
    ]
  },
  {
    question: "If a group of friends want to share some money equally, and they have ₦2400, how much will each friend get if there are 16 friends?",
    answers: [
      { text: "₦120", correct: false },
      { text: "₦150", correct: true },
      { text: "₦180", correct: false },
      { text: "₦200", correct: false },
    ]
  },
  {
    question: "What is the value of 48 ÷ 0.6?",
    answers: [
      { text: "60", correct: false },
      { text: "70", correct: false },
      { text: "80", correct: true },
      { text: "90", correct: false },
    ]
  },
  {
    question: "If a car travels 300km in 5 hours, what is its average speed?",
    answers: [
      { text: "50km/h", correct: false },
      { text: "55km/h", correct: false },
      { text: "60km/h", correct: true },
      { text: "65km/h", correct: false },
    ]
  },
  {
    question: "What is the sum of the exterior angles of any polygon?",
    answers: [
      { text: "180°", correct: false },
      { text: "270°", correct: false },
      { text: "360°", correct: true },
      { text: "450°", correct: false },
    ]
  },
  {
    question: "If a water pipe can fill a tank in 8 hours, how much of the tank will it fill in 2 hours?",
    answers: [
      { text: "1/2", correct: false },
      { text: "1/3", correct: false },
      { text: "1/4", correct: true },
      { text: "1/5", correct: false },
    ]
  },
  {
    question: "What is the value of x in the equation 2x - 5 = 11?",
    answers: [
      { text: "6", correct: false },
      { text: "7", correct: false },
      { text: "8", correct: true },
      { text: "9", correct: false },
    ]
  },
  {
    question: "If a bag of rice weighs 25kg, and you want to divide it into 5kg bags, how many bags can you fill?",
    answers: [
      { text: "4", correct: false },
      { text: "5", correct: true },
      { text: "6", correct: false },
      { text: "7", correct: false },
    ]
  },
  {
    question: "What is the value of 12 × 9?",
    answers: [
      { text: "100", correct: false },
      { text: "108", correct: true },
      { text: "120", correct: false },
      { text: "130", correct: false },
    ]
  },
  {
    question: "If a bicycle costs ₦25000 and a VAT of 5% is added, how much will the bicycle cost?",
    answers: [
      { text: "₦26000", correct: false },
      { text: "₦26250", correct: true },
      { text: "₦26500", correct: false },
      { text: "₦27000", correct: false },
    ]
  },
  {
    question: "What is the value of 15% of 300?",
    answers: [
      { text: "40", correct: false },
      { text: "45", correct: true },
      { text: "50", correct: false },
      { text: "60", correct: false },
    ]
  },
  {
    question: "If a car travels 250km in 5 hours, how many kilometers does it travel per hour?",
    answers: [
      { text: "40km/h", correct: false },
      { text: "45km/h", correct: false },
      { text: "50km/h", correct: true },
      { text: "55km/h", correct: false },
    ]
  },
  {
    question: "What is the value of 24 × 0.5?",
    answers: [
      { text: "10", correct: false },
      { text: "12", correct: true },
      { text: "15", correct: false },
      { text: "20", correct: false },
    ]
  },
  {
    question: "If a group of friends want to share some money equally, and they have ₦3000, how much will each friend get if there are 20 friends?",
    answers: [
      { text: "₦100", correct: false },
      { text: "₦150", correct: true },
      { text: "₦200", correct: false },
      { text: "₦250", correct: false },
    ]
  },
  {
    question: "What is the sum of the interior angles of a quadrilateral?",
    answers: [
      { text: "180°", correct: false },
      { text: "270°", correct: false },
      { text: "360°", correct: true },
      { text: "450°", correct: false },
    ]
  },
  {
    question: "If a water tank can hold 3600 liters of water and 1800 liters are already in the tank, what percentage of the tank is filled?",
    answers: [
      { text: "25%", correct: false },
      { text: "50%", correct: true },
      { text: "60%", correct: false },
      { text: "75%", correct: false },
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