
// zadanie 1

const div = document.createElement("div");
div.textContent = "To jest nowy element";
document.querySelector('#root').appendChild(div);

// zadanie 2

const fruitsList = document.createElement('ul');

const fruits = ["Cytryna", "Jabłko", "Pomarańcza", "Truskawka", "Jagoda", "Jeżyna", "Malina", "Czereśnia", "Wiśnia"];

fruits.forEach((fruit) => {
  const li = document.createElement('li');
  li.textContent = fruit;
  fruitsList.appendChild(li);
});

document.getElementById('root').appendChild(fruitsList);

// zadanie 3

fruitsList.addEventListener('click', () => {
  const items = fruitsList.children;
  for (let i = items.length-1; i >= 0; i--) {
    if (i % 2 !== 0) {
      fruitsList.removeChild(items[i]);
    }
  }
});

// zadanie 4

const button = document.createElement('button');
button.textContent  = 'Hide';
button.addEventListener('click', function (index) {
this.remove();
});
document.body.appendChild(button);

// zadanie 5

let randomNum = Math.floor((Math.random() * 10)+1);
for (let a = 1; a <= randomNum; a++) {
let randomDiv = document.createElement('Div');
root.appendChild(randomDiv);
randomDiv.innerHTML = 'to jest div ' + a;
}

// zadanie 6 

var elements = {
  div1: "to jest div",
  span1: "to jest span",
  div2: {div3: "to jest div"},
  span2: "to jest span"
};

function createElement(tag, content){
  const htmlTag = tag.replace(/[0-9]/g, "");
  const element = document.createElement(htmlTag);
  element.textContent = content;
  document.getElementById("root").appendChild(element);
}

for(const key in elements){
  if(typeof elements[key] === 'string'){
    createElement(key, elements[key]);
  }else{
    for(const prop in elements[key]){
      createElement(prop, elements[key][prop]);
    }
  }
}


// zadanie 7

const list1 = document.createElement('ul');
const list2 = document.createElement('ul');

const lists = [list1, list2];

const list1Values = ["Cytryna", "Jabłko", "Pomarańcza", "Truskawka", "Jagoda", "Jeżyna", "Malina", "Czereśnia", "Wiśnia"];
const list2Values = [];

list1Values.forEach((element) => {
  const li = document.createElement('li');
  li.textContent = element;
  list1.appendChild(li);
});

const button1 = document.createElement('button');
const button2 = document.createElement('button');

const buttons = [button1, button2];


list2Values.forEach((element) => {
  const li = document.createElement('li');
  li.textContent = element;
  list2.appendChild(li);
});

function checkButtonDisabled(){
  lists.forEach((ul, i) => {
    if(ul.childElementCount <= 1){
      buttons[i].disabled = true;
    }else{
      buttons[i].disabled = false;
    }
  })
}

lists.forEach((ul, i) => {
  buttons[i].innerText = "move";
  buttons[i].addEventListener('click', () =>{
    const listItems = ul.querySelectorAll('li');
    const childToTransfer = listItems[listItems.length - 1];
    if (i === 0){
      list2.insertBefore(childToTransfer, buttons[1]);
    }else{
      list1.insertBefore(childToTransfer, buttons[0]);
    }
    checkButtonDisabled();
  });
  ul.appendChild(buttons[i]);
  document.body.appendChild(ul);
})

checkButtonDisabled();

// zadanie 8

const form = document.createElement('form');
const input1 = document.createElement('input');
const input2 = document.createElement('input');
const input3 = document.createElement('input');
const input4 = document.createElement('input');
const submit = document.createElement('button');

input1.placeholder = 'tag';
form.appendChild(input1);

input2.placeholder = 'text';
form.appendChild(input2);

input3.placeholder = 'color';
form.appendChild(input3);

input4.placeholder = 'quantity';
input4.type = 'number';
form.appendChild(input4);

submit.textContent = 'Create';
form.appendChild(submit);

document.getElementById('root').appendChild(form);

form.addEventListener('submit', createForm);

function createForm(e) {
e.preventDefault();
for (let i = 0; i < input4.value; i++) {
const formElement = document.createElement(input1.value);
formElement.textContent = input2.value;
formElement.style.color = input3.value;
formElement.style.display = 'block';
form.after(formElement);
}
}

