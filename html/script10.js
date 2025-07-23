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
    question: "What is the meaning of the word 'narrative'?",
    answers: [
      { text: "A poem or song", correct: false },
      { text: "A story or account of events", correct: true },
      { text: "A play or drama", correct: false },
      { text: "A report or article", correct: false },
    ]
  },
  {
    question: "Which literary device is used in the phrase 'He was as brave as a lion'?",
    answers: [
      { text: "Simile", correct: true },
      { text: "Metaphor", correct: false },
      { text: "Personification", correct: false },
      { text: "Alliteration", correct: false },
    ]
  },
  {
    question: "What is the difference between a simile and a metaphor?",
    answers: [
      { text: "A simile uses 'like' or 'as,' while a metaphor does not", correct: true },
      { text: "A simile is used for comparison, while a metaphor is used for description", correct: false },
      { text: "A simile is used for poetry, while a metaphor is used for prose", correct: false },
      { text: "A simile is used for literal meaning, while a metaphor is used for figurative meaning", correct: false },
    ]
  },
  {
    question: "Identify the figure of speech used in the phrase 'The sun smiled down on us.'",
    answers: [
      { text: "Personification", correct: true },
      { text: "Simile", correct: false },
      { text: "Metaphor", correct: false },
      { text: "Hyperbole", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'imagery' in literature?",
    answers: [
      { text: "The use of language to create vivid mental images", correct: true },
      { text: "The use of language to convey literal meaning", correct: false },
      { text: "The use of language to persuade", correct: false },
      { text: "The use of language to inform", correct: false },
    ]
  },
  {
    question: "Which of the following is an example of alliteration?",
    answers: [
      { text: "The sun was shining brightly", correct: false },
      { text: "The snake slithered silently", correct: true },
      { text: "The dog was happy", correct: false },
      { text: "The cat was sleeping", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'tone' in literature?",
    answers: [
      { text: "The attitude or feeling conveyed by a text", correct: true },
      { text: "The literal meaning of a text", correct: false },
      { text: "The plot of a story", correct: false },
      { text: "The characters in a story", correct: false },
    ]
  },
  {
    question: "Identify the type of sentence: 'I went to the store because I needed milk.'",
    answers: [
      { text: "Simple sentence", correct: false },
      { text: "Compound sentence", correct: false },
      { text: "Complex sentence", correct: true },
      { text: "Compound-complex sentence", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'symbolism' in literature?",
    answers: [
      { text: "The use of objects or colors to represent abstract ideas", correct: true },
      { text: "The use of literal language", correct: false },
      { text: "The use of figurative language", correct: false },
      { text: "The use of descriptive language", correct: false },
    ]
  },
  {
    question: "Which literary device is used in the phrase 'The world is a stage'?",
    answers: [
      { text: "Metaphor", correct: true },
      { text: "Simile", correct: false },
      { text: "Personification", correct: false },
      { text: "Alliteration", correct: false },
    ]
  },

  {
    question: "What is the meaning of the word 'foreshadowing'?",
    answers: [
      { text: "A hint or clue about events that will occur later", correct: true },
      { text: "A literary device used to create suspense", correct: false },
      { text: "A type of figurative language", correct: false },
      { text: "A literary genre", correct: false },
    ]
  },
  {
    question: "Which literary device is used in the phrase 'The city never sleeps'?",
    answers: [
      { text: "Metaphor", correct: true },
      { text: "Simile", correct: false },
      { text: "Personification", correct: false },
      { text: "Alliteration", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'irony'?",
    answers: [
      { text: "A contrast between what is expected and what actually happens", correct: true },
      { text: "A literary device used to create humor", correct: false },
      { text: "A type of figurative language", correct: false },
      { text: "A literary genre", correct: false },
    ]
  },
  {
    question: "Identify the type of sentence: 'I love reading books, and my favorite author is Shakespeare.'",
    answers: [
      { text: "Simple sentence", correct: false },
      { text: "Compound sentence", correct: true },
      { text: "Complex sentence", correct: false },
      { text: "Compound-complex sentence", correct: false },
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
    question: "Which literary device is used in the phrase 'The wind howled in anger'?",
    answers: [
      { text: "Personification", correct: true },
      { text: "Simile", correct: false },
      { text: "Metaphor", correct: false },
      { text: "Alliteration", correct: false },
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
    question: "Identify the type of sentence: 'Although it was raining, I still went to the park.'",
    answers: [
      { text: "Simple sentence", correct: false },
      { text: "Compound sentence", correct: false },
      { text: "Complex sentence", correct: true },
      { text: "Compound-complex sentence", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'oxymoron'?",
    answers: [
      { text: "A figure of speech that combines two contradictory terms", correct: true },
      { text: "A literary device used to create suspense", correct: false },
      { text: "A type of figurative language", correct: false },
      { text: "A literary genre", correct: false },
    ]
  },
  {
    question: "Which literary device is used in the phrase 'The silence was deafening'?",
    answers: [
      { text: "Oxymoron", correct: true },
      { text: "Simile", correct: false },
      { text: "Metaphor", correct: false },
      { text: "Alliteration", correct: false },
    ]
  },

  {
    question: "What is the meaning of the word 'idiom'?",
    answers: [
      { text: "A phrase or expression that has a figurative meaning", correct: true },
      { text: "A literal phrase or expression", correct: false },
      { text: "A type of poem", correct: false },
      { text: "A figure of speech that compares two things", correct: false },
    ]
  },
  {
    question: "Which literary device is used in the phrase 'The world is a melting pot'?",
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
    question: "Identify the type of sentence: 'I have a dream that one day this nation will rise up and live out the true meaning of its creed.'",
    answers: [
      { text: "Simple sentence", correct: false },
      { text: "Compound sentence", correct: false },
      { text: "Complex sentence", correct: true },
      { text: "Compound-complex sentence", correct: false },
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
    question: "Which literary device is used in the phrase 'The leaves whispered in the wind'?",
    answers: [
      { text: "Personification", correct: true },
      { text: "Simile", correct: false },
      { text: "Metaphor", correct: false },
      { text: "Alliteration", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'analogy'?",
    answers: [
      { text: "A comparison between two things to explain a concept", correct: true },
      { text: "A literal statement", correct: false },
      { text: "A figure of speech that gives human qualities to non-human things", correct: false },
      { text: "A type of poem", correct: false },
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
    question: "Which literary device is used in the phrase 'The city is a jungle'?",
    answers: [
      { text: "Metaphor", correct: true },
      { text: "Simile", correct: false },
      { text: "Personification", correct: false },
      { text: "Alliteration", correct: false },
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