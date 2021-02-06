
// zadanie 1

var nr1 = 6;
var nr2 = 12;
if(nr1 > nr2){
  console.log("nr 1 jest większy.");
}else{
  console.log("nr 2 jest większy.");  
}

// zadanie 2

var nr1 = -12;
var nr2 = 22;
var nr3 = 11;
if(nr1 > nr2 && nr1 > nr3){
  console.log("nr 1 jest największy.");
}else if(nr2 > nr1 && nr2 > nr3){
  console.log("nr 2 jest największy.");  
}else if(nr3 > nr1 && nr3 > nr2){
  console.log("nr 3 jest największy.");    
}else{
  console.log("Przynajmniej dwa największe numery są sobie równe.");      
}

// zadanie 3

for(var i = 0; i<10; i++){
  console.log("Lubię JavaScript.");
}

// zadanie 4

var result = 0;

for(var i = 1; i<=10; i++){
  result+=i;
}

// zadanie 5

var n = 5;

for(var i = 0; i<=n; i++){
  if( i%2==0){
    console.log(i + " - parzysta")
  }else{
    console.log(i + " - nieparzysta")  
  }
}

// zadanie 6

for(var i = 1; i<=5; i++){
  for(var j = 1; j<=5; j++){
    console.log("i= " + i + ", j= " + j);
  }
}

// zadanie 7

for(var i = 0; i<=100; i++){
  if(i % 3 == 0 && i % 5 == 0){
    console.log("FizzBuzz");
  }else if(i % 3 == 0){
    console.log("Fizz");
  }else if(i % 5 == 0){
    console.log("Buzz");
  }else{
    console.log(i);
  }
}

// zadanie 8

//a)

var lines = 5;
var line = "";
for(var i=1; i<=lines; i++){
  line = "";
  for(var j=1; j<=i; j++){
    line += "*";
  }
  console.log(line);
}

//b)

var lines = 5;
var line = "";
for(var i=lines; i>0; i--){
  line = "";
  
  for(var j = 1; j < i; j++){
    line += " ";
  }
  
  for(var k = 0; k <= lines-i; k++){
    line += "* ";
  }
  
  console.log(line);
}

//c)

var lines = 5;
var line = "";
for(var i=lines; i>0; i--){
  line = "";
  
  for(var j = 1; j < i; j++){
    line += " ";
  }
  
  for(var k = 0; k <= lines-i; k++){
    line += "*";
  }
  
  for(var l = 1; l <= lines-i; l++){
    line += "*";
  }
  
  console.log(line);
}

//d)

var lines = 11;
var lineLength = 5;
var line = "";
var stars = "*";

for(var i = 0; i < lines; i++){
  var line = "";
  for(var j = 0; j < lineLength; j++){
    if(i < Math.floor(lines/2)){
      if(j <= i){
        line += stars;
      }else{ 
        line += j;
      }
    }else if(i > Math.floor(lines/2)){
      line = (j < i-(Math.floor(lines/2)+1) ? (j-(lineLength-1))*-1 : stars) + line;
    }else{
      line += "-";
    }
  }
  console.log(line);
}   

//e)

var lines = 8;
var line = "";
var leg = lines - Math.floor(lines * (5/8));

for(var i=lines; i>0; i--){
  line = "";
  
  if(i > leg){
  for(var j = 1; j < i-leg; j++){
    line += " ";
  }
  
  for(var k = 0; k <= lines - i; k++){
    line += "* ";
  }
  }else{
    for(var j = 1; j < lines-leg; j++){
    line += " ";
  }
    line += "*";
  }
  
  console.log(line);
}

