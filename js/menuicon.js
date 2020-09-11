    // "classToggle('menuIcon','icon-active') 
    // classToggle('aside','open')
window.addEventListener('DOMContentLoaded', () => {

    clickHandler('menuIcon', 'icon-active')
})

function clickHandler(elementID, className = 'active') {
    document.getElementById(elementID).addEventListener('click', _ => {
        classToggle(elementID, className)
    }, false)
}

function classToggle(elementID, className) {
    document.getElementById(elementID)
        .classList.toggle(className)
}