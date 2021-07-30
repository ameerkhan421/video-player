 const video = document.querySelector('video');
// const progressRange = document.querySelector('.progress-range');
// const progressBar = document.querySelector('.progress-bar');
// const playBtn = document.getElementById('play-btn');
// const volumeIcon = document.getElementById('volume-icon');
// const volumeRange = document.querySelector('.volume-range');
// const volumeBar = document.querySelector('.volume-bar');
// const currentTime = document.querySelector('.time-elapsed');
// const duration = document.querySelector('.time-duration');
// const fullscreenBtn = document.querySelector('.fullscreen');


const playBtns = document.getElementById('play-btns');
const close = document.getElementById('close');

function showPlayIcon() {
    playBtns.classList.replace('fa-pause', 'fa-play');
        playBtns.setAttribute('title','Play');
}

function togglePlay() {
    if (video.paused) {
                video.play();
                video.webkitEnterFullscreen();
                playBtns.classList.replace('fa-play', 'fa-pause');
                playBtns.setAttribute('title','Pause');
            } else {
                video.pause();
                showPlayIcon();
            }
}

close.addEventListener("click", () => {
    document.querySelector('.model-container').style.display="none";
    video.setAttribute('controls', 'true');

})



 
playBtns.addEventListener('click', togglePlay);
