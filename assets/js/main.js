// $(document).ready(function(){
//     // responsive menu
// 		$('.dropbtn').on('click', function(e) {
// 			e.preventDefault();
// 			$('.dropbtn').removeClass('js-nested-menu-opened');
// 			$(this).toggleClass('js-nested-menu-opened');
// 		});
// 		// - responsive menu

//         // ignore clicking on nested menu link
// 	$('.menu-responsive-button').on('click', function(e) {
// 		e.preventDefault();
// 		$(this).toggleClass('js-menu-responsive-button-active');
// 		$('.list-menu').toggleClass('js-menu-opened');
// 		$('.dropbtn').removeClass('js-nested-menu-opened');
// 	});
// 	// - ignore clicking on nested menu link

// });

// function myFunction() {
// 	var x = document.getElementById("myTopnav");
// 	if (x.className === "wrapper-menu") {
// 	  x.className += " responsive";
// 	} else {
// 	  x.className = "wrapper-menu";
// 	}
//   } 

//   $('.projects-grid_container').masonry({
//   // options
//   itemSelector: '.projects-grid_item',
//   columnWidth: 100
// });


// var myTopnav = document.getElementById("myTopnav"),
//     mobileToggle = document.getElementById("mobileToggle");

// mobileToggle.onclick = function () {
    
//     "use strict";
    
//     myTopnav.classList.toggle("show_list");
//     mobileToggle.classList.toggle("active");
    
// };
var menuBar = document.getElementById("menuBar"),
    mobileToggle = document.getElementById("mobileToggle");

mobileToggle.onclick = function () {
    
    "use strict";
    
    menuBar.classList.toggle("show_list");
    mobileToggle.classList.toggle("active");
    
};


$(document).ready(function(){
     // responsive menu
 		$('.dropbtn').on('click', function(e) {
 			e.preventDefault();
 			$('.dropbtn').removeClass('menu-bar');
 			$(this).toggleClass('mobileToggle');
 		});
 		// - responsive menu

         // ignore clicking on nested menu link
 	$('.mobileToggle').on('click', function(e) {
 		e.preventDefault();
		$(this).toggleClass('mobileToggle');
 		$('.list-menu').toggleClass('js-menu-opened');
 		$('.dropbtn').removeClass('js-nested-menu-opened');
 	});
 	// - ignore clicking on nested menu link

 });