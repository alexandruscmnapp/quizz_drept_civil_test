let currentIndex = 0;
let currentQuestion = null;
let answered = false;
let score = 0;

questions.sort(() => Math.random() - 0.5);

function loadNextQuestion() {
    document.getElementById("feedback").innerText = "";
    document.getElementById("next-button").disabled = true;
    document.getElementById("next-button").innerText = "Verifică răspunsul";
    document.getElementById("next-button").onclick = handleAnswer;

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

    const qText = document.getElementById("question");
    const optionsDiv = document.getElementById("options");
    qText.innerText = currentQuestion.question;
    optionsDiv.innerHTML = "";

    currentQuestion.options.forEach((opt, idx) => {
        const label = document.createElement("label");
        label.style.display = "block";
        label.style.marginBottom = "8px";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "option";
        checkbox.value = idx;

        checkbox.onchange = () => {
            const selected = document.querySelectorAll("input[name='option']:checked");
            document.getElementById("next-button").disabled = selected.length === 0;
        };

        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(" " + opt));
        optionsDiv.appendChild(label);
    });

    currentIndex++;
}

function handleAnswer() {
    if (answered) return;
    answered = true;

    const feedback = document.getElementById("feedback");

    if (!Array.isArray(currentQuestion.correctIndexes)) {
        feedback.innerText = "Eroare: întrebarea nu are răspunsuri corecte definite.";
        feedback.style.color = "orange";
        return;
    }

    const selected = Array.from(document.querySelectorAll("input[name='option']:checked")).map(el => parseInt(el.value));
    const correct = currentQuestion.correctIndexes;

    const isCorrect = arraysEqual(selected.sort(), correct.slice().sort());

    if (isCorrect) {
        feedback.innerText = "Răspuns corect!";
        feedback.style.color = "green";
        score++;
    } else {
        
    feedback.innerHTML = "Răspuns greșit!<br><span style='color:green;'>Răspunsuri corecte:<br>" + 
        currentQuestion.correctIndexes.map(i => currentQuestion.options[i]).join("<br>") + "</span>";
    
        feedback.style.color = "red";
    }

    updateScoreDisplay();
    document.getElementById("next-button").innerText = "Următoarea întrebare";
    
    currentQuestion.correctIndexes.forEach(i => {
        const labels = document.querySelectorAll("#options label");
        if (labels[i]) {
            labels[i].style.backgroundColor = "#d4edda";
            labels[i].style.borderRadius = "6px";
            labels[i].style.padding = "6px";
        }
    });
    document.getElementById("next-button").onclick = loadNextQuestion;
    
}

function arraysEqual(a, b) {
    return a.length === b.length && a.every((val, index) => val === b[index]);
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