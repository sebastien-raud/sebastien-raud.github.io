const isAscending = {
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
        isAscending.bind();
    },

    bind: () => {
        isAscending.dataSubmit.addEventListener('click', isAscending.submit);
        isAscending.btShowCode.addEventListener('click', isAscending.toggleCode);
    },

    submit: (ev) => {
        if (isAscending.dataInput.value.trim() == '') return;
        isAscending.prepareData();
        isAscending.reinit();
        isAscending.displayData();
        isAscending.goButton();
    },

    toggleCode: () => {
        isAscending.showCode = !isAscending.showCode;
        isAscending.btShowCode.classList.toggle('actif');
    },

    prepareData: () => {
        let data = isAscending.dataInput.value.trim().split(',');

        isAscending.data = [];

        for (let i = 0; i < data.length; i++) {
            let val = (parseInt(data[i].trim()));
            if (!isNaN(val)) {
                isAscending.data.push(val);
            }
        }
    },

    displayData: () => {
        let table = '<table id="data-table">';
        let trMiddle = ['<td>Données</td>'];
        let trBottom = ['<td>Indices</td>'];

        let index = 0;

        for (const val of isAscending.data) {
            trMiddle.push('<td>' + val + '</td>');
            trBottom.push('<td>' + index + '</td>');

            index++;
        }

        table += '<tr id="data-tr">' + trMiddle.join('') + '</tr>';
        table += '<tr id="index-tr">' + trBottom.join('') + '</tr>';
        table += '</table>';

        isAscending.dataDisplay.innerHTML = '<p>Longueur tableau : ' + isAscending.data.length + '</p>' + table;
        isAscending.algo.textContent = '';
    },

    goButton: () => {
        const button = document.createElement('button');
        button.textContent = 'Go';
        button.addEventListener('click', isAscending.executeStart);
        isAscending.dataDisplay.append(button);
    },

    reinit: () => {
        isAscending.algoClear();
        isAscending.codeClear();
        isAscending.dataClearClasses();
        isAscending.algo.classList.remove('show');
        isAscending.code.classList.remove('show');
    },

    executeStart: () => {
        isAscending.algoClear();
        isAscending.codeClear();
        isAscending.dataClearClasses();
        isAscending.algo.classList.add('show');
        isAscending.execute(0);
    },

    execute: async (index) => {
        
        isAscending.algoMessage('Index courant : ' + index);
        isAscending.codeClasses([1]);
        
        if (isAscending.showCode) {
            await isAscending.wait(1500);
        }

        if (index >= isAscending.data.length - 1) {
            isAscending.algoMessage('&nbsp;&nbsp;FIN : retourne true (tableau trié)');
            isAscending.codeClasses([9, 10]);
            isAscending.dataClearClasses();
            return ;
        }

        isAscending.dataClasses(index);

        isAscending.algoMessage('Test tableau[' + index + '] (' + isAscending.data[index] + ') > tableau[' + (index + 1) + '] (' + isAscending.data[index + 1] + ') ?');
        isAscending.codeClasses([2, 3]);

        if (isAscending.showCode) {
            await isAscending.wait(1500);
        }

        if (isAscending.data[index] > isAscending.data[index + 1]) {
            isAscending.algoMessage('&nbsp;&nbsp;OUI : retourne false (tableau non trié)');
            isAscending.codeClasses([4, 5, 6]);
            return ;
        }

        isAscending.algoMessage('&nbsp;&nbsp;NON : poursuite du traitement', true);
        
        if (isAscending.showCode) {
            await isAscending.wait(1500);
        }

        setTimeout(function() {
            isAscending.execute(index + 1);
        }, 2500);
    },

    algoMessage: (msg, breakLine = false) => {
        isAscending.algo.innerHTML += '<p>' + msg + '</p>';

        if (breakLine) {
            isAscending.algo.innerHTML += '<p>&nbsp;</p>';
        }

        isAscending.algo.scrollTop = isAscending.algo.scrollHeight;
    },

    algoClear: () => {
        isAscending.algo.innerHTML = '';
        isAscending.algo.scrollTop = 0;
    },

    dataClearClasses: () => {
        const highlights = isAscending.dataDisplay.querySelectorAll('.compare-first, .compare-second');
        if (highlights.length) {
            highlights.forEach(e => {
                e.classList.remove('compare-first', 'compare-second');
            });
        }
    },

    dataClasses: (index) => {
        isAscending.dataClearClasses();

        isAscending.dataDisplay.querySelector('#data-tr td:nth-child(' + (index + 2) + ')').classList.add('compare-first');
        isAscending.dataDisplay.querySelector('#data-tr td:nth-child(' + (index + 3) + ')').classList.add('compare-second');

        isAscending.dataDisplay.querySelector('#index-tr td:nth-child(' + (index + 2) + ')').classList.add('compare-first');
        isAscending.dataDisplay.querySelector('#index-tr td:nth-child(' + (index + 3) + ')').classList.add('compare-second');
    },

    codeClear: () => {
        isAscending.code.scrollTop = 0;

        if (isAscending.showCode) {
            isAscending.code.classList.add('show');
        } else {
            isAscending.code.classList.remove('show');
        }
    },

    codeClassesClear: () => {
        const highlights = isAscending.codeTable.querySelectorAll('.highlight');
        if (highlights.length) {
            highlights.forEach(e => {
                e.classList.remove('highlight');
            });
        }
    },

    codeClasses: (index) => {
        isAscending.codeClassesClear();

        for (let i of index) {
            isAscending.codeTable.querySelector('tr:nth-child(' + i + ')').classList.add('highlight');
        }

        if (index.includes(10)) {
            isAscending.code.scrollTop = 150;
        }

    },

    wait: (delay) => new Promise(resolve => setTimeout(resolve, delay))
};

document.addEventListener('DOMContentLoaded', isAscending.init);