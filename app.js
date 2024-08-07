let numeroSecreto = 0;
let intentos = 0;
let listaNumerosGenerados = [];
let numeroMaximo = 10;


console.log(numeroSecreto);


function generarTextos(elemento, texto){
    elemento = document.querySelector(elemento);
    elemento.innerHTML=texto;
    return;
}

function verificaNumeroUsuario(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroSecreto === ++numeroUsuario){
        generarTextos('p',`¡¡¡Acertaste el número secreto en ${intentos} ${(intentos === 1) ? 'intento!!!' : 'intentos!!!'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroUsuario < numeroSecreto){
            generarTextos('p', 'El número es mayor');
            
        }else{
            generarTextos('p', 'El  número es menor');
        }
        intentos++;
        limpiarCaja();
        
    }

    return;
}

function reiniciarJuego() {
    //limpia cajas
    limpiarCaja();
    //Reinicia intentos
    //Genera nuevo número
    //Deshabilita el botón nuevo
    //Inicia mensajes
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

    return;


}

function generaNumeroSecreto() {
    let nuevoNumero =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(nuevoNumero);
    console.log(listaNumerosGenerados);
    //Si ya sorteamos todos los números

    if (listaNumerosGenerados.length == numeroMaximo){
        generarTextos('p','Ya fueron sorteados todos los números posibles ');
    }else{
        //si numero nuevo está en incluido en la lista.
        if (listaNumerosGenerados.includes(nuevoNumero)){
            return generaNumeroSecreto();

        } else{
            listaNumerosGenerados.push(nuevoNumero);
            return nuevoNumero;
        }
    }
}

function limpiarCaja (){
    document.querySelector('#valorUsuario').value ='';

return;
}


function condicionesIniciales (){
    generarTextos('h1','¡Juego del número secreto! ');
    generarTextos('p',`Indica un número del 1 al ${numeroMaximo}: `);
    numeroSecreto = generaNumeroSecreto();
    intentos = 1;


    return;
}


condicionesIniciales();