'use strict'

$(document).ready(function () {
	skrollr.init({
		smoothScrolling: true,
	});

	$(".my-class").click(function () {
		$(".my-class").removeClass("active");
		$(this).toggleClass("active");
	});
});