export const quiz = {
    dom: null,

    config: null,

    score: 0,
    indexQuestion: 0,
    numberQuestions: 10,

    answers: [],
    questions: [],
    tags: [],

    _questions: [],

    init: (config, data) => {
        quiz.config = config;
        quiz.dom = quizDom;
        quiz._questions = config.q;
        quiz.tags = quiz.checkConfig(config.allowed, data);
        quiz.numberQuestions = quiz.countPlayableQuestions(config.n);

        quiz.dom.init(config.title, quiz.numberQuestions);

        quiz.loadQuestions();

        // on pose la première question
        quiz.nextQuestion();
    },

    playAgain: () => {
        quiz.score = 0;
        quiz.indexQuestion = 0;
        quiz.questions = [];

        quiz.dom.playAgain();

        quiz.loadQuestions();

        // on pose la première question
        quiz.nextQuestion();
    },

    checkConfig: (allowed, data) => {
        if (!allowed) allowed = '*';

        const authorized = [];
    
        data.forEach(elt => {
            if (allowed == '*' || allowed.includes(elt.name)) {
                authorized.push(elt);
            }
        });
    
        return authorized;
    },

    countPlayableQuestions: (n) => {
        // il faut au moins 4 réponses possibles pour proposer un choix
        if (quiz.tags.length < 4) {
            console.warn('Moins de 4 réponses possibles : le quiz ne peut pas être joué.');
            return 0;
        }
        // une question n'est jouable que si sa réponse fait partie des réponses autorisées,
        // et deux questions ne peuvent pas avoir la même réponse
        const names = quiz.tags.map(t => t.name);
        const playable = new Set(quiz._questions.map(q => q.a).filter(a => names.includes(a))).size;
        if (playable < n) {
            console.warn(`Seulement ${playable} questions jouables sur les ${n} demandées.`);
            return playable;
        }
        return n;
    },

    shuffle: (list) => {
        // mélange de Fisher-Yates
        for (let index = list.length - 1; index > 0; index--) {
            const number = Math.floor(Math.random() * (index + 1));
            const item = list[index];
            list[index] = list[number];
            list[number] = item;
        }
        return list;
    },

    loadQuestions: () => {
        quiz.questions = [];
        // liste des réponses
        const answers = [];

        // on charge aléatoirement les questions
        while (quiz.questions.length < quiz.numberQuestions) {
            const index = Math.floor(Math.random() * quiz._questions.length);
            const q = quiz._questions[index];

            // on évite deux fois la même question
            if (quiz.questions.includes(q)) continue;
            // on évite deux fois la même réponse
            if (answers.includes(q.a)) continue;

            // on charge les réponses
            if (quiz.loadAnswers(q)) {
                quiz.questions.push(q);
                answers.push(q.a);
            }
        }
    },

    loadAnswers: (question) => {
        // on charge les réponses pour chaque question
        const ga = quiz.tags.find(t => t.name == question.a);
        if (!ga) return false;
        const list = [{
            name: question.a,
            info: ga.desc,
            doc: ga.doc
        }];

        while (list.length < 4) {
            const index = Math.floor(Math.random() * quiz.tags.length);
            const tag = quiz.tags[index].name;

            if (list.find(t => t.name == tag)) continue;
            list.push({
                name: tag,
                info: quiz.tags[index].desc,
                doc: quiz.tags[index].doc
            });
        }

        // tri aléatoire des réponses
        quiz.shuffle(list);
        question.answersList = list;
        return true;
    },

    nextQuestion: () => {
        if (quiz.indexQuestion >= quiz.numberQuestions) return ;
        quiz.dom.nextQuestion(quiz.questions[quiz.indexQuestion].q, quiz.questions[quiz.indexQuestion].answersList);
    },

    validateAnswer: () => {
        // partie terminée
        if (quiz.indexQuestion >= quizDom.numberQuestions) return ;
        
        const userAnswer = quiz.dom.getAnswer();

        // clic sans réponse
        if (!userAnswer) return ;

        // affichage réponse et info
        quiz.dom.displayAnswers(userAnswer, quiz.questions[quiz.indexQuestion].a, quiz.indexQuestion);

        if (userAnswer == quiz.questions[quiz.indexQuestion].a) {
            quiz.score++;
        }

        quiz.indexQuestion++;

        if (quiz.indexQuestion >= quizDom.numberQuestions) {
            quiz.end();
        }
    },

    end: () => {
        let sentence;

        if (quiz.score >= quizDom.numberQuestions * 80 / 100) {
            sentence = quizMessages.success[Math.floor(Math.random() * quizMessages.success.length)];
        } else if (quiz.score >= quizDom.numberQuestions * 50 / 100) {
            sentence = quizMessages.middle[Math.floor(Math.random() * quizMessages.middle.length)];
        } else {
            sentence = quizMessages.wrong[Math.floor(Math.random() * quizMessages.wrong.length)];
        }
        
        quiz.dom.end(sentence, quiz.score);
    }
};

