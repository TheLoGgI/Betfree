function myFunction(eEventKilde) {
    console.log(eEventKilde.target.dataset);
    const popUpBox = document.getElementById("popUpBox");
    const popUpText = document.getElementById("popUpText");
    console.log(popUpText);
    console.log(popUpBox);
    popUpText.textContent = arrayText[eEventKilde.target.dataset.knap - 1]
    console.log(eEventKilde);
}

document.getElementById('achievementsFlexContainer').addEventListener('click', myFunction)

let arrayText = [
    'Win 10 times',
    'Spend over 10.000 coins',
    'Get on the frinds leaderboard',
    'Get on the country leaderboard',
    'Get on the world leaderboard',
    'Lose over 10.000 coins',
    'Win over 10.000 coins',
    'Win over 10.000 coins on one bet',
]

/*function myFunction() {
    var closePopUpBox = document.getElementById("popUpBox");
    if (closePopUpBox.style.display === "none") {
        closePopUpBox.style.display = "block";
    } else {
        closePopUpBox.style.display = "none";
    }
}*/

function hide() {
    if (eEventKilde != 'noclick') {
        $("popUpBox").fadeOut(500, function myFunction() {
            $(document).unbind("click");
            $("popUpBox").data('shown', false);
        });
    }
}
