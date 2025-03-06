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
}