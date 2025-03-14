import ex01 from "./codes/ex01.js";
import ex02 from "./codes/ex02.js";
import ex03 from "./codes/ex03.js";
import ex04 from "./codes/ex04.js";

// liste des exercices disponibles
const exercises = {
  ex01: ex01,
  ex02: ex02,
  ex03: ex03,
  ex04: ex04,
};


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
            app.confetti.addConfetti();
        }
    }
};

export const codeReader = {
  config: {},
  source: '',
  matches: [],
  dataDrag: [],
  html: [],
  accept: [],

  // charge le fichier exercice (source)
  load: async (name) => {
    if (!exercises[name]) {
      console.log('???');
      return
    }
    
    codeReader.config = exercises[name];
    codeReader.source = codeReader.config.code.trim();
  },

  // analyse les zones à glisser-déposer
  parse: () => {
    const re = /\[\[([^\]]*)\]\]/gm;
    codeReader.matches = codeReader.source.matchAll(re);
  },

  // transforme le source en
  //  - une liste des objets à glisser
  //  - le source avec les zones à déposer
  toCode: () => {
    let source = codeReader.source;

    // on commence par remplacer les zones
    codeReader.matches.forEach((m, index) => {
      // on replace les réponses à trou par **[]**
      source = source.replace(m[0], `**[]**`);
      codeReader.dataDrag.push({ id: index, content: m[1], tag: m[0] });
      if (!codeReader.accept[m[1]]) {
        codeReader.accept[m[1]] = [];
      }
      codeReader.accept[m[1]].push(index);
    });

    const highlightedCode = hljs.highlight(
      source,
      { language: codeReader.config.lang }
    ).value;

    let indexPlace = 0;

    highlightedCode.split('\n').forEach(line => {

      if (!line.length) {
        line = ' ';
      }

      // on replace les **[]** par le span qui peut recevoir la réponse
      line = line.replaceAll(/\*\*\[\]\*\*/g, (match, id) => {
        indexPlace++;
        return `<span class="code-place" data-number="${indexPlace - 1}"></span>`;
      });

      // on préserve l'indentation
      if (line.search(/\S/) > 0) {
        line = line.replace(/([^\S]+)/, (match, spaces) => `<pre class="code-spaces">${spaces}</pre>`);
      }

      codeReader.html.push(`<li>${line}</li>`);
    });
  },
};

export const dnd = {
    app: undefined,
    currentItem: undefined,
    currentTarget: undefined,
    accept: [],

    init: (app, accept) => {
        dnd.app = app;
        dnd.accept = accept;
        document.querySelectorAll('span.code-place').forEach(target => {
            target.addEventListener('dragover', (e) => {
                e.preventDefault();
                dnd.currentTarget = e.currentTarget;
                if (!dnd.itemAccepted()) {
                    dnd.currentTarget.classList.add('answer-wrong');
                } else {
                    dnd.currentTarget.classList.add('answer-right');
                }
                dnd.currentTarget.classList.add('hover-over');
            });
            target.addEventListener('dragleave', () => {
                dnd.currentTarget.classList.remove('answer-wrong', 'answer-right', 'hover-over');
                dnd.currentTarget = undefined;
            });
        });

        document.querySelectorAll('span.code-item').forEach(item => {
            item.addEventListener('drag', (e) => {
                dnd.currentItem = e.currentTarget;
                dnd.currentItem.classList.add('being-dragged');
            });
            item.addEventListener('dragend', () => {
                item.classList.remove('being-dragged');
                
                if (dnd.itemAccepted()) {
                    dnd.currentTarget.appendChild(dnd.currentItem);
                    dnd.currentTarget.classList.remove('code-place');
                    dnd.currentItem.classList.add('answer-right');
                    dnd.currentItem.draggable = false;
                    dnd.currentItem = undefined;

                    if (app && app.goodAnswer) {
                        app.goodAnswer();
                    }
                }
                dnd.currentTarget?.classList.remove('answer-wrong', 'answer-right', 'hover-over');
            });
        });
    },

    itemAccepted: () => {
        if (!dnd.currentItem || !dnd.currentTarget) {
            return false;
        }

        const itemContent = dnd.currentItem.dataset.content;
        const targetNumber = parseInt(dnd.currentTarget.dataset.number);

        if (!dnd.accept[itemContent]) {
            return false;
        }

        return dnd.accept[itemContent].includes(targetNumber);
    }
};

document.addEventListener('DOMContentLoaded', async() => {
    app.init();
});