let btn = document.getElementById("btn-perimetr");

function getSquare() {
  const width = document.getElementById("width").value;
  const height = document.getElementById("height").value;
  let res = width * height;
  document.getElementById('result').value = res;
}

btn.addEventListener('click', getSquare)

let subject = document.querySelector('.subject__item');
let area = document.getElementById('area');

function descr(text) {
  area.value = text;
}

function clearVal() {
  area.value = '';
}

let inputOn = document.getElementById('inputOn');
let inputOff = document.getElementById('inputOff');
let input = document.querySelector('.put__input');

inputOff.addEventListener('click', () => {
  input.setAttribute("disabled", "");
})

inputOn.addEventListener('click', () => {
  input.removeAttribute("disabled");
})

let holaBtn = document.querySelector('.hola__btn');
let checkbox = document.querySelector('.hola__input');
let holaArea = document.querySelector('.hola__text');

function writeHola() {
  if (checkbox.checked == true) {
    holaArea.innerHTML = 'Hola';
  } else {
    holaArea.innerHTML = 'No hola';
  }
}

holaBtn.addEventListener('click', writeHola);