$(document).on('turbolinks:load', function () {

	if (window.location.pathname == '/') {
		$(".nav-item .active").removeClass("active");
		$("#home").addClass("active");
		$(".card-header .active").removeClass("active");
		$("#menu-heading1").addClass("active");

		$("#heading1").addClass("active");

	} else if (window.location.pathname == '/albums') {
		$(".nav-item .active").removeClass("active");
		$("#albums").addClass("active");
		$(".card-header .active").removeClass("active");
		$("#menu-heading2").addClass("active");

		$("#heading2").addClass("active");
	} else if (window.location.pathname == '/blogs') {
		$(".nav-item .active").removeClass("active");
		$("#blogs").addClass("active");
		$(".card-header .active").removeClass("active");
		$("#menu-heading3").addClass("active");

		$("#heading3").addClass("active");
	} else if (window.location.pathname == '/about') {
		$(".nav-item .active").removeClass("active");
		$("#about").addClass("active");
		$(".card-header .active").removeClass("active");
		$("#menu-heading4").addClass("active");

		$("#heading4").addClass("active");
	}
});



/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
//show side-navbar
function tooglebuttonClick() {
	var overlay = $('.overlay');
	var trigger = $('.hamburger');
	if ($("#side-navbar").css("width") == "0px") {
		overlay.show();
		trigger.removeClass('is-closed');
		trigger.addClass('is-open');
		//document.getElementById("side-navbar").style.width = "250px";
		//document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
		document.getElementById("main").style.marginLeft = "240px";
		$("#side-navbar").css({
			"width": "240px"
		});
		//$("body").css({"background-color": "rgba(0,0,0,0.4)"});
		$('.navbar-toggler').addClass('toggled');
	} else {
		overlay.hide();
		trigger.removeClass('is-open');
		trigger.addClass('is-closed');
		//document.getElementById("side-navbar").style.width = "0";
		//document.body.style.backgroundColor = "#EDEFF0";
		document.getElementById("main").style.marginLeft = "0px";
		$("#side-navbar").css({
			"width": "0px"
		});
		//$("body").css({"background-color": "#EDEFF0"});
		$('.navbar-toggler').removeClass('toggled');
	}
}

//hide side-navbar when click on screen
$('.overlay').bind('click', function (e) {
	if (jQuery(e.target).closest('.navbar').length == 0) {
		var overlay = $('.overlay');
		var trigger = $('.hamburger');
		if ($("#side-navbar").css("width") == "240px") {
			overlay.hide();
			trigger.removeClass('is-open');
			trigger.addClass('is-closed');
			//document.getElementById("side-navbar").style.width = "0";
			//document.body.style.backgroundColor = "#EDEFF0";
			document.getElementById("main").style.marginLeft = "0px";
			$("#side-navbar").css({
				"width": "0px"
			});
			//$("body").css({"background-color": "#EDEFF0"});
			$('.navbar-toggler').removeClass('toggled');
		}
	}
});

