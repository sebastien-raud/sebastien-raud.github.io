const sortArray = {
    dataInput: document.getElementById('data-input'),
    dataSubmit: document.getElementById('data-submit'),
    dataDisplay: document.getElementById('data-display'),
    algo: document.getElementById('algo'),
    code: document.getElementById('code'),
    codeTable: document.querySelector('#code table'),
    btShowCode: document.getElementById('show-code'),
    showCode: false,
    data: [],

    init: () => {
        sortArray.bind();
    },

    bind: () => {
        sortArray.dataSubmit.addEventListener('click', sortArray.submit);
        sortArray.btShowCode.addEventListener('click', sortArray.toggleCode);
    },

    submit: (ev) => {
        if (sortArray.dataInput.value.trim() == '') return;
        sortArray.prepareData();
        sortArray.reinit();
        sortArray.displayData();
        sortArray.goButton();
    },

    toggleCode: () => {
        sortArray.showCode = !sortArray.showCode;
        sortArray.btShowCode.classList.toggle('actif');
    },

    prepareData: () => {
        let data = sortArray.dataInput.value.trim().split(',');

        sortArray.data = [];

        for (let i = 0; i < data.length; i++) {
            let val = (parseInt(data[i].trim()));
            if (!isNaN(val)) {
                sortArray.data.push(val);
            }
        }
    },

    displayData: () => {
        let table = '<table id="data-table">';
        let trTop    = ['<td>Permutation</td>'];
        let trMiddle = ['<td>Données</td>'];
        let trBottom = ['<td>Indices</td>'];

        let index = 0;

        for (const val of sortArray.data) {
            trTop.push('<td></td>');
            trMiddle.push('<td>' + val + '</td>');
            trBottom.push('<td>' + index + '</td>');

            index++;
        }

        table += '<tr id="permule-tr">' + trTop.join('') + '</tr>';
        table += '<tr id="data-tr">' + trMiddle.join('') + '</tr>';
        table += '<tr id="index-tr">' + trBottom.join('') + '</tr>';
        table += '</table>';

        sortArray.dataDisplay.innerHTML = '<p>Longueur tableau : ' + sortArray.data.length + '</p>' + table;
        sortArray.algo.textContent = '';
    },

    goButton: () => {
        const button = document.createElement('button');
        button.textContent = 'Go';
        button.addEventListener('click', sortArray.executeStart);
        sortArray.dataDisplay.append(button);
    },

    reinit: () => {
        sortArray.algoClear();
        sortArray.codeClear();
        sortArray.dataClearClasses();
        sortArray.algo.classList.remove('show');
        sortArray.code.classList.remove('show');
    },

    isAcending: () => {
        for (let i = 0; i < sortArray.data.length - 1; i++) {
            if (sortArray.data[i] > sortArray.data[i + 1]) {
                return false;
            }
        }

        return true;
    },

    executeStart: () => {
        sortArray.algoClear();
        sortArray.codeClear();
        sortArray.dataClearClasses();
        sortArray.algo.classList.add('show');
        sortArray.execute(0);
    },

    execute: async (index) => {
        
        let isAcending = sortArray.isAcending();

        sortArray.algoMessage('Tableau trié ? : ' + (isAcending ? 'OUI' : 'NON'));

        if (isAcending) {
            sortArray.algoMessage('Fin : retourne le tableau');
            return ;
        }

        sortArray.algoMessage('&nbsp;');

        setTimeout(function() {
            sortArray.algoMessage('&nbsp;DÉBUT boucle');
            sortArray.executeLoop(index);
        }, 2500);
    },

    executeLoop: async (index) => {
        sortArray.algoMessage('&nbsp;Index courant : ' + index);

        if (index >= sortArray.data.length - 1) {
            sortArray.algoMessage('&nbsp;FIN boucle', true);
            sortArray.dataClearClasses();
            sortArray.execute(index + 1);
            return ;
        }

        sortArray.algoMessage('&nbsp;Test tableau[' + index + '] (' + sortArray.data[index] + ') > tableau[' + (index + 1) + '] (' + sortArray.data[index + 1] + ') ?');

        if (sortArray.data[index] > sortArray.data[index + 1]) {
            sortArray.algoMessage('&nbsp;&nbsp;OUI : inversion valeurs');
            sortArray.algoMessage('&nbsp;&nbsp; - ' + sortArray.data[index + 1] + ' dans index ' + index);
            sortArray.algoMessage('&nbsp;&nbsp; - ' + sortArray.data[index] + ' dans index ' + (index + 1), true);

            let tmp = sortArray.data[index];
            sortArray.data[index] = sortArray.data[index + 1];
            sortArray.data[index + 1] = tmp;
        } else {
            sortArray.algoMessage('&nbsp;&nbsp;NON : poursuite du traitement', true);
        }

        setTimeout(function() {
            sortArray.executeLoop(index + 1);
        }, 2500);
    },

    algoMessage: (msg, breakLine = false) => {
        sortArray.algo.innerHTML += '<p>' + msg + '</p>';

        if (breakLine) {
            sortArray.algo.innerHTML += '<p>&nbsp;</p>';
        }

        sortArray.algo.scrollTop = sortArray.algo.scrollHeight;
    },

    algoClear: () => {
        sortArray.algo.innerHTML = '';
        sortArray.algo.scrollTop = 0;
    },

    dataClearClasses: () => {
        const highlights = sortArray.dataDisplay.querySelectorAll('.compare-first, .compare-second');
        if (highlights.length) {
            highlights.forEach(e => {
                e.classList.remove('compare-first', 'compare-second');
            });
        }
    },

    dataClasses: (index) => {
        sortArray.dataDisplay.querySelector('#data-tr td:nth-child(' + (index + 2) + ')').classList.add('compare-first');
        sortArray.dataDisplay.querySelector('#data-tr td:nth-child(' + (index + 3) + ')').classList.add('compare-second');

        sortArray.dataDisplay.querySelector('#index-tr td:nth-child(' + (index + 2) + ')').classList.add('compare-first');
        sortArray.dataDisplay.querySelector('#index-tr td:nth-child(' + (index + 3) + ')').classList.add('compare-second');
    },

    codeClear: () => {
        sortArray.code.scrollTop = 0;

        if (sortArray.showCode) {
            sortArray.code.classList.add('show');
        } else {
            sortArray.code.classList.remove('show');
        }
    },

    codeClassesClear: () => {
        const highlights = sortArray.codeTable.querySelectorAll('.highlight');
        if (highlights.length) {
            highlights.forEach(e => {
                e.classList.remove('highlight');
            });
        }
    },

    codeClasses: (index) => {
        sortArray.codeClassesClear();

        for (let i of index) {
            sortArray.codeTable.querySelector('tr:nth-child(' + i + ')').classList.add('highlight');
        }

        if (index.includes(10)) {
            sortArray.code.scrollTop = 100;
        }

    },

    wait: (delay) => new Promise(resolve => setTimeout(resolve, delay))
};

document.addEventListener('DOMContentLoaded', sortArray.init);