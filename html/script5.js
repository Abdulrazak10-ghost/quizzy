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
    question: "Who is the national hero of Nigeria?",
    answers: [
      { text: "Nnamdi Azikiwe", correct: true },
      { text: "Obafemi Awolowo", correct: false },
      { text: "Ahmadu Bello", correct: false },
      { text: "Goodluck Jonathan", correct: false },
    ]
  },
  {
    question: "What is the capital city of Nigeria?",
    answers: [
      { text: "Lagos", correct: false },
      { text: "Abuja", correct: true },
      { text: "Kano", correct: false },
      { text: "Port Harcourt", correct: false },
    ]
  },
  {
    question: "Which Nigerian leader was known as the 'Lion of the North'?",
    answers: [
      { text: "Ahmadu Bello", correct: true },
      { text: "Nnamdi Azikiwe", correct: false },
      { text: "Obafemi Awolowo", correct: false },
      { text: "Murtala Muhammed", correct: false },
    ]
  },
  {
    question: "What is the name of the river that is the longest in Nigeria?",
    answers: [
      { text: "River Niger", correct: true },
      { text: "River Benue", correct: false },
      { text: "River Kaduna", correct: false },
      { text: "River Cross", correct: false },
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
    question: "What is the name of the Nigerian national currency?",
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
    question: "Who was the leader of the Biafran secessionist movement?",
    answers: [
      { text: "Odumegwu Ojukwu", correct: true },
      { text: "Nnamdi Azikiwe", correct: false },
      { text: "Obafemi Awolowo", correct: false },
      { text: "Ahmadu Bello", correct: false },
    ]
  },
  {
    question: "What is the name of the Nigerian national anthem?",
    answers: [
      { text: "Arise, O Compatriots", correct: true },
      { text: "Nigeria, We Hail Thee", correct: false },
      { text: "Unity and Faith", correct: false },
      { text: "One Nigeria", correct: false },
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
    question: "What is the name of the ancient city in Nigeria known for its Nok terracottas?",
    answers: [
      { text: "Ile-Ife", correct: false },
      { text: "Benin City", correct: false },
      { text: "Nok", correct: true },
      { text: "Kano", correct: false },
    ]
  },
  {
    question: "Who led the anti-slavery movement in Nigeria during the 19th century?",
    answers: [
      { text: "Samuel Ajayi Crowther", correct: true },
      { text: "King Jaja of Opobo", correct: false },
      { text: "Queen Amina of Zaria", correct: false },
      { text: "Usman dan Fodio", correct: false },
    ]
  },
  {
    question: "What is the name of the Nigerian festival celebrated by the Yoruba people?",
    answers: [
      { text: "Eyo Festival", correct: true },
      { text: "Osun Osogbo Festival", correct: false },
      { text: "Durbar Festival", correct: false },
      { text: "Calabar Carnival", correct: false },
    ]
  },
  {
    question: "Who was the leader of the Sokoto Caliphate?",
    answers: [
      { text: "Usman dan Fodio", correct: true },
      { text: "Muhammad Bello", correct: false },
      { text: "Ahmadu Bello", correct: false },
      { text: "Abubakar Tafawa Balewa", correct: false },
    ]
  },
  {
    question: "What is the name of the Nigerian national pledge?",
    answers: [
      { text: "I pledge to Nigeria", correct: true },
      { text: "One Nigeria", correct: false },
      { text: "Arise, O Compatriots", correct: false },
      { text: "Nigeria, We Hail Thee", correct: false },
    ]
  },
  {
    question: "Who is the author of the book 'Things Fall Apart'?",
    answers: [
      { text: "Chinua Achebe", correct: true },
      { text: "Wole Soyinka", correct: false },
      { text: "Ben Okri", correct: false },
      { text: "Ken Saro-Wiwa", correct: false },
    ]
  },
  {
    question: "What is the name of the Nigerian city known for its ancient walls and moats?",
    answers: [
      { text: "Suleja", correct: false },
      { text: "Kano", correct: false },
      { text: "Benin City", correct: true },
      { text: "Ile-Ife", correct: false },
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
    question: "What is the name of the Nigerian mountain range in the eastern part of the country?",
    answers: [
      { text: "Obudu Plateau", correct: true },
      { text: "Mambilla Plateau", correct: false },
      { text: "Jos Plateau", correct: false },
      { text: "Adamawa Mountains", correct: false },
    ]
  },
  {
    question: "Who led the Nigerian independence movement?",
    answers: [
      { text: "Nnamdi Azikiwe", correct: true },
      { text: "Obafemi Awolowo", correct: false },
      { text: "Ahmadu Bello", correct: false },
      { text: "Abubakar Tafawa Balewa", correct: false },
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