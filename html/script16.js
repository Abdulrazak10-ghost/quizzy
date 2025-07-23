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
    question: "Choose the word that is most nearly opposite in meaning to the underlined word: 'The new policy has been widely acclaimed.'",
    answers: [
      { text: "Criticized", correct: true },
      { text: "Praise", correct: false },
      { text: "Approved", correct: false },
      { text: "Condemned", correct: false },
    ]
  },
  {
    question: "Identify the figure of speech used in the phrase: 'He is as busy as a bee.'",
    answers: [
      { text: "Simile", correct: true },
      { text: "Metaphor", correct: false },
      { text: "Personification", correct: false },
      { text: "Alliteration", correct: false },
    ]
  },
  {
    question: "Choose the word that best completes the sentence: 'The teacher asked the students to ________ their assignments.'",
    answers: [
      { text: "Submit", correct: true },
      { text: "Submiting", correct: false },
      { text: "Submits", correct: false },
      { text: "Submitted", correct: false },
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
    question: "Choose the word that is most nearly similar in meaning to the underlined word: 'The new employee was very meticulous.'",
    answers: [
      { text: "Careful", correct: true },
      { text: "Lazy", correct: false },
      { text: "Indifferent", correct: false },
      { text: "Reckless", correct: false },
    ]
  },
  {
    question: "Identify the literary device used in the phrase: 'The sun smiled down on us.'",
    answers: [
      { text: "Personification", correct: true },
      { text: "Simile", correct: false },
      { text: "Metaphor", correct: false },
      { text: "Alliteration", correct: false },
    ]
  },
  {
    question: "Choose the word that best completes the sentence: 'The company will ________ its annual report next week.'",
    answers: [
      { text: "Release", correct: true },
      { text: "Releasing", correct: false },
      { text: "Releases", correct: false },
      { text: "Released", correct: false },
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
    question: "Choose the word that is most nearly opposite in meaning to the underlined word: 'The new policy is very rigid.'",
    answers: [
      { text: "Flexible", correct: true },
      { text: "Strict", correct: false },
      { text: "Harsh", correct: false },
      { text: "Severe", correct: false },
    ]
  },
  {
    question: "Identify the literary device used in the phrase: 'The world is a stage.'",
    answers: [
      { text: "Metaphor", correct: true },
      { text: "Simile", correct: false },
      { text: "Personification", correct: false },
      { text: "Alliteration", correct: false },
    ]
  },

  {
    question: "Choose the word that best fills the gap in the sentence: 'The teacher asked the students to ________ their books.'",
    answers: [
      { text: "Open", correct: true },
      { text: "Close", correct: false },
      { text: "Read", correct: false },
      { text: "Write", correct: false },
    ]
  },
  {
    question: "Identify the figure of speech used in the phrase: 'The city is a jungle.'",
    answers: [
      { text: "Metaphor", correct: true },
      { text: "Simile", correct: false },
      { text: "Personification", correct: false },
      { text: "Alliteration", correct: false },
    ]
  },
  {
    question: "Choose the word that is most nearly opposite in meaning to the underlined word: 'The new employee is very efficient.'",
    answers: [
      { text: "Inefficient", correct: true },
      { text: "Productive", correct: false },
      { text: "Effective", correct: false },
      { text: "Competent", correct: false },
    ]
  },
  {
    question: "Identify the type of sentence: 'I went to the store because I needed to buy some milk.'",
    answers: [
      { text: "Simple sentence", correct: false },
      { text: "Compound sentence", correct: false },
      { text: "Complex sentence", correct: true },
      { text: "Compound-complex sentence", correct: false },
    ]
  },
  {
    question: "Choose the word that best completes the sentence: 'The company will ________ a new product next month.'",
    answers: [
      { text: "Launch", correct: true },
      { text: "Launching", correct: false },
      { text: "Launches", correct: false },
      { text: "Launched", correct: false },
    ]
  },
  {
    question: "Identify the literary device used in the phrase: 'The wind whispered through the trees.'",
    answers: [
      { text: "Personification", correct: true },
      { text: "Simile", correct: false },
      { text: "Metaphor", correct: false },
      { text: "Alliteration", correct: false },
    ]
  },
  {
    question: "Choose the word that is most nearly similar in meaning to the underlined word: 'The teacher was very patient.'",
    answers: [
      { text: "Tolerant", correct: true },
      { text: "Strict", correct: false },
      { text: "Harsh", correct: false },
      { text: "Severe", correct: false },
    ]
  },
  {
    question: "Identify the type of sentence: 'I love reading books, but my sister prefers watching movies.'",
    answers: [
      { text: "Simple sentence", correct: false },
      { text: "Compound sentence", correct: true },
      { text: "Complex sentence", correct: false },
      { text: "Compound-complex sentence", correct: false },
    ]
  },
  {
    question: "Choose the word that best fills the gap in the sentence: 'The new policy has been ________ to the public.'",
    answers: [
      { text: "Announced", correct: true },
      { text: "Announcing", correct: false },
      { text: "Announces", correct: false },
      { text: "Announce", correct: false },
    ]
  },
  {
    question: "Identify the literary device used in the phrase: 'The world is a stage, and we are all actors.'",
    answers: [
      { text: "Metaphor", correct: true },
      { text: "Simile", correct: false },
      { text: "Personification", correct: false },
      { text: "Alliteration", correct: false },
    ]
  },

  {
    question: "Choose the word that best fills the gap in the sentence: 'The ________ of the new policy has been met with widespread criticism.'",
    answers: [
      { text: "Promulgation", correct: true },
      { text: "Implementation", correct: false },
      { text: "Enactment", correct: false },
      { text: "Ratification", correct: false },
    ]
  },
  {
    question: "Identify the literary device used in the phrase: 'The city was a behemoth that swallowed us whole.'",
    answers: [
      { text: "Metaphor", correct: true },
      { text: "Simile", correct: false },
      { text: "Personification", correct: false },
      { text: "Hyperbole", correct: false },
    ]
  },
  {
    question: "Choose the word that is most nearly opposite in meaning to the underlined word: 'The new employee's lack of experience was a significant impediment to his success.'",
    answers: [
      { text: "Facilitator", correct: true },
      { text: "Hindrance", correct: false },
      { text: "Obstacle", correct: false },
      { text: "Barrier", correct: false },
    ]
  },
  {
    question: "Identify the type of sentence: 'Having finished my homework, I went to bed.'",
    answers: [
      { text: "Simple sentence", correct: false },
      { text: "Compound sentence", correct: false },
      { text: "Complex sentence", correct: true },
      { text: "Compound-complex sentence", correct: false },
    ]
  },
  {
    question: "Choose the word that best completes the sentence: 'The company's profits have been ________ due to increased competition.'",
    answers: [
      { text: "Dwindling", correct: true },
      { text: "Increasing", correct: false },
      { text: "Fluctuating", correct: false },
      { text: "Soaring", correct: false },
    ]
  },
  {
    question: "Identify the literary device used in the phrase: 'The silence was deafening.'",
    answers: [
      { text: "Oxymoron", correct: true },
      { text: "Simile", correct: false },
      { text: "Metaphor", correct: false },
      { text: "Personification", correct: false },
    ]
  },
  {
    question: "Choose the word that is most nearly similar in meaning to the underlined word: 'The teacher's remarks were disparaging.'",
    answers: [
      { text: "Belittling", correct: true },
      { text: "Complimentary", correct: false },
      { text: "Encouraging", correct: false },
      { text: "Supportive", correct: false },
    ]
  },
  {
    question: "Identify the type of sentence: 'The more I read, the more I learn.'",
    answers: [
      { text: "Simple sentence", correct: false },
      { text: "Compound sentence", correct: false },
      { text: "Complex sentence", correct: true },
      { text: "Compound-complex sentence", correct: false },
    ]
  },
  {
    question: "Choose the word that best fills the gap in the sentence: 'The ________ of the company's financial struggles was evident in its stock price.'",
    answers: [
      { text: "Impact", correct: true },
      { text: "Effect", correct: false },
      { text: "Cause", correct: false },
      { text: "Result", correct: false },
    ]
  },
  {
    question: "Identify the literary device used in the phrase: 'The stars twinkled like diamonds in the sky.'",
    answers: [
      { text: "Simile", correct: true },
      { text: "Metaphor", correct: false },
      { text: "Personification", correct: false },
      { text: "Hyperbole", correct: false },
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