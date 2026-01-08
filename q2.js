function first() {
    console.log("1. First function executed");
}

function second(callback) {
    console.log("2. Second function started");
    callback();
}

function third() {
    console.log("3. Third function executed");
}

console.log("Start");

first();

setTimeout(function () {
    console.log("4. setTimeout callback executed");
});

second(third);

console.log("End");
