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
    question: "What is the meaning of the word 'connotation'?",
    answers: [
      { text: "The literal meaning of a word", correct: false },
      { text: "The emotional or cultural association of a word", correct: true },
      { text: "The dictionary definition of a word", correct: false },
      { text: "The pronunciation of a word", correct: false },
    ]
  },
  {
    question: "Identify the figure of speech in the phrase 'The city is a beast'.",
    answers: [
      { text: "Metaphor", correct: true },
      { text: "Simile", correct: false },
      { text: "Personification", correct: false },
      { text: "Alliteration", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'syntax'?",
    answers: [
      { text: "The study of word meanings", correct: false },
      { text: "The study of sentence structure", correct: true },
      { text: "The study of language sounds", correct: false },
      { text: "The study of language history", correct: false },
    ]
  },
  {
    question: "Identify the type of sentence: 'I went to the store, and I bought some milk.'",
    answers: [
      { text: "Simple sentence", correct: false },
      { text: "Compound sentence", correct: true },
      { text: "Complex sentence", correct: false },
      { text: "Compound-complex sentence", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'imagery'?",
    answers: [
      { text: "The use of language to create vivid mental images", correct: true },
      { text: "The use of language to convey literal meaning", correct: false },
      { text: "The use of language to persuade", correct: false },
      { text: "The use of language to inform", correct: false },
    ]
  },
  {
    question: "Identify the literary device used in the phrase 'The sun smiled down on us'.",
    answers: [
      { text: "Personification", correct: true },
      { text: "Simile", correct: false },
      { text: "Metaphor", correct: false },
      { text: "Alliteration", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'tone'?",
    answers: [
      { text: "The attitude or feeling conveyed by a text", correct: true },
      { text: "The literal meaning of a text", correct: false },
      { text: "The plot of a story", correct: false },
      { text: "The characters in a story", correct: false },
    ]
  },
  {
    question: "Identify the type of sentence: 'Although it was raining, I still went to the park.'",
    answers: [
      { text: "Simple sentence", correct: false },
      { text: "Compound sentence", correct: false },
      { text: "Complex sentence", correct: true },
      { text: "Compound-complex sentence", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'symbolism'?",
    answers: [
      { text: "The use of objects or colors to represent abstract ideas", correct: true },
      { text: "The use of literal language", correct: false },
      { text: "The use of figurative language", correct: false },
      { text: "The use of descriptive language", correct: false },
    ]
  },
  {
    question: "Identify the literary device used in the phrase 'The world is a stage'.",
    answers: [
      { text: "Metaphor", correct: true },
      { text: "Simile", correct: false },
      { text: "Personification", correct: false },
      { text: "Alliteration", correct: false },
    ]
  },

  {
    question: "What is the meaning of the word 'allusion'?",
    answers: [
      { text: "A reference to a person, place, event, or work of art", correct: true },
      { text: "A literary device used to create suspense", correct: false },
      { text: "A type of figurative language", correct: false },
      { text: "A literary genre", correct: false },
    ]
  },
  {
    question: "Identify the type of sentence: 'I have a dream that one day this nation will rise up and live out the true meaning of its creed.'",
    answers: [
      { text: "Simple sentence", correct: false },
      { text: "Compound sentence", correct: false },
      { text: "Complex sentence", correct: true },
      { text: "Compound-complex sentence", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'hyperbole'?",
    answers: [
      { text: "An exaggeration used for emphasis", correct: true },
      { text: "A literary device used to create humor", correct: false },
      { text: "A type of figurative language", correct: false },
      { text: "A literary genre", correct: false },
    ]
  },
  {
    question: "Identify the literary device used in the phrase 'The leaves whispered in the wind'.",
    answers: [
      { text: "Personification", correct: true },
      { text: "Simile", correct: false },
      { text: "Metaphor", correct: false },
      { text: "Alliteration", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'aphorism'?",
    answers: [
      { text: "A short, witty statement that expresses a general truth", correct: true },
      { text: "A long, detailed explanation", correct: false },
      { text: "A type of poem", correct: false },
      { text: "A figure of speech that compares two things", correct: false },
    ]
  },
  {
    question: "Identify the type of sentence: 'The teacher asked the students to write a short essay, and they worked diligently.'",
    answers: [
      { text: "Simple sentence", correct: false },
      { text: "Compound sentence", correct: true },
      { text: "Complex sentence", correct: false },
      { text: "Compound-complex sentence", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'euphemism'?",
    answers: [
      { text: "A mild or indirect word or expression used to avoid offense", correct: true },
      { text: "A direct or harsh word or expression", correct: false },
      { text: "A type of poem", correct: false },
      { text: "A figure of speech that compares two things", correct: false },
    ]
  },
  {
    question: "Identify the literary device used in the phrase 'The city is a jungle'.",
    answers: [
      { text: "Metaphor", correct: true },
      { text: "Simile", correct: false },
      { text: "Personification", correct: false },
      { text: "Alliteration", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'paradox'?",
    answers: [
      { text: "A statement that contradicts itself or seems absurd", correct: true },
      { text: "A statement that is obviously true", correct: false },
      { text: "A type of poem", correct: false },
      { text: "A figure of speech that compares two things", correct: false },
    ]
  },
  {
    question: "Identify the type of sentence: 'Although I was tired, I still finished my homework.'",
    answers: [
      { text: "Simple sentence", correct: false },
      { text: "Compound sentence", correct: false },
      { text: "Complex sentence", correct: true },
      { text: "Compound-complex sentence", correct: false },
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