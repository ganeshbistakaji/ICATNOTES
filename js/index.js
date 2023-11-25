
var audio = new Audio('../audio/sus.mp3'); 
audio.loop = true;

var waveElement = document.getElementById('wave');

waveElement.addEventListener('mouseover', function() {
    if (audio.paused) {
        audio.play();
    }

    document.getElementById('body').style.display = 'none';
    document.getElementById('sus').style.display = 'block';
});

document.addEventListener('click', function() {
    audio.pause();
});