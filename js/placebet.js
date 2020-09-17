

document.getElementById("amount").addEventListener("keyup", inputhandler);


function inputhandler(e) {
    const amount = document.getElementById("amount").value
    const factor = document.getElementById("factor").textContent.split('x')[1]
    let result = calculate(amount, factor)
    document.getElementById("reward").innerHTML = 'Reward ' + result + ' coins';
}

function calculate(amount, factor) {
    return Math.floor(Number(amount) * Number(factor))
}

document.getElementById("acceptBet").addEventListener("click", betHandler);

document.getElementById("declineBet").addEventListener("click", betHandler);

function betHandler(e) {
    const target = e.target.id
    if (target === 'declineBet') {
        classToggle('betModal', 'show-bet')
    } else {
        
    }
}