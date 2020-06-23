' use strict ';

//jshint esversion:6

let books = document.querySelectorAll('.book');

    books[0].before(books[1]);
    books[3].before(books[4]);
    books[5].after(books[2]);

let back = document.body.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';

let bookNames = document.querySelectorAll('a');
    bookNames[2].replaceWith('Книга 3. this и Прототипы Объектов');

let advert = document.querySelector('.adv');
    advert.remove();

let chapters = document.querySelectorAll('li');

    chapters[15].after(chapters[8]);
    chapters[15].before(chapters[13]);
    chapters[9].after(chapters[12]);
    chapters[10].before(chapters[14]);
    chapters[37].after(chapters[45]);
    chapters[40].after(chapters[38]);
    chapters[44].before(chapters[41]);

let newChapter = document.createElement('li');
    newChapter.textContent = 'Глава 8: За пределами ES6';
    chapters[56].before(newChapter);

    