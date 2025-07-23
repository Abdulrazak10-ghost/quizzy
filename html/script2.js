
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
    question: "What is the opposite of 'big'?",
    answers: [
      { text: "Large", correct: false },
      { text: "Small", correct: true },
      { text: "Happy", correct: false },
      { text: "Fast", correct: false },
    ]
  },
  {
    question: "Which word is a synonym for 'happy'?",
    answers: [
      { text: "Sad", correct: false },
      { text: "Joyful", correct: true },
      { text: "Angry", correct: false },
      { text: "Tired", correct: false },
    ]
  },
  {
    question: "What is the plural form of 'tooth'?",
    answers: [
      { text: "Teeth", correct: true },
      { text: "Toothes", correct: false },
      { text: "Toothies", correct: false },
      { text: "Toothy", correct: false },
    ]
  },
  {
    question: "Which sentence is in the present tense?",
    answers: [
      { text: "I will eat breakfast", correct: false },
      { text: "I am eating breakfast", correct: true },
      { text: "I ate breakfast", correct: false },
      { text: "I have eaten breakfast", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'persuade'?",
    answers: [
      { text: "To force someone to do something", correct: false },
      { text: "To convince someone to do something", correct: true },
      { text: "To ignore someone", correct: false },
      { text: "To argue with someone", correct: false },
    ]
  },
  {
    question: "Which word is a noun?",
    answers: [
      { text: "Run", correct: false },
      { text: "Happy", correct: false },
      { text: "Dog", correct: true },
      { text: "Quickly", correct: false },
    ]
  },
  {
    question: "What is the correct form of the possessive adjective 'my'?",
    answers: [
      { text: "Mine", correct: false },
      { text: "My", correct: true },
      { text: "Myself", correct: false },
      { text: "Me", correct: false },
    ]
  },
  {
    question: "Which sentence is in the passive voice?",
    answers: [
      { text: "The dog bites the man", correct: false },
      { text: "The man is bitten by the dog", correct: true },
      { text: "The dog is running", correct: false },
      { text: "The man is happy", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'narrate'?",
    answers: [
      { text: "To tell a story", correct: true },
      { text: "To write a story", correct: false },
      { text: "To read a story", correct: false },
      { text: "To act out a story", correct: false },
    ]
  },
  {
    question: "Which word is a verb?",
    answers: [
      { text: "Run", correct: true },
      { text: "Happy", correct: false },
      { text: "Dog", correct: false },
      { text: "Big", correct: false },
    ]
  },
  // ... 40 more questions ...
  {
    question: "What is the correct form of the verb 'go' in the past tense?",
    answers: [
      { text: "Go", correct: false },
      { text: "Going", correct: false },
      { text: "Went", correct: true },
      { text: "Gone", correct: false },
    ]
  },
  {
    question: "Which sentence is a complex sentence?",
    answers: [
      { text: "I went to the store", correct: false },
      { text: "I went to the store because I needed milk", correct: true },
      { text: "I bought milk and eggs", correct: false },
      { text: "I am happy", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'analyze'?",
    answers: [
      { text: "To examine something closely", correct: true },
      { text: "To ignore something", correct: false },
      { text: "To simplify something", correct: false },
      { text: "To complicate something", correct: false },
    ]
  },
    {
    question: "What is the correct form of the verb 'eat' in the past tense?",
    answers: [
      { text: "Eat", correct: false },
      { text: "Eating", correct: false },
      { text: "Ate", correct: true },
      { text: "Eaten", correct: false },
    ]
  },
  {
    question: "Which word is a pronoun?",
    answers: [
      { text: "He", correct: true },
      { text: "Run", correct: false },
      { text: "Happy", correct: false },
      { text: "Dog", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'compare'?",
    answers: [
      { text: "To examine similarities and differences", correct: true },
      { text: "To ignore differences", correct: false },
      { text: "To simplify something", correct: false },
      { text: "To complicate something", correct: false },
    ]
  },
  {
    question: "Which sentence is in the future tense?",
    answers: [
      { text: "I will go to the store", correct: true },
      { text: "I am going to the store", correct: false },
      { text: "I went to the store", correct: false },
      { text: "I have gone to the store", correct: false },
    ]
  },
  {
    question: "What is the correct form of the possessive adjective 'their'?",
    answers: [
      { text: "Theirs", correct: false },
      { text: "Their", correct: true },
      { text: "Them", correct: false },
      { text: "Themselves", correct: false },
    ]
  },
  {
    question: "Which word is an adjective?",
    answers: [
      { text: "Happy", correct: true },
      { text: "Run", correct: false },
      { text: "Dog", correct: false },
      { text: "Quickly", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'describe'?",
    answers: [
      { text: "To give a detailed account of something", correct: true },
      { text: "To ignore something", correct: false },
      { text: "To simplify something", correct: false },
      { text: "To complicate something", correct: false },
    ]
  },
  {
    question: "Which sentence is a compound sentence?",
    answers: [
      { text: "I went to the store", correct: false },
      { text: "I went to the store, and I bought milk", correct: true },
      { text: "I am happy", correct: false },
      { text: "I will go to the store", correct: false },
    ]
  },
  {
    question: "What is the correct form of the verb 'be' in the present tense?",
    answers: [
      { text: "Was", correct: false },
      { text: "Were", correct: false },
      { text: "Is", correct: true },
      { text: "Been", correct: false },
    ]
  },
  {
    question: "Which word is an adverb?",
    answers: [
      { text: "Quickly", correct: true },
      { text: "Run", correct: false },
      { text: "Happy", correct: false },
      { text: "Dog", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'summarize'?",
    answers: [
      { text: "To give a brief summary of something", correct: true },
      { text: "To ignore something", correct: false },
      { text: "To simplify something", correct: false },
      { text: "To complicate something", correct: false },
    ]
  },
  {
    question: "Which sentence is in the past perfect tense?",
    answers: [
      { text: "I had eaten breakfast", correct: true },
      { text: "I ate breakfast", correct: false },
      { text: "I am eating breakfast", correct: false },
      { text: "I will eat breakfast", correct: false },
    ]
  },
  {
    question: "What is the correct form of the verb 'take' in the past tense?",
    answers: [
      { text: "Take", correct: false },
      { text: "Taking", correct: false },
      { text: "Took", correct: true },
      { text: "Taken", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'conclude'?",
    answers: [
      { text: "To start something", correct: false },
      { text: "To end something", correct: true },
      { text: "To continue something", correct: false },
      { text: "To ignore something", correct: false },
    ]
  },
  {
    question: "Which word is a conjunction?",
    answers: [
      { text: "And", correct: true },
      { text: "Run", correct: false },
      { text: "Happy", correct: false },
      { text: "Dog", correct: false },
    ]
  },
  {
    question: "What is the correct form of the verb 'make' in the past tense?",
    answers: [
      { text: "Make", correct: false },
      { text: "Making", correct: false },
      { text: "Made", correct: true },
      { text: "Makes", correct: false },
    ]
  },
  {
    question: "Which sentence is in the present perfect tense?",
    answers: [
      { text: "I have eaten breakfast", correct: true },
      { text: "I ate breakfast", correct: false },
      { text: "I am eating breakfast", correct: false },
      { text: "I will eat breakfast", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'evaluate'?",
    answers: [
      { text: "To assess the value or quality of something", correct: true },
      { text: "To ignore something", correct: false },
      { text: "To simplify something", correct: false },
      { text: "To complicate something", correct: false },
    ]
  },
  {
    question: "Which word is a preposition?",
    answers: [
      { text: "In", correct: true },
      { text: "Run", correct: false },
      { text: "Happy", correct: false },
      { text: "Dog", correct: false },
    ]
  },
  {
    question: "What is the correct form of the verb 'give' in the past tense?",
    answers: [
      { text: "Give", correct: false },
      { text: "Giving", correct: false },
      { text: "Gave", correct: true },
      { text: "Given", correct: false },
    ]
  },
  {
    question: "Which sentence is a complex sentence?",
    answers: [
      { text: "I went to the store because I needed milk", correct: true },
      { text: "I went to the store", correct: false },
      { text: "I bought milk and eggs", correct: false },
      { text: "I am happy", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'infer'?",
    answers: [
      { text: "To draw a conclusion based on evidence", correct: true },
      { text: "To ignore evidence", correct: false },
      { text: "To simplify something", correct: false },
      { text: "To complicate something", correct: false },
    ]
  },
  {
    question: "Which word is an interjection?",
    answers: [
      { text: "Oh", correct: true },
      { text: "Run", correct: false },
      { text: "Happy", correct: false },
      { text: "Dog", correct: false },
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
