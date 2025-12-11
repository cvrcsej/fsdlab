const person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}

console.log(person,"Before Adding the new entry");
person.RollNO=12;
console.log(person,"After Adding the new entry");
person.age=21;
console.log(person,"Update the age value");
delete person.RollNO;
console.log(person,"Deleted the RollNo");
