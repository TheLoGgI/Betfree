//let url = 'https://api.the-odds-api.com/v3/sports/?apiKey=';
let key = 'fcb7c4adb099134a1854cf9b25f0331d'
let region = 'eu'
let sport = 'soccer_denmark_superliga'
let URL = `https://api.the-odds-api.com/v3/odds/?apiKey=${key}&sport=${sport}&region=${region}`
let sportData

fetch(URL)
    .then(function (data) {
        console.log(data);
        return data.json()
    })
    .then(function (data) {
        console.log(data);
        sportData = data
        appendPosts(data.data);

        const btns = document.querySelectorAll('.gamebet__btn button');
        console.log(btns);
    })



function appendPosts(posts) {
    let htmlTemplate = "";
    for (const post of posts) {
        let odds1 = post.sites[2].odds.h2h[0];
        let oddsX = post.sites[2].odds.h2h[1];
        let odds2 = post.sites[2].odds.h2h[2];
        let team1 = post.teams[0];
        let team2 = post.teams[1];
        let liga = post.sport_nice;


        htmlTemplate += /*html*/ `
        <div class="game-event" id="">
            <div class="event-label">
                <p>${getRandomDate()}</p>
                <p>${liga}</p>
            </div>
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

