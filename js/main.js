// js/main.js

let currentIndex = 0;
let cards = [...flashcards];

// Aguarda o DOM estar pronto
document.addEventListener('DOMContentLoaded', () => {
    const flashcard = document.getElementById('flashcard');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const shuffleBtn = document.getElementById('shuffle-btn');
    const progress = document.getElementById('progress');

    function showCard(index) {
        const card = cards[index];
        document.getElementById('category-front').textContent = card.category;
        document.getElementById('phrase').textContent = card.phrase;
        document.getElementById('situation').textContent = card.situation;
        document.getElementById('category-back').textContent = card.category;
        document.getElementById('translation').textContent = card.translation;
        document.getElementById('example').textContent = card.example;
        progress.textContent = `Card ${index + 1} of ${cards.length}`;
        flashcard.classList.remove('flipped');
    }

    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    flashcard.addEventListener('click', () => {
        flashcard.classList.toggle('flipped');
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        showCard(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
    });

    shuffleBtn.addEventListener('click', () => {
        cards = shuffleArray(cards);
        currentIndex = 0;
        showCard(currentIndex);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevBtn.click();
        else if (e.key === 'ArrowRight') nextBtn.click();
        else if (e.key === ' ') {
            e.preventDefault();
            flashcard.click();
        }
    });

    // Inicializa
    showCard(currentIndex);
});