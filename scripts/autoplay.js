/*Variables globales*/
var tablero = new Array(8);  //0 Vacio, 1 Rey, 2 Reina, 3 Torre, 4 Alfil, 5 Caballo, 6 Peon +10 para las negras
var CeldaActualX;
var CeldaActualY;

var PiezaSeleccionadaX=3;
var PiezaSeleccionadaY=3;

function Inicio(){
	
	for(i=0; i<8; i++) tablero[i] = new Array(8); //Crear array para matriz del tablero
	LimpiarTablero();

	
	/*Primer caballo blanco*/
	x=7;
	y=1;
    DibujarCaballoBlanco(x,y);
	/*Segundo caballo blanco*/
	x=7;
	y=6;
    DibujarCaballoBlanco(x,y);
	/*Primer caballo negro*/
	x=0;
	y=1;
    DibujarCaballoNegro(x,y);
	/*Segundo caballo negro*/
	x=0;
	y=6;
	DibujarCaballoNegro(x,y);
    /*Primera torre blanca*/
    x=7;
    y=0;
    DibujarTorreBlanca(x,y);
    /*Segunda torre blanca*/
    x=7;
    y=7;
    DibujarTorreBlanca(x,y);
    /*Primera torre negra*/
    x=0;
    y=0;
    DibujarTorreNegra(x,y);
    /*Segunda torre negra*/
    x=0;
    y=7;
    DibujarTorreNegra(x,y);
	/*Primer alfil blanco*/
	x=7;
	y=2;
	DibujarAlfilBlanco(x,y);
	/*Segundo alfil blanco*/
	x=7;
	y=5;
	DibujarAlfilBlanco(x,y);
	/*Primer alfil negro*/
	x=0;
	y=2;
	DibujarAlfilNegro(x,y);
	/*Segundo alfil negro*/
	x=0;
	y=5;
	DibujarAlfilNegro(x,y);
	/*Rey Blanco*/
	x=7;
	y=4;
	DibujarReyBlanco(x,y);
	/*Rey Negro*/
	x=0;
	y=4;
	DibujarReyNegro(x,y);
	/*Rey Blanco*/
	x=7;
	y=3;
	DibujarReinaBlanco(x,y);
	/*Rey Negro*/
	x=0;
	y=3;
	DibujarReinaNegro(x,y);
}

/*Funcion de entrada*/
function CheckCelda(x,y){
    
	Seleccionar(x,y);
	Mover(x,y);
	
	//alert("x: "+x+"\n"+"y: "+y+"\n"+"PiezaSeleccionadaX: "+PiezaSeleccionadaX+"\n"+"PiezaSeleccionadaY: "+PiezaSeleccionadaY+"\n"+"Valor:"+tablero[x][y]);
}

Inicio();


//0 -> Vacia
//1 -> Ocupada