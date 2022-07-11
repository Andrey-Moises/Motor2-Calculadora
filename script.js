let primernumero = 0;
let operador;
let segundoNumero = 0;

function prueba(dato){

    let motor2 = document.getElementById("resultado");
    let displayActual = motor2.innerHTML;
    let nuevoDisplay = displayActual + dato;
    motor2.innerHTML = nuevoDisplay;
}

function borrar(){
    let motor2 = document.getElementById("resultado");
    motor2.innerHTML = '';
}

function obtenerNumeroSuma(){
    let motor2 = document.getElementById("resultado");
    primernumero = parseFloat(motor2.innerHTML);
/*
    alert("El numero guardado es: " + primernumero);
*/
    operador = '+';
    borrar();
}

function obtenerNumeroResta(){
    let motor2 = document.getElementById("resultado");
    primernumero = parseFloat(motor2.innerHTML) ;
/*
    alert("El numero guardado es: " + primernumero);
*/
    operador = '-';
    borrar()
}

function obtenerNumeroMulti(){
    let motor2 = document.getElementById("resultado");
    primernumero = parseFloat(motor2.innerHTML);
/*
    alert("El numero guardado es: " + primernumero);
*/
    operador = '*';
    borrar()
}

function ejecucion(){
    let motor2 = document.getElementById("resultado");
    if (primernumero != ''){
        segundoNumero = parseFloat(motor2.innerHTML);
/*
        alert("El segundo numero guardado es: " + segundoNumero);
*/
    }
    switch (operador){
        case "+":{
            primernumero += segundoNumero;
            motor2.innerHTML = primernumero;
            break;
        }
        case "-":{
            primernumero -= segundoNumero;
            motor2.innerHTML = primernumero;
            break;
        }
        case "*":{
            primernumero *= segundoNumero;
            motor2.innerHTML = primernumero;
            break;
        }

    }
}
