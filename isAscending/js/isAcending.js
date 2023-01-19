const isAcending = {
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
        isAcending.bind();
    },

    bind: () => {
        isAcending.dataSubmit.addEventListener('click', isAcending.submit);
        isAcending.btShowCode.addEventListener('click', isAcending.toggleCode);
    },

    submit: (ev) => {
        if (isAcending.dataInput.value.trim() == '') return;
        isAcending.prepareData();
        isAcending.reinit();
        isAcending.displayData();
        isAcending.goButton();
    },

    toggleCode: () => {
        isAcending.showCode = !isAcending.showCode;
        isAcending.btShowCode.classList.toggle('actif');
    },

    prepareData: () => {
        let data = isAcending.dataInput.value.trim().split(',');

        isAcending.data = [];

        for (let i = 0; i < data.length; i++) {
            let val = (parseInt(data[i].trim()));
            if (!isNaN(val)) {
                isAcending.data.push(val);
            }
        }
    },

    displayData: () => {
        let table = '<table id="data-table">';
        let trMiddle = ['<td>Données</td>'];
        let trBottom = ['<td>Indices</td>'];

        let index = 0;

        for (const val of isAcending.data) {
            trMiddle.push('<td>' + val + '</td>');
            trBottom.push('<td>' + index + '</td>');

            index++;
        }

        table += '<tr id="data-tr">' + trMiddle.join('') + '</tr>';
        table += '<tr id="index-tr">' + trBottom.join('') + '</tr>';
        table += '</table>';

        isAcending.dataDisplay.innerHTML = '<p>Longueur tableau : ' + isAcending.data.length + '</p>' + table;
        isAcending.algo.textContent = '';
    },

    goButton: () => {
        const button = document.createElement('button');
        button.textContent = 'Go';
        button.addEventListener('click', isAcending.executeStart);
        isAcending.dataDisplay.append(button);
    },

    reinit: () => {
        isAcending.algoClear();
        isAcending.codeClear();
        isAcending.dataClearClasses();
        isAcending.algo.classList.remove('show');
        isAcending.code.classList.remove('show');
    },

    executeStart: () => {
        isAcending.algoClear();
        isAcending.codeClear();
        isAcending.dataClearClasses();
        isAcending.algo.classList.add('show');
        isAcending.execute(0);
    },

    execute: async (index) => {
        
        isAcending.algoMessage('Index courant : ' + index);
        isAcending.codeClasses([1]);
        
        if (isAcending.showCode) {
            await isAcending.wait(1500);
        }

        if (index >= isAcending.data.length - 1) {
            isAcending.algoMessage('&nbsp;&nbsp;FIN : retourne true (tableau trié)');
            isAcending.codeClasses([9, 10]);
            isAcending.dataClearClasses();
            return ;
        }

        isAcending.dataClearClasses();
        isAcending.dataClasses(index);

        isAcending.algoMessage('Test tableau[' + index + '] (' + isAcending.data[index] + ') > tableau[' + (index + 1) + '] (' + isAcending.data[index + 1] + ') ?');
        isAcending.codeClasses([2, 3]);

        if (isAcending.showCode) {
            await isAcending.wait(1500);
        }

        if (isAcending.data[index] >= isAcending.data[index + 1]) {
            isAcending.algoMessage('&nbsp;&nbsp;OUI : retourne false (tableau non trié)');
            isAcending.codeClasses([4, 5, 6]);
            return ;
        }

        isAcending.algoMessage('&nbsp;&nbsp;NON : poursuite du traitement', true);
        
        if (isAcending.showCode) {
            await isAcending.wait(1500);
        }

        setTimeout(function() {
            console.log('execute next');
            isAcending.execute(index + 1);
        }, 2500);
    },

    algoMessage: (msg, breakLine = false) => {
        isAcending.algo.innerHTML += '<p>' + msg + '</p>';

        if (breakLine) {
            isAcending.algo.innerHTML += '<p>&nbsp;</p>';
        }

        isAcending.algo.scrollTop = isAcending.algo.scrollHeight;
    },

    algoClear: () => {
        isAcending.algo.innerHTML = '';
        isAcending.algo.scrollTop = 0;
    },

    dataClearClasses: () => {
        const highlights = isAcending.dataDisplay.querySelectorAll('.compare-first, .compare-second');
        if (highlights.length) {
            highlights.forEach(e => {
                e.classList.remove('compare-first', 'compare-second');
            });
        }
    },

    dataClasses: (index) => {
        isAcending.dataDisplay.querySelector('#data-tr td:nth-child(' + (index + 2) + ')').classList.add('compare-first');
        isAcending.dataDisplay.querySelector('#data-tr td:nth-child(' + (index + 3) + ')').classList.add('compare-second');

        isAcending.dataDisplay.querySelector('#index-tr td:nth-child(' + (index + 2) + ')').classList.add('compare-first');
        isAcending.dataDisplay.querySelector('#index-tr td:nth-child(' + (index + 3) + ')').classList.add('compare-second');
    },

    codeClear: () => {
        isAcending.code.scrollTop = 0;

        if (isAcending.showCode) {
            isAcending.code.classList.add('show');
        } else {
            isAcending.code.classList.remove('show');
        }
    },

    codeClassesClear: () => {
        const highlights = isAcending.codeTable.querySelectorAll('.highlight');
        if (highlights.length) {
            highlights.forEach(e => {
                e.classList.remove('highlight');
            });
        }
    },

    codeClasses: (index) => {
        isAcending.codeClassesClear();

        for (let i of index) {
            isAcending.codeTable.querySelector('tr:nth-child(' + i + ')').classList.add('highlight');
        }

        if (index.includes(10)) {
            isAcending.code.scrollTop = 100;
        }

    },

    wait: (delay) => new Promise(resolve => setTimeout(resolve, delay))
};

document.addEventListener('DOMContentLoaded', isAcending.init);