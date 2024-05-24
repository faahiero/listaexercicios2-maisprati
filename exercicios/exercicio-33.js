
let M = [];
for(let i = 0; i < 3; i++) {
    M[i] = [];
    for(let j = 0; j < 3; j++) {
        M[i][j] = Math.floor(Math.random() * 21);
    }
}

console.log('Matriz original:');
console.table(M);


let somaDiagonalSecundaria = 0;
for(let i = 0; i < 3; i++) {
    somaDiagonalSecundaria += M[i][2 - i];
}
let mediaDiagonalSecundaria = somaDiagonalSecundaria / 3;


for(let i = 0; i < 3; i++) {
    M[i][i] = parseFloat((M[i][i] * mediaDiagonalSecundaria).toFixed(2));
}

console.log('Matriz modificada:');
console.table(M);