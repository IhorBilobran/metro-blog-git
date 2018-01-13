$(document).ready(function(){
if ($(window).width() < 482) {
	var navPos,
		navHeight = $('header').outerHeight(true),
		scrolPos;
	
	function refreshVar() {
		navPos = $('header .header-nav').offset().top;
	}

	refreshVar(); // запускаю щоб видати значиння зразу при запуску
	$(window).resize(refreshVar); // видає значення при зміні розміру

	$('<div class="clone-nav"></div>')
		.insertBefore('header .header-nav')
		.css('height', navHeight)
		.hide();

	$(window).scroll(function(){  // дія виконується тільки при скролі
		scrolPos = $(window).scrollTop();
		if (scrolPos >= navPos) {
			$('header .header-nav').addClass('fixed');
			$('.clone-nav').show();
		}
		else {
			$('header .header-nav').removeClass('fixed');
			$('.clone-nav').hide();
		}
	});
}
});