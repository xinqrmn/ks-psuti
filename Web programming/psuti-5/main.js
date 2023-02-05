let d = new Date();

let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();

let chis = d.getDate();
let day = d.getDay();
let mon = d.getMonth();
let year = d.getFullYear();

switch (mon) {
  case 0:
    f = "января";
    break;
  case 1:
    f = "февраля";
    break;
  case 2:
    f = "марта";
    break;
  case 3:
    f = "апреля";
    break;
  case 4:
    f = "мая ";
    break;
  case 5:
    f = "июня";
    break;
  case 6:
    f = "июля";
    break;
  case 7:
    f = "августа";
    break;
  case 8:
    f = "сентября";
    break;
  case 9:
    f = "октября";
    break;
  case 10:
    f = "ноября";
    break;
  case 11:
    f = "декабря";
    break;
}

switch (day) {
  case 0:
    p = "понедельник";
    break;
  case 1:
    p = "вторник";
    break;
  case 2:
    p = "среда";
    break;
  case 3:
    p = "четверг";
    break;
  case 4:
    p = "пятница ";
    break;
  case 5:
    p = "суббота";
    break;
  case 6:
    p = "воскресенье";
    break;
}

const str = "aaa@bbb@ccc".replace(/@/g, '!');
const string = "Я изучаю JavaScript!";
String.fromCharCode();


document.write('<div class="contanier">');
document.write('<h3 class="title-3">5.1.</h3>');
document.write('<p class="text"><span>В Самаре </span>' + chis + " " + f + " " + year + ", " + p + "</p>");
document.write('<p class="text"><span>Время: </span>' + h + ":" + m + ":" + s + "</p>");
document.write('<br />');
document.write('<h3 class="title-3">5.2.</h3>');
document.write('<p class="text"><span>Дана строка: </span>aaa@bbb@ccc</p>');
document.write('<p class="text"><span>Результат: </span>'+ str +'</p>');
document.write("<br />");
document.write('<h3 class="title-3">5.3.</h3>');
document.write('<p class="text"><span>Дана дата: </span>' + d.toLocaleDateString() + '</p>');
document.write('<p class="text"><span>Результат: </span>'+ d.toLocaleDateString().replace(/[.]/g, '-') +'</p>');
document.write("<br />");
document.write('<h3 class="title-3">5.4.</h3>');
document.write('<p class="text"><span>Дана строка: </span>' + string + "</p>");
document.write('<p class="text"><span>Результат: </span>'+ string.toUpperCase() +'</p>');
document.write('<p class="text"><span>Результат: </span>'+ string.toLowerCase() +'</p>');
document.write("<br />");
document.write('<h3 class="title-3">5.5.</h3>');
document.write('<p class="text"><span>Дана строка: </span>' + string + "</p>");
document.write('<p class="text"><span>Результат: </span>'+ string.length +'</p>');
document.write("<br />");
document.write('<h3 class="title-3">5.6.</h3>');
document.write('<p class="text"><span>Дана строка: </span>' + string + "</p>");
document.write('<p class="text"><span>Результат: </span>'+ string.substr(2,6) + ' - Я .substr()' +'</p>');
document.write('<p class="text"><span>Результат: </span>'+ string.slice(2,8) + ' - Я .slice()' +'</p>');
document.write('<p class="text"><span>Результат: </span>'+ string.substring(2,8) + ' - Я .substring()' +'</p>');
document.write("<br />");
document.write('<h3 class="title-3">5.7.</h3>');
document.write('<p class="text"><span>Дана строка: </span>' + string + '</p>');
document.write('<p class="text"><span>Результат: </span>' + String.fromCharCode(1052, 1086, 1089, 1082, 1074, 1072) +'</p>');
document.write("<br />");
document.write('<h3 class="title-3">5.8.</h3>');
document.write('<p class="text"><span>Результат: </span>' + "Москва".charCodeAt(0) + " " + "Москва".charCodeAt(1) + " " + "Москва".charCodeAt(2) + " " + "Москва".charCodeAt(3) + " " + "Москва".charCodeAt(4) + " " + "Москва".charCodeAt(5) + " " + "</p>");
document.write("<br />");
document.write('<h3 class="title-3">5.9.</h3>');
document.write('<p class="text"><span>Дана строка: </span>' + "САМАРА".charCodeAt(0) + " " + "САМАРА".charCodeAt(1) + " " + "САМАРА".charCodeAt(2) + " " + "САМАРА".charCodeAt(3) + " " + "САМАРА".charCodeAt(4) + " " + "САМАРА".charCodeAt(5) + " "  + "</p>");
document.write('<p class="text"><span>Результат: </span>' + String.fromCharCode(1057, 1040, 1052, 1040, 1056, 1040) +'</p>');

document.write('</div>');
