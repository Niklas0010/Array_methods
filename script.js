// Øvelse #1 
let cars = [
  "Datsun",
  "Mercedes",
  "Volvo",
  "Bmw",
  "Fiat",
  "Toyota",
  "Citroen",
  "Tesla",
  "Opel",
];

console.log(cars.join(""));

// Øvelse #2
let removeLastElem = cars.pop();
console.log(cars);
console.log(removeLastElem);

// Øvelse #3 
let addElement = cars.push('Mazda');
console.log(cars);
console.log(addElement);

// Øvelse #4
let removeFirstElem = cars.shift();
console.log(cars);
console.log(removeFirstElem);

// Øvelse #5
let addFirstElem = cars.unshift('Nissan');
console.log(cars)
console.log(addFirstElem);

// Øvelse #6
let addThreeElements = cars.splice(5, 0, "Kia", "Seat", "Peugeot");
console.log(cars)
console.log(addThreeElements);

// Øvelse #7
let removeFiat = cars.splice(4, 1);
console.log(cars) 
console.log(removeFiat);