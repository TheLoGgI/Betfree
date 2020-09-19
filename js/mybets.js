let bet1 = document.getElementById('coupon1');
console.log(sportData);


async function appendBets(userUID) {
    let html = ''
    const data = await getDoc(currentUser)
    data.forEach(item => {
        html += `
            <div class="coupon" id="coupon1">
                <div class="coupon-title">
                    <p>Coupon</p>
                    <p>Man Utd vs Chelsea</p>
                </div>
                <div class="coupon-content">
                    <p>Match winner - Man Utd</p>
                </div>
                <div class="coupon-details">
                    <p class="coupon-orange">200 coins</p>
                    <p class="coupon-white">1.40</p>
                    <p class="coupon-orange">280 coins</p>
                </div>
                <div class="coupon-bottom">
                    <p>Today 17:30</p>
                    <p class="cancel-button" onclick="cancel1()">Cancel</p>
                </div>
            </div>
        `
    });
    bet1.innerHTML = html
}
// function cancel1() {
//     document.getElementById('coupon1').style.cssText = "display: none";
//     alert("coupon deleted!")
// }

// let bet2 = document.getElementById(coupon2);

// function cancel2() {
//     document.getElementById('coupon2').style.cssText = "display: none";
//     alert("coupon deleted!")
// }

// let bet3 = document.getElementById(coupon3);

// function cancel3() {
//     document.getElementById('coupon3').style.cssText = "display: none";
//     alert("coupon deleted!")
// }

// let bet4 = document.getElementById(coupon4);

// function cancel4() {
//     document.getElementById('coupon4').style.cssText = "display: none";
//     alert("coupon deleted!")
// }