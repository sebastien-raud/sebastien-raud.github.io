const plugin = {
    init: () => {
        plugin.exampleGetElementsByTagName();
        plugin.exampleGetElementsByClassName();
        plugin.exampleGetElementsById();
        plugin.exampleQuerySelector();
        plugin.exampleQuerySelectorAll();
        plugin.exampleQuerySelectorAll2();
        plugin.exampleUpdateElement();
        plugin.exampleClassesElement();
        plugin.exampleCreateElement();
        plugin.exampleAppendElement();
        plugin.exampleRemoveElement();
    },

    exampleGetElementsByTagName: () => {
        if (slider.slideIndex != 5) return ;

        plugin.exampleShow([10, 11, 12, 13], ' : [<span class="get-elements">p</span>, <span class="get-elements">p</span>]');
    },

    exampleGetElementsByClassName: () => {
        if (slider.slideIndex != 6) return ;

        plugin.exampleShow([6, 7, 8, 9], ' : [<span class="get-elements">h1</span>, <span class="get-elements">h2</span>]');
    },

    exampleGetElementsById: () => {
        if (slider.slideIndex != 7) return ;

        plugin.exampleShow([6, 7], ' : <span class="get-elements">h1</span>');
    },

    exampleQuerySelector: () => {
        if (slider.slideIndex != 8) return ;

        plugin.exampleShow([6, 7], ' : <span class="get-elements">h1</span>');
    },

    exampleQuerySelectorAll: () => {
        if (slider.slideIndex != 9) return ;

        plugin.exampleShow([6, 7, 8, 9], ' : [<span class="get-elements">h1</span>, <span class="get-elements">h2</span>]');
    },

    exampleQuerySelectorAll2: () => {
        if (slider.slideIndex != 10) return ;

        plugin.exampleShow([6, 7, 8, 9, 10, 11, 12, 13], 
                           ' : [<span class="get-elements">h1</span>, <span class="get-elements">h2</span>, <span class="get-elements">p</span>, <span class="get-elements">p</span>]');
    },

    exampleShow: (elementsIndex, resultHtml) => {
        document.getElementById('dom-example').addEventListener('click', () => {
            let tags = document.getElementsByClassName('hljs-tag');

            for (const index of elementsIndex) {
                tags[index].classList.toggle('get-elements');
            }

            for (const elt of document.getElementsByClassName('dom-element-select')) {
                elt.classList.toggle('get-elements');
            }

            let result = document.getElementById('result-example');

            if (result.textContent.trim() == '') {
                result.innerHTML = resultHtml;
            } else {
                result.textContent = '';
            }

        });
    },

    exampleUpdateElement: () => {
        if (slider.slideIndex != 11) return ;

        const elId = document.querySelector('.hljs-tag .hljs-string');
        const attId = document.getElementById('dom-attribute-id');
        const elChangeId = document.getElementById('change-id');
        elChangeId.addEventListener('keydown', (event) => {
            event.stopImmediatePropagation();
        });
        elChangeId.addEventListener('keyup', (event) => {
            elId.textContent = '"' + event.currentTarget.value + '"';
            attId.textContent = event.currentTarget.value;
        });

        const elText = document.querySelector('.hljs-tag').nextSibling;
        const attText = document.getElementById('dom-attribute-text');
        const elChangeTextContent = document.getElementById('change-text-content');
        elChangeTextContent.addEventListener('keydown', (event) => {
            event.stopImmediatePropagation();
        });
        elChangeTextContent.addEventListener('keyup', (event) => {
            elText.nodeValue = event.currentTarget.value;
            attText.textContent = event.currentTarget.value;
        });
    },

    exampleClassesElement: () => {
        if (slider.slideIndex != 12) return ;

        const elClass = document.querySelectorAll('.hljs-tag .hljs-string')[0];
        const attClass = document.getElementById('dom-attribute-class');
        const elChangeClass = document.getElementById('change-class-name');
        elChangeClass.addEventListener('keydown', (event) => {
            event.stopImmediatePropagation();
        });
        elChangeClass.addEventListener('keyup', (event) => {
            elClass.textContent = '"' + event.currentTarget.value.trim() + '"';
            attClass.textContent = event.currentTarget.value.trim();
        });

        const eltAddClass = document.getElementById('add-class-list');
        const elUl = document.querySelector('ul.code-test');

        eltAddClass.addEventListener('click', (event) => {
            event.preventDefault();
            const elTpl = document.getElementById('class-list').content.cloneNode(true);
            
            const elSelect = elTpl.querySelector('select.change-class-list'); 
            const elInput = elTpl.querySelector('input.change-class-list');
            
            elInput.addEventListener('keydown', (event) => {
                event.stopImmediatePropagation();
            });
            elInput.addEventListener('keyup', (event) => {
                const elH1 = document.createElement('h1');
                const isEnter = event.keyCode == 13;

                let className = event.currentTarget.value;
                
                elH1.className = elClass.textContent.trim().replaceAll('"', '');
                
                if (isEnter) {
                    switch (elSelect.value) {
                        case 'add':
                            elH1.classList.add(className);
                            break;

                        case 'remove':
                            elH1.classList.remove(className);
                            break;

                        case 'toggle':
                            elH1.classList.toggle(className);
                            break;
                    }
                    
                    elClass.textContent = '"' + elH1.className + '"';
                    attClass.textContent = elH1.className;
                }
            });
            
            elUl.append(elTpl);
        });
    },

    exampleCreateElement: () => {
        if (slider.slideIndex != 13) return ;

        let toggleShow = false;
        
        document.querySelector('ul.code-test').addEventListener('click', () => {
            if (!toggleShow) {
                document.querySelector('ul.tree').append(document.querySelector('#element-li').content.cloneNode(true));
                document.getElementById('result-example').innerHTML = ' : <span class="get-elements">h1</span>';
            } else {
                document.querySelector('ul.tree > li:last-child').remove();
                document.getElementById('result-example').innerHTML = '';
            }

            toggleShow = !toggleShow;
        });
    },

    exampleAppendElement: () => {
        if (slider.slideIndex != 14) return ;

        let toggleShow = false;
        
        document.querySelector('ul.code-test').addEventListener('click', () => {
            if (!toggleShow) {
                document.querySelectorAll('ul.code-test li').forEach((el) => el.classList.add('code-action'));
                document.querySelector('ul.tree').append(document.querySelector('#element-li').content.cloneNode(true));
                
                document.querySelectorAll('ul.code-test li:nth-child(2), ul.code-test li:nth-child(5), ul.code-test li:nth-child(6)').forEach((el) => el.classList.remove('code-action'));
                
                setTimeout(function() {
                    document.querySelectorAll('.code-action').forEach((el) => el.classList.remove('code-action'));
                    document.querySelector('ul.code-test li:last-child').classList.add('code-action');
                    document.getElementById('new-element').remove();

                    const elUl = document.createElement('ul');
                    elUl.append(document.querySelector('#element-li').content.cloneNode(true));

                    document.getElementById('append-element').append(elUl);
                    document.getElementById('code-html').innerHTML = '&lt;!DOCTYPE html&gt;\n' +
                                                                        '&lt;html&gt;\n' + 
                                                                        '    &lt;head&gt;\n' +
                                                                        '    &lt;title&gt;DOM&lt;/title&gt;\n' +
                                                                        '    &lt;/head&gt;\n' +
                                                                        '    &lt;body&gt;\n' +
                                                                        '      &lt;h1\n       id="le-dom"\n       class="title"&gt;&lt;/h1&gt;\n' +
                                                                        '    &lt;/body&gt;\n' +
                                                                        '&lt;/html&gt;';
                    hljs.highlightElement(document.getElementById('code-html'));
                }, 2500);
            } else {
                document.getElementById('new-element').remove();
                document.getElementById('code-html').innerHTML = '&lt;!DOCTYPE html&gt;\n' +
                                                                        '&lt;html&gt;\n' + 
                                                                        '    &lt;head&gt;\n' +
                                                                        '    &lt;title&gt;DOM&lt;/title&gt;\n' +
                                                                        '    &lt;/head&gt;\n' +
                                                                        '    &lt;body&gt;\n' +
                                                                        '    &lt;/body&gt;\n' +
                                                                        '&lt;/html&gt;';
                hljs.highlightElement(document.getElementById('code-html'));
                document.querySelectorAll('.code-action').forEach((el) => el.classList.remove('code-action'));
            }

            toggleShow = !toggleShow;
        });
    },

    exampleRemoveElement: () => {
        if (slider.slideIndex != 15) return ;

        let toggleShow = false;	

        document.querySelector('ul.code-test').addEventListener('click', () => {
            if (!toggleShow) {
                document.getElementById('delete-element').remove();
                document.getElementById('code-html').innerHTML = '&lt;!DOCTYPE html&gt;\n' +
                                                                    '&lt;html&gt;\n' +
                                                                    '    &lt;head&gt;\n' +
                                                                    '    &lt;title&gt;DOM&lt;/title&gt;\n' +
                                                                    '    &lt;/head&gt;\n' +
                                                                    '    &lt;body&gt;\n' +
                                                                    '    &lt;/body&gt;\n' +
                                                                    '&lt;/html&gt;';
            } else {
                document.getElementById('append-element').append(document.getElementById('element-ul').content.cloneNode(true));
                document.getElementById('code-html').innerHTML = '&lt;!DOCTYPE html&gt;\n' +
                                                                    '&lt;html&gt;\n' +
                                                                    '    &lt;head&gt;\n' +
                                                                    '    &lt;title&gt;DOM&lt;/title&gt;\n' +
                                                                    '    &lt;/head&gt;\n' +
                                                                    '    &lt;body&gt;\n' +
                                                                    '      &lt;h1&gt;Le DOM&lt;/h1&gt;\n' +
                                                                    '    &lt;/body&gt;\n' +
                                                                    '&lt;/html&gt;';
            }
            hljs.highlightElement(document.getElementById('code-html'));
            toggleShow = !toggleShow;
        });
    }
};