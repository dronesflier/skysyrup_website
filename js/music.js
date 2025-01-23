document.addEventListener("DOMContentLoaded", () => {
    let audio;
    let isPlaying = false;

    const playButton = document.getElementById("play-music");

    playButton.addEventListener("click", () => {
        if (!audio) {
            audio = new Audio("assets/lofiwebsite1.mp3");
            audio.loop = true;

            audio.addEventListener("error", (e) => {
                console.error("Audio error:", e); // tldr ur fucked
            });
        }

        if (isPlaying) {
            audio.pause();
            playButton.textContent = "play";
            isPlaying = false;
        } else {
            audio.play().catch((error) => console.error("Failed to play audio:", error));
            playButton.textContent = "pause";
            isPlaying = true;
        }
    });

    window.addEventListener("beforeunload", () => { // im supposed to do this appearently
        if (audio) {
            audio.pause();
        }
    });
});
