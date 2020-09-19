// **** Lasse ****
let _GameID
document.getElementById("amount").addEventListener("keyup", inputhandler);


function inputhandler(e) {
    const amount = document.getElementById("amount").value
    const factor = document.getElementById("factor").textContent.split('x')[1]
    let result = calculate(amount, factor)
    document.getElementById("reward").innerHTML = 'Reward ' + result + ' coins';
}
/* Wiktor */
function calculate(amount, factor) {
    return Math.floor(Number(amount) * Number(factor))
}
// **** Lasse ****
document.getElementById("acceptBet").addEventListener("click", betHandler);
document.getElementById("declineBet").addEventListener("click", betHandler);

function betHandler(e) {
    const target = e.target.id
    if (target === 'declineBet') {
        classToggle('betModal', 'show-bet')
    } else {
        // accept bet and add to BettingArray in Firebase
        const user = firebase.auth().currentUser;
        if(user) {
            // console.log(user.uid);
            const reward = document.getElementById('reward').textContent.split(' ')[1]
            const payed = document.getElementById("amount").value
            console.log(_GameID);
            addBets(user.uid, {
                reward,
                payed,
                gameId: _GameID || 0
            })
            updateAccountBalance(user.uid, -payed)
            classToggle('betModal', 'show-bet')
        } else {
            showPage('login')
        }
    }
}

// handle betting - invoked in main.js
function bettingHandler(nodeList) {
    nodeList.forEach(item => {
        item.addEventListener('click', betting)
    })
}

function betting(e) {
    const element = classToggle('betModal', 'show-bet')
    const gameId = e.path[3].dataset.match
    console.log(gameId);
    _GameID = e.path[3].dataset.match
    const bettingFactor = document.getElementById('factor')
    // change team winner and game event
    element.children[0].children[1].innerHTML = 'Match Winner - ' + sportData[gameId].teams[0]
    bettingFactor.textContent = 'x' + e.target.textContent
}

// Check for balance is less then payed
    // if less accept bet
    // else if denie, and give feedback
// Betting modal needs background
