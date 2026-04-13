const sounds = {
    radar: "assets/sounds/radar.mp3",
    ping: "assets/sounds/ping.mp3",
    click: "assets/sounds/click.mp3"
};

function loadSound(type) {
    const audio = document.getElementById("soundRadar");
    audio.src = sounds[type];
    audio.volume = localStorage.getItem("volume") || 1;
}
