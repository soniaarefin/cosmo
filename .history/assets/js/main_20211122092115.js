$(document).ready(function(){
    // responsive menu
		$('.list-menu__link_has-nested-menu').on('click', function(e) {
			e.preventDefault();
			$('.list-menu__link_has-nested-menu').removeClass('js-nested-menu-opened');
			$(this).toggleClass('js-nested-menu-opened');
		});
		// - responsive menu
}0;