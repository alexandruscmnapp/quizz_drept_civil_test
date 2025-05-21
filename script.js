let currentIndex = 0;
let currentQuestion = null;
let answered = false;
let score = 0;
let shuffledQuestions = [];

function saveProgress() {
    localStorage.setItem("quiz_progress", JSON.stringify({
        currentIndex,
        score,
        questions: shuffledQuestions
    }));
}

function loadProgress() {
    const saved = JSON.parse(localStorage.getItem("quiz_progress"));
    if (saved && Array.isArray(saved.questions)) {
        currentIndex = saved.currentIndex ?? 0;
        score = saved.score ?? 0;
        shuffledQuestions = saved.questions;
        return true;
    }
    return false;
}

function clearProgress() {
    localStorage.removeItem("quiz_progress");
}

function loadNextQuestion() {
    document.getElementById("feedback").innerText = "";
    document.getElementById("next-button").disabled = true;
    document.getElementById("next-button").innerText = "Verifică răspunsul";
    document.getElementById("next-button").onclick = handleAnswer;

    if (currentIndex >= shuffledQuestions.length) {
        saveScore(score);
        clearProgress();
        const historyHTML = generateHistoryHTML();
        document.getElementById("quiz-container").innerHTML = `
            <h2>Quiz complet!</h2>
            <p>Scor final: ${score}/${shuffledQuestions.length}</p>
            <div id="history">${historyHTML}</div>
            <button onclick="restartQuiz()">Reia Quiz</button>
        `;
        document.getElementById("score").style.display = "none";
        return;
    }

    updateScoreDisplay();

    currentQuestion = shuffledQuestions[currentIndex];
    answered = false;

    const qText = document.getElementById("question");
    const optionsDiv = document.getElementById("answers");
    qText.innerText = currentQuestion.question;
    optionsDiv.innerHTML = "";

    currentQuestion.answers.forEach((opt, idx) => {
        const label = document.createElement("label");
        label.style.display = "flex";
        label.style.alignItems = "center";
        label.style.marginBottom = "14px";
        label.style.fontSize = "1.1em";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "option";
        checkbox.value = idx;
        checkbox.style.transform = "scale(1.4)";
        checkbox.style.marginRight = "10px";
        checkbox.style.accentColor = "#4a90e2";

        checkbox.onchange = () => {
            const selected = document.querySelectorAll("input[name='option']:checked");
            document.getElementById("next-button").disabled = selected.length === 0;
        };

        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(opt));
        optionsDiv.appendChild(label);
    });

    saveProgress();
}

function handleAnswer() {
    if (answered) return;
    answered = true;

    const feedback = document.getElementById("feedback");

    const selected = Array.from(document.querySelectorAll("input[name='option']:checked")).map(el => parseInt(el.value));
    const correct = currentQuestion.correctIndexes;

    const isCorrect = arraysEqual(selected.sort(), correct.slice().sort());

    if (isCorrect) {
        feedback.innerText = "Răspuns corect!";
        feedback.style.color = "green";
        score++;
    } else {
        feedback.innerHTML = "<span style='color:red;'>Răspuns greșit!</span><br><span style='color:green;'>Răspunsuri corecte:<br>" +
            correct.map(i => currentQuestion.answers[i]).join("<br>") + "</span>";
    }

    updateScoreDisplay();

    currentQuestion.correctIndexes.forEach(i => {
        const labels = document.querySelectorAll("#answers label");
        if (labels[i]) {
            labels[i].style.backgroundColor = "#d4edda";
            labels[i].style.borderRadius = "6px";
            labels[i].style.padding = "6px";
        }
    });

    document.getElementById("next-button").innerText = "Următoarea întrebare";
    document.getElementById("next-button").onclick = () => {
        currentIndex++;
        saveProgress();
        loadNextQuestion();
    };
}

function arraysEqual(a, b) {
    return a.length === b.length && a.every((val, index) => val === b[index]);
}

function updateScoreDisplay() {
    document.getElementById("score").innerText = `Scor: ${score} / ${shuffledQuestions.length}`;
}

function restartQuiz() {
    currentIndex = 0;
    score = 0;
    shuffledQuestions = [...questions];
    const shuffle = JSON.parse(localStorage.getItem("quiz_shuffle"));
    if (shuffle) shuffledQuestions.sort(() => Math.random() - 0.5);

    document.getElementById("quiz-container").innerHTML = `
        <div id="question"></div>
        <div id="answers"></div>
        <div id="feedback"></div>
        <button id="next-button" onclick="handleAnswer()" disabled>Verifică răspunsul</button>
    `;
    document.getElementById("score").style.display = "block";
    updateScoreDisplay();
    loadNextQuestion();
}

function saveScore(newScore) {
    let history = JSON.parse(localStorage.getItem("quiz_history")) || [];
    const now = new Date();
    const date = now.toLocaleDateString() + " " + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    history.unshift({ score: newScore, outOf: shuffledQuestions.length, date: date });
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
    const saved = localStorage.getItem("quiz_progress");
    const file = localStorage.getItem("quiz_file");
    if (saved && file) {
        if (confirm("Ai un quiz în desfășurare. Vrei să continui de unde ai rămas?") === false) {
            localStorage.removeItem("quiz_progress");
        } else {
            const script = document.createElement("script");
            script.src = file;
            script.onload = () => {
                if (!loadProgress()) {
                    shuffledQuestions = [...questions];
                    const shuffle = JSON.parse(localStorage.getItem("quiz_shuffle"));
                    if (shuffle) shuffledQuestions.sort(() => Math.random() - 0.5);
                }
				const savedTitle = localStorage.getItem("quiz_title");
				if (savedTitle) document.getElementById("current-title").innerText = savedTitle;
                document.getElementById("test-select-area").style.display = "none";
                document.getElementById("quiz-container").style.display = "block";
                document.getElementById("score").style.display = "block";
                loadNextQuestion();
            };
            document.body.appendChild(script);
        }
    }
};
