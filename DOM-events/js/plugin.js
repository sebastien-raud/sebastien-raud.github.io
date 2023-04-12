const plugin = {
    init: () => {
        plugin.exampleSelectElement();
        plugin.exampleAttachHandler();
        plugin.exampleClickHandler();
        plugin.exampleClickHandlerEvent();
    },

    exampleSelectElement: () => {
        if (slider.slideIndex != 2) return ;

        plugin.exampleShow([6, 7], ' : <span class="get-elements">h1</span>');
    },

    exampleAttachHandler: () => {
        if (slider.slideIndex < 3 || slider.slideIndex > 7) return ;

        const elementsIndex = [6, 7];

        let tags = document.getElementsByClassName('hljs-tag');

        for (const index of elementsIndex) {
            tags[index].classList.toggle('get-elements');
        }

        for (const elt of document.getElementsByClassName('dom-element-select')) {
            elt.classList.toggle('get-elements');
        }

    },

    exampleClickHandler: () => {
        if (slider.slideIndex < 5 || slider.slideIndex > 6) return ;

        let clickable = document.createElement('span');
        let firstTag = document.getElementsByClassName('hljs-tag')[6];
        let nextTag = firstTag.nextSibling;
        let lastTag = document.getElementsByClassName('hljs-tag')[7];

        firstTag.parentNode.insertBefore(clickable, firstTag);
        clickable.append(firstTag, nextTag, lastTag);

        clickable.style.cursor = 'pointer';
        clickable.addEventListener('click', function() { alert('Clic sur le bouton'); });

        document.querySelector('.dom-element-select.get-elements').addEventListener('click', function() { alert('Clic sur le bouton'); });
    },

    exampleClickHandlerEvent: () => {
        if (slider.slideIndex != 7) return ;

        let clickable = document.createElement('span');
        let firstTag = document.getElementsByClassName('hljs-tag')[6];
        let nextTag = firstTag.nextSibling;
        let lastTag = document.getElementsByClassName('hljs-tag')[7];

        firstTag.parentNode.insertBefore(clickable, firstTag);
        clickable.append(firstTag, nextTag, lastTag);

        clickable.style.cursor = 'pointer';
        clickable.addEventListener('click', function(event) { alert('Action sur le bouton : ' + event.type) });

        document.querySelector('.dom-element-select.get-elements').addEventListener('click', function(event) { alert('Action sur le bouton : ' + event.type); });
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

            /*let result = document.getElementById('result-example');

            if (result.textContent.trim() == '') {
                result.innerHTML = resultHtml;
            } else {
                result.textContent = '';
            }*/

        });
    },
};