// Placeholder

let input = document.querySelector(".task-input");
let holder = input.getAttribute("placeholder");
let btnHolder = document.querySelector("#holder");

btnHolder.addEventListener("click", () => {
  input.setAttribute("placeholder", "Пока!");
  input.classList.add("task-input--clicked");
});


// Modal

let modalBtn = document.querySelector("#modal");

let modal = document.querySelector(".modal");

function closeModal() {
  modal.style.display = "none";
}

function openModal() {
  modal.style.display = "block";
}

modalBtn.addEventListener("click", () => {
  openModal();
  setTimeout(closeModal, 3000);
});

// window.onclick = function(e) {
//   if(e.target == modal) {
//     modal.style.display = "none";
//   }
// }

// openModal();
// modalBtn.onclick = openModal;
// modal.setTimeout(closeModal, 3000);


// Number list

let list = document.querySelector('.number-list');
let listBtn = document.querySelector('#list');

let addLiFirst = document.createElement('li');
addLiFirst.innerHTML = 'Самая важная задача!!!';
addLiFirst.style.fontWeight = 700;
addLiFirst.style.marginBottom = '10px';

let addLiEnd = document.createElement('li');
addLiEnd.innerHTML = 'Самая важная задача!!!';
addLiEnd.style.fontStyle = 'italic';

listBtn.addEventListener('click', () => {
  list.prepend(addLiFirst)
  list.append(addLiEnd)
})