
// zadanie 1

var car = {
  make: 'ford',
  model: 'Mustang',
  year: 1979
};

console.log(car);

// zadanie 2

var car = {
  make: 'ford',
  model: 'Mustang',
  year: 1979,
  change: function(what) {
    car.model = what; 
  }
};

console.log(car); 
// car.change("abc");    // test
// console.log(car);     // test

// zadanie 3

var summer = {
  sum: 0,
  calculator: function(tabToSum){    
      var result = 0;
      for(var i = 0; i < tabToSum.length; i++){
        result += tabToSum[i];
      }
      summer.sum = result;
      console.log(summer.sum);
  }
};

summer.calculator([1, 2, 3, 4, 5])


// zadanie 4

var car = {
  name: 'BMW',
  age: 24,
  kmDriven: 179000
};

console.log("name: " + car.name + ", age:" + car.age + ", przebieg: " + car.kmDriven + "km.");


// zadanie 5

var car = {
  name: 'BMW',
  age: 24,
  kmDriven: 179000,
  factory: fabryka= {
    yearBuilt: 1894,
    name: "good factory tm"
  }
};

console.log(car.factory);

// zadanie 6

var car = {
  name: 'BMW',
  age: 24,
  kmDriven: 179000,
  factory: fabryka= {
    yearBuilt: 1894,
    name: "good factory tm"
  }
};

function hello(){
  console.log("hello");
}

car.color = "golden chromatic";
car.alert = hello();

// car.alert; // test