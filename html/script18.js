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
    question: "Who was the leader of the Ashanti Empire in Ghana?",
    answers: [
      { text: "Kwame Nkrumah", correct: false },
      { text: "Osei Tutu", correct: true },
      { text: "Shaka Zulu", correct: false },
      { text: "Samori Ture", correct: false },
    ]
  },
  {
    question: "What was the main reason for the Scramble for Africa?",
    answers: [
      { text: "Economic interests", correct: true },
      { text: "Cultural exchange", correct: false },
      { text: "Religious missions", correct: false },
      { text: "Humanitarian aid", correct: false },
    ]
  },
  {
    question: "Who was the famous Nigerian historian and writer?",
    answers: [
      { text: "Chinua Achebe", correct: false },
      { text: "Wole Soyinka", correct: false },
      { text: "Jacob Ade Ajayi", correct: true },
      { text: "Nnamdi Azikiwe", correct: false },
    ]
  },
  {
    question: "What was the significance of the Berlin Conference?",
    answers: [
      { text: "It marked the beginning of European colonization in Africa", correct: true },
      { text: "It led to the end of the slave trade", correct: false },
      { text: "It promoted African unity", correct: false },
      { text: "It established the African Union", correct: false },
    ]
  },
  {
    question: "Who was the leader of the Zulu Kingdom in South Africa?",
    answers: [
      { text: "Shaka Zulu", correct: true },
      { text: "Dingane", correct: false },
      { text: "Cetewayo", correct: false },
      { text: "Mampuru", correct: false },
    ]
  },
  {
    question: "What was the main impact of European colonization on African societies?",
    answers: [
      { text: "It led to economic exploitation and cultural disruption", correct: true },
      { text: "It promoted economic development and cultural exchange", correct: false },
      { text: "It had no significant impact", correct: false },
      { text: "It led to African unity", correct: false },
    ]
  },
  {
    question: "Who was the famous African anti-colonial leader?",
    answers: [
      { text: "Kwame Nkrumah", correct: true },
      { text: "Nnamdi Azikiwe", correct: false },
      { text: "Jomo Kenyatta", correct: false },
      { text: "Samori Ture", correct: false },
    ]
  },
  {
    question: "What was the significance of the trans-Saharan trade?",
    answers: [
      { text: "It facilitated the spread of Islam", correct: true },
      { text: "It led to the decline of empires", correct: false },
      { text: "It promoted European colonization", correct: false },
      { text: "It had no significant impact", correct: false },
    ]
  },
  {
    question: "Who was the leader of the Ethiopian resistance against Italian colonization?",
    answers: [
      { text: "Menelik II", correct: true },
      { text: "Haile Selassie", correct: false },
      { text: "Tewodros II", correct: false },
      { text: "Yohannes IV", correct: false },
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
    question: "Who was the founder of the Mali Empire?",
    answers: [
      { text: "Sundiata Keita", correct: true },
      { text: "Mansa Musa", correct: false },
      { text: "Askia Muhammad", correct: false },
      { text: "Usman dan Fodio", correct: false },
    ]
  },
  {
    question: "What was the main crop grown by slaves in the Americas?",
    answers: [
      { text: "Sugar", correct: true },
      { text: "Cotton", correct: false },
      { text: "Tobacco", correct: false },
      { text: "Coffee", correct: false },
    ]
  },
  {
    question: "Who was the famous African queen who resisted Portuguese colonization?",
    answers: [
      { text: "Queen Njinga", correct: true },
      { text: "Queen Nefertiti", correct: false },
      { text: "Queen Amina", correct: false },
      { text: "Queen Ranavalona", correct: false },
    ]
  },
  {
    question: "What was the significance of the Kingdom of Kongo?",
    answers: [
      { text: "It was a major power in Central Africa", correct: true },
      { text: "It was a European colony", correct: false },
      { text: "It was a minor kingdom", correct: false },
      { text: "It was a Portuguese trading post", correct: false },
    ]
  },
  {
    question: "Who was the leader of the Zulu Kingdom during the Anglo-Zulu War?",
    answers: [
      { text: "Cetewayo kaMpande", correct: true },
      { text: "Shaka Zulu", correct: false },
      { text: "Dingane", correct: false },
      { text: "Mpande", correct: false },
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
    question: "Who was the famous Nigerian nationalist and politician?",
    answers: [
      { text: "Nnamdi Azikiwe", correct: true },
      { text: "Obafemi Awolowo", correct: false },
      { text: "Ahmadu Bello", correct: false },
      { text: "Abubakar Tafawa Balewa", correct: false },
    ]
  },
  {
    question: "What was the significance of the Ashanti gold trade?",
    answers: [
      { text: "It was a major source of wealth for the Ashanti Empire", correct: true },
      { text: "It was a minor trade", correct: false },
      { text: "It was controlled by Europeans", correct: false },
      { text: "It had no significant impact", correct: false },
    ]
  },
  {
    question: "Who was the leader of the Ethiopian forces that defeated the Italians at Adwa?",
    answers: [
      { text: "Menelik II", correct: true },
      { text: "Haile Selassie", correct: false },
      { text: "Tewodros II", correct: false },
      { text: "Yohannes IV", correct: false },
    ]
  },
  {
    question: "What was the main impact of the transatlantic slave trade on African societies?",
    answers: [
      { text: "It led to demographic, economic, and social disruption", correct: true },
      { text: "It promoted economic development", correct: false },
      { text: "It had no significant impact", correct: false },
      { text: "It led to African unity", correct: false },
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