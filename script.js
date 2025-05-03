let currentIndex = 0;
let currentQuestion = null;
let answered = false;

questions.sort(() => Math.random() - 0.5); // amestecare întrebări

function loadNextQuestion() {
    document.getElementById("feedback").innerText = "";
    document.getElementById("next-button").disabled = true;

    if (currentIndex >= questions.length) {
        document.getElementById("quiz-container").innerHTML = "<h2>Quiz complet!</h2>";
        return;
    }

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
    } else {
        feedback.innerText = "Răspuns greșit!";
        feedback.style.color = "red";
    }
}

window.onload = () => {
    loadNextQuestion();
};