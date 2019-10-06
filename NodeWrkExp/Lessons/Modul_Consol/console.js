//  Самые частые модули: Console
//  Использует (util.format, util.inspect)
//  Глобальная переменная, это редко и не обязательно делать (require)
//  2 метода (console.log the same is console.info and console.error the same is console.warn)

//  No console.debug !!! В браузерах он есть, а в NODEjs нету

console.log("Log"); // = info (out) Выводит стандартный поток вывода

console.error("Error"); // = warn (err) Выводит поток ошибок
// У каждой программы, процесса есть как минимум 2 потока вывода:1)Нормальный вывод, 2)Ошибки
//  их можно направить в разные файлы: node console.js 1>ok 2>err, т.е. то что выведено в первый поток
//  пойдёт в файл Ок: cat ok (press enter) output: Log or cat err (press enter) output: Error
//  таким образом если мы делаем перенаправление вывода и верно используем Error and Log, то
//  можно будет всегда отлечить "хорошее сообщение" от "ошибки"
console.trace("");  //..(err) Выводит текущий стек трейс тоже в поток ошибок