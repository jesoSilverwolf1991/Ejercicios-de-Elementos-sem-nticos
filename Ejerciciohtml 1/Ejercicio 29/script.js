const historiaElemento = document.getElementById("historia");
const opcion1Elemento = document.getElementById("opcion1");
const opcion2Elemento = document.getElementById("opcion2");

function seleccionarOpcion(opcion) {
    if (opcion === 1) {
        historiaElemento.textContent = "Elegiste la Opción A. Esta es la siguiente parte de la historia...";
        opcion1Elemento.textContent = "Siguiente parte";
        opcion2Elemento.style.display = "none";
    } else if (opcion === 2) {
        historiaElemento.textContent = "Elegiste la Opción B. Esta es la siguiente parte de la historia...";
        opcion1Elemento.textContent = "Siguiente parte";
        opcion2Elemento.style.display = "none";
    }
}
