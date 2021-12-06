"use strict";

//Number 4 + 5 class and instances
class Merit {
    constructor(_title, _description) {
        this.title = _title;
        this.description = _description;
    }
    getFullText() {
        return this.title + this.description;
    }
}

let putTogether, fullText = "";

let text = new Merit("Web Development", "Student");

for (putTogether in text) {
    fullText += text[putTogether] + " ";
}

document.getElementById("js-classinstance").innerHTML = fullText;