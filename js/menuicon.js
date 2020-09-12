    // "classToggle('menuIcon','icon-active') 
    // classToggle('asideNav','open')
    window.addEventListener('DOMContentLoaded', () => {
        clickHandler('menuIcon')
})

function clickHandler(elementID, className = 'active') {
    document.getElementById(elementID).addEventListener('click', _ => {
        classToggle(elementID, className)
        // const hasClass = checkClass(document.getElementById(elementID), className)
        classToggle('asideNav','open')

    }, false)
}

function classToggle(elementID, className) {
    document.getElementById(elementID)
        .classList.toggle(className)
}


function checkClass(element, className) {
    return [...element.classList].includes(className)

}


