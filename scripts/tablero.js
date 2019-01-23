	
/*Inicializa el tablero a 0*/	
function LimpiarTablero(){
	
	for(i=0; i<8; i++){
		for(j=0; j<8; j++){
			tablero[i][j] = 0;
		}
	}
	
}


function  DibujarCaballoBlanco(x,y){

	tablero[x][y] = 5;
	celda = document.getElementById("c"+x+y);
	celda.innerHTML="<img  src='images/caballo.png'></img>"

}

function  DibujarCaballoNegro(x,y){

	tablero[x][y] = 15;
	celda = document.getElementById("c"+x+y);
	celda.innerHTML="<img  src='images/caballon.png'></img>"

}


function  DibujarTorreBlanca(x,y){

	tablero[x][y] = 3;
    celda = document.getElementById("c"+x+y);
    celda.innerHTML="<img  src='images/torre.png'></img>"

}


function  DibujarTorreNegra(x,y){

	tablero[x][y] = 13;
    celda = document.getElementById("c"+x+y);
    celda.innerHTML="<img  src='images/torren.png'></img>"

}

function DibujarAlfilBlanco(x,y){
	
	tablero[x][y] = 4;
    celda = document.getElementById("c"+x+y);
    celda.innerHTML="<img  src='images/alfil.png'></img>"
	
}

function DibujarAlfilNegro(x,y){
	
	tablero[x][y] = 14;
    celda = document.getElementById("c"+x+y);
    celda.innerHTML="<img  src='images/alfiln.png'></img>"
	
}

function DibujarReyBlanco(x,y){
	
	tablero[x][y] = 1;
    celda = document.getElementById("c"+x+y);
    celda.innerHTML="<img  src='images/Rey.png'></img>"
	
}

function DibujarReyNegro(x,y){
	
	tablero[x][y] = 11;
    celda = document.getElementById("c"+x+y);
    celda.innerHTML="<img  src='images/Reyn.png'></img>"
	
}

function DibujarReinaBlanco(x,y){
	
	tablero[x][y] = 2;
    celda = document.getElementById("c"+x+y);
    celda.innerHTML="<img  src='images/reina.png'></img>"
	
}

function DibujarReinaNegro(x,y){
	
	tablero[x][y] = 12;
    celda = document.getElementById("c"+x+y);
    celda.innerHTML="<img  src='images/reinan.png'></img>"
	
}


function PintarSeleccion(x,y){
	
	celda = document.getElementById("c"+x+y); 	
	celda.style.background="green";										
	
}

function DesPintarSeleccion(x,y){
	
	celda = document.getElementById("c"+x+y);
	celda.style.background="";
	
}


function EliminarPiezaPasada(x,y){
		celda = document.getElementById("c"+x+y);
		celda.innerHTML=""
		tablero[x][y]=0; 		    
		DesPintarSeleccion(x,y);  
		SeleccionamosNuevaCasilla(x,y);
		
}



