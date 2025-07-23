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
    question: "Who was the leader of the Sokoto Caliphate?",
    answers: [
      { text: "Usman dan Fodio", correct: true },
      { text: "Muhammad Bello", correct: false },
      { text: "Ahmadu Bello", correct: false },
      { text: "Abubakar Tafawa Balewa", correct: false },
    ]
  },
  {
    question: "What was the main reason for the Berlin Conference of 1884-1885?",
    answers: [
      { text: "To partition Africa among European powers", correct: true },
      { text: "To promote African unity", correct: false },
      { text: "To end the slave trade", correct: false },
      { text: "To establish African independence", correct: false },
    ]
  },
  {
    question: "Who was the first President of Nigeria?",
    answers: [
      { text: "Nnamdi Azikiwe", correct: true },
      { text: "Obafemi Awolowo", correct: false },
      { text: "Ahmadu Bello", correct: false },
      { text: "Abubakar Tafawa Balewa", correct: false },
    ]
  },
  {
    question: "What was the name of the Nigerian civil war that lasted from 1967 to 1970?",
    answers: [
      { text: "Biafran War", correct: true },
      { text: "Nigerian War", correct: false },
      { text: "Civil War", correct: false },
      { text: "Biafran Conflict", correct: false },
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
    question: "What was the main economic activity of the Nok people?",
    answers: [
      { text: "Agriculture", correct: true },
      { text: "Trade", correct: false },
      { text: "Hunting", correct: false },
      { text: "Fishing", correct: false },
    ]
  },
  {
    question: "Who was the founder of the Oyo Empire?",
    answers: [
      { text: "Oduduwa", correct: true },
      { text: "Oranmiyan", correct: false },
      { text: "Alaafin", correct: false },
      { text: "Sango", correct: false },
    ]
  },
  {
    question: "What was the name of the famous Nigerian historian who wrote 'Things Fall Apart'?",
    answers: [
      { text: "Chinua Achebe", correct: true },
      { text: "Wole Soyinka", correct: false },
      { text: "Ben Okri", correct: false },
      { text: "Ken Saro-Wiwa", correct: false },
    ]
  },
  {
    question: "Who was the leader of the anti-slavery movement in Nigeria?",
    answers: [
      { text: "Samuel Ajayi Crowther", correct: true },
      { text: "King Jaja of Opobo", correct: false },
      { text: "Queen Amina of Zaria", correct: false },
      { text: "Usman dan Fodio", correct: false },
    ]
  },
  {
    question: "What was the main reason for the decline of the Oyo Empire?",
    answers: [
      { text: "Internal conflicts and external attacks", correct: true },
      { text: "Economic decline", correct: false },
      { text: "Environmental factors", correct: false },
      { text: "Disease", correct: false },
    ]
  },
  {
    question: "Who was the first European explorer to visit Nigeria?",
    answers: [
      { text: "Portuguese", correct: true },
      { text: "British", correct: false },
      { text: "French", correct: false },
      { text: "Dutch", correct: false },
    ]
  },
  {
    question: "What was the name of the Nigerian nationalist movement that fought for independence?",
    answers: [
      { text: "Nigerian National Democratic Party", correct: true },
      { text: "Nigerian People's Congress", correct: false },
      { text: "Action Group", correct: false },
      { text: "National Council of Nigeria and the Cameroons", correct: false },
    ]
  },

  {
    question: "What was the significance of the Berlin Conference?",
    answers: [
      { text: "It marked the beginning of European colonization in Africa", correct: true },
      { text: "It led to the end of the slave trade", correct: false },
      { text: "It established African independence", correct: false },
      { text: "It promoted African unity", correct: false },
    ]
  },
  {
    question: "Who was the leader of the Kanem-Bornu Empire during its peak?",
    answers: [
      { text: "Mai Idris Alooma", correct: true },
      { text: "Sarki Muhammad Bello", correct: false },
      { text: "Usman dan Fodio", correct: false },
      { text: "Ahmadu Bello", correct: false },
    ]
  },
  {
    question: "What was the main crop grown by the Hausa people?",
    answers: [
      { text: "Cotton", correct: true },
      { text: "Yams", correct: false },
      { text: "Cassava", correct: false },
      { text: "Maize", correct: false },
    ]
  },
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
    question: "What was the significance of the Nok culture?",
    answers: [
      { text: "It produced terracotta sculptures", correct: true },
      { text: "It developed a written language", correct: false },
      { text: "It built large cities", correct: false },
      { text: "It had a complex system of government", correct: false },
    ]
  },
  {
    question: "Who was the leader of the Yoruba people during the 19th century?",
    answers: [
      { text: "Alaafin of Oyo", correct: true },
      { text: "Oba of Benin", correct: false },
      { text: "Sarki of Sokoto", correct: false },
      { text: "King Jaja of Opobo", correct: false },
    ]
  },
  {
    question: "What was the main reason for the rise of the Hausa city-states?",
    answers: [
      { text: "Trade and commerce", correct: true },
      { text: "Military conquest", correct: false },
      { text: "Agriculture", correct: false },
      { text: "Religion", correct: false },
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
    question: "What was the significance of the 1914 amalgamation of Nigeria?",
    answers: [
      { text: "It united the northern and southern protectorates", correct: true },
      { text: "It led to Nigerian independence", correct: false },
      { text: "It established a federal system of government", correct: false },
      { text: "It promoted economic development", correct: false },
    ]
  },
  {
    question: "Who was the leader of the Egba people during the 19th century?",
    answers: [
      { text: "Sodeke", correct: true },
      { text: "Oduduwa", correct: false },
      { text: "Alaafin", correct: false },
      { text: "Oba", correct: false },
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
    question: "Who was the founder of the Hausa city-state of Kano?",
    answers: [
      { text: "Sarkin Kano", correct: true },
      { text: "Usman dan Fodio", correct: false },
      { text: "Muhammad Bello", correct: false },
      { text: "Ahmadu Bello", correct: false },
    ]
  },
  {
    question: "What was the main crop grown by the people of the ancient Nok civilization?",
    answers: [
      { text: "Millet", correct: true },
      { text: "Yams", correct: false },
      { text: "Cassava", correct: false },
      { text: "Maize", correct: false },
    ]
  },
  {
    question: "Who was the leader of the Kanem Empire?",
    answers: [
      { text: "Mai Dunama", correct: false },
      { text: "Mai Idris Alooma", correct: true },
      { text: "Sarki Muhammad Bello", correct: false },
      { text: "Usman dan Fodio", correct: false },
    ]
  },
  {
    question: "What was the significance of the Berlin Conference?",
    answers: [
      { text: "It marked the beginning of European colonization in Africa", correct: true },
      { text: "It ended the slave trade", correct: false },
      { text: "It promoted African unity", correct: false },
      { text: "It established African independence", correct: false },
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
    question: "What was the main reason for the rise of the Sokoto Caliphate?",
    answers: [
      { text: "Jihad and Islamic reform", correct: true },
      { text: "Economic prosperity", correct: false },
      { text: "Military conquest", correct: false },
      { text: "European influence", correct: false },
    ]
  },
  {
    question: "Who was the famous Nigerian historian and writer?",
    answers: [
      { text: "Chinua Achebe", correct: true },
      { text: "Wole Soyinka", correct: false },
      { text: "Ben Okri", correct: false },
      { text: "Ken Saro-Wiwa", correct: false },
    ]
  },
  {
    question: "What was the main impact of European colonization on Nigerian society?",
    answers: [
      { text: "Cultural and economic changes", correct: true },
      { text: "No impact", correct: false },
      { text: "Only economic changes", correct: false },
      { text: "Only cultural changes", correct: false },
    ]
  },
  {
    question: "Who was the leader of the Nigerian independence movement?",
    answers: [
      { text: "Nnamdi Azikiwe", correct: true },
      { text: "Obafemi Awolowo", correct: false },
      { text: "Ahmadu Bello", correct: false },
      { text: "Abubakar Tafawa Balewa", correct: false },
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
    question: "What was the main reason for the construction of the railway in Nigeria?",
    answers: [
      { text: "To facilitate transportation and trade", correct: true },
      { text: "To promote tourism", correct: false },
      { text: "To improve communication", correct: false },
      { text: "none", correct: false},
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