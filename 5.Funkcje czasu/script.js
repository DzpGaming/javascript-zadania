// zadanie 1

var i = 0;
const time = setInterval(function(){console.log("Cześć po raz " + ++i); 
                      if(i == 15) clearInterval(time)}, 3000);

// zadanie 2

var i = 0;
var tab = [1, 2, 3, 4, 5];

setTimeout(function(){
  console.log(tab)                     
  const time = setInterval(function({
                           console.log(tab[i++]); 
                           if(i == tab.length) clearInterval(time)}, 3000);
                          }, 2000);
