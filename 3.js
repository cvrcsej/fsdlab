// Write a generator function that can yields first 5 fib numbers and accepts a value from next() method to reset sequence

function* fibGenerator() {
    let a = 0, b = 1;
    let count = 0;

    while (count < 5) {
        const reset = yield a;
        if (reset !== undefined) {
            a = reset;
            b = reset + 1;
            count = 0;
            continue;
        }

        [a, b] = [b, a + b];
        count++;
    }
}

const gen = fibGenerator();

let num = 4
for (let i = 0; i < num; i++) {
    console.log(gen.next().value);
}