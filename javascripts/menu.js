$(document).ready(function () {
	$('.acc_container').hide();

	//On Click
	$('.acc_trigger').click(function () {
		if ($(this).next().is(':hidden')) {
			$('.acc_trigger').removeClass('active').next().slideUp();
			$(this).toggleClass('active').next().slideDown();
		}
		else {
			$('.acc_container').slideUp();
		}
		return false;
	});
});
