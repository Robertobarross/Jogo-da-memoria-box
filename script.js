const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let firstCard, secondCard;

// função vira carta
function flipCard() {
    this.classList.add('flip');
    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    chackForMatch();
}

// Verifica se as cartas são iguais
function chackForMatch() {
    if(firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
    }

    unflipCards();
}

// Desabilita as cartas
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

// Desvira as cartas
function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

    }, 1500);
}

// Evento de clique na carta
cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})