
// zadanie 1


const divElements = document.querySelectorAll('.more-divs');
function xyz(divElements) {
    const tags = Array.from(divElements);
    return tags.map((properties) => properties.tagName);
}
console.log(xyz(divElements));


// zadanie 2


const listElements = document.querySelector('.short-list');

const secondTask = showProperties => {
    console.log(showProperties.innerHTML);
    console.log(showProperties.outerHTML);
   
 console.log(showProperties.className);
    console.log([showProperties.className]);
    console.log(showProperties.dataset);
}

secondTask(listElements);


// zadanie 3


const numbersDataset = document.getElementById('datasetCheck');
const thirdTask = takeNumbers => {
    const firstNumber = parseInt(takeNumbers.dataset.numberone)
    const secondNumber = parseInt(takeNumbers.dataset.numbertwo)
    const thirdNumber = parseInt(takeNumbers.dataset.numberThree)
    let adding = firstNumber + secondNumber + thirdNumber
    let substraction = firstNumber - secondNumber - thirdNumber;
    return [adding, substraction];
}
console.log(thirdTask(numbersDataset));



// zadanie 4


document.getElementById("spanText").innerText =  "dowolny tekst";


// zadanie 5


document.getElementById("spanText").className =  "newClassName";


// zadanie 6


const elementClasslist = document.getElementById('classes').classList;

function taskSix(classesValue) {
    classesValue.forEach((consoleName) => {
        console.log(consoleName);
    });
    console.log(Array.from(classesValue.values()).join('+'));
  
 
 document.getElementById('classes').className = '';
  console.log("usunięto wszystkie klasy");
}

taskSix(elementClasslist);


// zadanie 7


let longListElements = document.getElementById('longList');
let liElements = longListElements.querySelectorAll('li');
liElements.forEach((liDataset) => {
    if (liDataset.dataset.text == null) {
        liDataset.dataset.text = "text";    
    }
});

/*
var i = 1;
liElements.forEach((liDataset) => {
  console.log(liDataset.dataset.text + " " + i++);
})
*/


// zadanie 8


let newObject = (className) => {
    return {
        newClass: className
    }
}

const addClass = (secondString) => {
    const newClass = secondString.newClass;
    const div = document.getElementById('myDiv');
    div.classList.add(newClass);
}

const randomObject = newObject("jakiś_string");
addClass(randomObject);

console.log(document.getElementById("myDiv").className);


// zadanie 9


const numbers = document.getElementById('numbers');
const taskNine = (randomNumber) => {
	if (randomNumber % 2 === 0) {
		numbers.className = 'even';
	} else {
		numbers.className = 'odd';
	}
};
taskNine(Math.round(Math.random()*10));
//console.log(numbers.className);


// zadanie 10

 
let longList = document.getElementById('longList');

function taskTen(longList) {
        let ArrWithLongListValue = [];
        const liElement = longList.querySelectorAll('li');
        liElement.forEach((secondParam) => {
        ArrWithLongListValue.push(secondParam.innerText.trim());
    });
        return ArrWithLongListValue;
}
console.log(taskTen(longList));


// zadanie 11


const longList = document.getElementById('longList');
const liElements = longList.querySelectorAll('li');

function changeValue (list) {
    list.forEach(childElement => {
        childElement.dataset.previousNumber = childElement.innerText;
        childElement.innerText = Math.round(Math.random() * 10);
    });
}

changeValue(liElements);