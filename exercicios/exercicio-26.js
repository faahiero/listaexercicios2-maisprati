let A = [];
let B = [];

for (let i = 0; i < 3; i++) {
    let rowA = [];
    let rowB = [];
    for (let j = 0; j < 5; j++) {
                let valueA = Math.floor(Math.random() * 11);
        let valueB = Math.floor(Math.random() * 11);
        rowA.push(valueA);
        rowB.push(valueB);
    }
    A.push(rowA);
    B.push(rowB);
}

let P = Array(3).fill().map(() => Array(5).fill(0));

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
        P[i][j] = A[i][j] * B[i][j];
    }
}

console.log('Matriz A:');
console.table(A);
console.log('Matriz B:');
console.table(B);
console.log('Matriz Produto P:');
console.table(P);