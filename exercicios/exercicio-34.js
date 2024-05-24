
let M = [];
for(let i = 0; i < 50; i++) {
    M[i] = [];
    for(let j = 0; j < 50; j++) {
        M[i][j] = Math.floor(Math.random() * 10); 
    }
}

console.log('Matriz original:');
console.table(M);


for(let i = 0; i < M.length; i++) {
    let diagonalElement = M[i][i];
    for(let j = 0; j < M[i].length; j++) {
        M[i][j] = M[i][j] * diagonalElement;
    }
}

console.log('Matriz modificada:');
console.table(M);