const quizDom = {
    name: null,

    numberQuestions: 10,
    question: null,
    answers: [],
    
    btValidate: null,
    btNext: null,
    btPlayAgain: null,
    
    cursor: null,

    confetti: null,
    endSentence: null,
    score: null,
    live: null,

    init: (name, numberQuestions) => {
        quizDom.name = document.getElementById('name');
        quizDom.name.textContent = `Quiz « ${name} »`;
        document.title = `Quiz « ${name} »`;
        quizDom.numberQuestions = numberQuestions;

        quizDom.confetti = new JSConfetti();

        quizDom.question = document.getElementById('q');

        for (let answerIndex = 0; answerIndex < 4; answerIndex++) {
            quizDom.answers[answerIndex] = {
                elt: null,
                label: null,
                info: null,
                checkboxElt: null,
                doc: null
            };
            quizDom.answers[answerIndex].elt = document.querySelector(`label[for="a${answerIndex}"]`);
            quizDom.answers[answerIndex].label = quizDom.answers[answerIndex].elt.querySelector('.label');
            quizDom.answers[answerIndex].info = quizDom.answers[answerIndex].elt.querySelector('.info');
            quizDom.answers[answerIndex].checkboxElt = quizDom.answers[answerIndex].elt.querySelector('input');
            quizDom.answers[answerIndex].doc = quizDom.answers[answerIndex].elt.querySelector('a');
        }

        quizDom.btValidate = document.getElementById('validate');
        quizDom.btNext = document.getElementById('next');
        quizDom.btPlayAgain = document.getElementById('play-again');

        quizDom.cursor = document.getElementById('cursor');
        for (let i = 0; i < quizDom.numberQuestions; i++) {
            quizDom.cursor.append(document.createElement('span'));
        }
        quizDom.cursor.querySelectorAll('span').forEach(span => span.classList.remove('answer-right', 'answer-wrong'));

        quizDom.endSentence = document.getElementById('end-sentence');
        quizDom.score = document.getElementById('score');
        quizDom.live = document.getElementById('live');

        quizDom.events();
    },

    events: () => {
        quizDom.btValidate.addEventListener('click', quiz.validateAnswer);
        quizDom.btNext.addEventListener('click', quiz.nextQuestion);
        quizDom.btPlayAgain.addEventListener('click', quiz.playAgain)
    },

    playAgain: () => {
        quizDom.cursor.querySelectorAll('span').forEach(span => span.classList.remove('answer-right', 'answer-wrong'));
        quizDom.reinitDom();
    },

    reinitDom: () => {
        document.body.classList.remove('wait');

        quizDom.endSentence.classList.add('hidden');
        quizDom.score.classList.add('hidden');
        quizDom.live.textContent = '';

        // supprime les classes bonne / mauvaise réponse sur les labels
        // et réinitialise les zones d'info et les checkbox
        quizDom.answers.forEach(answer => {
            answer.elt.classList.remove('answer-right');
            answer.elt.classList.remove('answer-wrong');

            answer.info.classList.add('hidden'); 
            answer.info.textContent = '';

            answer.checkboxElt.checked = false;
            answer.checkboxElt.value = '';

            answer.doc.href = '#';
            answer.doc.removeAttribute('aria-label');
        });

        // on remet les bons boutons
        quizDom.btValidate.classList.remove('hidden');
        quizDom.btNext.classList.add('hidden');
        quizDom.btPlayAgain.classList.add('hidden');
    },

    nextQuestion: (question, answers) => {
        quizDom.reinitDom();
        quizDom.question.textContent = question;
        quizDom.answers.forEach((answer, index) => {
            answer.label.textContent = answers[index].name;
            answer.info.textContent = answers[index].info;
            answer.checkboxElt.value = answers[index].name;
            // lien MDN : celui de l'entrée s'il existe (JavaScript), sinon préfixe du quiz + nom (HTML, CSS)
            const docUrl = answers[index].doc ?? (quiz.config.doc ? `${quiz.config.doc}${answers[index].name}` : null);
            if (docUrl) {
                answer.doc.href = docUrl;
                answer.doc.setAttribute('aria-label', `Documentation MDN de ${answers[index].name} (nouvel onglet)`);
                answer.doc.classList.remove('hidden');
            }
        });
        // focus sur la première réponse (les flèches permettent de changer de réponse)
        quizDom.answers[0].checkboxElt.focus();
    },

    getAnswer: () => {
        const answer = quizDom.answers.find(a => a.checkboxElt.checked);
        return !answer ? null : answer.checkboxElt.value;
    },

    displayAnswers: (userAnswer, goodAnswer, indexQuestion) => {
        const isGood = userAnswer == goodAnswer;

        document.body.classList.add('wait');

        quizDom.answers.forEach((answer, index) => {
            if (answer.checkboxElt.value == userAnswer) {
                answer.elt.classList.add(isGood ? 'answer-right' : 'answer-wrong');
            }
            if (answer.checkboxElt.value == goodAnswer && !isGood) {
                answer.elt.classList.add('answer-right');
            }
            answer.info.classList.remove('hidden');
        });

        quizDom.cursor.querySelector(`span:nth-child(${indexQuestion + 1})`).classList.add(isGood ? 'answer-right' : 'answer-wrong');

        // verdict annoncé aux lecteurs d'écran
        quizDom.live.textContent = isGood ? 'Bonne réponse !' : `Mauvaise réponse. La bonne réponse était ${goodAnswer}.`;

        quizDom.btValidate.classList.add('hidden');
        quizDom.btNext.classList.remove('hidden');
        // le bouton Valider disparaît : on garde le focus sur le bouton suivant
        quizDom.btNext.focus();
    },

    end: (sentence, score) => {
        quizDom.endSentence.textContent = sentence;
        quizDom.endSentence.classList.remove('hidden');
        quizDom.score.textContent = `Score : ${score} / ${quizDom.numberQuestions}`;
        quizDom.score.classList.remove('hidden');
        // on garde le verdict de la dernière question avant le message de fin
        quizDom.live.textContent = `${quizDom.live.textContent} ${sentence} Score : ${score} sur ${quizDom.numberQuestions}.`;
        // pas de confettis si l'utilisateur a demandé de réduire les animations
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            quizDom.confetti.addConfetti();
        }

        setTimeout(() => {
            quizDom.endSentence.classList.add('hidden');
            quizDom.endSentence.textContent = '';
        }, 5000);

        quizDom.btValidate.classList.add('hidden');
        quizDom.btNext.classList.add('hidden');
        quizDom.btPlayAgain.classList.remove('hidden');
        quizDom.btPlayAgain.focus();
    }
};

