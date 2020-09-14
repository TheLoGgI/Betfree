// Copyright(c) 2020 Lasse Aakjær

/*
 * HTML IMPORTS
 * 9/12-2020
 * 
 * By Lasse Aakjær, https://lasseaakjaer.com
 * 
 * @source https://github.com/TheLoGgI/HTML-imports
 */

class Import {
    constructor() {
        this.constructor.init()
    }

    static init() {
        this.loadFiles(this.getFile())
    }

    static loadFiles(file) {
        if (file) {
            return this.loadContent(file)
        } else {
            return null
        }
    }

    static getFile() {
        return document.querySelector('[import]')
    }

    static loadContent(self) {
        const path = self.getAttribute('href')
        fetch(path)
            .then(response => response.text())
            .then(data => {
                const doc = new DOMParser().parseFromString(data, "text/html").body.querySelector('main')
                self.insertAdjacentElement('beforebegin', doc)
                this.removeElement(self)

                this.loadFiles(this.getFile())
            });

        return self
    }

    static removeElement(element) {
        if (element.parentNode != null) {
            // console.log(element.parentNode, element);
            return element.parentNode.removeChild(element)
        } else {
            return null
        }
    }
}

// Initiate class constructor
new Import()

// export default Import