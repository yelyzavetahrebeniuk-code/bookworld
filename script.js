/* ===== ТЕМА ===== */
function toggleTheme() {
    const body = document.body;
    const button = document.getElementById("themeButton");

    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
        button.textContent = "Світла тема";
    } else {
        button.textContent = "Темна тема";
    }
}

/* ===== КВІЗ ===== */
function startQuiz() {
    alert("Літературний квіз буде додано пізніше 🙂");
}

/* ===== ПАЗЛ 3x3 ===== */
let selectedPiece = null;

function shufflePuzzle() {
    const container = document.getElementById("puzzle-container");
    for (let i = container.children.length; i >= 0; i--) {
        container.appendChild(container.children[Math.floor(Math.random() * i)]);
    }
}

function checkPuzzle() {
    const pieces = document.querySelectorAll(".puzzle-piece");
    for (let i = 0; i < pieces.length; i++) {
        if (parseInt(pieces[i].dataset.pos) !== i) return;
    }
    alert("🎉 Вітаю! Пазл складено правильно!");
}

function puzzleClick(event) {
    if (!selectedPiece) {
        selectedPiece = event.target;
        selectedPiece.style.outline = "2px solid red";
    } else {
        const container = document.getElementById("puzzle-container");
        const pieces = Array.from(container.children);

        const index1 = pieces.indexOf(selectedPiece);
        const index2 = pieces.indexOf(event.target);

        if (index1 < index2) {
            container.insertBefore(event.target, selectedPiece);
            container.insertBefore(selectedPiece, pieces[index2 + 1] || null);
        } else {
            container.insertBefore(selectedPiece, event.target);
            container.insertBefore(event.target, pieces[index1 + 1] || null);
        }

        selectedPiece.style.outline = "";
        selectedPiece = null;

        checkPuzzle();
    }
}

window.addEventListener("load", () => {
    shufflePuzzle();
    document.querySelectorAll(".puzzle-piece")
        .forEach(piece => piece.addEventListener("click", puzzleClick));
});
