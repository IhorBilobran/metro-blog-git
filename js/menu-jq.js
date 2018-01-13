$(document).ready(function(){
if ($(window).width() < 482) {
	var headerPos,
		headerHeight = $('header').css('height'),
		scrolPos;
	console.log(true)

	function refreshVar() {
		headerPos = $('header .header-nav').offset().top; // pflf. rjhlbyfnb
	}

	refreshVar(); // запускаю щоб видати значиння зразу при запуску
	$(window).resize(refreshVar); // видає значення при зміні розміру

	$(window).scroll(function(){
		scrolPos = $(window).scrollTop();
		if (scrolPos >= headerPos) {
			$('header .header-nav')
				.addClass('fixed');
		}
		else {$('header .header-nav').removeClass('fixed')}
	});
}
});