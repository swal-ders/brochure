$('.book-now').click(function() {
	$('.book-pop-up').toggleClass('book-pop');
});

$(document).click(function(event) {
	//if you click on anything except the modal itself or the "open modal" link, close the modal
	if (!$(event.target).closest(".form-top").length) {
	  $("body").find(".book-now").toggleClass("book-pop");
	}
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

$('.priv-pol').click(function(){
	window.location = 'privacy.html';
});

$('.term-con').click(function(){
	window.location = 'terms-of-service.html';
});

