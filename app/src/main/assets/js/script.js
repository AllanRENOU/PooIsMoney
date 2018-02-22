function showPopupParam(){
	$( "#inputSalaire" ).val(SALAIRE);
	$( "#inputHeure" ).val(HEURES_PAR_SEMAINE);
	$( "#inputTauxHoraire" ).val( SALAIRE / 4 / HEURES_PAR_SEMAINE );


	$( "#popupContainer, #popupParam" ).show();
}

function hidePopupParam(){
	$( "#popupContainer, #popupParam" ).hide();
}


function refreshDuree(){
	duree.seconde = duree.seconde + TEMPS_REFRESH;

	if( duree.seconde > 59 ){
		duree.seconde = 0;
		duree.minute++;

		if( duree.minute > 59 ){
			duree.minute = 0;
			duree.heure++;
		}
	}
}
