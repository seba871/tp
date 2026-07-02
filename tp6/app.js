const parrafo = document.getElementById("parrafo");

const btnFondo = document.getElementById("btnFondo");
const btnTexto = document.getElementById("btnTexto");
const btnColor = document.getElementById("btnColor");
const btnLetra = document.getElementById("btnLetra");
const btnTamano = document.getElementById("btnTamano");
const btnReiniciar = document.getElementById("btnReiniciar");

const textoOriginal = "Este es el texto original del párrafo.";
const colorTextoOriginal = "#0f172a";
const fondoOriginal = "white";
const fuenteOriginal = "Arial";
const tamanoOriginal = "20px";

btnFondo.addEventListener("click", () => {
    parrafo.style.backgroundColor = "red";
});

btnTexto.addEventListener("click", () => {
    parrafo.textContent = "El texto fue cambiado con JavaScript.";
});

btnColor.addEventListener("click", () => {
    parrafo.style.color = "blue";
});

btnLetra.addEventListener("click", () => {
    parrafo.style.fontFamily = "Impact";
});

btnTamano.addEventListener("click", () => {
    parrafo.style.fontSize = "30px";
});

btnReiniciar.addEventListener("click", () => {
    parrafo.textContent = textoOriginal;
    parrafo.style.color = colorTextoOriginal;
    parrafo.style.backgroundColor = fondoOriginal;
    parrafo.style.fontFamily = fuenteOriginal;
    parrafo.style.fontSize = tamanoOriginal;
});