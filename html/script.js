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
        question:"which animal is the largest in the world?",
        answers: [
            {text: "shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question:"which is the capital of Nigeria?",
        answers: [
            {text: "Lagos", correct: false},
            {text: "Abuja", correct: true},
            {text: "Ibadan", correct: false},
            {text: "Uyo", correct: false},
        ]
    },
    {
        question:"Nigeria gained Independence in??",
        answers: [
            {text: "1812", correct: false},
            {text: "1960", correct: true},
            {text: "1963", correct: false},
            {text: "2021", correct: false},
        ]
    },
    {
        question:"The ruling party in Nigria is?",
        answers: [
            {text: "PDP", correct: false},
            {text: "ADC", correct: false},
            {text: "APC", correct: true},
            {text: "APGA", correct: false},
        ]
    },
    {   
        question: "Who is the current President of Nigeria?",
          answers: [
            { text: "Muhammadu Buhari", correct: false },
            { text: "Yakubu Gowon", correct: false },
            { text: "Goodluck Jonathan", correct: false },
            { text: "Bola Tinubu", correct: true },
          ]
        },
        {
          question: "What is the largest ethnic group in Nigeria?",
          answers: [
            { text: "Yoruba", correct: false },
            { text: "Igbo", correct: false },
            { text: "Hausa", correct: true },
            { text: "Ijaw", correct: false },
          ]
        },
        {
          question: "Which Nigerian author wrote 'Things Fall Apart'?",
          answers: [
            { text: "Wole Soyinka", correct: false },
            { text: "Chinua Achebe", correct: true },
            { text: "Ben Okri", correct: false },
            { text: "Ken Saro-Wiwa", correct: false },
          ]
        },
        {
          question: "What is the name of Nigeria's national currency?",
          answers: [
            { text: "Naira", correct: true },
            { text: "Dollar", correct: false },
            { text: "Pound", correct: false },
            { text: "Euro", correct: false },
          ]
        },
        {
          question: "Which Nigerian city is known as the 'Centre of Commerce'?",
          answers: [
            { text: "Lagos", correct: true },
            { text: "Abuja", correct: false },
            { text: "Kano", correct: false },
            { text: "Port Harcourt", correct: false },
          ]
        },
        {
          question: "Who was the first military Head of State in Nigeria?",
          answers: [
            { text: "Aguiyi Ironsi", correct: true },
            { text: "Yakubu Gowon", correct: false },
            { text: "Murtala Muhammed", correct: false },
            { text: "Olusegun Obasanjo", correct: false },
          ]
        },
        {
          question: "What is the name of Nigeria's national football team?",
          answers: [
            { text: "Super Eagles", correct: true },
            { text: "Green Eagles", correct: false },
            { text: "Nigeria Lions", correct: false },
            { text: "African Stars", correct: false },
          ]
        },
        {
          question: "Which Nigerian state is known for its oil production?",
          answers: [
            { text: "Imo", correct: false },
            { text: "Kogi", correct: false },
            { text: "Bayelsa", correct: true },
            { text: "Lagos", correct: false },
          ]
        },
        {
          question: "Who was the first President of Nigeria?",
          answers: [
            { text: "Nnamdi Azikiwe", correct: true },
            { text: "Obafemi Awolowo", correct: false },
            { text: "Ahmadu Bello", correct: false },
            { text: "Goodluck Jonathan", correct: false },
          ]
        },
        {
          question: "What is the name of Nigeria's national anthem?",
          answers: [
            { text: "Arise, O Compatriots", correct: false },
            { text: "Nigeria, We Hail Thee", correct: true },
            { text: "Unity and Faith", correct: false },
            { text: "One Nigeria", correct: false },
          ]
        },
        {
          question: "Which Nigerian city is the capital?",
          answers: [
            { text: "Lagos", correct: false },
            { text: "Abuja", correct: true },
            { text: "Kano", correct: false },
            { text: "Port Harcourt", correct: false },
          ]
        },
        {
          question: "Who is the founder of the Nigerian state?",
          answers: [
            { text: "Lord Frederick Lugard", correct: true },
            { text: "Nnamdi Azikiwe", correct: false },
            { text: "Obafemi Awolowo", correct: false },
            { text: "Ahmadu Bello", correct: false },
          ]
        },
        {
          question: "What is the name of the Nigerian civil war that occurred from 1967 to 1970?",
          answers: [
            { text: "Biafra war", correct: true },
            { text: "Gaza war", correct: false },
            { text: "civil war", correct: false },
            { text: "world war", correct: false },
          ]
      },
      {
        question: "The tallest mountain in the world is?",
        answers: [
          { text: "Mountain Everest", correct: true },
          { text: "Mount zion", correct: false },
          { text: "Mount kilimanjaro", correct: false },
          { text: "Mount sinai", correct: false },
        ]
    },
    {
        question: "What is the fastest animal on earth?",
        answers: [
          { text: "Gazette", correct: false },
          { text: "cheetah", correct: false },
          { text: "leopard", correct: false },
          { text: "peregrin falcon", correct: true },
        ]
    },
    {
        question: "The Central Bank of Nigeria is found where?",
        answers: [
          { text: "Lagos", correct: false },
          { text: "Kano", correct: false },
          { text: "Enugu", correct: false },
          { text: "Abuja", correct: true },
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