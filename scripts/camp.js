$('.book-now').click(function(evt) {
	evt.stopPropagation();
	isFormOn = true;
	$('.book-pop-up').addClass('book-pop');
});

const $formPopUp = $('#form-pop-up');
let isFormOn = false;

let counter = 0;

$formPopUp.addClass('foo');

$formPopUp.on('click', '*', function(evt) {
	counter++;
	$('main').addClass(`foo-${counter}`);
	evt.stopPropagation();
});

$('main').click(function(evt) {
	if (isFormOn === true) {
		isFormOn = false;
		$('.book-pop-up').removeClass('book-pop');
	}
});

$('.cancel').click(function() {
	isFormOn = false;
	$('.book-pop-up').removeClass('book-pop');
});

$('.bs').click(function() {
	window.location = 'index.html#map';
});

$('.bp').click(function() {
	$('.parks-pop-up').toggleClass('park-pop');
});

$('.parks-cancel').click(function() {
	$('.parks-pop-up').toggleClass('park-pop');
});

$('.priv-pol').click(function() {
	window.location = 'privacy.html';
});

$('.term-con').click(function() {
	window.location = 'terms-of-service.html';
});

//

$('.bcu').click(function() {
	$('.contact-pop-up').toggleClass('contact-pop');
});

$('.contact-cancel').click(function() {
	$('.contact-pop-up').toggleClass('contact-pop');
});
