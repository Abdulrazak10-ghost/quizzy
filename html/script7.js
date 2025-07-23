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
    question: "What is the meaning of the word 'persuade'?",
    answers: [
      { text: "To convince someone to do or believe something", correct: true },
      { text: "To force someone to do something", correct: false },
      { text: "To ignore someone's opinion", correct: false },
      { text: "To disagree with someone", correct: false },
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
    question: "What is the meaning of the word 'analyze' in the context of literature?",
    answers: [
      { text: "To break down and interpret the meaning of a text", correct: true },
      { text: "To summarize a text", correct: false },
      { text: "To ignore the details of a text", correct: false },
      { text: "To memorize a text", correct: false },
    ]
  },
  {
    question: "Which sentence is in the passive voice?",
    answers: [
      { text: "The play was written by Shakespeare", correct: true },
      { text: "Shakespeare wrote the play", correct: false },
      { text: "The play is interesting", correct: false },
      { text: "Shakespeare is a great author", correct: false },
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
    question: "Which word is a synonym for 'sophisticated'?",
    answers: [
      { text: "Refined", correct: true },
      { text: "Simple", correct: false },
      { text: "Rude", correct: false },
      { text: "Unsophisticated", correct: false },
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
    question: "Which literary device is used in the phrase 'The sun smiled down on us'?",
    answers: [
      { text: "Personification", correct: true },
      { text: "Simile", correct: false },
      { text: "Metaphor", correct: false },
      { text: "Alliteration", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'infer' in the context of reading comprehension?",
    answers: [
      { text: "To draw a conclusion based on evidence", correct: true },
      { text: "To ignore evidence", correct: false },
      { text: "To summarize a text", correct: false },
      { text: "To memorize a text", correct: false },
    ]
  },
  {
    question: "Which word is an antonym for 'chaotic'?",
    answers: [
      { text: "Orderly", correct: true },
      { text: "Disorganized", correct: false },
      { text: "Messy", correct: false },
      { text: "Confusing", correct: false },
    ]
  },


  {
    question: "What is the meaning of the word 'narrative'?",
    answers: [
      { text: "A story or account of events", correct: true },
      { text: "A poem or song", correct: false },
      { text: "A play or drama", correct: false },
      { text: "A report or article", correct: false },
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
    question: "What is the meaning of the word 'diction'?",
    answers: [
      { text: "The choice of words used in speech or writing", correct: true },
      { text: "The tone of voice used in speech", correct: false },
      { text: "The rhythm of speech or writing", correct: false },
      { text: "The plot of a story", correct: false },
    ]
  },
  {
    question: "Which sentence is an example of foreshadowing?",
    answers: [
      { text: "The dark clouds gathered, and I knew it would rain", correct: true },
      { text: "The sun was shining brightly", correct: false },
      { text: "The story was interesting", correct: false },
      { text: "The characters were well-developed", correct: false },
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
    question: "Which word is a synonym for 'vacant'?",
    answers: [
      { text: "Empty", correct: true },
      { text: "Full", correct: false },
      { text: "Occupied", correct: false },
      { text: "Busy", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'alliteration'?",
    answers: [
      { text: "The repetition of initial consonant sounds", correct: true },
      { text: "The repetition of vowel sounds", correct: false },
      { text: "The use of metaphors", correct: false },
      { text: "The use of similes", correct: false },
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
    question: "What is the meaning of the word 'idiomatic expression'?",
    answers: [
      { text: "A phrase with a non-literal meaning", correct: true },
      { text: "A literal phrase", correct: false },
      { text: "A single word", correct: false },
      { text: "A sentence", correct: false },
    ]
  },
  {
    question: "Which word is an antonym for 'optimistic'?",
    answers: [
      { text: "Pessimistic", correct: true },
      { text: "Hopeful", correct: false },
      { text: "Cheerful", correct: false },
      { text: "Positive", correct: false },
    ]
  },

  {
    question: "What is the meaning of the word 'hyperbole'?",
    answers: [
      { text: "An exaggeration used for emphasis", correct: true },
      { text: "A literal statement", correct: false },
      { text: "A comparison between two things", correct: false },
      { text: "A figure of speech that gives human qualities to non-human things", correct: false },
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
    question: "What is the meaning of the word 'climax' in literature?",
    answers: [
      { text: "The most intense or critical moment in a story", correct: true },
      { text: "The beginning of a story", correct: false },
      { text: "The end of a story", correct: false },
      { text: "The setting of a story", correct: false },
    ]
  },
  {
    question: "Which word is a synonym for 'sarcastic'?",
    answers: [
      { text: "Mocking", correct: true },
      { text: "Kind", correct: false },
      { text: "Friendly", correct: false },
      { text: "Polite", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'irony'?",
    answers: [
      { text: "A contrast between what is expected and what actually happens", correct: true },
      { text: "A literal statement", correct: false },
      { text: "A figure of speech that compares two things", correct: false },
      { text: "A type of poem", correct: false },
    ]
  },
  {
    question: "Which literary device is used in the phrase 'The silence was deafening'?",
    answers: [
      { text: "Oxymoron", correct: true },
      { text: "Simile", correct: false },
      { text: "Metaphor", correct: false },
      { text: "Personification", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'theme' in literature?",
    answers: [
      { text: "The underlying idea or message of a story", correct: true },
      { text: "The plot of a story", correct: false },
      { text: "The characters in a story", correct: false },
      { text: "The setting of a story", correct: false },
    ]
  },
  {
    question: "Which word is an antonym for 'verbose'?",
    answers: [
      { text: "Concise", correct: true },
      { text: "Wordy", correct: false },
      { text: "Lengthy", correct: false },
      { text: "Detailed", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'onomatopoeia'?",
    answers: [
      { text: "A word that imitates the sound it describes", correct: true },
      { text: "A figure of speech that compares two things", correct: false },
      { text: "A type of poem", correct: false },
      { text: "A literary device used to create suspense", correct: false },
    ]
  },
  {
    question: "Which literary device is used in the phrase 'The world is a book'?",
    answers: [
      { text: "Metaphor", correct: true },
      { text: "Simile", correct: false },
      { text: "Personification", correct: false },
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
    question: "Which literary device is used in the phrase 'The rain danced on the roof'?",
    answers: [
      { text: "Personification", correct: true },
      { text: "Simile", correct: false },
      { text: "Metaphor", correct: false },
      { text: "Alliteration", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'denouement'?",
    answers: [
      { text: "The conclusion or resolution of a story", correct: true },
      { text: "The beginning of a story", correct: false },
      { text: "The climax of a story", correct: false },
      { text: "The setting of a story", correct: false },
    ]
  },
  {
    question: "Which word is a synonym for 'nuance'?",
    answers: [
      { text: "Subtlety", correct: true },
      { text: "Obviousness", correct: false },
      { text: "Clarity", correct: false },
      { text: "Certainty", correct: false },
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
    question: "Which literary device is used in the phrase 'The city streets were a maze'?",
    answers: [
      { text: "Metaphor", correct: true },
      { text: "Simile", correct: false },
      { text: "Personification", correct: false },
      { text: "Alliteration", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'diction' in the context of writing?",
    answers: [
      { text: "The choice of words used in writing", correct: true },
      { text: "The tone of voice used in writing", correct: false },
      { text: "The rhythm of writing", correct: false },
      { text: "The plot of a story", correct: false },
    ]
  },
  {
    question: "Which word is an antonym for 'explicit'?",
    answers: [
      { text: "Implicit", correct: true },
      { text: "Clear", correct: false },
      { text: "Obvious", correct: false },
      { text: "Direct", correct: false },
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
    question: "Which literary device is used in the phrase 'The leaves whispered in the wind'?",
    answers: [
      { text: "Personification", correct: true },
      { text: "Simile", correct: false },
      { text: "Metaphor", correct: false },
      { text: "Alliteration", correct: false },
    ]
  },

  {
    question: "What is the meaning of the word 'colloquialism'?",
    answers: [
      { text: "Informal language used in everyday conversation", correct: true },
      { text: "Formal language used in writing", correct: false },
      { text: "Technical language used in a specific field", correct: false },
      { text: "Poetic language used in literature", correct: false },
    ]
  },
  {
    question: "Which literary device is used in the phrase 'The fire burned with fury'?",
    answers: [
      { text: "Personification", correct: true },
      { text: "Simile", correct: false },
      { text: "Metaphor", correct: false },
      { text: "Alliteration", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'syntax'?",
    answers: [
      { text: "The arrangement of words and phrases to form sentences", correct: true },
      { text: "The meaning of words and phrases", correct: false },
      { text: "The tone of voice used in speech", correct: false },
      { text: "The rhythm of speech", correct: false },
    ]
  },
  {
    question: "Which word is a synonym for 'ambiguous'?",
    answers: [
      { text: "Vague", correct: true },
      { text: "Clear", correct: false },
      { text: "Obvious", correct: false },
      { text: "Specific", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'allusion'?",
    answers: [
      { text: "A reference to a person, place, event, or work of art", correct: true },
      { text: "A comparison between two things", correct: false },
      { text: "A figure of speech that gives human qualities to non-human things", correct: false },
      { text: "A type of poem", correct: false },
    ]
  },
  {
    question: "Which literary device is used in the phrase 'The waves crashed against the shore'?",
    answers: [
      { text: "Onomatopoeia", correct: false },
      { text: "Personification", correct: true },
      { text: "Simile", correct: false },
      { text: "Metaphor", correct: false },
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
    question: "Which word is an antonym for 'verbose'?",
    answers: [
      { text: "Concise", correct: true },
      { text: "Wordy", correct: false },
      { text: "Lengthy", correct: false },
      { text: "Detailed", correct: false },
    ]
  },
  {
    question: "What is the meaning of the word 'imagery'?",
    answers: [
      { text: "The use of language to create vivid mental images", correct: true },
      { text: "The use of literal language", correct: false },
      { text: "The use of figurative language to compare two things", correct: false },
      { text: "The use of language to persuade", correct: false },
    ]
  },
  {
    question: "Which literary device is used in the phrase 'The city was a beast'?",
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