$(document).on('turbolinks:load', function () {

	if (window.location.pathname == '/home') {
		$(".nav-item .active").removeClass("active");
		$("#home").addClass("active");
		$(".card-header .active").removeClass("active");
		$("#menu-heading1").addClass("active");
	} else if (window.location.pathname == '/albums') {
		$(".nav-item .active").removeClass("active");
		$("#albums").addClass("active");
		$(".card-header .active").removeClass("active");
		$("#menu-heading2").addClass("active");
	} else if (window.location.pathname == '/blogs') {
		$(".nav-item .active").removeClass("active");
		$("#blogs").addClass("active");
		$(".card-header .active").removeClass("active");
		$("#menu-heading3").addClass("active");
	} else if (window.location.pathname == '/about') {
		$(".nav-item .active").removeClass("active");
		$("#about").addClass("active");
		$(".card-header .active").removeClass("active");
		$("#menu-heading4").addClass("active");
	}
});

$(function () {
	$("#file").change(function () {
		console.log('1');
		if (this.files && this.files[0]) {
			var reader = new FileReader();
			reader.onload = imageIsLoaded;
			reader.readAsDataURL(this.files[0]);
		}
	});
	$("#file0").change(function () {
		console.log('1');
		if (this.files && this.files[0]) {
			var reader = new FileReader();
			reader.onload = imageIsLoaded0;
			reader.readAsDataURL(this.files[0]);
		}
	});

	$("#file1").change(function () {
		console.log('2');
		if (this.files && this.files[0]) {
			var reader = new FileReader();
			reader.onload = imageIsLoaded1;
			reader.readAsDataURL(this.files[0]);
		}
	});

	$("#file2").change(function () {
		console.log('3');
		if (this.files && this.files[0]) {
			var reader = new FileReader();
			reader.onload = imageIsLoaded2;
			reader.readAsDataURL(this.files[0]);
		}
	});

	$("#file3").change(function () {
		console.log('4');
		if (this.files && this.files[0]) {
			var reader = new FileReader();
			reader.onload = imageIsLoaded3;
			reader.readAsDataURL(this.files[0]);
		}
	});
});

function imageIsLoaded(e) {
	console.log(e.target.result);
	$('#user-avatar').attr('src', e.target.result);
};

function imageIsLoaded0(e) {
	console.log(e.target.result);
	$('#product-img0').attr('src', e.target.result);
};

function imageIsLoaded1(e) {
	$('#product-img1').attr('src', e.target.result);
};

function imageIsLoaded2(e) {
	$('#product-img2').attr('src', e.target.result);
};

function imageIsLoaded3(e) {
	$('#product-img3').attr('src', e.target.result);
};

$("#change-to-signin-tab-link").click(function () {
	$('a[rel="tab1"]').trigger("click");
});

$("#change-to-signup-tab-link").click(function () {
	$('a[rel="tab2"]').trigger("click");
});

$("#continue-as-guest-link").click(function () {
	$('#flipFlop').modal('hide');
});

//Login Form
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function () {
	if (animating) return false;
	animating = true;

	current_fs = $(this).parent();
	next_fs = $(this).parent().next();

	//show the next fieldset
	next_fs.show();
	//hide the current fieldset with style
	current_fs.animate({
		opacity: 0
	}, {
		step: function (now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50) + "%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
				'transform': 'scale(' + scale + ')',
				'position': 'absolute'
			});
			next_fs.css({
				'left': left,
				'opacity': opacity
			});
		},
		duration: 800,
		complete: function () {
			current_fs.hide();
			animating = false;
		},
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".previous").click(function () {
	if (animating) return false;
	animating = true;

	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();

	//show the previous fieldset
	previous_fs.show();
	//hide the current fieldset with style
	current_fs.animate({
		opacity: 0
	}, {
		step: function (now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1 - now) * 50) + "%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
				'left': left
			});
			previous_fs.css({
				'transform': 'scale(' + scale + ')',
				'opacity': opacity
			});
		},
		duration: 800,
		complete: function () {
			current_fs.hide();
			animating = false;
		},
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

//Check if Slider is changed	
$(document).on('turbolinks:load', function () {
	var radio = $('input[type=radio][name=slide_switch]');
	radio.change(function () {
		var i = radio.index(radio.filter(':checked'));
		$("#zoom_img" + i).elevateZoom({
			zoomWindowFadeIn: 500,
			zoomWindowFadeOut: 500,
			lensFadeIn: 500,
			lensFadeOut: 500
		});
	});

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

//smooth scroll
$(document).on('turbolinks:load', function () {
	// Add smooth scrolling to all links
	$("a[href^='#']:not(a[href^='#carouselAds'], a[href^='#carouselLogos'], a[href^='#collapse1'], a[href^='#collapse2'], a[href^='#menu-collapse1'], a[href^='#menu-collapse2, a[href^='#signin-tab', a[href^='#signup-tab])").on('click', function (event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function () {

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});
});

//scroll to top button
$(document).on('turbolinks:load', function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 20) {
			$('.btn-backtotop').fadeIn();
			//$('.btn-backtotop').tooltip('show');
		} else {
			$('.btn-backtotop').fadeOut();
			//$('.btn-backtotop').tooltip('hide');
		}
	});
	// scroll body to 0px on click
	$('.btn-backtotop').click(function () {
		//$('.btn-backtotop').tooltip('hide');
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});


});

