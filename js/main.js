// Made by Martin
const key = '6ab4bc81a3bc55bb217cf416846f852f'
const region = 'eu'
const sport = 'soccer_denmark_superliga'
const URL = `https://api.the-odds-api.com/v3/odds/?apiKey=${key}&sport=${sport}&region=${region}`
let sportData


fetch(URL)
    .then(function (data) {
        return data.json()
    })
    .then(function (data) {
        if (data.success) {
            sportData = collectData(data)
            appendPosts(data.data);

            const btns = document.querySelectorAll('.gamebet__btn button');
            bettingHandler(btns)
        } else {
            throw new Error('Data was not fetched - ' + data.msg)
        }
    }).catch(error => console.warn(error))

console.log(sportData);

function appendPosts(posts) {
    let htmlTemplate = "";
    for (let index = 0; index < posts.length; index++) {
        const post = posts[index];

        const odds1 = post.sites[2].odds.h2h[0];
        const oddsX = post.sites[2].odds.h2h[1];
        const odds2 = post.sites[2].odds.h2h[2];
        const team1 = post.teams[0];
        const team2 = post.teams[1];
        const liga = post.sport_nice;

        htmlTemplate += /*html*/ `
        
        <div class="game-event" data-match="${index}">
        <a href="#matchpage">
            <div class="event-label">
                <p>${getRandomDate()}</p>
                <p>${liga}</p>
            </div>
             </a>
            <div class="populargames__gamebet">
                <div class="gamebet__gameinfo">
                    <p>${team1}</p>
                    <img src="../icons/sports/football.svg" alt="Football Icon">
                    <p>${team2}</p>
                </div>
                <div class="gamebet__btn">
                    <button>${odds1}</button>
                    <button>${oddsX}</button>
                    <button>${odds2}</button>
                </div>
            </div>
           
        </div>
        
    `;
    }

    document.querySelector("#indhold").innerHTML = htmlTemplate;
}

function getRandomDate() {
    const newDate = new Date()
    newDate.setDate(getRandomInt(32))
    newDate.setMonth(getRandomInt(12))
    const date = newDate.toDateString().split(' ')
    return `${date[0]}, ${date[2]}th of ${date[1]}`
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


function updateBalance(newBalance) {
    const balance = document.getElementById('balancecoins')
    balance.textContent = `${newBalance} coins`
}

// Lasse
function collectData({ data }) {
    let i = 0
    if (data) {
        return data.reduce((acc, obj) => {
            return [...acc, {
                id: i++,
                teams: [...obj.teams],
                odds: [...obj.sites[0].odds.h2h],
                league: obj.sport_nice,
                date: getRandomDate()
            }]
        }, [])
    } else {
        return { error: 'no data was collected' }
    }
}

function goBack() {
    window.history.back();
}





