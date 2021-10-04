const button = document.getElementById("js--shin");
const audio = document.getElementById("js--audio");

button.onclick = (event) => {
    if(audio.paused === true){
        audio.play();
        return;
    }
    audio.pause();
}