//change scrollbar style
$("html, .dropdown-subitem, #side-navbar, .table-responsive").niceScroll({
	mousescrollstep: 50,
	cursorcolor: "#5F5F5F",
	cursorwidth: "6px",
	cursorborderradius: "3px",
	cursorborder: "none",
});

//navbar fixed top when scroll
$(document).on('turbolinks:load', function () {
	// Custom 
	var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
		var stickyHeight = sticky.outerHeight();
		var stickyTop = stickyWrapper.offset().top;
		if (scrollElement.scrollTop() >= stickyTop) {
			stickyWrapper.height(stickyHeight);
			sticky.addClass("is-sticky");
			$('.navbar').css({
				'opacity': 0.5
			});
			$('.navbar-nav li:not(:last)').hide();
			//$('.nav-item').removeClass('animated wow fadeIn');
		} else {
			sticky.removeClass("is-sticky");
			stickyWrapper.height('auto');
			$('.navbar').css({
				'opacity': 1
			});
			$('.navbar-nav li:not(:last)').show();
			//$('.title').addClass('animated wow fadeIn');
			//$('.signin-signup').find('button').addClass('animated wow fadeIn');
		}
	};

	// Find all data-toggle="sticky-onscroll" elements
	$('[data-toggle="sticky-onscroll"]').each(function () {
		var sticky = $(this);
		var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
		sticky.before(stickyWrapper);
		sticky.addClass('sticky');

		// Scroll & resize events
		$(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
			stickyToggle(sticky, stickyWrapper, $(this));
		});

		// On page load
		stickyToggle(sticky, stickyWrapper, $(window));
	});
});

//multi slide
$('#carouselLogos').on('slide.bs.carousel', function (e) {

	var $e = $(e.relatedTarget);
	var idx = $e.index();
	var itemsPerSlide = 4;
	var totalItems = $('#carouselLogos > .carousel-inner > .carousel-item').length;

	if (idx >= totalItems - (itemsPerSlide - 1)) {
		var it = itemsPerSlide - (totalItems - idx);
		for (var i = 0; i < it; i++) {
			// append slides to end
			if (e.direction == "left") {
				$('#carouselLogos > .carousel-inner > .carousel-item').eq(i).appendTo('#carouselLogos > .carousel-inner');
			} else {
				$('#carouselLogos > .carousel-inner > .carousel-item').eq(0).appendTo('#carouselLogos > .carousel-inner');
			}
		}
	}
});

//tooltip style on
$(document).on('turbolinks:load', function () {
	//  Activate the Tooltips
	$('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();
});

//tab changed effect
function openTab(evt, tabName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}

function sortTable(n) {
	var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	table = document.getElementById("listtable");
	switching = true;
	//Set the sorting direction to ascending:
	dir = "asc";
	/*Make a loop that will continue until
	no switching has been done:*/
	while (switching) {
		//start by saying: no switching is done:
		switching = false;
		rows = table.getElementsByTagName("TR");
		/*Loop through all table rows (except the
		first, which contains table headers):*/
		for (i = 1; i < (rows.length - 1); i++) {
			//start by saying there should be no switching:
			shouldSwitch = false;
			/*Get the two elements you want to compare,
			one from current row and one from the next:*/
			x = rows[i].getElementsByTagName("TD")[n];
			y = rows[i + 1].getElementsByTagName("TD")[n];
			/*check if the two rows should switch place,
			based on the direction, asc or desc:*/
			if (dir == "asc") {
				if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
					//if so, mark as a switch and break the loop:
					shouldSwitch = true;
					break;
				}
			} else if (dir == "desc") {
				if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
					//if so, mark as a switch and break the loop:
					shouldSwitch = true;
					break;
				}
			}
		}
		if (shouldSwitch) {
			/*If a switch has been marked, make the switch
			and mark that a switch has been done:*/
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
			//Each time a switch is done, increase this count by 1:
			switchcount++;
		} else {
			/*If no switching has been done AND the direction is "asc",
			set the direction to "desc" and run the while loop again.*/
			if (switchcount == 0 && dir == "asc") {
				dir = "desc";
				switching = true;
			}
		}
	}
}