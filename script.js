let currentIndex = 0;
let currentQuestion = null;
let answered = false;
let score = 0;

questions.sort(() => Math.random() - 0.5);

function loadNextQuestion() {
    document.getElementById("feedback").innerText = "";
    document.getElementById("next-button").disabled = true;

    if (currentIndex >= questions.length) {
        saveScore(score);
        const historyHTML = generateHistoryHTML();

        document.getElementById("quiz-container").innerHTML = `
            <h2>Quiz complet!</h2>
            <p>Scor final: ${score}/${questions.length}</p>
            <div id="history">${historyHTML}</div>
            <button onclick="restartQuiz()">Reia Quiz</button>
        `;
        document.getElementById("score").style.display = "none";
        return;
    }

    updateScoreDisplay();

    currentQuestion = questions[currentIndex];
    answered = false;

    document.getElementById("question").innerText = currentQuestion.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    currentQuestion.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.onclick = () => handleAnswer(btn, idx);
        btn.disabled = false;
        optionsDiv.appendChild(btn);
    });

    currentIndex++;
}

function handleAnswer(button, selectedIndex) {
    if (answered) return;

    const correctIndex = currentQuestion.correctIndex;
    const feedback = document.getElementById("feedback");

    answered = true;
    document.getElementById("next-button").disabled = false;

    const buttons = document.querySelectorAll("#options button");
    buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === correctIndex) btn.style.backgroundColor = "#c8e6c9";
        if (idx === selectedIndex && idx !== correctIndex) btn.style.backgroundColor = "#ffcdd2";
    });

    if (selectedIndex === correctIndex) {
        feedback.innerText = "Răspuns corect!";
        feedback.style.color = "green";
        score++;
    } else {
        feedback.innerText = "Răspuns greșit!";
        feedback.style.color = "red";
    }

    updateScoreDisplay();
}

function updateScoreDisplay() {
    document.getElementById("score").innerText = `Scor: ${score} / ${questions.length}`;
}

function restartQuiz() {
    currentIndex = 0;
    score = 0;
    questions.sort(() => Math.random() - 0.5);
    document.getElementById("quiz-container").innerHTML = `
        <div id="question"></div>
        <div id="options"></div>
        <div id="feedback"></div>
        <button id="next-button" onclick="loadNextQuestion()" disabled>Next</button>
    `;
    document.getElementById("score").style.display = "block";
    updateScoreDisplay();
    loadNextQuestion();
}

function saveScore(newScore) {
    let history = JSON.parse(localStorage.getItem("quiz_history")) || [];
    const now = new Date();
    const date = now.toLocaleDateString() + " " + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    history.unshift({ score: newScore, outOf: questions.length, date: date });
    history = history.slice(0, 5);
    localStorage.setItem("quiz_history", JSON.stringify(history));
}

function generateHistoryHTML() {
    const history = JSON.parse(localStorage.getItem("quiz_history")) || [];
    if (history.length === 0) return "<p>Nu există încercări anterioare.</p>";
    return `
        <h3>Istoric ultimele 5 încercări:</h3>
        <ul>
            ${history.map(h => `<li>${h.date} – Scor: ${h.score}/${h.outOf}</li>`).join("")}
        </ul>
    `;
}

window.onload = () => {
    updateScoreDisplay();
    loadNextQuestion();
};