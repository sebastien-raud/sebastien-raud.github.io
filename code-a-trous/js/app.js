import { codeReader } from './codeReader.js';
import { dnd } from './dnd.js';

const app = {
    points: 0,
    countElements: 0,
    confetti: undefined,

    init: async() => {
        app.confetti = new JSConfetti();

        const urlParams = new URLSearchParams(window.location.search);
        let q = urlParams.get('q');

        if (!q) {
            q = 'ex01';
        }

        await codeReader.load(q);

        codeReader.parse();
        codeReader.toCode();

        app.countElements = codeReader.dataDrag.length;
        document.getElementById('code').innerHTML = codeReader.html.join('\n');
    
        const items = [];
        codeReader.dataDrag.forEach(data => {
            const span = document.createElement('span');
            span.draggable = true;
            span.classList.add('code-item');
            span.textContent = data.content;
            span.dataset.content = data.content;
            items.push(span);
        });
    
        items.sort(() => (Math.random() > 0.5) ? 1 : -1);
        items.forEach(span => {
            document.getElementById('elements').append(span);
        });
    
        dnd.init(app, codeReader.accept);
    },

    goodAnswer: () => {
        app.points++;

        if (app.points == app.countElements) {
            app.confetti.addConfetti({
                confettiNumber: 2000,
            });
        }
    }
};

document.addEventListener('DOMContentLoaded', async() => {
    app.init();
});