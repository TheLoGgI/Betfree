

document.getElementById("input").addEventListener("keyup", inputhandler);


function inputhandler(e) {
    const result = calculate()
    document.getElementById("reward").innerHTML = result;
}

function calculate(inputCoins) {
    return "Reward" + document.getElementById("input").value * 1.4 + "coins";
}