document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.photo-roll');
    const rollo = document.querySelector('.rollo-fotografico');
    const images = rollo.querySelectorAll('img');
    
    // Ajustar el ancho del rollo fotográfico según el número de imágenes
    const totalWidth = images.length * 100; // Porcentaje
    rollo.style.width = `${totalWidth}%`;

    // Puedes añadir aquí ajustes adicionales si es necesario
});
