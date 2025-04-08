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


// JavaScript para mostrar el popup automáticamente
window.onload = () => {
// Mostrar el popup después de 3 segundos
setTimeout(() => {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    popup.style.display = 'block'; // Mostrar el popup
    overlay.style.display = 'block'; // Mostrar el fondo oscuro
}, 3000);

// Cerrar el popup al hacer clic en el botón de cerrar
document.getElementById('closePopup').addEventListener('click', () => {
    closePopup();
});

// Cerrar el popup al hacer clic en el overlay (para móviles y escritorio)
document.getElementById('overlay').addEventListener('click', () => {
    closePopup();
});

// Función para cerrar el popup y overlay
function closePopup() {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    popup.style.display = 'none';
    overlay.style.display = 'none';
}
};


