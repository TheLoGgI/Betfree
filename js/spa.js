"use strict";

// hide all pages
function hideAllPages() {
    console.log('hide all pages');
    let pages = document.querySelectorAll(".page");
    for (let page of pages) {
        page.style.display = "none";
    }
}

// show page or tab
function showPage(pageId) {
    hideAllPages();
    console.log(pageId);
    document.querySelector(`#${pageId}`).style.display = "block";
    // setActiveTab(pageId);
}

// sets active tabbar/ menu item
// function setActiveTab(pageId) {
//     let pages = document.querySelectorAll(".tabbar a");
//     for (let page of pages) {
//         if (`#${pageId}` === page.getAttribute("href")) {
//             page.classList.add("active");
//         } else {
//             page.classList.remove("active");
//         }
//     }
// }

// navigate to a new view/page by changing href
function navigateTo(pageId) {
    location.href = `#${pageId}`;
}

// set default page or given page by the hash url
// function is called 'onhashchange'
function pageChange() {
    let page = "index";
    if (location.hash) {
        page = location.hash.slice(1);
    }
    showPage(page);
}

setTimeout(_ => {
    pageChange(); // called by default when the app is loaded for the first time
},500)


function showLoader(show) {
    let loader = document.querySelector('#loader');
    if (show) {
        loader.classList.remove("hide");
    } else {
        loader.classList.add("hide");
    }
}