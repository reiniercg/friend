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
document.getElementById('enviar-whatsapp').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const personas = document.getElementById('personas').value;

    if (nombre && telefono && fecha && hora && personas) {
        // Formatear el mensaje
        const mensaje = `Hola, mi nombre es ${nombre}. Quisiera reservar una mesa para ${personas} personas el ${fecha} a las ${hora}. Mi teléfono es ${telefono}.`;
        const url = `https://wa.me/34684792506?text=${encodeURIComponent(mensaje)}`;

        // Redirigir a WhatsApp
        window.open(url, '_blank');
    } else {
        alert('Por favor, completa todos los campos.');
    }
});


// Configuración para evitar fechas pasadas y horas específicas
document.addEventListener('DOMContentLoaded', function () {
    // Configurar el campo de fecha para deshabilitar fechas pasadas
    const fechaInput = document.getElementById('fecha');
    const hoy = new Date().toISOString().split('T')[0]; // Obtener la fecha actual en formato AAAA-MM-DD
    fechaInput.setAttribute('min', hoy); // Establecer fecha mínima en el input

    // Generar las opciones de hora
    const horaSelect = document.getElementById('hora');
    const inicio = 18; // Hora de inicio (18:00)
    const fin = 21.5; // Hora de fin (21:30, expresado como 21.5)
    
    for (let hora = inicio; hora <= fin; hora += 0.5) {
        const horas = Math.floor(hora); // Parte entera de la hora
        const minutos = hora % 1 === 0 ? '00' : '30'; // Minutos (00 o 30)
        const opcion = document.createElement('option');
        opcion.value = `${horas}:${minutos}`;
        opcion.textContent = `${horas}:${minutos}`;
        horaSelect.appendChild(opcion);
    }
});


    


