
// zadanie 1

const listElements = document.querySelectorAll('.list');

// zadanie 2

function getElements(element) {
const elements = document.querySelectorAll(element);
return elements;
}

const divs = getElements('div');
console.log(divs);

// zadanie 3

const elem = document.getElementById('list');
console.log(elem);

// zadanie 4

function elements(element) {
    console.log(element);
}

elements(document.querySelectorAll("li"));
elements(document.querySelectorAll("ul"));
elements(document.querySelectorAll("span"));
elements(document.querySelectorAll("div.list span"));
elements(document.querySelectorAll("div#spans span"));
