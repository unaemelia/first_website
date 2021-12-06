"use strict";

//Number 1 - buttons
document.getElementById("btn-index").onclick = function () {
    location.href = "index.html";
};

document.getElementById("btn-merits").onclick = function () {
    location.href = "merits.html";
};

document.getElementById("btn-contact").onclick = function () {
    location.href = "contact.html";
};

//Number 2 and 3 - function that takes arrays + two arrays
let target = document.getElementById("js-theoretical");
let theoreticalList = ["HTML", " - ", "CSS", " - ", "JavaScript", " - ", "Bootstrap"];

let target2 = document.getElementById("js-experience");
let experienceList = ["UX/UI Design", " - ", "Agile Project Management", " - ", "Web development"];

function listFunction(list, reference) {
    for (let i = 0; i < list.length; i++) {
        reference.innerhtml += list[i];
    }
}

listFunction(theoreticalList, target);
target.append(...theoreticalList);

listFunction(experienceList, target2);
target2.append(...experienceList);