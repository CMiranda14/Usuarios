/*Agregar o quitar la clases*/
/*Agregar un evento*/
/*let texto = document.getElementById('cj_titulo');
let boton = document.getElementById('pg_boton');

/*FUNCIONES*/

/*function activar_bt(){
    boton.classList.add('cambiar_color');
}


boton.addEventListener('click', activar_bt);*/


/*-----------------------------------------*/

import { user_ob } from "./user.js";
import { user } from "./userarrays.js";

//Data



//Algoritmo
let caja_texto = document.querySelector("#cd-titulo-texto");
let root = document.querySelector("#root");
let bt_ver = document.getElementById("bt_ver");


let posicion = 0;

document.getElementById("cj_titulo").innerHTML = user[posicion][1];

const mover_derecha = () => {
 if(posicion < user.length-1){
     posicion++;
 }
 document.getElementById("cj_titulo").innerHTML = user[posicion][1];
}

const mover_izquierda = () => {
    if(posicion > 0) {
        posicion--;
    }
    document.getElementById("cj_titulo").innerHTML = user[posicion][1];
}


//Eventos

document.getElementById("pg_boton2").onclick = function (){
    mover_derecha();
}
document.getElementById("pg_boton").onclick = function (){
    mover_izquierda();
}



//--------- DOM DEL ROOT-------//

function ver(){
    root.innerHTML = '<h1 class="style_user">'+'ID: '+'<p class="date">'+user_ob[posicion].id+'</p>'+'</h1>' +
    '<h1 class="style_user">'+'NIKNAME: '+'<p class="date">'+user_ob[posicion].nikname+'</p>'+
    '<h1 class="style_user">'+'NAME: '+'<p class="date">'+user_ob[posicion].Name+'</p>'+
    '<h1 class="style_user">'+'ADRESS: '+'<p class="date">'+user_ob[posicion].adress+'</p>'+
    '<h1 class="style_user">'+'EMAIL: '+'<p class="date">'+user_ob[posicion].email+'</p>'+
    '<h1 class="style_user">'+'PHONE: '+'<p class="date">'+user_ob[posicion].phone+'</p>'

}

bt_ver.addEventListener('click', ver);

