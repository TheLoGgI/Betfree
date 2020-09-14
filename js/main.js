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
        appendPosts(data.data);
    })

function appendPosts(posts) {
    let htmlTemplate = "";
    for (const post of posts) {
        let date = new Date(post.commence_time);
        let odds1 = post.sites[2].odds.h2h[0];
        let oddsX = post.sites[2].odds.h2h[1];
        let odds2 = post.sites[2].odds.h2h[2];
        let team1 = post.teams[0];
        let team2 = post.teams[1];
        let liga = post.sport_nice;


        htmlTemplate += /*html*/ `
        <div class="game-event">
            <div class="event-label">
                <p>${date.toString()}</p>
                <p>${liga}</p>
            </div>
            <div class="populargames__gamebet">
                <div class="gamebet__gameinfo">
                    <p>${team1}</p>
                    <img src="../icons/sports/football-helmet.svg" alt="American Football Icon">
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



