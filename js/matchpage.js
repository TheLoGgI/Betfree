document.getElementById("chosen").addEventListener("click", change);

function change(e) {
    removeAllClasses()
    e.target.classList.add("chosenMatchOn");

}

function removeAllClasses() {
    console.log(document.getElementsByClassName("match-choice"));
}