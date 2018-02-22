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
