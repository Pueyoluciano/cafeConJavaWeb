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

/*.galeria-marco {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    background-color: @ccj-secundario;
    .galeria-contenedor {
        flex-grow: 1;
        white-space: nowrap;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        .carousel-transitions;
        figure {
            display: inline-block;
            width: 100%;
            height: 100%;
            text-align: center;
            img {
                max-height: 100%;
                max-width: 100%;
            }
            figcaption {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                position: absolute;
                width: 100%;
                bottom: 10%;
                .leyenda {
                    background-color: rgba(0, 0, 0, 0.7);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 0 75px;
                    width: 30%;
                    height: 100px;
                    .titulo {
                        color: @ccj-primario;
                    }
                    .detalle {
                        color: @ccj-secundario;
                        font-size: 0.9em;
                    }
                }
            }
        }
    }
    .control {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 10%;
        color: white;
        &.izquierda {
            left: 0;
            .transitions;
            &:hover {
                .linearGradient(to left,
                transparent,
                rgba(0,
                0,
                0,
                0.5));
            }
        }
        &.derecha {
            right: 0;
            .transitions;
            &:hover {
                .linearGradient(to right,
                transparent,
                rgba(0,
                0,
                0,
                0.5));
            }
        }
    }
    .miniaturas {
        position: absolute;
        bottom: 15px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        .miniatura {
            width: 15px;
            height: 15px;
            border-radius: 15px;
            margin: 0 5px;
            background-color: rgba(255, 255, 255, 0.7);
            &.seleccionada {
                border: 2px solid white;
            }
        }
    }
}
*/