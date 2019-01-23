function MoverRey(x,y){
		
	dif_x=x-PiezaSeleccionadaX;
	dif_y=y-PiezaSeleccionadaY;
		
		
	if(dif_x!=0 || dif_y!=0){
		if(Math.abs(dif_x)<=1 && Math.abs(dif_y)<=1){
			if(tablero[PiezaSeleccionadaX][PiezaSeleccionadaY]==11 && (tablero[x][y]<10))
			{
				DibujarReyNegro(x,y);
				EliminarPiezaPasada(PiezaSeleccionadaX,PiezaSeleccionadaY);
			}else if(tablero[PiezaSeleccionadaX][PiezaSeleccionadaY]==1 &&(tablero[x][y]==0 || tablero[x][y]>10))
			{	
				DibujarReyBlanco(x,y);
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