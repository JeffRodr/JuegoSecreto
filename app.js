let NumeroSecre = 0;
let contadorIntentos = 0;
let listaNumerosSorteados = [];
let NumeroMaximo = prompt('Indica un numero maximo para sortear!');
CondicionesIniciales();



function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function VerificarIntento(){
    let NumeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    contadorIntentos++;
    if (NumeroUsuario==NumeroSecre){
        asignarTextoElemento('p',`Acertaste el numero en ${contadorIntentos} ${(contadorIntentos === 1) ? 'vez' : 'veces'}!!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else if (NumeroUsuario > NumeroSecre){
        asignarTextoElemento('p','Fallaste, el numero es menor');
        LimpiarCaja();    
        }
    else{
        asignarTextoElemento('p','Fallaste, el numero es mayor');
        LimpiarCaja();
        }

  
    return;
}

function NumeroSecreto() {
    let Ngenerado = Math.floor(Math.random()*NumeroMaximo+1);

    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == NumeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }
    else{
    //Si el numero generado esta en la lista

    if (listaNumerosSorteados.includes(Ngenerado)){
        return NumeroSecreto();
    }
    else{
        listaNumerosSorteados.push(Ngenerado);
        return Ngenerado;
        }
    }
}

function LimpiarCaja(){
    document.querySelector('#valorUsuario').value = '';

}

function CondicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero de 1 a ${NumeroMaximo}`);
    NumeroSecre = NumeroSecreto();
    contadorIntentos = 0;
}

function reiniciarJuego(){
    //limpiar caja
    LimpiarCaja();
    //indicar condiciones iniciales
    CondicionesIniciales();
    //deshabilitar boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    console.log(NumeroSecre);
}