// zadanie 9

  var formulage = document.createElement("form");
  root.appendChild(formulage);
  var yourName = document.createElement("input");
  yourName.setAttribute('type', 'text');
  yourName.placeholder = 'Name';
  var lastname = document.createElement("input");
  lastname.setAttribute('type', 'text');
  lastname.placeholder = 'Surname';
  var age = document.createElement("input");
  age.setAttribute('type', 'text');
  age.placeholder = 'Age';
  var howManyKids = document.createElement("input");
  howManyKids.setAttribute('type', 'text');
  howManyKids.placeholder = 'number of children';

  formulage.appendChild(yourName);
  formulage.appendChild(lastname);
  formulage.appendChild(age);
  formulage.appendChild(howManyKids);

  var moreButton = document.createElement('button');
  moreButton.id = "more"
  moreButton.type = 'button'
  moreButton.innerText = "Więcej";
  formulage.appendChild(moreButton);

  var createButton = document.createElement('button');
  createButton.id = "create"
  createButton.type = 'button'
  createButton.innerText = "Utwórz";
  formulage.appendChild(createButton);

  var nameTab = [];
  var lastnameTab = [];
  var ageTab = [];
  var kidsTab = [];

  function moreFields(){
    nameTab.push(yourName.value);
    lastnameTab.push(lastname.value);
    ageTab.push(age.value);
    kidsTab.push(howManyKids.value);
    yourName.value = '';
    lastname.value = '';
    age.value = '';
    howManyKids.value = '';

  }
  document.querySelector('#more').addEventListener('click', moreFields);

  function createTable(){
    nameTab.push(yourName.value);
    lastnameTab.push(lastname.value);
    ageTab.push(age.value);
    kidsTab.push(howManyKids.value);
    yourName.value = '';
    lastname.value = '';
    age.value = '';
    howManyKids.value = '';


    var tab = document.createElement("table");
    
    var header = document.createElement('tr');
    tab.appendChild(header);
    var name = document.createElement('th');
    name.innerHTML = "Name";
    var lastName = document.createElement('th');
    lastName.innerHTML = "Lastname";
    var age1 = document.createElement('th');
    age1.innerHTML = "Age";
    var kids = document.createElement('th');
    kids.innerHTML = "HowManyKids";
    
    root.appendChild(tab);
    header.appendChild(name);
    header.appendChild(lastName);
    header.appendChild(age1);
    header.appendChild(kids);
    
    for (var i = 0; i < nameTab.length; i++) {
      var item = document.createElement('tr');
      tab.appendChild(item);
      var del = document.createElement('button');
      del.innerText = "Usuń";
      item.appendChild(del);

      var newName = document.createElement('td');
      newName.innerText = nameTab[i];
      var newLastname = document.createElement('td');
      newLastname.innerText = lastnameTab[i];
      var newAge = document.createElement('td');
      newAge.innerText = ageTab[i];
      var newKids = document.createElement('td');
      newKids.innerText= kidsTab[i];   

      
      item.appendChild(newName);
      item.appendChild(newLastname);
      item.appendChild(newAge);
      item.appendChild(newKids);
      item.appendChild(del);

      del.addEventListener('click', deleteA);
    
    }
    nameTab = [];
    lastnameTab = [];
    ageTab = [];
    kidsTab = [];
  }

  function deleteA(e) {
    
    e.target  .parentElement.remove()
  }

  document.querySelector('#create').addEventListener('click', createTable);

// zadanie 10

  function changeLetters() {
    document.querySelectorAll('tr').forEach((row) => {
      row.querySelectorAll('td').forEach((cell) => {
        cell.innerText = cell.innerText[0].toUpperCase() + cell.innerText.slice(1); 
      })
    })
  }  

// zadanie 11


function getNumbersFromStringAndMultiply(string){
  const check = /\d/g;
  if(check.test(string)){
    const number = string.match(check);
    const convertedNumber = number.map(elem=>Number(elem));
    const mult = convertedNumber.reduce((a,b)=>a*b);
    const sum = convertedNumber.reduce((a,b)=>a+b);
    for(var i=0;i<mult;i++){
      const div = document.createElement('div');
      root.appendChild(div);
      div.textContent = 'Suma liczb w stringu wynosi: '+sum;
    }
      console.log('Suma liczb w stringu wynosi: '+sum);
  }
}
getNumbersFromStringAndMultiply('abc122def3');

// zadanie 12

function createObj(str) {
  return {
    name: str
  }
}

var testString = 'Olka ma kotaka';

const newObject = createObj(testString);
newObject.checkStr = function () {
  if (this.name.includes('Ala')) {
    this.name = this.name.replaceAll('Ala', 'Ola');
    console.log(this.name);
  } else {
    const div = document.createElement('div');
    div.innerText = 'Słowo Ala nie występuje w tekście.';
    document.body.appendChild(div);
  }
}

newObject.checkStr();

// zadanie 13

function getStringsLengths(string){
  return string.map((string) => string.length);
}

function sum(string){
  return string.reduce((a, b) => a += b, 0);
}

function getAvg(string){
  return sum(string) / string.length;
}

const task15_13 = getStringsLengths(['This', 'is', 'example']);
console.log(task15_13, sum(task15_13), getAvg(task15_13));



// zadanie 14

var obj = {
  name: '',
  surname: '',
  age: '',
};

function modify(name, surname, age) {
  obj.name = 'Liam';
  obj.surname = `O'Brien`;
  obj.age = 44;
  obj.nameLength = obj.name.length;
  obj.surnameLength = obj.surname.length;
  obj.totalNamesLengths = obj.name.length + obj.surname.length;

  if (obj.name.length >= 5 || obj.surname.length >= 5) {
    const button = document.createElement('button');
    button.textContent = 'Przywróć stan początkowy.';
    button.addEventListener('click', function(){
    obj.name = '';
    obj.surname = '';
    obj.age = '';
    delete obj.nameLength;
    delete obj.surnameLength;
    delete obj.totalNamesLengths;
    console.log(obj);         // objekt po czyszczeniu
  });
  document.getElementById('root').appendChild(button);
}
}

modify();
console.log(obj);



