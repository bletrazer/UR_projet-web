(function($){
	
	var bouton_menu = $("#bouton_menu");
	var menu = $(".menuDisplay");
	
	var menu_click = false;

	bouton_menu.on("click", function(e){
		if(menu_click){
			e.preventDefault();
			menu.addClass("menuDisplay");
			menu_click = false;
		}
		else{
			e.preventDefault();
			menu.removeClass("menuDisplay");
			menu_click = true;
		}

	});
	
	
})(jQuery);