// Lasse

    window.addEventListener('DOMContentLoaded', () => {
        clickHandler('menuIcon')
})

function clickHandler(elementID, className = 'active') {
    document.getElementById(elementID).addEventListener('click', _ => {
        classToggle(elementID, className)
        classToggle('asideNav','open')

    }, false)
}

function classToggle(elementID, className) {
    document.getElementById(elementID)
        .classList.toggle(className)
        return document.getElementById(elementID)
}

// Not in use
function checkClass(element, className) {
    return [...element.classList].includes(className)
}


