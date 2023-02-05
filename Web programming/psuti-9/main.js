let clickBtn = document.querySelector("#clicks");

let counter = 0;
function clickCounter() {
  counter++;
  clickBtn.innerText = "На меня кликнули " + counter + " раз";
}

clickBtn.onclick = clickCounter;

let imageBtn = document.querySelector("#image");

imageBtn.addEventListener("click", () => {
  document.querySelector(".image-click").src = "./img/2.jpg";
});

let hoverBtn = document.querySelector("#image2");

hoverBtn.addEventListener("mouseover", () => {
  document.querySelector(".image-hover").src = "./img/4.jpg";
});

hoverBtn.addEventListener("mouseout", () => {
  document.querySelector(".image-hover").src = "./img/3.jpeg";
});

let lampOn = document.querySelector("#lamp-on");
let lampOff = document.querySelector("#lamp-off");
let lamp = document.querySelector(".image-box");

function turnOn() {
  lamp.style.backgroundImage = "url('../img/lamp-on.webp')";
}
function turnOff() {
  lamp.style.backgroundImage = "url('../img/lamp-off.webp')";
}

lampOn.onclick = turnOn;
lampOff.onclick = turnOff;
