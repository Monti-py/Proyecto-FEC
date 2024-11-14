document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = event.target.nombre.value;
    const email = event.target.email.value;
    const interes = event.target.interes.value;
    const desarrollo = event.target.desarrollo.value;
    const contacto = event.target.contacto.value;
    const rangoEtario = event.target.rangoEtario.value;
    const telefono = event.target.telefono.value;

    const subject = "Solicitud de cita";
    const body = `Nombre: ${nombre}%0DEmail: ${email}%0DInteres en: ${interes}%0DDesarrollo: ${desarrollo}%0DContacto: ${contacto}%0DPrecio: ${rangoEtario}%0DTeléfono: ${telefono}`;
    window.location.href = `mailto:tu-email@example.com?subject=${subject}&body=${body}`;

    alert("¡Gracias! Su solicitud ha sido enviada.");

    event.target.reset();
});
