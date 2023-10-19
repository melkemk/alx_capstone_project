var quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London", "Madrid"],
        correctAnswer: "Paris",        answered:false

    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswer: "Mars",
        answered:false
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
        correctAnswer: "Blue Whale",  answered:false

    }
];

let currentQuestionIndex = 0;
let userScore = 0;
let selectedAnswer=0;
const resultContainer = document.querySelector(".result-container");
resultContainer.style.display = "none"; // Hide the result container initially
const optionsContainer = document.querySelector(".options-container");
function displayQuestion(

) {
   
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.querySelector(".options-container");
    const question = quizQuestions[currentQuestionIndex];

    questionText.textContent = `Question ${currentQuestionIndex + 1}: ${question.question}`;

    optionsContainer.innerHTML = "";
    question.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.className = "option";
        optionButton.textContent = option;
        optionButton.addEventListener("click", () => checkAnswer(optionButton));
        optionsContainer.appendChild(optionButton);
    });
}

// Function to check the user's answer
function checkAnswer(option) {
    Array.from(optionsContainer.children).forEach(op => {
    op.style.backgroundColor = "#1f77c7";
});
   option.style.backgroundColor='red';
   selectedAnswer=option.textContent;
}

function showResult() {
    const resultText = document.getElementById("result-text");
    const percentageText = document.getElementById("percentage-text");

    resultText.textContent = `You got ${userScore} out of ${quizQuestions.length} questions correct!`;
    const percentage = (userScore / quizQuestions.length) * 100;
    percentageText.textContent = `Your score: ${percentage.toFixed(2)}%`;

    resultContainer.style.display = "block";
    const optionsContainer = document.querySelector(".options-container");
    optionsContainer.style.display = "none";
    document.getElementById("retake").style.display='block';
    document.getElementById("next-button").style.display = "none";
document.getElementById("previous-button").style.display = "none";

}

function nextQuestion() {
   
    const correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;
    const answered = quizQuestions[currentQuestionIndex].answered;
    if (selectedAnswer === correctAnswer && !answered) {
        userScore++;
        quizQuestions[currentQuestionIndex].answered=true;
    }else if(selectedAnswer !== correctAnswer &&answered){
        userScore--;
        quizQuestions[currentQuestionIndex].answered=false;
    }
    document.getElementById('result-text').innerText=userScore;
console.log(userScore)
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
    else{
        showResult()
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

displayQuestion();

document.getElementById("next-button").addEventListener("click", nextQuestion);
document.getElementById("previous-button").addEventListener("click", previousQuestion);
function retake(){
    userScore=0;
    currentQuestionIndex=0;
    displayQuestion();
    
    resultContainer.style.display = "none";
    const optionsContainer = document.querySelector(".options-container");
    optionsContainer.style.display = "grid";
    document.getElementById("retake").style.display='none'
    document.getElementById("next-button").style.display = "block";
    document.getElementById("previous-button").style.display = "block";
    
}