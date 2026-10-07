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
        app.lastDisplayedCard = null;
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
        document.getElementById('live').textContent = '';
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
        document.getElementById('name').textContent = `Memory « ${app.config.title} »`;
        document.title = `Memory « ${app.config.title} »`;
        const tplCardQuestion = document.getElementById('card-question');
        const tplCardDescription = document.getElementById('card-description');
        const board = document.getElementById('cards');

        // l'écouteur du bouton Rejouer n'est ajouté qu'une fois, pas à chaque partie
        if (!app.btPlayAgain) {
            app.btPlayAgain = document.getElementById('play-again');
            app.btPlayAgain.addEventListener('click', app.playAgain);
        }

        board.innerHTML = '';

        app.cards.forEach((card, index) => {
            const el = card.type == 1 ? 
                            document.importNode(tplCardQuestion.content, true).querySelector('.card') :
                            document.importNode(tplCardDescription.content, true).querySelector('.card');

            el.querySelector('.back').textContent = card.content;
            el.setAttribute('aria-label', 'Carte cachée');
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

        // une carte déjà retournée ou trouvée ne compte pas
        if (card.classList.contains('display') || card.classList.contains('found')) return;

        if (app.countDisplayedCards == 2) {
            document.querySelectorAll('.display').forEach(card => {
                card.classList.remove('display');
                card.setAttribute('aria-label', 'Carte cachée');
            });
            app.countDisplayedCards = 0;
            app.lastDisplayedCard = null;
        }

        card.classList.add('display');
        const index = card.dataset.index;
        card.setAttribute('aria-label', app.cards[index].content);

        if (app.lastDisplayedCard && 
            app.lastDisplayedCard !== index && 
            app.cards[index].index == app.cards[app.lastDisplayedCard].index) {

            [card, app.cards[app.lastDisplayedCard].el].forEach(el => {
                el.classList.remove('display');
                el.classList.add('found');
                // carte désactivée : elle ne réagit plus et sort de l'ordre de tabulation
                el.disabled = true;
            });

            app.cursor.querySelector(`span:nth-child(${app.countFoundedCards + 1})`).classList.add('answer-right');

            // annonce pour les lecteurs d'écran
            const pair = app.cards.filter(c => c.index == app.cards[index].index);
            document.getElementById('live').textContent = `Paire trouvée : ${pair.map(c => c.content).join(', ')}.`;

            app.countFoundedCards++;

            if (app.countFoundedCards == app.config.numberCards) {
                app.win();
            }
        }

        app.lastDisplayedCard = index;
        app.countDisplayedCards++;
    },

    win: () => {
        // pas de confettis si l'utilisateur a demandé de réduire les animations
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            app.confetti.addConfetti();
        }
        app.btPlayAgain.classList.remove('hidden');
        app.btPlayAgain.focus();
        document.getElementById('live').textContent += ' Bravo, toutes les paires sont trouvées !';
        app.end();
    },

    end: () => {
        document.querySelectorAll('.card:not(.found)').forEach(el => el.removeEventListener('click', app.onClick));
    }
}
