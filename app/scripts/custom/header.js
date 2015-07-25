// var navBarUl = document.getElementById("navBarUl");
'use strict';

$(function() { 
	$(".my-class").click(function () {
		$(".my-class").removeClass("active");
		$(this).toggleClass("active");
	});
});