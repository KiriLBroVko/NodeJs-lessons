//  Solving output Error problems with Classes

var util = require('util');
var phrases = {"Hello": "Привет"};
//  Cв-ва встроенных ошибок важны:1)message; 2)name(понимаем точно какая ошибка существует); 
//  3)stack(хранит где и в каком файле произошла ошибка, что ей предсшествовало) 
function PhrasesError(message) {
    this.message = message;//  Прописываем в ручную, а не вызываем стандартного родителя супер класса
    //  или ещё как Конструктор супер-класса Error.apply(this, arguments);
    Error.captureStackTrace(this, PhrasesError);
    //  В V8 это стандартная JS command, к-рая не входит в стандарт, но позволяет получить стек
    //  Эта команда получает текущий стек, т.е последовательность сложных вызовов, 
    //  к-рые привели к текущему месту кода и сохраняет его в (This), 
    //  т.е в обьекте ошибки
}                               
util.inherits(PhrasesError, Error);
PhrasesError.prototype.name = 'PhrasesError';

function HttpError(status, message) {
    this.status = status;
    this.message = message;
    Error.captureStackTrace(this, HttpError); 
}
util.inherits(Http, Error);
HttpError.prototype.name = 'HttpError';

function getPhrase(name) {
    if (!phrases[name]) {
        throw new PhraseError("Нет такой фразы: " + name);  //..HTTP 500, уведомление!
    }
    return phrases[name];
}

function makePage(url) {
    if (url != 'index.html') {
        throw new HttpError(404, "Нет такой страницы");  //..HTTP 404 
    }
    return util.format("%s, %s!", getPhrases("Hello"), getPhrases("world"));
}

try {
    var page = makePage('index');
    console.log(page);
} catch (e) {
    if (e instanceof HttpError) {           //  Эта ветка будет действовать для всех программных ошибок, 
        console.log(e.status, e.message);   //  в том числе и для встроенных
    } else {
        console.error("Ошибка %s\n сообщение: %s\n стек: %s", e.name, e.message, e.stack);
    }
    
}


