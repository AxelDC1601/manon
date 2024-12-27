const cards = document.querySelectorAll('.card');
const skipBtn = document.getElementById('skip-btn');
const backBtn = document.getElementById('back-btn');
let currentCard = 0;

// Affiche la première carte
cards[currentCard].classList.add('active');

// Fonction pour passer à la carte suivante
function showNextCard() {
    cards[currentCard].classList.remove('active');
    currentCard++;

    if (currentCard < cards.length) {
        cards[currentCard].classList.add('active');
    }

    // Gestion des boutons
    if (currentCard === cards.length - 1) {
        skipBtn.style.display = 'none';
        backBtn.style.display = 'inline-block';
    }
}

// Fonction pour revenir à la carte précédente
function showPreviousCard() {
    cards[currentCard].classList.remove('active');
    currentCard--;

    if (currentCard >= 0) {
        cards[currentCard].classList.add('active');
    }

    // Gestion des boutons
    if (currentCard < cards.length - 1) {
        skipBtn.style.display = 'inline-block';
        backBtn.style.display = currentCard === 0 ? 'none' : 'inline-block';
    }
}

// Écouteurs sur les boutons
skipBtn.addEventListener('click', showNextCard);
backBtn.addEventListener('click', showPreviousCard);
