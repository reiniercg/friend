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
    setTimeout(() => {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('popupOverlay').style.display = 'block';
}, 3000); // 3 segundos

// Cierra el popup al hacer clic en el botón
document.getElementById('closePopup').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('popupOverlay').style.display = 'none';
});

// Permite cerrar el popup haciendo clic en el fondo oscuro
document.getElementById('popupOverlay').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('popupOverlay').style.display = 'none';
});
};