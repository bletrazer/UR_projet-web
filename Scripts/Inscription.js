(function($) {
	var valider = $("#valider");
	
	var Pseudo = $("#Pseudo");
	var Email = $("#Email");
	var MDP = $("#MDP");

	
	valider.on("click", function() {
		var PseudoValid= false;
		var EmailValid= false;
		var MDPValid= false;
		//teste du pseudo:
		
		var lenghtPseudo = Pseudo.val().length;
		
		if(Pseudo.val() == "") {
			Pseudo.attr("placeholder", "*Veuillez entrer un Pseudo*");
			PseudoValid = false;
		}
		
		else if(Pseudo.val().match(/[#a-zA-Z0-9+]/)){
			if(lenghtPseudo >= 3) {
				PseudoValid = true;
			}
			else {
				PseudoValid = false;
				Pseudo.attr("placeholder", "*Veuillez entrer un Pseudo valide*");
				Pseudo.val("");
				// alert("Pseudo OK");
			}
		}
		
		else {
			Pseudo.attr("placeholder", "*Veuillez entrer un Pseudo valide*");
			Pseudo.val("");
			PseudoValid = false;
		}
		// teste de l'adresse e-mail:
		
        if (Email.val() == ""){
            Email.attr("placeholder", "*Veuillez entrer une adresse mail*");
            EmailValid = false;
        }
		else if(Email.val().match(/[#@+]/)){
			if(Email.val().match(/[#.+]/)){
				EmailValid = true;
			}
			else {
				Email.attr("placeholder", "*Veuillez entrer une adresse e-mail valide*");
				Email.val("");
				EmailValid = false;
			}
		}
		
        else{
			Email.attr("placeholder", "*Veuillez entrer une adresse e-mail valide*");
			Email.val("");
			EmailValid = false;
        }
		
		//teste le mot-de-passe:
		var lenghtMDP = MDP.val().length;
		// alert(lenghtMDP);
		
        if (MDP.val() == ""){
            MDP.attr("placeholder", "*Veuillez entrer un mot-de-passe*");
            MDPValid = false;
        }
		else if(MDP.val().match(/[#a-z+]/) && MDP.val().match(/[#A-Z+]/) && MDP.val().match(/[#0-9+]/)){
			if(lenghtMDP >=6 ) {
				MDPValid = true;
			}
			else {
				MDPValid = false;
				MDP.attr("placeholder", "*Veuillez entrer un mot-de-passe valide*");
				MDP.val("");
				// alert("Mot De Passe OK");
			}
		}
		
        else{
			MDP.attr("placeholder", "*Veuillez entrer un mot de pass valide*");
			MDP.val("");
			MDPValid = false;
        }
		
		if(PseudoValid){
			if(EmailValid){
				if(MDPValid){
					window.location='inscription_Valider.html'
				}
			}
		}
	});
	 //bouton "close"
	var buttonclose = $("#pageContent > div > div.helpContainer > p#close");
	
	buttonclose.on("click", function(){
		helpPseudoContent.addClass("display");
		helpEmailContent.addClass("display");
		helpMDPContent.addClass("display");
	});

	//help pseudo
	var helpPseudo = $("#helpPseudo");
	var helpPseudoContent = $("#helpPseudoContent");
	
	
	helpPseudo.on("click", function(){
		helpPseudoContent.removeClass("display");
		helpEmailContent.addClass("display");
		helpMDPContent.addClass("display");
	});
	
	//help mail
	
	var helpEmail = $("#helpEmail");
	var helpEmailContent = $("#helpEmailContent");
	
	
	helpEmail.on("click", function(){
		helpEmailContent.removeClass("display");
		helpPseudoContent.addClass("display");
		helpMDPContent.addClass("display");
	});
	
	//help mot-de-passe
	
	var helpMDP = $("#helpMDP");
	var helpMDPContent = $("#helpMDPContent");
	
	helpMDP.on("click", function(){
		helpMDPContent.removeClass("display");
		helpEmailContent.addClass("display");
		helpPseudoContent.addClass("display");
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
})(jQuery);