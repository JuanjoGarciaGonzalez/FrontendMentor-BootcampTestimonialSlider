const slides = [...document.querySelectorAll(".slide__content")]
const buttonPrev = document.querySelector(".button-prev")
const buttonNext = document.querySelector(".button-next")
let valor;

buttonNext.addEventListener("click", function() {
    cambiarPosicion(1)
});

buttonPrev.addEventListener("click", function() {
    cambiarPosicion(-1)
});

function cambiarPosicion(posicion) {
    const elementoActual = Number(document.querySelector(".slide__content--show").dataset.id)
    valor = elementoActual
    valor += posicion
    
    if(valor === 0 || valor == slides.length+1) {
        valor = valor === 0 ? slides.length : 1
    }

    slides[elementoActual-1].classList.toggle("slide__content--show");
    slides[valor-1].classList.toggle("slide__content--show");
}