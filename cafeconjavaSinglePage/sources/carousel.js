var desplazable = document.getElementsByClassName("galeria-contenedor")[0];
var cantidad = document.getElementsByClassName("galeria-item").length;
var controlIzquierda = document.getElementsByClassName("control")[0];
var controlDerecha = document.getElementsByClassName("control")[1];
var contenedorMiniaturas = document.getElementsByClassName("miniaturas")[0];
var miniaturas;
var offset = 0;
var seleccionado = 0;
var maxOffset = - 100 * (cantidad - 1);

function actualizarSeleccionada(indice) {
    for (let i = 0; i < miniaturas.length; i++) {
        miniaturas[i].classList.remove("seleccionada");
    }

    miniaturas[indice].classList.add("seleccionada");
    seleccionado = indice;
}

function moverIzquierda() {
    if (offset + 100 <= 0) {
        offset += 100;
        desplazable.style.left = offset + '%';
        actualizarSeleccionada(seleccionado - 1);
    }
}
function moverDerecha() {
    if (offset - 100 >= maxOffset) {
        offset -= 100;
        desplazable.style.left = offset + '%';
        actualizarSeleccionada(seleccionado + 1);
    }
}

function crearMiniaturas() {
    for (let i = 0; i < cantidad; i++) {
        var miniatura = document.createElement("div");
        miniatura.classList.add("miniatura");
        miniatura.addEventListener("click", () => { desplazable.style.left = (-100 * i) + '%'; offset = (-100 * i); actualizarSeleccionada(i); }, false);

        contenedorMiniaturas.appendChild(miniatura);
    }

    miniaturas = document.getElementsByClassName("miniatura");
    actualizarSeleccionada(seleccionado);
}

controlIzquierda.addEventListener("click", moverIzquierda, false);
controlDerecha.addEventListener("click", moverDerecha, false);

crearMiniaturas();