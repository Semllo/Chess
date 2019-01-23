function MoverReina(x,y){
	
		dif_x=x-PiezaSeleccionadaX;
		dif_y=y-PiezaSeleccionadaY;
		CeldaValida=false;
		suma=0;
		MueveRecto=true;

		if(x!=PiezaSeleccionadaX || y!=PiezaSeleccionadaY){
			/*Torre*/
			i=PiezaSeleccionadaX;
			if(dif_y == 0) {
				if(x>i){
					while(x>i){
						suma+=tablero[i+1][y];
						i++;
					}
				}else{
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
	
			if(CeldaValida==true && tablero[PiezaSeleccionadaX][PiezaSeleccionadaY]==2 && (tablero[x][y] > 10 || tablero[x][y]==0)) {
		
			DibujarReinaBlanco(x,y); 
			EliminarPiezaPasada(PiezaSeleccionadaX,PiezaSeleccionadaY);
			MueveRecto=false;
		
			}else if(CeldaValida==true && tablero[PiezaSeleccionadaX][PiezaSeleccionadaY]==12 && tablero[x][y]<10){

			DibujarReinaNegro(x,y); 
			EliminarPiezaPasada(PiezaSeleccionadaX,PiezaSeleccionadaY);
			MueveRecto=false;
			
			} 
		if(MueveRecto){	
		/*Alfil*/
		dif_x=PiezaSeleccionadaX-x;
		dif_y=PiezaSeleccionadaY-y;
		suma=0;
		i=PiezaSeleccionadaX;
		j=PiezaSeleccionadaY;
		
		if(Math.abs(dif_x)== Math.abs(dif_y)){
			if(dif_x>0 && dif_y>0){	
				while(i>x && j>y){
					suma=suma+tablero[i-1][j-1];	
					i--;
					j--;
				}
			}
			if(dif_x<0 && dif_y>0){	
				while(i<x && j>y){
					suma=suma+tablero[i+1][j-1];
					i++;
					j--;
				}
			}
			if(dif_x>0 && dif_y<0){	
				while(i>x && j<y){
					suma=suma+tablero[i-1][j+1];	
					i--;
					j++;
				}
			}
			if(dif_x<0 && dif_y<0){
				while(i<x && j<y){
					suma=suma+tablero[i+1][j+1];
					i++;
					j++;
				}
			}
			if(tablero[PiezaSeleccionadaX][PiezaSeleccionadaY]==12&&(suma==0 || suma==tablero[i][j] && suma<10))
			{
				DibujarReinaNegro(x,y);
				EliminarPiezaPasada(PiezaSeleccionadaX,PiezaSeleccionadaY);
			}else if(tablero[PiezaSeleccionadaX][PiezaSeleccionadaY]==2 &&(suma==0 || suma==tablero[i][j] && suma>10))
			{	
				DibujarReinaBlanco(x,y);
				EliminarPiezaPasada(PiezaSeleccionadaX,PiezaSeleccionadaY);
			}else{
			SeleccionamosNuevaCasilla(x,y);
			}	
		}else{
			SeleccionamosNuevaCasilla(x,y);
		}	
	
	
	    }
		}
	
}