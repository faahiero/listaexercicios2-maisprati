let M = [];
for(let i = 0; i < 12; i++) {
    M[i] = [];
    for(let j = 0; j < 13; j++) {
        M[i][j] = Math.floor(Math.random() * 21) - 10;
    }
}

console.log('Matriz original:');
console.table(M);

for(let i = 0; i < M.length; i++) {
    let maxAbs = Math.abs(M[i][0]);
    for(let j = 1; j < M[i].length; j++) {
        if(Math.abs(M[i][j]) > maxAbs) {
            maxAbs = Math.abs(M[i][j]);
        }
    }
    for(let j = 0; j < M[i].length; j++) {
        M[i][j] = parseFloat((M[i][j] / maxAbs).toFixed(2));
    }
}

console.log('Matriz modificada:');
console.table(M);