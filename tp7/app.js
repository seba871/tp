let edad = 20;

document.getElementById("boton1").onclick = function () {

    if (edad >= 18) {
        document.getElementById("parrafo1").textContent = "Eres mayor de edad";
    } else {
        document.getElementById("parrafo1").textContent = "Eres menor de edad";
    }

};


// Ejercicio 2
let nombreUsuario = "Nahuel";

document.getElementById("boton2").onclick = function () {

    if (nombreUsuario == "Nahuel") {
        document.getElementById("parrafo2").textContent =
        "Bienvenido Nahuel, ¿cómo estás?";
    } else {
        document.getElementById("parrafo2").textContent =
        "Bienvenido usuario";
    }

};


// Ejercicio 3
let nombreUsuario2 = "Marcos";

document.getElementById("boton3").onclick = function () {

    if (nombreUsuario2 == "Nahuel" || nombreUsuario2 == "Marcos") {
        document.getElementById("parrafo3").textContent =
        "Bienvenido " + nombreUsuario2 + " ¿cómo estás?";
    } else {
        document.getElementById("parrafo3").textContent =
        "Bienvenido " + nombreUsuario2;
    }

};


// Ejercicio 4
let numero = -5;

document.getElementById("boton4").onclick = function () {

    if (numero > 0) {
        document.getElementById("parrafo4").textContent =
        "El número es positivo";
    } else if (numero < 0) {
        document.getElementById("parrafo4").textContent =
        "El número es negativo";
    } else {
        document.getElementById("parrafo4").textContent =
        "El número es cero";
    }

};


// Ejercicio 5
let edad2 = 35;

document.getElementById("boton5").onclick = function () {

    if (edad2 >= 6 && edad2 <= 11) {
        document.getElementById("parrafo5").textContent = "Niño";
    } else if (edad2 >= 12 && edad2 <= 18) {
        document.getElementById("parrafo5").textContent = "Adolescente";
    } else if (edad2 >= 19 && edad2 <= 26) {
        document.getElementById("parrafo5").textContent = "Joven";
    } else if (edad2 >= 27 && edad2 <= 59) {
        document.getElementById("parrafo5").textContent = "Adulto";
    } else if (edad2 >= 60) {
        document.getElementById("parrafo5").textContent = "Anciano";
    } else {
        document.getElementById("parrafo5").textContent = "Edad no válida";
    }

};


// Ejercicio 6
let dia = "sabado";
let parrafo6 = "#parrafo6"
document.getElementById("boton6").onclick = function () {

    if (
        dia == "lunes" ||
        dia == "martes" ||
        dia == "miercoles" ||
        dia == "jueves" ||
        dia == "viernes"
    ) {
        document.getElementById("parrafo6").textContent =
        "Es un día laborable";
    } else if (dia == "sabado" || dia == "domingo") {
        document.getElementById("parrafo6").textContent =
        "Es fin de semana";
    }

};


// Ejercicio 7
let contrasenia = "secreto";

document.getElementById("boton7").onclick = function () {

    if (contrasenia == "secreto") {
        document.getElementById("parrafo7").textContent =
        "Acceso concedido";
    } else {
        document.getElementById("parrafo7").textContent =
        "Acceso denegado";
    }

};