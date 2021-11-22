$(document).ready(function(){
    // responsive menu
		$('.list-menu__link_has-nested-menu').on('click', function(e) {
			e.preventDefault();
			$('.list-menu__link_has-nested-menu').removeClass('js-nested-menu-opened');
			$(this).toggleClass('js-nested-menu-opened');
		});
		// - responsive menu

        // ignore clicking on nested menu link
	$('.menu-responsive-button').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('js-menu-responsive-button-active');
		$('.list-menu').toggleClass('js-menu-opened');
		$('.dropbtn').removeClass('js-nested-menu-opened');
	});
	// - ignore clicking on nested menu link

});