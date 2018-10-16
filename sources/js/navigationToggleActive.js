function addToggleActive() {
    var paginas = document.getElementsByClassName("pagina");

    for (let i = 0; i < paginas.length; i++) {
        paginas[i].addEventListener("click", function () { toggleActive(i) });
    }
}

function toggleActive(position) {
    var paginas = document.getElementsByClassName("pagina");
    for (let i = 0; i < paginas.length; i++) {
        paginas[i].classList.remove("activo");
    }

    paginas[position].classList.add("activo");
}

window.onload = function () {
    addToggleActive();
}