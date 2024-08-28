const questions = [
    { question: "Which Indian river is considered sacred by Hindus?", options: ["Ganga", "Yamuna", "Brahmaputra", "Narmada"], answer: "Ganga" },
    { question: "Which Indian city is known as the 'Silicon Valley of India'?", options: ["Mumbai", "Bengaluru", "Hyderabad", "Chennai"], answer: "Bengaluru" },
    { question: "Which Indian athlete won the Olympic gold medal in javelin throw in 2021?", options: ["Neeraj Chopra", "P.T. Usha", "Anju Bobby George", "Milkha Singh"], answer: "Neeraj Chopra" },
    { question: "Which Indian cricketer is known as the 'God of Cricket'?", options: ["Sachin Tendulkar", "Virat Kohli", "MS Dhoni", "Rahul Dravid"], answer: "Sachin Tendulkar" },
    { question: "Which Karnataka city is known for its coffee plantations?", options: ["Chikmagalur", "Mangalore", "Mysore", "Hubli"], answer: "Chikmagalur" }
];

let userName = '';
let score = 0;
let currentQuestionIndex = 0;

function startQuiz() {
    userName = document.getElementById('name-input').value.trim();
    if (userName === '') {
        alert('Please enter your name');
        return;
    }

    document.getElementById('name-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('quiz-title').innerText = `Hello, ${userName}! Answer the following questions:`;

    showQuestion();
}

function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';

    const question = questions[currentQuestionIndex];
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.innerHTML = `
        <h3>Q${currentQuestionIndex + 1}: ${question.question}</h3>
        ${question.options.map(option => `
            <label>
                <input type="radio" name="question${currentQuestionIndex}" value="${option}" required> ${option}
            </label>
        `).join('')}
    `;
    questionContainer.appendChild(questionDiv);

    if (currentQuestionIndex === questions.length - 1) {
        document.getElementById('next-button').style.display = 'none';
        document.getElementById('submit-button').style.display = 'block';
    }
}

function nextQuestion() {
    const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    if (!selectedOption) {
        alert('Please select an answer before proceeding.');
        return;
    }

    if (selectedOption.value === questions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
}

function submitQuiz() {
    const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    if (selectedOption && selectedOption.value === questions[currentQuestionIndex].answer) {
        score++;
    }

    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('result-message').innerText = `${userName}, your score is ${score} out of 5.`;
}
