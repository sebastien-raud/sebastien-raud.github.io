const slider = {
    slides: {},       // liste des slides chargées (cache)
	slideIndex: 0,    // slide courante
	slidesNumber: 0,  // nombre de slides
	stepIndex: 0,     // étape courante dans la slide courante
	stepsNumber: 0,   // nombre d'étapes dans la slide courante
	slideDiv: null,   // div qui contient les slides
    onShowSlide: null,

    arrows: {         // flèches pour navigation
        left: null,
        up: null,
        right: null,
        down: null,
        pageNumber: null,
    },

    init: function(slidesNumber, slidesId = 'slide') {
        slider.slidesNumber = slidesNumber;

        slider.slideDiv = document.getElementById(slidesId);

        slider.initArrows();
        slider.bind();
        slider.initSlideNumber();        
    },

    initArrows: function() {
        // conteneur des flèches
        const arrowsDiv = document.createElement('div');
        arrowsDiv.id = 'arrows';

        // col "up" + flèche
        const arrowUpCol = document.createElement('div');
        arrowUpCol.classList.add('arrow-col');
        
        const arrowUp = document.createElement('span');
        arrowUp.id = 'up';
        arrowUp.innerHTML = '&#9651;';
        slider.arrows.up = arrowUp;
        arrowUpCol.append(arrowUp);

        // col milieu + flèche gauche + texte page + flèche droite
        const arrowMiddleCol = document.createElement('div');
        arrowMiddleCol.classList.add('arrow-col');
        
        const arrowLeft = document.createElement('span');
        arrowLeft.id = 'left';
        arrowLeft.innerHTML = '&#9665;';
        slider.arrows.left = arrowLeft;

        const pageNumber = document.createElement('span');
        pageNumber.id = 'page-number';
        slider.arrows.pageNumber = pageNumber;

        const arrowRight = document.createElement('span');
        arrowRight.id = 'right';
        arrowRight.innerHTML = '&#9655;';
        slider.arrows.right = arrowRight;

        arrowMiddleCol.append(arrowLeft, pageNumber, arrowRight);

        // col "down" + flèche
        const arrowDownCol = document.createElement('div');
        arrowDownCol.classList.add('arrow-col');
        
        const arrowDown = document.createElement('span');
        arrowDown.id = 'down';
        arrowDown.innerHTML = '&#9661;';
        slider.arrows.down = arrowDown;
        arrowDownCol.append(arrowDown);

        arrowsDiv.append(arrowUpCol, arrowMiddleCol, arrowDownCol);
        slider.slideDiv.after(arrowsDiv);
    },

    bind: function() {
        document.addEventListener('keydown', slider.keydownUpdateSlide, false);
        document.addEventListener('swiped', slider.swipeUpdateSlide);
        slider.arrows.up.addEventListener('click', slider.clickUpdateSlide);
        slider.arrows.right.addEventListener('click', slider.clickUpdateSlide);
        slider.arrows.down.addEventListener('click', slider.clickUpdateSlide);
        slider.arrows.left.addEventListener('click', slider.clickUpdateSlide);
    },

    initSlideNumber: function() {
        let hash = document.location.hash,
            slideStep = [];

        if (hash.length) {
            hash = hash.slice(1);
            slideStep = hash.split('.');

            if (Number.isInteger(Number(slideStep[0]))) {
                slider.slideIndex = Number(slideStep[0]) - 1;
            }
        }
        
        slider.updateSlide();

        if (slideStep.length == 2 && Number.isInteger(Number(slideStep[1]))) {
            setTimeout(function() {
                slider.gotoStep(Number(slideStep[1]));
            }, 500);
        }
    },

    keydownUpdateSlide: function(e) {
        const directions = {
                36: 'start',	// touche debut
                35: 'end',		// touche fin
                32: 'next',		// espace
                39: 'next',		// flèche ->
                37: 'prev',		// flèche <-
                38: 'stepPrev',	// flèche haut
                40: 'stepNext'	// flèche bas
        };

        if (directions[e.keyCode]) {
            slider.updateSlideFromDirection(directions[e.keyCode]);
        }
    },

    swipeUpdateSlide: function(e) {
        const directions = {
                'right': 'prev',
                'left': 'next',
                'down': 'stepPrev',
                'up': 'stepNext'
        };

        if (directions[e.detail.dir]) {
            slider.updateSlideFromDirection(directions[e.detail.dir]);
        }
    },

    clickUpdateSlide: function(e) {
        switch (e.currentTarget) {
            case slider.arrows.up:
                slider.updateSlideFromDirection('stepPrev');
                break;
            case slider.arrows.down:
                slider.updateSlideFromDirection('stepNext');
                break;
            case slider.arrows.left:
                slider.updateSlideFromDirection('prev');
                break;
            case slider.arrows.right:
                slider.updateSlideFromDirection('next');
                break;
        }
    },

    updateSlideFromDirection: function(dir) {
        switch (dir) {
            // touche debut
            case 'start':
                slider.slideIndex = 0;
                slider.updateSlide();
                break;
            
            // touche fin
            case 'end':
                slider.slideIndex = slider.slidesNumber - 1;
                slider.updateSlide();
                break;

            // slide suivante
            case 'next':
            case 39:
                slider.slideIndex++;
                if (slider.slideIndex >= slider.slidesNumber) {
                    slider.slideIndex = slider.slidesNumber - 1;
                    return;
                }
                slider.updateSlide();
                break;
            
            // slide précédente
            case 'prev':
                slider.slideIndex--;
                if (slider.slideIndex < 0) {
                    slider.slideIndex = 0;
                    return;
                }
                slider.updateSlide();
                setTimeout(slider.updateStepLast, 500);
                break;

            // sous-slide précédente
            case 'stepPrev':
                slider.updateStepPrev();
                break;

            // sous-slide suivante
            case 'stepNext':
                slider.updateStepNext();
                break;

            default:
                return;
        }
    },	

    updateSlide: function() {
        let slideFile = (slider.slideIndex + 1 < 10 ? '0' : '') + (slider.slideIndex + 1) + '.html';

        if (undefined != slider.slides[slideFile]) {
            slider.slideDiv.innerHTML = slider.slides[slideFile];
            if (slider.onShowSlide) slider.onShowSlide();
            slider.checkSteps();
            slider.arrows();
        } else {
            fetch('./slides/' + slideFile)
            .then(response => response.text())
            .then(data => {
                slider.slides[slideFile] = data;
                slider.slideDiv.innerHTML = data;
                if (slider.onShowSlide) slider.onShowSlide();
                slider.checkSteps();
                slider.arrows();
            });
        }
        slider.loadNext();
    },

    loadNext: function() {
        let slideFile = ((slider.slideIndex + 2) < 10 ? '0' : '') + (slider.slideIndex + 2) + '.html';

        if (slider.slideIndex + 2 > slider.slidesNumber) {
            return;
        }

        if (undefined != slider.slides[slideFile]) {
            return;
        }

        fetch('./slides/' + slideFile)
            .then(response => response.text())
            .then(data => {
                slider.slides[slideFile] = data;
            });
    },

    updateStepPrev: function() {
        let stepShow = document.getElementsByClassName('step-' + (slider.stepIndex)),
            stepHidden = document.getElementsByClassName('hidden-' + (slider.stepIndex));

        if (stepShow.length) {
            Array.from(stepShow).forEach(el => el.classList.remove('visible'));
        }
        if (stepHidden.length) {
            Array.from(stepHidden).forEach(el => el.classList.add('visible'));
        }

        slider.stepIndex--;
        if (slider.stepIndex < 0) {
            slider.stepIndex = 0;
        }

        slider.arrows();
    },

    updateStepNext: function() {
        slider.stepIndex++;
        if (slider.stepIndex >= slider.stepsNumber) {
            slider.stepIndex = slider.stepsNumber;
        }

        let stepShow = document.getElementsByClassName('step-' + (slider.stepIndex)),
            stepHidden = document.getElementsByClassName('hidden-' + (slider.stepIndex));

        if (stepShow.length) {
            Array.from(stepShow).forEach(el => el.classList.add('visible'));
        }
        if (stepHidden.length) {
            Array.from(stepHidden).forEach(el => el.classList.remove('visible'));
        }
        slider.arrows();
    },

    updateStepLast: function() {
        slider.stepIndex = 0;
        while (slider.stepIndex < slider.stepsNumber) {
            slider.updateStepNext();
        }
        slider.arrows();
    },

    gotoStep: function(index) {
        if (index > slider.stepsNumber) {
            return;
        }
        
        slider.stepIndex = 0;
        while (slider.stepIndex < index) {
            slider.updateStepNext();
        }
        slider.arrows();
    },

    checkSteps: function() {
        slider.stepIndex = 0;
        steps = document.querySelectorAll('[class*="step-"]'),
        stepsList = [];

        if (steps.length) {
            Array.from(steps).forEach(el => {
                el.classList.forEach(classEl => {
                    if (classEl.startsWith('step-') && -1 == stepsList.indexOf(classEl)) {
                        stepsList.push(classEl);
                    }
                });
            })
        }

        slider.stepsNumber = stepsList.length;
    },

    arrows: function() {
        slider.arrows.left.style.visibility = (slider.slideIndex > 0 ? 'visible' : 'hidden');
        slider.arrows.up.style.visibility = (slider.stepsNumber && slider.stepIndex >= 1 ? 'visible' : 'hidden');
        slider.arrows.right.style.visibility = (slider.slideIndex < slider.slidesNumber - 1 ? 'visible' : 'hidden');
        slider.arrows.down.style.visibility = (slider.stepsNumber && slider.stepIndex < slider.stepsNumber ? 'visible' : 'hidden');
        slider.arrows.pageNumber.innerHTML = (slider.stepIndex == 0 ? (slider.slideIndex + 1) : (slider.slideIndex + 1) + '.' + slider.stepIndex);
        document.location.hash = '#' + (slider.stepIndex == 0 ? (slider.slideIndex + 1) : (slider.slideIndex + 1) + '.' + slider.stepIndex);
    }
}