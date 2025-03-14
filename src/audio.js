const levelUpSound = new Audio('./media/audio/levelup.mp3');
const checkboxSound = new Audio('./media/audio/pop.mp3');
const gainingXP = new Audio('./media/audio/gainingXP.mp3');
levelUpSound.volume = 0.2;
checkboxSound.volume = 0.2;
gainingXP.volume = 0.02;

export function playLevelUpSound() {
    levelUpSound.play();
}

export function playcheckboxSound() {
    checkboxSound.play();
}

export function playGainingXPSound() {
    // gainingXP.loop = true;

    gainingXP.play();
}

export function stopGainingXPSound() {
    // gainingXP.loop = true;
    gainingXP.pause();
    gainingXP.currentTime = 0;
}
