var waveElement = document.getElementById('wave');

waveElement.addEventListener('click', function() {
    play();

    document.getElementById('body').style.display = 'none';
    document.getElementById('sus').style.display = 'block';
});

function play() {
    var audio = document.getElementById("audio");
    audio.loop = true;
    audio.play();
}
