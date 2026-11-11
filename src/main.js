document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const statusMessage = document.getElementById("form-status");

    statusMessage.textContent = `Gracias por su mensaje, ${nombre}. Me pondré en contacto con usted.`;

    this.reset();

    setTimeout(() => {
        statusMessage.textContent = "";
    }, 5000);
});
