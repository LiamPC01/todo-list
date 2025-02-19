import { renderLevel, updateLevel } from "./dom";
import { saveXP, saveLevel, loadXP, loadLevel } from "./localStorage";


export let currentXP = loadXP();
export let level = loadLevel();

export function gainXP(amount) {
    let xpBar = document.querySelector("#xp");
    
    if (currentXP + amount == 100 || currentXP + amount > 100) { // if level up
        //Level up
        currentXP = (currentXP + amount) - 100; // the extra xp
        xpBar.style.width = "100%";
        saveXP(currentXP);

        //after the bar animation has reached 100%
        if (xpBar.style.width == "100%") {
            setTimeout(() => {
                xpBar.style.width = "0%";
                level = level + 1;
                saveLevel(level);
                renderLevel(level, currentXP);

            }, 2000); // 1 second delay before resetting
            setTimeout(() => { // another delay so that the xp goes back to 0, then goes to where it should be
                xpBar.style.width = currentXP + "%";
            }, 4000);
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

// export function getXP() {
//     return currentXP;
// }
