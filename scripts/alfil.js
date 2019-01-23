function MoverAlfil(x,y){
	dif_x=PiezaSeleccionadaX-x;
	dif_y=PiezaSeleccionadaY-y;
    suma=0;
	i=PiezaSeleccionadaX;
	j=PiezaSeleccionadaY;
	if(dif_x!=0 && dif_y!=0){
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
			if(tablero[PiezaSeleccionadaX][PiezaSeleccionadaY]==14&&(suma==0 || suma==tablero[i][j] && suma<10))
			{
				DibujarAlfilNegro(x,y);
				EliminarPiezaPasada(PiezaSeleccionadaX,PiezaSeleccionadaY);
			}else if(tablero[PiezaSeleccionadaX][PiezaSeleccionadaY]==4 &&(suma==0 || suma==tablero[i][j] && suma>10))
			{	
				DibujarAlfilBlanco(x,y);
				EliminarPiezaPasada(PiezaSeleccionadaX,PiezaSeleccionadaY);
			}else{
			SeleccionamosNuevaCasilla(x,y);
			}	
		}else{
			SeleccionamosNuevaCasilla(x,y);
		}
	}else{
		SeleccionamosNuevaCasilla(x,y);
	}
}