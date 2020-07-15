(function($){
	var S_Index = 1;
	
	S_Show(S_Index);

	function S_Divs(n) {
	  S_Show(S_Index += n);
	}

	function S_Show(n) {
	  var i;
	  var k;
	  var x = document.getElementsByClassName("sliderContent");
	  if (n > x.length) {S_Index = 1}
	  
	  if (n < 1) {
		  S_Index = x.length
		  }
		  
	  for (i = 0; i < x.length; i++) {
		 x[i].style.display = "none";
	  }

	  x[S_Index-1].style.display = "block";
	}
	
	
	
	var imgContent = $("#slider .sliderContent img");
	// --- Animations slider ---
	var SBLeft = $("#sliderButtonLeft");
	var SBLeftTA = $("#sliderButtonLeft p");
	
	var SBRight = $("#sliderButtonRight");
	var SBRightTA = $("#sliderButtonRight p");
		
	function animationScale2(elt, timeMS){
		$(elt).addClass("buttonAnimation");
		setTimeout(function(){
			$(elt).removeClass("buttonAnimation");
		}, timeMS);
	}
	
	
		/* on click: move bouton gauche*/
	SBLeft.on('click',function(){
		S_Divs(-1);
		animationScale2(SBLeftTA, 500);
		
	});
	
	/* on click: move bouton droite*/
	
	SBRight.on('click',function(){
		S_Divs(1);
		animationScale2(SBRightTA, 500);
	});
	// --- Auto slider slider ---
	// var S_Timer = setInterval(function(){
		// S_Divs(1);
		// }, 5000);
	 
})(jQuery);