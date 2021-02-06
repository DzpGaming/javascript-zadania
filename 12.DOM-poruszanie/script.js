
// zadanie 1

console.log(document.querySelector('#baz').parentElement);

console.log(document.querySelector('#baz').previousElementSibling);

console.log(document.querySelector('#foo').children);

console.log(document.querySelector('#foo').parentElement);

console.log(document.querySelector('#foo').firstElementChild);

console.log(document.querySelector('#foo').children[1]);

// zadanie 2

function foo(element) {
    var element1 = document.getElementById(element);
    element1.addEventListener('click', function(){
        var txt = this.children[0].children[0].children[0].children[1].children[0].children[0].innerText;
        console.log(txt);
    })
}

foo("ex2");




// zadanie 3

function klik() {
  const root = document.getElementById('ex3');
  const buttons = root.querySelectorAll('button');
  
  buttons.forEach(key => {
    key.addEventListener('click', e => {
      if(key.nextElementSibling.style.display != 'block'){
        key.nextElementSibling.style.display = 'block';
      }else{
        key.nextElementSibling.style.display = 'none';
      }
    })
  })
}

klik();


// zadanie 4

const buttons = document.querySelectorAll("#ex3 div button");

buttons.forEach((button) => {
button.addEventListener("click", () => {
var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
button.parentElement.style.backgroundColor = randomColor;
});
})

// zadanie 5

var elements = document.querySelectorAll("div#ex5 div");

var listElements = document.querySelectorAll("div#ex5 li");

var ulElement = document.querySelector("div#ex5 ul");

for(var i = 0; i < elements.length; i++){
    elements[i].addEventListener('mouseover', function(){
        var color = this.style.backgroundColor;
        
      // 1.
      // listElements[0].style.backgroundColor = color;    
       
      // 2.
      // listElements[listElements.length - 1].style.backgroundColor = color;      
         
        
      // 3.
      /*for(var j = 0; j < listElements.length; j++) {
            if(j % 2 !== 0) {
                listElements[j].style.backgroundColor = color;
            }
        }*/     
        
        
      // 4.
      /*for(var j = 0; j < listElements.length; j++) {
            listElements[j].style.backgroundColor = color;
        }*/         
        
        
      // 5.
      // ulElement.style.backgroundColor = color;      
    })
}


// zadanie 6


var zad12_6_1 = document.querySelector('#ex6').children[0].children[0].children[0];

var zad12_6_2 = document.querySelector('#ex6').children[0].parentElement.children[0].children[0].nextElementSibling.parentElement;

var zad12_6_3 = document.querySelector('#ex6').parentElement.children[0].parentElement.children[1].children[0].children[0].children[0];

