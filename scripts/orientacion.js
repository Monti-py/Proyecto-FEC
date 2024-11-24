function filtrarContenido() {
    const busqueda = document.getElementById("busqueda").value.toLowerCase();
    const secciones = document.querySelectorAll(".seccion");

    secciones.forEach((seccion) => {
        const contenido = seccion.getAttribute("data-content").toLowerCase();
        // Si el texto ingresado coincide con el contenido de la sección, la mostramos
        if (contenido.includes(busqueda)) {
            seccion.style.display = "block";
        } else {
            seccion.style.display = "none";
        }
    });
}
