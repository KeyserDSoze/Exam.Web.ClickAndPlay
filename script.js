const button = document.getElementById('click-button');
const scoreDisplay = document.getElementById('score');
let score = 0;

// Funzione per spostare il bottone in una posizione casuale
function moveButton() {
    const x = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight));

    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

// Funzione per aggiornare il punteggio
button.addEventListener('click', function() {
    score++;
    scoreDisplay.textContent = score;
    moveButton(); // Muovi il bottone in una nuova posizione
});

// Posiziona inizialmente il bottone al centro
moveButton();
