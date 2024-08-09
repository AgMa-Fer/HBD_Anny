document.addEventListener('DOMContentLoaded', function() {
    var audioElement = document.getElementById('Recuerdame');
    var playPauseButton = document.getElementById('playPause');
    var stopButton = document.getElementById('stop');
    var volumeControl = document.getElementById('volume');

    // Inicializar el volumen
    audioElement.volume = 0.5;
    volumeControl.value = 0.5;

    // Función para reproducir o pausar
    playPauseButton.addEventListener('click', function() {
        if (audioElement.paused) {
            audioElement.play();
            playPauseButton.textContent = 'Pause';
        } else {
            audioElement.pause();
            playPauseButton.textContent = 'Play';
        }
    });

    // Función para detener la reproducción
    stopButton.addEventListener('click', function() {
        audioElement.pause();
        audioElement.currentTime = 0;
        playPauseButton.textContent = 'Play';
    });

    // Función para ajustar el volumen
    volumeControl.addEventListener('input', function() {
        audioElement.volume = volumeControl.value;
    });
});
