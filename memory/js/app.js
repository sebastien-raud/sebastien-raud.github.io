import data  from './data.js';

const app = {
    config: null,
    cards: [],
    lastDisplayedCard: null,
    countDisplayedCards: 0,
    countFoundedCards: 0,

    confetti: null,

    init: (config) => {
        app.config = config;
        if (!app.checkConfig()) {
            return ;
        }
        app.cards = [];
        app.lastCard = null;
        app.initCards();
        app.confetti = new JSConfetti();

        document.addEventListener('DOMContentLoaded', app.initBoard);
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

            const cardData = data.find(c => c.q == card);

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
        app.config.cards = data.map(card => card.q);
    },

    initBoard: () => {
        const tplCardQuestion = document.getElementById('card-question');
        const tplCardDescription = document.getElementById('card-description');
        const board = document.getElementById('cards');

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
        app.end();
    },

    end: () => {
        document.querySelectorAll('article:not(.found)').forEach(el => el.removeEventListener('click', app.onClick));
    }
}

import configGame from './data-memory/01-complex.js';
app.init(configGame);