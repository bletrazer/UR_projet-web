(function($){
	var boutonLogin = $("#boutonLogin");
	var LoginBox = $("#inscription_up");
	var pseudo = false;
	var MDP= false;
	
	boutonLogin.on("click", function(e){
		LoginBox.removeClass("LoginVisibility");
		e.preventDefault();
	});
	
	var closeLoginBox = $("div#closeLogin");
	
	closeLoginBox.on("click", function(){
		LoginBox.addClass("LoginVisibility");
		window.location="";
	});
	
	var Login = $("#Login");
	var BoutonProfile = $("#Profile");
	
	Login.on("click", function(){
		if($('#Pseudo').val() == ""){
			$("#Pseudo").attr("placeholder", "Identifiant manquant");
			pseudo= false;
		}
		else{
			pseudo= true;
		}
		if($('#MDP').val() == ""){
			$("#MDP").attr("placeholder", "Mot de passe manquant");
			MDP= false;
		}
		else {
			MDP= true;

		}
		var connected = "Se déconnecter";
		if(pseudo) {
			if(MDP){
				$('#boutonSignUp').text(connected);
				$('#boutonSignUp').attr("href", "");
				$('#boutonSignUp').attr("title", "click pour te déconnecter");
				
				$('#boutonLogin').text("bienvenue " + $("input#Pseudo").val());
				$('#boutonLogin').attr("title" ,"ce n'est pas vous?");
				$("#Pseudo").val("");
				$("#MDP").val("");
				LoginBox.addClass("LoginVisibility");
			}
		}

	});
	
	var esc = 27;
	$(document).keydown(function (e) {
		if (e.keyCode == esc) {
			LoginBox.addClass("LoginVisibility");
			}
		});
	
	
})(jQuery);