//maximisar imagen galeria
/*function toggleSize(image) {
    // Buscar todas las imágenes y eliminar la clase 'expanded'
    const images = document.querySelectorAll('.gallery img');
    images.forEach(img => img.classList.remove('expanded'));

    // Añadir la clase 'expanded' solo a la imagen que se ha clickeado
    image.classList.add('expanded');
}*/

//zoom
function zoomImage(img) {
    const overlay = document.getElementById('zoom-overlay');
    const zoomedImage = document.getElementById('zoomed-image');
    zoomedImage.src = img.src; // Copia la fuente de la imagen seleccionada
    zoomedImage.style.width= '60%';
    zoomedImage.style.height= 'auto';
    overlay.style.display = 'flex'; // Muestra el overlay con la imagen en zoom
}

function closeZoom() {
    const overlay = document.getElementById('zoom-overlay');
    overlay.style.display = 'none'; // Oculta el overlay
}
//formulario reserva

    document.getElementById("reserva-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const telefono = document.getElementById("telefono").value;
        const mensaje = document.getElementById("mensaje").value;

        const whatsappURL = `https://wa.me/[+34684792506]?text=${encodeURIComponent(
            `Nombre: ${nombre}\nTeléfono: ${telefono}\nMensaje: ${mensaje}`
        )}`;
        
        window.open(whatsappURL, "_blank");
    });


