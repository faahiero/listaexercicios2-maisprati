let A = [];
for(let i = 0; i < 100; i++) {
    A[i] = Math.floor(Math.random() * 21) - 10; 
}

let B = [];

for(let i = 0; i < 100; i++) {
    if(A[i] > 0) {
        B.push(A[i]);
    }
}

console.log('Vetor A:');
console.table(A);
console.log('Vetor B:');
console.table(B);