function myFunction(eEventKilde) {
    console.log(eEventKilde.target.dataset);
    const popUpBox = document.getElementById("popUpBox");
    const popUpText = document.getElementById("popUpText");
    console.log(popUpText);
    console.log(popUpBox);
    popUpText.textContent = arrayText[eEventKilde.target.dataset.knap - 1 || 0]

    noBlur()

}
let nodeList = document.getElementsByClassName('button-achievements')
console.log(nodeList);
achievementHandler(nodeList)
//document.getElementById('achievementsFlexContainer').addEventListener('click', myFunction)

let arrayText = [
    'Win 10 times',
    'Spend 10.000 coins',
    'Get on the frinds leaderboard',
    'Get on the country leaderboard',
    'Get on the world leaderboard',
    'Lose 10.000 coins',
    'Win over 10.000 coins',
    'Win over 10.000 coins on one bet',
]

function closePopUp() {
    let closePopUpBox = document.getElementById("popUpBox");
    if (closePopUpBox.style.display === "none") {
        closePopUpBox.style.display = "block";
    } else {
        closePopUpBox.style.display = "none";
    }
}
let blur = document.getElementById("blur")
blur.addEventListener('click', noBlur);

function noBlur() {
    if (blur.style.display === "none") {
        blur.style.display = "block";
    } else {
        blur.style.display = "none";
    }
    closePopUp()

}

function achievementHandler(nodeList) {
    for (const item of nodeList) {
        item.addEventListener('click', myFunction)
    }



}