const quizMessages = {
    success: [
        'Bravo ! Tu as fait un travail incroyable ! 🎉🌟',
        'Félicitations ! Ton effort a vraiment payé ! 💪👏',
        'Waouh, c\'est impressionnant ! Continue comme ça ! 🚀✨',
        'Super boulot ! Tu peux être fier(ère) de toi ! 👍💖',
        'Excellent travail ! Tu as tout déchiré ! 🔥🏆',
        'Tu as cartonné ! C\'est vraiment génial ! 🎯🌟',
        'Magnifique ! Ton travail est exceptionnel ! 🌈👏',
        'Incroyable ! Tu as vraiment assuré ! 🌟💪',
        'Superbe performance ! Tu mérites une standing ovation ! 🎉🏆',
        'Énorme bravo ! Tu as tout déchiré ! 🚀💖'

    ],
    middle: [
        'Bien joué ! Il y a encore quelques petites choses à améliorer, mais c\'est un bon début ! 👍✨',
        'Bravo pour cet effort ! Avec un peu plus de pratique, ce sera parfait ! 💪🌱',
        'Super travail ! Quelques ajustements et ce sera top ! 🎉🔧',
        'Tu es sur la bonne voie ! Continue comme ça et affine les détails ! 🌟📈',
        'Belle performance ! Il y a des points à peaufiner, mais c\'est prometteur ! 👏🌱',
        'Bon travail ! Avec un peu plus de précision, ce sera excellent ! 👍🔍',
        'Félicitations ! Il y a encore de la marge pour s\'améliorer, mais c\'est bien parti ! 🎉📚',
        'Tu as fait du bon boulot ! Quelques réglages et ce sera parfait ! 💪🛠️',
        'Super effort ! Avec un peu plus de soin, ce sera impeccable ! 🌟📏',
        'Bien joué ! Il y a des petites choses à corriger, mais tu es sur la bonne voie ! 👏🌱'
    ],
    wrong: [
        'On continue ! Chaque essai te rend plus fort 🌟.',
        'C\'est une opportunité d\'apprendre et de grandir ! Tu vas y arriver 🌱.',
        'Tu as tout ce qu\'il faut pour réussir. Continue d\'y croire ! 💪.',
        'Chaque petit pas compte. Tu es sur la bonne voie ! 🌈.',
        'Tu as du potentiel. Montre-le au monde ! 🌟.',
        'Les défis sont là pour être relevés, et tu es prêt ! 🦁.',
        'Tu es capable de tellement plus que tu ne le penses. Fonce ! 🌟.',
        'Chaque jour est une nouvelle chance de briller. C\'est ton moment ! ✨.',
        'Petit à petit on ouvre la voie au succès. Vas-y ! 🏆.',
        'Ton courage et ta détermination te mèneront loin. Continue ainsi ! 🌟.'
    ]
};