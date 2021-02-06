
// zadanie 1

class Person {
  constructor(name, surname, age, country, city, language) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.language = language;
  }
}

const person1 = new Person("Jan", "Kowalski", 24, "Polska", "Kraków", "Polski");
const person2 = new Person("Kuba", "Wolski", 17, "Polska", "Olkusz", "Polski");
const person3 = new Person("Angelika", "Hemingway", 34, "Polska", "Kraków", "Angielski");
const person4 = new Person("Małgorzata", "Janik", 21, "Polska", "Łódź", "Polski");
const person5 = new Person("Maria", "Pacia", 46, "Polska", "Wolbrom", "Polski");

console.log(person4);

person4.city = "Kraków";
person4.age = 22;

console.log(person4);

// zadanie 2


class Calculator{
    constructor(){
        this.memory = 0;
        this.result = 0;
        this.history = [];
    }
    sum(x, y){
        this.result = x + y;
        this.toHistory(x,y, '+');
        return this.result;

    }
    sub(x, y){
        this.result = x - y;
        this.toHistory(x,y, '-');
        return this.result;
    }
    mult(x, y){
        this.result = x * y;
        this.toHistory(x,y, '*');
        return this.result;
    }
    div(x, y){
        if( y === 0) throw Error("DON'T DO THAT!!!");
        this.result = x / y;
        this.toHistory(x,y, '/');
        return this.result;
    }

    toHistory(x,y, operation){
        this.history.push({x,y, operation, result: this.result});
    }
    flushHistory(){
        this.history = [];
    }
    printHistory(){
        this.history.forEach((obj, i) => console.log(`${i+1}: ${obj.x} ${obj.operation} ${obj.y} = ${obj.result}`));
    }
}

const calc = new Calculator;
const calc2 = new Calculator;

/*                            //TEST
console.log(calc.sum(3, 5));
console.log(calc.sub(3, 5));
console.log(calc.mult(3, 5));
console.log(calc.div(3, 5));
console.log(calc.sum(3, 5));

calc.printHistory();

console.log(calc2.div(5, 3));
calc2.printHistory();
*/                            //TEST

// zadanie 3


function DrawOfNumber() {
this.randomNumber = function (){
DrawOfNumber.prototype.period = setInterval(function(){
DrawOfNumber.prototype.num = Math.round((Math.random() * 10)+1);
console.log(DrawOfNumber.prototype.num);
}, 1000);
};
  
this.isGreaterThan5 = function() {
DrawOfNumber.prototype.check = setInterval(function(){
if (DrawOfNumber.prototype.num > 5) {
console.log("Większa niż 5.");
clearInterval(DrawOfNumber.prototype.period);
clearInterval(DrawOfNumber.prototype.check);
}
}, 1000);
};
}

let play = new DrawOfNumber();
let play1 = new DrawOfNumber();
play.randomNumber();
play.isGreaterThan5();