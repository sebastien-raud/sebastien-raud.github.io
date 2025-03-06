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