
// zadanie 1

var person = {
  name: "Ania",
  surname: "Malisz",
  age: 7,
  country: "Polska",
  city: "Olkusz"
}

var person2 = {
  name: "Aleks",
  surname: "Fehr",
  age: 7,
  country: "Polska",
  city: "Kraków"
}

function IncreaseAge(){
  this.age++;
}

function Display(){
    console.log(this.name+" "+ this.surname+ " "+ this.age+" "+ this.country+" "+this.city);
}

person.add =  IncreaseAge;
person2.add =  IncreaseAge;

person.show = Display;
person2.show = Display;

/*              //Test
person.show();
person2.show();
person.add();
person.show();
person2.add();
person2.add();
person2.add();
person2.show();
*/              //Test

// zadanie 2

var person = {
  name: "Ania",
  surname: "Malisz",
  age: 7,
  country: "Polska",
  city: "Olkusz"
}

var person2 = {
  name: "Aleks",
  surname: "Fehr",
  age: 7,
  country: "Polska",
  city: "Kraków"
}

function IncreaseAge(){
  this.age++;
}

function Display(){
    console.log(this.name+" "+ this.surname+ " "+ this.age+" "+ this.country+" "+this.city);
}

person.add =  IncreaseAge;
person2.add =  IncreaseAge;

person.show = Display;
person2.show = Display;

person.favouriteDish = ["krewetki", "Ratatuj"];
person2.favouriteDish = ["ziemniaki pyrre", "Schabowy"];

function AddDish(dish){
  this.favouriteDish.push(dish);
}

function DisplayFavDishes(){
  var dishes = "";
  for(var i = 0; i < this.favouriteDish.length; i++){
    if( i == this.favouriteDish.length-1){
      dishes += this.favouriteDish[i] + ".";
    }else{
      dishes += this.favouriteDish[i] + ", ";
    }
  }
  console.log(dishes);
}

person.addDish = AddDish;
person.displayFavDishes = DisplayFavDishes;

person.addDish("danie dla person 1");
person.displayFavDishes();


person2.addDish = AddDish;
person2.displayFavDishes = DisplayFavDishes;

person2.addDish("danie dla person 2");
person2.displayFavDishes();

// zadanie 3

var numbers = {
  a: 0,
  b: 0,
  getNumbers: function(number1, number2){
    this.a = number1;
    this.b = number2;
  },
  sum: function(){
    console.log(this.a + this.b); 
  },
  sub: function(){
    console.log(this.a - this.b); 
  },
  mult: function(){
    console.log(this.a * this.b); 
  },
  div: function(){
    if(this.b != 0) {console.log(this.a / this.b);}
    else{ console.log("Nie dzielimy przez 0!");} 
  }
}

numbers.sum();

numbers.getNumbers(7, -2);
numbers.sum();
numbers.sub();
numbers.mult();
numbers.div();
numbers.getNumbers(7, 0);
numbers.div();

// zadanie 4

var ladder = {
  heigth: 10,
  up: function(){
    if(this.heigth != 20) this.heigth++;
    this.check();
  },
  down: function(){
    if(this.heigth != 0) this.heigth--;
    this.check();
  },
  check: function(){
    if(this.heigth == 0){
      console.log("zszedłeś z drabiny");
    }else if(this.heigth == 20){
      console.log("wszedłeś po drabinie");
    }else{
      console.log("jesteś na: " + this.heigth + " stopniu.");
    }
  }
}

ladder.up();
ladder.down();
ladder.check();