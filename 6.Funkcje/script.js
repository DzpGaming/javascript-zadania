
// zadanie 1

function succes(){
  console.log("udało się!");
}
succes();


// zadanie 2

var number = 123;

function displayParam(param){
  console.log(param);
}
displayParam(number);


// zadanie 3

var tab = [1, 2, 3, 4, 5];

function getTable(table){
  return table;
}
//console.log(getTable(tab));     // TEST


// zadanie 4

function getString5Times(str){
  var i = 0;
  const time = setInterval(function(){console.log(str);
                                      i++;
                                      if(i == 5) clearInterval(time)}, 3000);
                                     }
getString5Times("Test");

