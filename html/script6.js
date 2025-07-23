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
    question: "What is the opposite of the word 'fast'?",
    answers: [
      { text: "Slow", correct: true },
      { text: "Quick", correct: false },
      { text: "Rapid", correct: false },
      { text: "Speedy", correct: false },
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
    question: "What is the past tense of the verb 'go'?",
    answers: [
      { text: "Go", correct: false },
      { text: "Going", correct: false },
      { text: "Went", correct: true },
      { text: "Gone", correct: false },
    ]
  },
  {
    question: "Which sentence is in the present continuous tense?",
    answers: [
      { text: "I am writing a letter", correct: true },
      { text: "I write a letter", correct: false },
      { text: "I wrote a letter", correct: false },
      { text: "I will write a letter", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'narrate'?",
    answers: [
      { text: "To tell a story", correct: true },
      { text: "To ignore something", correct: false },
      { text: "To simplify something", correct: false },
      { text: "To complicate something", correct: false },
    ]
  },
  {
    question: "Which word is an adjective?",
    answers: [
      { text: "Beautiful", correct: true },
      { text: "Run", correct: false },
      { text: "Dog", correct: false },
      { text: "Quickly", correct: false },
    ]
  },
  {
    question: "What is the plural form of the word 'tooth'?",
    answers: [
      { text: "Tooth", correct: false },
      { text: "Teeth", correct: true },
      { text: "Tooths", correct: false },
      { text: "Teeths", correct: false },
    ]
  },
  {
    question: "Which sentence is a compound sentence?",
    answers: [
      { text: "I went to the store, and I bought milk", correct: true },
      { text: "I went to the store", correct: false },
      { text: "I bought milk", correct: false },
      { text: "I am happy", correct: false },
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
    question: "Which word is an adverb?",
    answers: [
      { text: "Quickly", correct: true },
      { text: "Run", correct: false },
      { text: "Happy", correct: false },
      { text: "Dog", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'analyze'?",
    answers: [
      { text: "To break down into smaller parts", correct: true },
      { text: "To put together", correct: false },
      { text: "To ignore", correct: false },
      { text: "To simplify", correct: false },
    ]
  },
  {
    question: "Which word is a conjunction?",
    answers: [
      { text: "But", correct: true },
      { text: "Run", correct: false },
      { text: "Happy", correct: false },
      { text: "Dog", correct: false },
    ]
  },
  {
    question: "What is the past participle of the verb 'take'?",
    answers: [
      { text: "Take", correct: false },
      { text: "Taking", correct: false },
      { text: "Took", correct: false },
      { text: "Taken", correct: true },
    ]
  },
  {
    question: "Which sentence is in the passive voice?",
    answers: [
      { text: "The ball was thrown by John", correct: true },
      { text: "John threw the ball", correct: false },
      { text: "The ball is red", correct: false },
      { text: "John is happy", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'compare'?",
    answers: [
      { text: "To examine similarities and differences", correct: true },
      { text: "To ignore", correct: false },
      { text: "To simplify", correct: false },
      { text: "To complicate", correct: false },
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
  {
    question: "What is the plural form of the word 'child'?",
    answers: [
      { text: "Child", correct: false },
      { text: "Childs", correct: false },
      { text: "Children", correct: true },
      { text: "Childrens", correct: false },
    ]
  },
  {
    question: "Which sentence is a complex sentence?",
    answers: [
      { text: "I went to the store because I needed milk", correct: true },
      { text: "I went to the store", correct: false },
      { text: "I bought milk", correct: false },
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
    question: "Which word is a preposition?",
    answers: [
      { text: "In", correct: true },
      { text: "Run", correct: false },
      { text: "Happy", correct: false },
      { text: "Dog", correct: false },
    ]
  },

  {
    question: "What is the meaning of the word 'summarize'?",
    answers: [
      { text: "To give a brief overview of the main points", correct: true },
      { text: "To ignore the main points", correct: false },
      { text: "To complicate the main points", correct: false },
      { text: "To simplify the main points", correct: false },
    ]
  },
  {
    question: "Which word is a synonym for 'big'?",
    answers: [
      { text: "Large", correct: true },
      { text: "Small", correct: false },
      { text: "Happy", correct: false },
      { text: "Fast", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'idiom'?",
    answers: [
      { text: "A phrase with a non-literal meaning", correct: true },
      { text: "A literal phrase", correct: false },
      { text: "A single word", correct: false },
      { text: "A sentence", correct: false },
    ]
  },
  {
    question: "Which sentence is in the future tense?",
    answers: [
      { text: "I will go to the store tomorrow", correct: true },
      { text: "I go to the store", correct: false },
      { text: "I went to the store", correct: false },
      { text: "I am going to the store", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'theme'?",
    answers: [
      { text: "The underlying idea or message", correct: true },
      { text: "The plot of a story", correct: false },
      { text: "The characters in a story", correct: false },
      { text: "The setting of a story", correct: false },
    ]
  },
  {
    question: "Which word is an antonym for 'loud'?",
    answers: [
      { text: "Quiet", correct: true },
      { text: "Noisy", correct: false },
      { text: "Happy", correct: false },
      { text: "Fast", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'narrator'?",
    answers: [
      { text: "The person telling the story", correct: true },
      { text: "The main character in a story", correct: false },
      { text: "The setting of a story", correct: false },
      { text: "The plot of a story", correct: false },
    ]
  },
  {
    question: "Which sentence is a simple sentence?",
    answers: [
      { text: "I like ice cream", correct: true },
      { text: "I like ice cream, and my brother likes cake", correct: false },
      { text: "I went to the store because I needed milk", correct: false },
      { text: "The ball was thrown by John", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'context'?",
    answers: [
      { text: "The situation or background of a word or phrase", correct: true },
      { text: "The literal meaning of a word", correct: false },
      { text: "The opposite of a word", correct: false },
      { text: "The synonym of a word", correct: false },
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