
// Zadanie 1

var btn = document.querySelector('#test-event');
btn.addEventListener("click", function (event) {
 
  console.log(event.type);
});

btn.addEventListener("mouseover", function (event) {
  
  console.log(event.type);
});

addEventListener("mousemove", function (event){
  
  console.log(event.type);
});

addEventListener("keypress", function (event){

  console.log(event.type);
});

addEventListener("scroll", function (event){

  console.log(event.type);
});

document.querySelector('#input-test').addEventListener("change", function (event){

  console.log(event.type);
});

// Zadanie 2

const button = document.querySelector('#ex2');
button.addEventListener('click', function(e){
    button.nextElementSibling.textContent = e.target.getAttribute('data-text');
});

// Zadanie 3


function changeColor(){
  document.querySelector('#ex3').addEventListener('mouseover', function(event) {
      event.target.style.backgroundColor = 'blue';
  });
  document.querySelector('#ex3').addEventListener('mouseout', function(event) {
      event.target.style.backgroundColor = 'red';
  });
}
changeColor();

// Zadanie 4

function checkNumber(){
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const text = document.querySelector('#ex3-err');
  document.querySelector('#input-test').addEventListener('keydown', function(event) {
    if(event.key in numbers){
        text.textContent = 'Nie wpisuj cyfr!';
    }
  });
}

checkNumber();

// Zadanie 5

//w html dodać:

/*

  <div id = "ex5">
    <button id= "ex5-button">zadanie 5</button>
    <span></span>
    </div>

*/

const buttonClick = document.querySelector('#ex5-button');
const span = document.querySelector('#ex5 span');

let i = 0;
buttonClick.addEventListener('click', (e) => {
i++;
if (i <= 10) {
span.textContent = i;
}
buttonClick.removeEventListener('click', e);
});

// Zadanie 6

  function redOrWhiteColor() {
    document.addEventListener('scroll', (event) => {
        var whereAmI = window.scrollY;
        var body = document.querySelector('body');

        if (whereAmI > 200) {
            body.style.backgroundColor = 'red';
        } else {
            body.style.backgroundColor = 'white';
        }
    }); 
}
redOrWhiteColor()

// Zadanie 7 
// trzeba wcisnąć najpierw na dwie cyfry, a następnie wybrać działanie, które się wykona

var input = document.querySelector("div#calculator > input");
var buttons = document.querySelectorAll("div#calculator button");
var number = 0;
var number2 = 0;

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        if(this.innerText === '+'){
            input.value = number + number2;
            number = 0;
            number2 = 0;
        } else if(this.innerText === '-'){
            input.value = number - number2;
            number = 0;
            number2 = 0;
        } else if(this.innerText === '*'){
            input.value = number * number2;
            number = 0;
            number2 = 0;
        } else if(this.innerText === '/'){
          if(number2 != 0) input.value = number / number2;
            number = 0;
            number2 = 0;
        } else {
            if(number === 0){
                input.value = '';
                number = Number(this.innerText);
            } else {
                number2 = Number(this.innerText);
            }
        }
    });
}


