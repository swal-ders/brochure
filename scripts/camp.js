$('.book-now').click(function() {
	$('.book-pop-up').toggleClass('book-pop');
});

$('.cancel').click(function() {
	$('.book-pop-up').toggleClass('book-pop');
});

$('.bs').click(function(){
	window.location = 'index.html#map';
});

$('.bp').click(function() {
	$('.parks-pop-up').toggleClass('park-pop');
});

$('.parks-cancel').click(function() {
	$('.parks-pop-up').toggleClass('park-pop');
});