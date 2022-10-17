let contador = 0;
let matriz = new Array(3);
matriz[0] = new Array(3);
matriz[1] = new Array(3);
matriz[2] = new Array(3);

let res=document.getElementById('new');

function checkGame(idButton, i, j) {
    if(winner(matriz) === "Nada"){
        //Se rescata el boton
        let res=document.getElementById('new');
        let button = document.getElementById(idButton);
        let titulo=document.getElementById('winner');
        let turno=document.getElementById('turn');
        //el juaego acaba de iniciar y debemos poner 
        //la primer imagen (GATO)
        if (contador === 0) {
            button.src = 'https://res.cloudinary.com/ravekh/image/upload/v1666016078/Macotitas/gatito_vjks3t.webp';
            button.style.cursor = "default";
            matriz[i][j] = 1
            contador++;
            turno.innerHTML='Turno del perro'
        }
        //segunda imagen (RATON)
        if (contador % 2 !== 0) {
            if(matriz[i][j]==null){
                button.src = 'https://res.cloudinary.com/ravekh/image/upload/v1666016078/Macotitas/perrito_vzlpph.jpg';
                button.style.cursor = "default";
                matriz[i][j] = 2;
                contador++;
                turno.innerHTML='Turno del gato'
            }
        }else{
            if(matriz[i][j]==null){
                button.src = 'https://res.cloudinary.com/ravekh/image/upload/v1666016078/Macotitas/gatito_vjks3t.webp';
                matriz[i][j] = 1;
                contador++;
                turno.innerHTML='Turno del perro'
            }
        }
        //Condiciones de Ganar
        if(winner(matriz)==="Gato"){
            titulo.innerHTML='El Gato ha ganado!!!!';
            titulo.style.color = "#fb6900";
            res.style.visibility='visible';
            turno.style.visibility = "hidden";
            turno.style.fontSize = '0px';
        }else if(winner(matriz)==="Perro"){
            titulo.innerHTML='El Perro ha ganado!!!!';
            titulo.style.color = "#00b9bd";
            res.style.visibility='visible';
            turno.style.visibility = "hidden";
            turno.style.fontSize = '0px';
        }else  if(contador === 9&&winner(matriz)=="Nada"){
            titulo.innerHTML='Empate!!!';
            res.style.visibility='visible';
            turno.style.visibility = "hidden";
            turno.style.fontSize = '0px';
        }
    }
    
}

function winner(matriz){
    let c1, c2, c3, c4, c5, c6, c7, c8;
    //Horizontales
    c1=matriz[0][0]+matriz[0][1]+matriz[0][2];
    c2=matriz[1][0]+matriz[1][1]+matriz[1][2];
    c3=matriz[2][0]+matriz[2][1]+matriz[2][2];
    //Verticales
    c4=matriz[0][0]+matriz[1][0]+matriz[2][0];
    c5=matriz[0][1]+matriz[1][1]+matriz[2][1];
    c6=matriz[0][2]+matriz[1][2]+matriz[2][2];

    //Diagonales
    c7=matriz[0][0]+matriz[1][1]+matriz[2][2];
    c8=matriz[0][2]+matriz[1][1]+matriz[2][0];

    if(c1===3||c2===3||c3===3||c4===3||c5===3||c6===3||c7===3||c8===3){
        return "Gato";
    }else if(c1===6||c2===6||c3===6||c4===6||c5===6||c6===6||c7===6||c8===6){
        return "Perro";
    }
    return "Nada";
}

function clean(){
    const images=document.querySelectorAll('.casilla');
    let res=document.getElementById('new');
    let titulo=document.getElementById('winner');
    let turno=document.getElementById('turn');
    contador=0;
    matriz[0] = new Array(3);
    matriz[1] = new Array(3);
    matriz[2] = new Array(3);
    res.style.visibility='hidden';
    turno.style.fontSize = '40px';

    images.forEach(element =>{
        element.src='https://res.cloudinary.com/ravekh/image/upload/v1666016078/Macotitas/fondo_hterh7.jpg';
        element.style.cursor = "pointer";
    })

    titulo.innerHTML='';
    turno.innerHTML='Turno del gato'
    turno.style.visibility = "visible";
}