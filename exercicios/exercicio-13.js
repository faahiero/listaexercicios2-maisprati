let fibonacci = new Array(15).fill(0);
fibonacci[0] = 1;
fibonacci[1] = 1;

for (let i = 2; i < 15; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log('[ ' + fibonacci.join(' ') + ' ]');