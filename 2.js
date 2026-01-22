// Create a car constructor that inherits vehicle without using class keyword override gettype method but still be able to call the parent version
function Vehicle(type) {
    this.type = type
}

function getType() {
    return "Vehicle type: " + this.type
}

Vehicle.prototype.getType = getType

function Car(type, brand) {
    Vehicle.call(this, type)
    this.brand = brand
}

Car.prototype = Object.create(Vehicle.prototype)
Car.prototype.constructor = Car

Car.prototype.getType = function () {
    const parentType = Vehicle.prototype.getType.call(this)
    return parentType + ", Brand: " + this.brand
}

const c1 = new Car("Car", "Tesla")

console.log(c1.getType())