const button = document.getElementById("js--shin");
const audio = document.getElementById("js--audio");

button.onclick = (event) => {
    if(audio.paused === true){
        audio.play();
        document.title = "Say hey, Hey! Shin Chan";
        return;
    }
    document.title = "Shin Chan";
    audio.pause();
}

audio.onended = (event) => {
    document.title = "Shin Chan!";
}