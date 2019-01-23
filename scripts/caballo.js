CaballoMovimiento = false;

/*Posiciones validas para el caballo*/
function MoverCaballo(x,y){
	CaballoMovimiento = false;
	CeldaValida=false;
	dif_x=x-PiezaSeleccionadaX;
	dif_y=y-PiezaSeleccionadaY;
	if(dif_x == 1 && dif_y ==-2) CeldaValida = true; 
	if(dif_x == 1 && dif_y == 2) CeldaValida = true;
    if(dif_x ==-1 && dif_y ==-2) CeldaValida = true; 
	if(dif_x ==-1 && dif_y == 2) CeldaValida = true;
	if(dif_x ==-2 && dif_y == 1) CeldaValida = true;
	if(dif_x == 2 && dif_y == 1) CeldaValida = true;
	if(dif_x ==-2 && dif_y ==-1) CeldaValida = true;
	if(dif_x == 2 && dif_y ==-1) CeldaValida = true;
	if(CeldaValida){	
		if(tablero[PiezaSeleccionadaX][PiezaSeleccionadaY]==5 && (tablero[x][y] > 10 || tablero[x][y]==0)){
			
			DibujarCaballoBlanco(x,y);
		    CaballoMovimiento = true;
			
		}
		else if(tablero[PiezaSeleccionadaX][PiezaSeleccionadaY]==15 && (tablero[x][y] < 10)){
			
			DibujarCaballoNegro(x,y);
			CaballoMovimiento = true;
		   
		}
	}else{
		SeleccionamosNuevaCasilla(x,y);
	}
	
	
	if(CaballoMovimiento ){                                      //Eliminamos el caballo de su posicion pasada si se ha movido
	EliminarPiezaPasada(PiezaSeleccionadaX,PiezaSeleccionadaY);
	
	}
	
}


