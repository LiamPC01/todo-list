import { playGainingXPSound, playLevelUpSound } from "./audio";
import { blurPage, renderLevel, updateLevel } from "./dom";
import { saveXP, saveLevel, loadXP, loadLevel } from "./localStorage";

export let currentXP = loadXP();
export let level = loadLevel();

const xpBar = document.querySelector("#xp");

export function gainXP(amount) {
playGainingXPSound();

    if (currentXP + amount == 100 || currentXP + amount > 100) { // if level up
        //Level up
        currentXP = (currentXP + amount) - 100; // the extra xp
        xpBar.style.width = "100%";
        saveXP(currentXP);

        //after the bar animation has reached 100%
        if (xpBar.style.width == "100%") {
            document.getElementById("levelup-dialog").open = true;
            blurPage();
            playLevelUpSound();

            // resetXP(currentXP);

        }


    }
    else {

        xpBar.style.width = currentXP + amount + "%";
        currentXP += amount;
        saveXP(currentXP);
    }


    // console.log(currentXP + amount + "%")
}



export function getLevel() {
    return level;
}

export function resetXP() {

    level = level + 1;
    saveLevel(level);
    renderLevel(level, currentXP);

    xpBar.style.width = "0%";

    setTimeout(() => {
        xpBar.style.width = currentXP + "%";
    }, 1000);

    // console.log(overflowXP);

}
