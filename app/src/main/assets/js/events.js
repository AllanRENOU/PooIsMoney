var events = {
	init : function(){

			let imgJackpot = $("#imgJackpot")

			$("#counter")
				.css("margin-top", imgJackpot.height()*0.2)
				.css("margin-left", imgJackpot.width()*0.2);
			compteur.init( $("#counter"), parseInt( imgJackpot.height()*0.75), parseInt( imgJackpot.width()*0.11) );

			//var imgJackpot = $("#imgJackpot")[0];

			var timerTemps = setInterval( function(){
				refreshDuree();
				$("#timeCounterContainer").text( duree.heure + ":" + duree.minute + ":" + duree.seconde );
				

				totalArgent = totalArgent +	 salaireParSec
				compteur.setValue(parseInt( totalArgent * 1000) );
			
			}, TEMPS_REFRESH * 1000 );
	}
}