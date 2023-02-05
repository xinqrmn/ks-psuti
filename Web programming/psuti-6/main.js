let mass1 = ["Банан", "Яблоко", "Груша", "Апельсин", "Манго", "Свекла", "Капуста", "Морковь", "Огурец", "Томат"];
let mass2 = ["Тигр", "Волк", "Лев", "Медведь", "Рысь", "Синица", "Филин", "Ворона", "Воробей", "Сорока"]; 

let fruits = mass1.slice(0, 5)
let birds = mass2.slice(5, 10)

let mass3 = fruits.concat(birds);

document.write('<div class="contanier">');
document.write('<h3 class="title-3">5.1.1.</h3>');
document.write('<p class="text"><span>Дан массив 1: </span>' + mass1 + '</p>');
document.write('<p class="text"><span>Дан массив 2: </span>' + mass2 + '</p>');
document.write('<br />');
document.write('<h3 class="title-3">5.1.2.</h3>');
document.write('<p class="text"><span>Массив fruits: </span>' + fruits + '</p>');
document.write('<p class="text"><span>Массив birds: </span>' + birds + '</p>');
document.write('<br />');
document.write('<h3 class="title-3">5.1.3.</h3>');
document.write('<p class="text"><span>Объединённые массивы: </span>' + mass3 + '</p>');
document.write('<br />');
document.write('<h3 class="title-3">5.1.4.</h3>');
document.write('<p class="text"><span>Длинна mass1: </span>' + mass1.length + '</p>');
document.write('<p class="text"><span>Длинна mass2: </span>' + mass2.length + '</p>');
document.write('<p class="text"><span>Длинна mass3: </span>' + mass3.length + '</p>');
document.write('<p class="text"><span>Длинна fruits: </span>' + fruits.length + '</p>');
document.write('<p class="text"><span>Длинна birds: </span>' + birds.length + '</p>');
document.write('<br />');

mass3.unshift("Мандарин");
mass3.push("Соловей");

document.write('<h3 class="title-3">5.1.5.</h3>');
document.write('<p class="text"><span>Массив mass3: </span>' + mass3 + '</p>');
document.write('<br />');
document.write('<h3 class="title-3">5.1.6.</h3>');
document.write('<p class="text"><span>Длинна mass3: </span>' + mass3.length + '</p>');
document.write('<br />');
document.write('<h3 class="title-3">5.1.7.</h3>');
document.write('<p class="text"><span>Перевёрнутый mass3: </span>' + mass3.reverse() + '</p>');
document.write('<br />');
document.write('<h3 class="title-3">5.1.8.</h3>');
document.write('<p class="text"><span>Отсортированный mass3: </span>' + mass3.sort() + '</p>');
document.write('<br />');


document.write('<h3 class="title-3">5.1.9.</h3>');
document.write('<p class="text"><span>fruits: </span></p>');
for (let i = 0; i<fruits.length; i++) {
  document.write("съел " + fruits[i] + ", ");
}
document.write('<br />');

birds.splice(2, 2, "Голубь", "Галка");

document.write("<br />");
document.write('<h3 class="title-3">5.1.10.</h3>');
document.write('<p class="text"><span>birds: </span>' + birds + '</p>');
document.write('<br />');

let list = [
  ["Зима: ", "Весна: ", "Лето: ", "Осень: "],
  ["Декабрь ", "Январь ", "Февраль "],
  ["Март ", "Апрель ", "Май "],
  ["Июнь ", "Июль ", "Август "],
  ["Сентябрь ", "Октябрь ", "Ноябрь "],
];
document.write('<h3 class="title-3">5.2.1.</h3>');
document.write('<p class="text"><span>list: </span></p>');
document.write('<p class="text"><span>' + list[0][0] + '</span>' + list[1][0] + list[1][1] + list[1][2] + '</p>');
document.write('<p class="text"><span>' + list[0][1] + '</span>' + list[2][0] + list[2][1] + list[2][2] + '</p>');
document.write('<p class="text"><span>' + list[0][2] + '</span>' + list[3][0] + list[3][1] + list[3][2] + '</p>');
document.write('<p class="text"><span>' + list[0][3] + '</span>' + list[4][0] + list[4][1] + list[4][2] + '</p>');
document.write("<br />");

document.write('<h3 class="title-3">5.3.1.</h3>');
document.write('<p class="text"><span>Массив myImages: </span></p>');
document.write('<img name=imgId src="" width="400" height="250" />');
let myImages = ['./img/1.jpeg', './img/2.jpg', './img/3.jpeg', './img/4.jpg', './img/5.jpg']
let number = prompt('Введите индекс картинки от 0 до 4')
document.images['imgId'].src = myImages[number];
document.write('<p class="text"><span> </span></p>');
document.write("<br />");


const worker = {
  name: 'Вован',
  surname: 'Распутин',
  age: 45,
  sallary: '25 т.р',
  getSallary: function() {
    document.write('<p class="text"><span>Это метод getSallary: </span></p>');
    document.write('<p class="text"><span>Зарплата: </span>' + worker.sallary + '</p>');
  }
}

 
document.write('<h3 class="title-3">5.4.5.</h3>');
document.write('<p class="text"><span>Объект worker: </span></p>');
document.write('<p class="text"><span>Имя: </span>' + worker.name + '</p>');
document.write('<p class="text"><span>Фамилия: </span>' + worker.surname + '</p>');
document.write('<p class="text"><span>Возраст: </span>' + worker.age + '</p>');
document.write('<p class="text"><span>Зарплата: </span>' + worker.sallary + '</p>');
document.write("<br />");

worker.name = 'Иван';
delete worker.age;

document.write('<h3 class="title-3">5.4.8.</h3>');
worker.getSallary();

document.write('</div>');