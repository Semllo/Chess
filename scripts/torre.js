function MoverTorre(x,y){
  
	    dif_x=x-PiezaSeleccionadaX;
		dif_y=y-PiezaSeleccionadaY;
		CeldaValida=false;
		suma=0;

		if(x!=PiezaSeleccionadaX || y!=PiezaSeleccionadaY){
			i=PiezaSeleccionadaX;
			if(dif_y == 0) {
				if(x>i){
					while(x>i){

					suma+=tablero[i+1][y];
					i++;
					}
				} else {
					while(x<i){
					suma+=tablero[i-1][y];
					i--;
					}
				}
			    if(suma==0 || (suma==tablero[x][y] && suma>0))CeldaValida=true;
			}


			j=PiezaSeleccionadaY;
			if(dif_x == 0) {
				if(y>j){
					while(y>j){
					suma+=tablero[x][j+1];
					j++;
					}
				} else {
					while(y<j){
					suma+=tablero[x][j-1];
					j--;
					}
				}
			    if(suma==0 || (suma==tablero[x][y] && suma>0)) CeldaValida=true;
			}

		}



	
		if(CeldaValida==true && tablero[PiezaSeleccionadaX][PiezaSeleccionadaY]==3 && (tablero[x][y] > 10 || tablero[x][y]==0)) {
		
			DibujarTorreBlanca(x,y); 
			EliminarPiezaPasada(PiezaSeleccionadaX,PiezaSeleccionadaY);
		
		
		} else if(CeldaValida==true && tablero[PiezaSeleccionadaX][PiezaSeleccionadaY]==13 && tablero[x][y]<10){

			DibujarTorreNegra(x,y); 
			EliminarPiezaPasada(PiezaSeleccionadaX,PiezaSeleccionadaY);


		} else {

			SeleccionamosNuevaCasilla(x,y);

		}

	}
    


