// Le méga quiz reprend toutes les questions des autres quiz JavaScript
import basics from './00-data-basics.js';
import dom from './01-data-dom.js';
import events from './02-data-events.js';
import elements from './03-data-elements.js';
import time from './04-data-time.js';
import oop from './05-data-oop.js';

const q = [basics, dom, events, elements, time, oop].flatMap(quiz => quiz.q);

export default {
    title: 'méga quiz JavaScript',
    q,
    allowed: '*',
    n: 15,
    doc: null
};
