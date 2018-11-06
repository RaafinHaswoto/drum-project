function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function endSound(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!key)
        return;
    key.classList.remove('playing');
}

window.addEventListener('keyup', endSound)
window.addEventListener('keydown', playSound);