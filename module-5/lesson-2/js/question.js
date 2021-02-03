class Car {
  constructor(name) {
    this.name = name;
    this.speed = 150;
  }

  #privateMethod() {
    console.log('private');
  }

  getSpeed() {
    console.log(this.speed);
  }
}

const audi = new Car('audi');
audi.getSpeed();
// audi.privateMethod();
console.dir(audi.prototype);
console.dir(Car.prototype);
// prototype __proto__

const baz = function (name) {
  this.name = name;
};

console.log(baz.prototype);
