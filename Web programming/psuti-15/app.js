$('.task-1__title').css({color: '#3d3d3d', fontSize: '25px'})
// $('.task-2__item').each(function() {
// 	alert($(this).html())
// })

const list = $('.task-3__list')
$('.task-3__btn').on('click', function () {
	if (list.hasClass('hide')) {
		list.removeClass('hide')
	} else {
		list.addClass('hide')
	}
})