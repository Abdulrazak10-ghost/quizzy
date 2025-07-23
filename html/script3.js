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
      { text: "2", correct: true },
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "5", correct: false },
    ]
  },
  {
    question: "If a book costs ₦500, how much will 3 books cost?",
    answers: [
      { text: "₦1000", correct: false },
      { text: "₦1500", correct: true },
      { text: "₦2000", correct: false },
      { text: "₦2500", correct: false },
    ]
  },
  {
    question: "What is the perimeter of a rectangle with a length of 6cm and a width of 4cm?",
    answers: [
      { text: "10cm", correct: false },
      { text: "16cm", correct: false },
      { text: "20cm", correct: true },
      { text: "24cm", correct: false },
    ]
  },
  {
    question: "If Sally has 12 pencils and she gives 2 to her friend, how many pencils does Sally have left?",
    answers: [
      { text: "10", correct: true },
      { text: "12", correct: false },
      { text: "14", correct: false },
      { text: "16", correct: false },
    ]
  },
  {
    question: "What is the value of 7 x 9?",
    answers: [
      { text: "56", correct: false },
      { text: "63", correct: true },
      { text: "65", correct: false },
      { text: "72", correct: false },
    ]
  },
  {
    question: "If a bag of rice weighs 25kg, how many bags will weigh 100kg?",
    answers: [
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false },
    ]
  },
  {
    question: "What is the sum of 45 + 27?",
    answers: [
      { text: "62", correct: false },
      { text: "72", correct: true },
      { text: "82", correct: false },
      { text: "92", correct: false },
    ]
  },
  {
    question: "If a bicycle costs ₦8000 and a helmet costs ₦2000, how much will they cost together?",
    answers: [
      { text: "₦9000", correct: false },
      { text: "₦10000", correct: true },
      { text: "₦11000", correct: false },
      { text: "₦12000", correct: false },
    ]
  },
  {
    question: "What is the value of 24 ÷ 4?",
    answers: [
      { text: "4", correct: false },
      { text: "6", correct: true },
      { text: "8", correct: false },
      { text: "12", correct: false },
    ]
  },
  {
    question: "If a water tank can hold 1200 liters of water and 300 liters are already in the tank, how much more water can be added?",
    answers: [
      { text: "600 liters", correct: false },
      { text: "900 liters", correct: true },
      { text: "1000 liters", correct: false },
      { text: "1100 liters", correct: false },
    ]
  },
  {
    question: "What is the value of x in the equation x - 3 = 7?",
    answers: [
      { text: "4", correct: false },
      { text: "10", correct: true },
      { text: "11", correct: false },
      { text: "12", correct: false },
    ]
  },
  {
    question: "If a rectangular garden measures 8m by 5m, what is its area?",
    answers: [
      { text: "20m²", correct: false },
      { text: "30m²", correct: false },
      { text: "40m²", correct: true },
      { text: "50m²", correct: false },
    ]
  },
  {
    question: "What is the value of 9 x 6?",
    answers: [
      { text: "42", correct: false },
      { text: "54", correct: true },
      { text: "63", correct: false },
      { text: "72", correct: false },
    ]
  },
  {
    question: "If a boy has ₦120 and he spends ₦40, how much money does he have left?",
    answers: [
      { text: "₦60", correct: false },
      { text: "₦80", correct: true },
      { text: "₦100", correct: false },
      { text: "₦120", correct: false },
    ]
  },
  {
    question: "What is the perimeter of a square with a side length of 6cm?",
    answers: [
      { text: "12cm", correct: false },
      { text: "18cm", correct: false },
      { text: "24cm", correct: true },
      { text: "30cm", correct: false },
    ]
  },
  {
    question: "If a car travels 250km in 5 hours, how many kilometers does it travel per hour?",
    answers: [
      { text: "25km/h", correct:  false },
      { text: "50km/h", correct: true },
      { text: "60km/h", correct: false },
      { text: "70km/h", correct: false },
    ]
  },
  {
    question: "What is the value of 48 ÷ 6?",
    answers: [
      { text: "6", correct: false },
      { text: "7", correct: false },
      { text: "8", correct: true },
      { text: "9", correct: false },
    ]
  },
  {
    question: "If a pencil costs ₦50, how much will 6 pencils cost?",
    answers: [
      { text: "₦200", correct: false },
      { text: "₦250", correct: false },
      { text: "₦300", correct: true },
      { text: "₦350", correct: false },
    ]
  },
  {
    question: "What is the sum of 23 + 17?",
    answers: [
      { text: "30", correct: false },
      { text: "40", correct: true },
      { text: "50", correct: false },
      { text: "60", correct: false },
    ]
  },
  {
    question: "If a water bottle can hold 2 liters of water, how many bottles can be filled with 8 liters of water?",
    answers: [
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false },
    ]
  },

  {
    question: "What is the value of x in the equation 3x = 24?",
    answers: [
      { text: "6", correct: false },
      { text: "7", correct: false },
      { text: "8", correct: true },
      { text: "9", correct: false },
    ]
  },
  {
    question: "If a bookshelf has 5 shelves, and each shelf can hold 8 books, how many books can the bookshelf hold in total?",
    answers: [
      { text: "20", correct: false },
      { text: "30", correct: false },
      { text: "40", correct: true },
      { text: "50", correct: false },
    ]
  },
  {
    question: "What is the value of 11 x 9?",
    answers: [
      { text: "90", correct: false },
      { text: "99", correct: true },
      { text: "100", correct: false },
      { text: "110", correct: false },
    ]
  },
  {
    question: "If a bakery sells 250 loaves of bread per day, how many loaves will it sell in 4 days?",
    answers: [
      { text: "500", correct: false },
      { text: "750", correct: false },
      { text: "1000", correct: true },
      { text: "1250", correct: false },
    ]
  },
  {
    question: "What is the perimeter of a triangle with sides 5cm, 6cm, and 7cm?",
    answers: [
      { text: "12cm", correct: false },
      { text: "15cm", correct: false },
      { text: "18cm", correct: true },
      { text: "20cm", correct: false },
    ]
  },
  {
    question: "If a group of friends want to share some money equally, and they have ₦120, how much will each friend get if there are 8 friends?",
    answers: [
      { text: "₦10", correct: false },
      { text: "₦15", correct: true },
      { text: "₦20", correct: false },
      { text: "₦25", correct: false },
    ]
  },
  {
    question: "What is the value of 63 ÷ 9?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
    ]
  },
  {
    question: "If a pencil is 15cm long, and it is divided into 5 parts, how long is each part?",
    answers: [
      { text: "2cm", correct: false },
      { text: "3cm", correct: true },
      { text: "4cm", correct: false },
      { text: "5cm", correct: false },
    ]
  },
  {
    question: "What is the sum of 45 + 27 + 13?",
    answers: [
      { text: "70", correct: false },
      { text: "75", correct: false },
      { text: "85", correct: true },
      { text: "90", correct: false },
    ]
  },
  {
    question: "If a car travels 120km in 2 hours, how many kilometers does it travel per hour?",
    answers: [
      { text: "40km/h", correct: false },
      { text: "50km/h", correct: false },
      { text: "60km/h", correct: true },
      { text: "70km/h", correct: false },
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