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

let couponsArray = document.getElementsByClassName("match-winner");
console.log(couponsArray);
function popular() {
    couponsArray[0].style.cssText = "display: block;"
    couponsArray[1].style.cssText = "display: block;"
    couponsArray[2].style.cssText = "display: block;"
    couponsArray[3].style.cssText = "display: block;"
    couponsArray[4].style.cssText = "display: none;"
    couponsArray[5].style.cssText = "display: none;"
    couponsArray[6].style.cssText = "display: none;"
    couponsArray[7].style.cssText = "display: none;"
    couponsArray[8].style.cssText = "display: none;"
    couponsArray[9].style.cssText = "display: none;"
    couponsArray[10].style.cssText = "display: none;"
    couponsArray[11].style.cssText = "display: none;"
    couponsArray[12].style.cssText = "display: none;"
}

function goals() {
    couponsArray[0].style.cssText = "display: none;"
    couponsArray[1].style.cssText = "display: block;"
    couponsArray[2].style.cssText = "display: none;"
    couponsArray[3].style.cssText = "display: none;"
    couponsArray[4].style.cssText = "display: block;"
    couponsArray[5].style.cssText = "display: block;"
    couponsArray[6].style.cssText = "display: none;"
    couponsArray[7].style.cssText = "display: none;"
    couponsArray[8].style.cssText = "display: none;"
    couponsArray[9].style.cssText = "display: none;"
    couponsArray[10].style.cssText = "display: none;"
    couponsArray[11].style.cssText = "display: none;"
    couponsArray[12].style.cssText = "display: none;"
}

function corner() {
    couponsArray[0].style.cssText = "display: none;"
    couponsArray[1].style.cssText = "display: none;"
    couponsArray[2].style.cssText = "display: none;"
    couponsArray[3].style.cssText = "display: none;"
    couponsArray[4].style.cssText = "display: none;"
    couponsArray[5].style.cssText = "display: none;"
    couponsArray[6].style.cssText = "display: block;"
    couponsArray[7].style.cssText = "display: block;"
    couponsArray[8].style.cssText = "display: none;"
    couponsArray[9].style.cssText = "display: none;"
    couponsArray[10].style.cssText = "display: none;"
    couponsArray[11].style.cssText = "display: none;"
    couponsArray[12].style.cssText = "display: none;"
}
function players() {
    couponsArray[0].style.cssText = "display: none;"
    couponsArray[1].style.cssText = "display: none;"
    couponsArray[2].style.cssText = "display: none;"
    couponsArray[3].style.cssText = "display: none;"
    couponsArray[4].style.cssText = "display: none;"
    couponsArray[5].style.cssText = "display: none;"
    couponsArray[6].style.cssText = "display: none;"
    couponsArray[7].style.cssText = "display: none;"
    couponsArray[8].style.cssText = "display: block;"
    couponsArray[9].style.cssText = "display: block;"
    couponsArray[10].style.cssText = "display: none;"
    couponsArray[11].style.cssText = "display: none;"
    couponsArray[12].style.cssText = "display: none;"
}
function penalties() {
    couponsArray[0].style.cssText = "display: none;"
    couponsArray[1].style.cssText = "display: none;"
    couponsArray[2].style.cssText = "display: none;"
    couponsArray[3].style.cssText = "display: none;"
    couponsArray[4].style.cssText = "display: none;"
    couponsArray[5].style.cssText = "display: none;"
    couponsArray[6].style.cssText = "display: none;"
    couponsArray[7].style.cssText = "display: none;"
    couponsArray[8].style.cssText = "display: none;"
    couponsArray[9].style.cssText = "display: none;"
    couponsArray[10].style.cssText = "display: block;"
    couponsArray[11].style.cssText = "display: block;"
    couponsArray[12].style.cssText = "display: block;"
}