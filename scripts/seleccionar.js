/*Seleccionar fichas*/
function Seleccionar(x,y){
	
	if(tablero[x][y]>0 && tablero[PiezaSeleccionadaX][PiezaSeleccionadaY]==0){        																								
		if (celda.style.background=="green") {
			DesPintarSeleccion(PiezaSeleccionadaX,PiezaSeleccionadaY);
		}
		SeleccionamosNuevaCasilla(x,y);
	}
	
}

function SeleccionamosNuevaCasilla(x,y){
		DesPintarSeleccion(PiezaSeleccionadaX,PiezaSeleccionadaY);
		PiezaSeleccionadaX = x;
		PiezaSeleccionadaY = y;
		if(tablero[x][y]>0)PintarSeleccion(PiezaSeleccionadaX,PiezaSeleccionadaY); 
}

function Mover(x,y){																				//Si la casilla esta vacia, segun el tipo de pieza haremos el movimiento 
			if(tablero[PiezaSeleccionadaX][PiezaSeleccionadaY]==5 || tablero[PiezaSeleccionadaX][PiezaSeleccionadaY]==15){
				MoverCaballo(x,y);
			}
			else if(tablero[PiezaSeleccionadaX][PiezaSeleccionadaY]==3 || tablero[PiezaSeleccionadaX][PiezaSeleccionadaY]==13){
				MoverTorre(x,y);
			}
			else if(tablero[PiezaSeleccionadaX][PiezaSeleccionadaY]==4 || tablero[PiezaSeleccionadaX][PiezaSeleccionadaY]==14){
				MoverAlfil(x,y);
			}
			else if(tablero[PiezaSeleccionadaX][PiezaSeleccionadaY]==1 || tablero[PiezaSeleccionadaX][PiezaSeleccionadaY]==11){
				MoverRey(x,y);
			}else if(tablero[PiezaSeleccionadaX][PiezaSeleccionadaY]==2 || tablero[PiezaSeleccionadaX][PiezaSeleccionadaY]==12){
				MoverReina(x,y);
			}
}
