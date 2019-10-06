//  В данном коде мы не сможем понять где какая ошибка, 
//  так как будет ток одна ошибка класса  Error.
//  Относительно ООП сделаем свои обьекты ошибоки для каждых случаев -- смотреть в new_error.js file
var util = require('util');

var phrasese = {
    "Hello": "Привет",
    "world": "мир"
};
function getPhrases(name) {
    if (!phrases[name]) {
        throw new PhraseError("Нет такой фразы: " + name);  //..HTTP 500, уведомление!
    }
    return phrases[name];
}

function makePage(url) {
    if (url != 'index.html') {
        throw new HttpError("Нет такой страницы");  //..HTTP 404 
    }
    return util.format("%s, %s!", getPhrases("Hello"), getPhrases("world"));
}

var page = makePage('index.html');
console.log(page); n 