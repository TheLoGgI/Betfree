document.getElementById("chosen").addEventListener("click", change);

let buttonsArray = document.getElementsByClassName("match-choice");

function change(e) {
    removeAllClasses()
    e.target.classList.add("chosenMatchOn");
}

function removeAllClasses() {
    for (let i = 0; i < buttonsArray.length; i++) {
        buttonsArray[i].classList.remove("chosenMatchOn");
    }
}

if (buttonsArray[0].classList.contains("chosenMatchOn")) {
    document.getElementsByClassName("match-winner").style.cssText = "display: none;"
}