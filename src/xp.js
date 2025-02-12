let currentXP = 0;

export function gainXP(amount) {
    let xpBar = document.querySelector("#xp");
    if (currentXP + amount == 100 || currentXP + amount > 100) {
        currentXP = (currentXP + amount) - 100;
        xpBar.style.width = "100%";

        //after the bar animation has reached 100%
        if (xpBar.style.width == "100%") {
            setTimeout(() => {
                xpBar.style.width = currentXP + "%";
            }, 1000); // 1-second delay before resetting
        }


    }
    else {

        xpBar.style.width = currentXP + amount + "%";
        currentXP += amount;
    }

    console.log(currentXP + amount + "%")
}