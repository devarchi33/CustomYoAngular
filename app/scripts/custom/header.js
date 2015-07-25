// var navBarUl = document.getElementById("navBarUl");

$(function() { 
	$(".my-class").click(function () {
		$(".my-class").removeClass("active");
		$(this).toggleClass("active");
	});
});