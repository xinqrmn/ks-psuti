const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");

class Quiz {
  constructor(type, questions, results) {
    this.type = type;

    this.questions = questions;

    this.results = results;

    this.score = 0;

    this.result = 0;

    this.current = 0;
  }

  Click(index) {
    let value = this.questions[this.current].Click(index);
    this.score += value;

    let correct = -1;

    if (value >= 1) {
      correct = index;
    } else {
      for (let i = 0; i < this.questions[this.current].answers.length; i++) {
        if (this.questions[this.current].answers[i].value >= 1) {
          correct = i;
          break;
        }
      }
    }

    this.Next();

    return correct;
  }

  Next() {
    this.current++;

    if (this.current >= this.questions.length) {
      this.End();
    }
  }

  End() {
    for (let i = 0; i < this.results.length; i++) {
      if (this.results[i].Check(this.score)) {
        this.result = i;
      }
    }
  }
}

class Question {
  constructor(text, answers) {
    this.text = text;
    this.answers = answers;
  }

  Click(index) {
    return this.answers[index].value;
  }
}

class Answer {
  constructor(text, value) {
    this.text = text;
    this.value = value;
  }
}

class Result {
  constructor(text, value) {
    this.text = text;
    this.value = value;
  }

  Check(value) {
    if (this.value <= value) {
      return true;
    } else {
      return false;
    }
  }
}

const results = [
  new Result("Вам многому нужно научиться", 0),
  new Result("Вы уже неплохо разбираетесь", 4),
  new Result("Ваш уровень выше среднего", 6),
  new Result("Вы в совершенстве знаете тему", 8),
];

const questions = [
  new Question("Самый популярный фреймворк на JavaScript?", [
    new Answer("Ember", 0),
    new Answer("Vue", 0),
    new Answer("Angular", 0),
    new Answer("React", 1),
  ]),
  new Question("Как нельзя объявить переменную в JavaScript?", [
    new Answer("var", 0),
    new Answer("const", 0),
    new Answer("def", 1),
    new Answer("let", 0),
  ]),
  new Question("Можно ли изменять переменную созданную с помощью const?", [
    new Answer("да", 0),
    new Answer("нет", 1),
    new Answer("при определённых условиях", 0),
    new Answer("если прописать 'use strict'", 0),
  ]),
  new Question("Как объявить конструктор?", [
    new Answer("constructot {}", 0),
    new Answer("constructot", 0),
    new Answer("constructot ()", 1),
    new Answer("constructot []", 0),
  ]),
  new Question("Как обращаться к методу?", [
    new Answer(".method", 1),
    new Answer("$method", 0),
    new Answer("new Method()", 0),
    new Answer("method{}", 0),
  ]),
  new Question("Каким методом нельзя перебрать массив?", [
    new Answer(".map()", 0),
    new Answer(".reduce()", 0),
    new Answer(".some()", 0),
    new Answer(".iterate()", 1),
  ]),
  new Question("Как объявить новый Promise?", [
    new Answer("promise = {}", 0),
    new Answer("promise()", 0),
    new Answer("new Promise()", 1),
    new Answer("promise{}", 0),
  ]),
  new Question("С помощью какого сомвола обявляется объект?", [
    new Answer("()", 0),
    new Answer("[]", 0),
    new Answer("=", 0),
    new Answer("{}", 1),
  ]),
  new Question("Какой вид функции можно вызвать до её объявления?", [
    new Answer("function decloration", 1),
    new Answer("function expression", 0),
    new Answer("function iteration", 0),
    new Answer("global function", 0),
  ]),
  new Question("Что возвращает метод строки indexOf()", [
    new Answer("строку", 0),
    new Answer("массив", 0),
    new Answer("индекс", 1),
    new Answer("объект", 0),
  ]),
];

const quiz = new Quiz(1, questions, results);

// console.log(quiz.questions[quiz.current].text)
// console.log(quiz.questions[quiz.current].answers)

Update();

function Update() {

  if (quiz.current < quiz.questions.length) {
    headElem.innerHTML = quiz.questions[quiz.current].text;
    buttonsElem.innerHTML = "";

    for (let i = 0; i < quiz.questions[quiz.current].answers.length; i++) {
      let btn = document.createElement("button");
      btn.className = "button";
      btn.innerHTML = quiz.questions[quiz.current].answers[i].text;
      btn.setAttribute("index", i);
      buttonsElem.appendChild(btn);
    }

    pagesElem.innerHTML = quiz.current + 1 + " / " + quiz.questions.length;
    Init();
  } else {
    let wrapper = document.querySelector('.quiz__inner')
    let quizBody = document.querySelector('.quiz__body')
    buttonsElem.innerHTML = "";
    headElem.innerHTML = quiz.results[quiz.result].text;
    wrapper.style.justifyContent = 'center'
    quizBody.style.height = '0%'
    pagesElem.innerHTML = `Очки: ${quiz.score}`;
  }
  
}


function Init() {
	let btns = document.getElementsByClassName("button");
	for (let i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function (e) {
			Click(e.target.getAttribute("index"));
		});
	}
}

function Click(index) {
  let correct = quiz.Click(index);
  let btns = document.getElementsByClassName("button")

  for (let i = 0; i < btns.length; i++) {
    btns[i].className = "button button_passive";
  }

  if (quiz.type === 1) {
    if (correct >= 0) {
      btns[correct].className = "button button_correct";
    }

    if (index !== correct) {
      btns[index].className = "button button_wrong";
    }
  } else {
    btns[index].className = "bbutton button_correct";
  }

  setTimeout(Update, 1000);
}
