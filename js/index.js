
var audio = new Audio('../audio/sus.mp3'); 
audio.loop = true;

var waveElement = document.getElementById('wave');

waveElement.addEventListener('click', function() {
    audio.play();

    document.getElementById('body').style.display = 'none';
    document.getElementById('sus').style.display = 'block';
});
