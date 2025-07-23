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
    question: "Who was the founder of the Sokoto Caliphate?",
    answers: [
      { text: "Usman dan Fodio", correct: true },
      { text: "Muhammad Bello", correct: false },
      { text: "Ahmadu Bello", correct: false },
      { text: "Abubakar Tafawa Balewa", correct: false },
    ]
  },
  {
    question: "What was the main reason for the Berlin Conference?",
    answers: [
      { text: "To partition Africa among European powers", correct: true },
      { text: "To promote African unity", correct: false },
      { text: "To end the slave trade", correct: false },
      { text: "To establish African independence", correct: false },
    ]
  },
  {
    question: "Who was the leader of the Kanem-Bornu Empire?",
    answers: [
      { text: "Mai Idris Alooma", correct: true },
      { text: "Sarki Muhammad Bello", correct: false },
      { text: "Usman dan Fodio", correct: false },
      { text: "Ahmadu Bello", correct: false },
    ]
  },
  {
    question: "What was the significance of the Nok culture?",
    answers: [
      { text: "It produced terracotta sculptures", correct: true },
      { text: "It developed a written language", correct: false },
      { text: "It built large cities", correct: false },
      { text: "It had a complex system of government", correct: false },
    ]
  },
  {
    question: "Who was the first indigenous Governor-General of Nigeria?",
    answers: [
      { text: "Nnamdi Azikiwe", correct: true },
      { text: "Obafemi Awolowo", correct: false },
      { text: "Ahmadu Bello", correct: false },
      { text: "Abubakar Tafawa Balewa", correct: false },
    ]
  },
  {
    question: "What was the main impact of European colonization on Nigerian society?",
    answers: [
      { text: "It introduced new economic systems and technologies", correct: true },
      { text: "It preserved traditional cultures", correct: false },
      { text: "It promoted African unity", correct: false },
      { text: "It had no significant impact", correct: false },
    ]
  },
  {
    question: "Who was the leader of the Hausa city-state of Kano?",
    answers: [
      { text: "Sarkin Kano", correct: true },
      { text: "Usman dan Fodio", correct: false },
      { text: "Muhammad Bello", correct: false },
      { text: "Ahmadu Bello", correct: false },
    ]
  },
  {
    question: "What was the significance of the 1914 amalgamation of Nigeria?",
    answers: [
      { text: "It united the northern and southern protectorates", correct: true },
      { text: "It divided the country", correct: false },
      { text: "It ended British rule", correct: false },
      { text: "It started the slave trade", correct: false },
    ]
  },
  {
    question: "Who was the famous Nigerian nationalist?",
    answers: [
      { text: "Nnamdi Azikiwe", correct: true },
      { text: "Obafemi Awolowo", correct: false },
      { text: "Ahmadu Bello", correct: false },
      { text: "Abubakar Tafawa Balewa", correct: false },
    ]
  },
  {
    question: "What was the main reason for the rise of the Sokoto Caliphate?",
    answers: [
      { text: "Jihad and Islamic reform", correct: true },
      { text: "Economic prosperity", correct: false },
      { text: "Military conquest", correct: false },
      { text: "European influence", correct: false },
    ]
  },

  {
    question: "Who was the leader of the anti-colonial resistance in Nigeria?",
    answers: [
      { text: "Nnamdi Azikiwe", correct: false },
      { text: "Obafemi Awolowo", correct: false },
      { text: "Ahmadu Bello", correct: false },
      { text: "Various leaders, including those from the Egba, Ijaw, and other communities", correct: true },
    ]
  },
  {
    question: "What was the main impact of the trans-Saharan trade on West Africa?",
    answers: [
      { text: "It facilitated the spread of Islam", correct: true },
      { text: "It introduced new crops", correct: false },
      { text: "It led to the decline of empires", correct: false },
      { text: "It had no significant impact", correct: false },
    ]
  },
  {
    question: "Who was the founder of the Kanem Empire?",
    answers: [
      { text: "Mai Dunama", correct: true },
      { text: "Sarki Muhammad Bello", correct: false },
      { text: "Usman dan Fodio", correct: false },
      { text: "Ahmadu Bello", correct: false },
    ]
  },
  {
    question: "What was the significance of the Oyo Empire?",
    answers: [
      { text: "It was a major power in Yorubaland", correct: true },
      { text: "It was a major power in Hausaland", correct: false },
      { text: "It was a major power in Igboland", correct: false },
      { text: "It was a European colony", correct: false },
    ]
  },
  {
    question: "Who was the leader of the Hausa city-state of Gobir?",
    answers: [
      { text: "Sarkin Gobir", correct: true },
      { text: "Usman dan Fodio", correct: false },
      { text: "Muhammad Bello", correct: false },
      { text: "Ahmadu Bello", correct: false },
    ]
  },
  {
    question: "What was the main reason for the decline of the Oyo Empire?",
    answers: [
      { text: "Internal conflicts and external pressures", correct: true },
      { text: "Economic prosperity", correct: false },
      { text: "Military conquest", correct: false },
      { text: "European influence", correct: false },
    ]
  },
  {
    question: "Who was the famous Nigerian historian?",
    answers: [
      { text: "Jacob Ade Ajayi", correct: true },
      { text: "Nnamdi Azikiwe", correct: false },
      { text: "Obafemi Awolowo", correct: false },
      { text: "Ahmadu Bello", correct: false },
    ]
  },
  {
    question: "What was the significance of the Benin Empire?",
    answers: [
      { text: "It was a major power in the Niger Delta region", correct: true },
      { text: "It was a major power in Hausaland", correct: false },
      { text: "It was a major power in Yorubaland", correct: false },
      { text: "It was a European colony", correct: false },
    ]
  },
  {
    question: "Who was the leader of the Igbo people during the colonial era?",
    answers: [
      { text: "There was no single leader", correct: true },
      { text: "Nnamdi Azikiwe", correct: false },
      { text: "Obafemi Awolowo", correct: false },
      { text: "Ahmadu Bello", correct: false },
    ]
  },
  {
    question: "What was the main impact of colonial rule on Nigerian society?",
    answers: [
      { text: "It introduced new economic systems and technologies", correct: true },
      { text: "It preserved traditional cultures", correct: false },
      { text: "It promoted African unity", correct: false },
      { text: "It had no significant impact", correct: false },
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