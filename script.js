const questions = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
        answer: 1
    },
    {
        question: "2 + 2 = ?",
        options: ["3", "4", "5", "6"],
        answer: 1
    },
    {
        question: "Which language is used for web?",
        options: ["Python", "C++", "JavaScript", "Java"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    answered = false;
    optionsEl.innerHTML = "";

    let q = questions[currentQuestion];
    questionEl.innerText = q.question;

    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.classList.add("btn");

        btn.onclick = () => selectAnswer(btn, index);

        optionsEl.appendChild(btn);
    });
}

function selectAnswer(button, selectedIndex) {
    if (answered) return;
    answered = true;

    let correctIndex = questions[currentQuestion].answer;
    let buttons = document.querySelectorAll(".btn");

    buttons.forEach((btn, i) => {
        if (i === correctIndex) {
            btn.classList.add("correct");
        }
        if (i === selectedIndex && i !== correctIndex) {
            btn.classList.add("wrong");
        }
        btn.disabled = true;
    });

    if (selectedIndex === correctIndex) {
        score++;
    }
}

nextBtn.onclick = () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.querySelector(".quiz-container").innerHTML =
            <h2>Your Score: ${score}/${questions.length}</h2>;
    }
};

loadQuestion();
