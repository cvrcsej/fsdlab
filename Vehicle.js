// Write a program to create a vehicle constructor with a method gettype() using the prototype inheritance

function Vehicle(type) {
    this.type = type
}

Vehicle.prototype.getType = function () {
    return this.type
}
const v1 = new Vehicle('Car');
const v2 = new Vehicle('Bike');

console.log(v1.getType())
console.log(v2.getType())