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

        table += '<tr id="permute-tr">' + trTop.join('') + '</tr>';
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

    isAscending: () => {
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
        
        let isAscending = sortArray.isAscending();

        sortArray.algoMessage('Tableau trié ? : ' + (isAscending ? 'OUI' : 'NON'));
        sortArray.codeClasses([1, 2]);
        
        if (sortArray.showCode) {
            await sortArray.wait(1000);
        }

        if (isAscending) {
            sortArray.algoMessage('Fin : retourne le tableau');
            sortArray.codeClasses([15, 16]);
            return ;
        }

        sortArray.algoMessage('&nbsp;');

        setTimeout(function() {
            sortArray.algoMessage('&nbsp;DÉBUT boucle');
            sortArray.executeLoop(index);
        }, 1500);
    },

    executeLoop: async (index) => {
        sortArray.algoMessage('&nbsp;Index courant : ' + index);

        if (index >= sortArray.data.length - 1) {
            sortArray.algoMessage('&nbsp;FIN boucle', true);
            sortArray.codeClasses([12]);
            sortArray.dataClearClasses();
            sortArray.execute(0);
            return ;
        }

        sortArray.dataClasses(index);
        sortArray.algoMessage('&nbsp;Test tableau[' + index + '] (' + sortArray.data[index] + ') > tableau[' + (index + 1) + '] (' + sortArray.data[index + 1] + ') ?');
        sortArray.codeClasses([3, 4]);

        if (sortArray.showCode) {
            await sortArray.wait(1500);
        }

        sortArray.codeClasses([5, 6]);

        if (sortArray.showCode) {
            await sortArray.wait(1500);
        }

        if (sortArray.data[index] > sortArray.data[index + 1]) {
            await sortArray.permute(index);

        } else {
            sortArray.algoMessage('&nbsp;&nbsp;NON : poursuite du traitement', true);
            await sortArray.wait(1000);
        }

        setTimeout(function() {
            sortArray.executeLoop(index + 1);
        }, 1500);
    },

    permute: async (index) => {

        let delay = sortArray.showCode ? 1500 : 500;

        // code :
        // Si l'entrée courante est supérieure à l'entrée suivante,
        // on inverse les deux entrées.
        sortArray.algoMessage('&nbsp;&nbsp;OUI : inversion valeurs');
        sortArray.codeClasses([7, 8]);

        await sortArray.wait(delay);

        let tmp = sortArray.data[index];
        
        sortArray.dataDisplay.querySelector('#permute-tr td:nth-child(' + (index + 2) + ')').textContent = tmp;
        sortArray.dataDisplay.querySelector('#data-tr td:nth-child(' + (index + 2) + ')').textContent = '';

        //await sortArray.wait(delay);

        sortArray.data[index] = sortArray.data[index + 1];

        // code :
        // Si l'entrée courante est supérieure à l'entrée suivante,
        // on inverse les deux entrées.
        // let temp = testedArray[i];
        sortArray.codeClasses([7, 8, 9]);
        
        await sortArray.wait(delay);

        /*sortArray.dataDisplay.querySelector('#permute-tr td:nth-child(' + (index + 2) + ')').textContent = '';
        sortArray.dataDisplay.querySelector('#permute-tr td:nth-child(' + (index + 3) + ')').textContent = tmp;

        await sortArray.wait(delay);*/

        sortArray.dataDisplay.querySelector('#data-tr td:nth-child(' + (index + 2) + ')').textContent = sortArray.data[index + 1];
        sortArray.dataDisplay.querySelector('#data-tr td:nth-child(' + (index + 3) + ')').textContent = '';

        sortArray.algoMessage('&nbsp;&nbsp; - ' + sortArray.data[index + 1] + ' dans index ' + index);
        sortArray.codeClasses([7, 8, 10]);

        await sortArray.wait(delay);

        sortArray.dataDisplay.querySelector('#permute-tr td:nth-child(' + (index + 2) + ')').textContent = '';
        sortArray.dataDisplay.querySelector('#data-tr td:nth-child(' + (index + 3) + ')').textContent = tmp;

        sortArray.algoMessage('&nbsp;&nbsp; - ' + tmp + ' dans index ' + (index + 1), true);

        sortArray.data[index + 1] = tmp;

        sortArray.codeClasses([7, 8, 11]);

        await sortArray.wait(delay);
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
        sortArray.dataClearClasses();

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

        let scroll = false;

        for (let i of index) {
            sortArray.codeTable.querySelector('tr:nth-child(' + i + ')').classList.add('highlight');

            scroll = (i >= 8);
        }

        if (scroll) {
            sortArray.code.scrollTop = 200;
        } else {
            sortArray.code.scrollTop = 0;
        }

    },

    wait: (delay) => new Promise(resolve => setTimeout(resolve, delay))
};

document.addEventListener('DOMContentLoaded', sortArray.init);