
// zadanie 1

var tab = [1, 2, 3, 4, 5];
console.log(tab);


// zadanie 2

var tab = [1, 2, 3, 4, 5, "abc", "def"];

// pierwszy i drugi element

console.log(tab[0] + ", " + tab[1]);

// ostatni element

console.log(tab[tab.length-1]);

// wszystkie elementy

console.log(tab);

// co drugi element

for(var i = 0; i < tab.length; i++){
  if(i%2==0) console.log(tab[i]);
}

// wszystkie stringi

for(var i = 0; i < tab.length; i++){
  if(isNaN(tab[i])) console.log(tab[i]);
}

// wszystkie numbery

for(var i = 0; i < tab.length; i++){
  if(!isNaN(tab[i])) console.log(tab[i]);
}


// zadanie 3

var tab = [1, 2, 3, 4, 5];
var result = 0;

// 1.suma wszystkich

result = 0;
for(var i = 0; i < tab.length; i++){
  result += tab[i];
}
console.log(result);

// 2.różnica wszystkich

result = 0;
for(var i = 0; i < tab.length; i++){
  result -= tab[i];
}
console.log(result);

// 3.średnia

result = 0;
for(var i = 0; i < tab.length; i++){
  result += tab[i];
}
console.log(result/tab.length);

// 4.tylko parzyste

result = 0;
for(var i = 0; i < tab.length; i++){
  if(tab[i]%2==0) console.log(tab[i]);
}

// 5.tylko nieparzyste

result = 0;
for(var i = 0; i < tab.length; i++){
  if(tab[i]%2!=0) console.log(tab[i]);
}

// 6.najwyższa

result = 0;
max = -1000000000;
for(var i = 0; i < tab.length; i++){
  if(tab[i] > max) max = tab[i];
}
console.log(max);

// 7.najmniejsza

result = 0;
min = 1000000000;
for(var i = 0; i < tab.length; i++){
  if(tab[i] < min) min = tab[i];
}
console.log(min);

// 8.tablica od tyłu

for(var i = tab.length-1; i >= 0; i--){
  console.log(tab[i]);
}

// zadanie 4


var tab = [1, 2, 3, 4, 5];

function tabSum(tabToSum){
  var result = 0;
  for(var i = 0; i < tabToSum.length; i++){
    result += tabToSum[i];
  }
  console.log(result);
}

tabSum(tab);

// zadanie 5


var tab = [1, 2, 3, 4, 5];

function tabElemsMultiplied(tabToProcess){
  var result = 0;
  for(var i = 0; i < tabToProcess.length; i++){
    result += tabToProcess[i];
  }
  for(var j = 0; j < tabToProcess.length; j++){
    console.log(tabToProcess[j]*(result/tabToProcess.length))
  }
}

tabElemsMultiplied(tab);

// zadanie 6


var tab = [1, 2, 3, 4, 5];

function tabAvgOfEven(tabToProcess){
  var result = 0;
  var counter = 0;
  for(var i = 0; i < tabToProcess.length; i++){
    if(tabToProcess[i]%2==0){
      result += tabToProcess[i];
      counter++;
    }
  }
    console.log(result/counter);
}

tabAvgOfEven(tab);

// zadanie 7


var tab = ['c', 12, 23, 'b', 3, -4, 15, 'a', '13', '18', 108];

function compare(a, b){return a-b}

function tabSorter(tabToSort){
  tabToSort.sort();
  console.log(tabToSort.sort(compare));
}

tabSorter(tab);

// zadanie 8


var tab = [1, 2, 3, 4];
var tab2 = [5, 4, 3, 2, 1, 6];

function tabsSums(tabToSum1, tabToSum2){
  result = 0;
  for(var i = 0; i < tabToSum1.length; i++){
    result += tabToSum1[i];
  }
  for(var j = 0; j < tabToSum2.length; j++){
    result += tabToSum2[j];
  }
  console.log(result);
}

tabsSums(tab, tab2);

// zadanie 9


var tab = [1, 2, 3, 4, 5];

function tabReverser(tabToReverse){
  var newTab = [];
  for(var i = 0; i < tabToReverse.length; i++){
    newTab.push(tabToReverse[i]*-1);
  }
//  console.log(newTab); // Test
  return newTab;
}

tabReverser(tab);
