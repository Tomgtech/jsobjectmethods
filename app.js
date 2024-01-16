console.log("Hello World!");
const person = {
  name: "Bob",
  age: 30,
  favouriteColour: "Red",
  sayHello: function (name) {
    console.log("Hello " + name + "!");
  },
};

person.sayHello("Tom");

const car = {
  make: "VW",
  model: "Caddy",
  colour: "Grey",
  advert: function () {
    console.log("for sale" + make + "!");
  },
};
console.log(car);
