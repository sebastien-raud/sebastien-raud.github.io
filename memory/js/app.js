const app = {
    config: null,
    data: [],
    cards: [],
    lastDisplayedCard: null,
    countDisplayedCards: 0,
    countFoundedCards: 0,

    cursor: null,
    endSentence: null,
    btPlayAgain: null,

    confetti: null,

    init: (config, data) => {
        app.config = config;
        app.data = data;
        if (!app.checkConfig()) {
            return ;
        }
        app.cards = [];
        app.lastCard = null;
        app.initCards();
        app.confetti = new JSConfetti();
        document.addEventListener('DOMContentLoaded', app.initBoard);
    },

    playAgain: () => {
        app.cards = [];
        app.lastDisplayedCard = null,
        app.countDisplayedCards = 0,
        app.countFoundedCards = 0,
        app.btPlayAgain.classList.add('hidden');
        app.initCards();
        app.initBoard();
    },

    checkConfig: () => {
        if (![4, 6, 8].includes(app.config.numberCards)) {
            console.error('Le nombre de cartes doit être 4, 6 ou 8.');
            return false;
        }
        if (app.config.cards == '*') {
            app.loadFromAll();
        }
        return true;
    },

    initCards: () => {
        const cards = [];

        while (app.cards.length < app.config.numberCards * 2) {
            const index = Math.floor(Math.random() * app.config.cards.length);
            const card = app.config.cards[index];
            
            // on évite deux fois la même carte
            if (cards.includes(card)) continue ;

            cards.push(card);

            const cardData = app.data.find(c => c.q == card);

            const number = app.cards.length;
            app.cards.push({content: cardData.q, type: 1, index: number, el: null});
            app.cards.push({content: cardData.desc, type: 2, index: number, el: null});
        }

        for (let index = app.cards.length - 1; index > 0; index--) {
            const number = Math.floor(Math.random() * (index + 1));
            const card = app.cards[index];
            app.cards[index] = app.cards[number];
            app.cards[number] = card;
        }
    },

    loadFromAll: () => {
        app.config.cards = app.data.map(card => card.q);
    },

    initBoard: () => {
        document.querySelector('#name span').textContent = `Memory « ${app.config.title} »`;
        const tplCardQuestion = document.getElementById('card-question');
        const tplCardDescription = document.getElementById('card-description');
        const board = document.getElementById('cards');

        app.btPlayAgain = document.getElementById('play-again');

        app.btPlayAgain.addEventListener('click', app.playAgain);

        board.innerHTML = '';

        app.cards.forEach((card, index) => {
            const el = card.type == 1 ? 
                            document.importNode(tplCardQuestion.content, true).querySelector('article') :
                            document.importNode(tplCardDescription.content, true).querySelector('article');

            el.querySelector('.back').textContent = card.content;
            el.dataset.index = index;
            el.addEventListener('click', app.onClick);

            card.el = el;

            board.append(el);
        });

        app.cursor = document.getElementById('cursor');
        app.cursor.innerHTML = '';
        for (let i = 0; i < app.config.numberCards; i++) {
            app.cursor.append(document.createElement('span'));
        }
        app.cursor.querySelectorAll('span').forEach(span => span.classList.remove('answer-right', 'answer-wrong'));

        app.endSentence = document.getElementById('end-sentence');
    },

    onClick: (e) => {
        const card = e.currentTarget;

        if (app.countDisplayedCards == 2) {
            document.querySelectorAll('.display').forEach(card => card.classList.remove('display'));
            app.countDisplayedCards = 0;
            app.lastDisplayedCard = null;
        }

        card.classList.add('display');
        const index = card.dataset.index;

        if (app.lastDisplayedCard && 
            app.lastDisplayedCard !== index && 
            app.cards[index].index == app.cards[app.lastDisplayedCard].index) {

            card.classList.remove('display');
            card.classList.add('found');
            card.removeEventListener('click', app.onClick);

            app.cards[app.lastDisplayedCard].el.classList.remove('display');
            app.cards[app.lastDisplayedCard].el.classList.add('found');
            app.cards[app.lastDisplayedCard].el.removeEventListener('click', app.onClick);

            app.cursor.querySelector(`span:nth-child(${app.countFoundedCards + 1})`).classList.add('answer-right');

            app.countFoundedCards++;

            if (app.countFoundedCards == app.config.numberCards) {
                app.win();
            }
        }

        app.lastDisplayedCard = index;
        app.countDisplayedCards++;
    },

    win: () => {
        app.confetti.addConfetti();
        app.btPlayAgain.classList.remove('hidden');
        app.end();
    },

    end: () => {
        document.querySelectorAll('article:not(.found)').forEach(el => el.removeEventListener('click', app.onClick));
    }
}
