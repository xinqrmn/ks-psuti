let task1 = new Vue({
	el: '.task-1__text',
	data: {
		message: 'Hello world!',
		isHovered: false
	},
})

let task2 = new Vue({
	el: '.task-2',
	data: {
		styleCss: ''
	},
})

let task3 = new Vue({
	el: '.task-3',
	data: {
		showed: true
	}
})

let task4 = new Vue({
	el: '.task-4',
	data: {
		prepods: [
			{name: 'Ирина Васильевна', disciplines: 'Физ-ра'},
			{name: 'Наталья Владимировна', disciplines: 'ИНО'},
			{name: 'Галина Петровна', disciplines: 'Математика'},
			{name: 'Александра Сергеевна', disciplines: 'Физика'},
			{name: 'Олег Евгеньевич', disciplines: 'История'}
		]
	}
})