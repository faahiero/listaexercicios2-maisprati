// Criação da matriz M e do vetor C
let M = [];
let C = [];

for (let i = 0; i < 6; i++) {
    let row = [];
    for (let j = 0; j < 8; j++) {
        // Gera um número aleatório entre -10 e 10
        let value = Math.floor(Math.random() * 21) - 10;
        row.push(value);
    }
    M.push(row);
}

for (let i = 0; i < M.length; i++) {
    let negativeElements = M[i].filter(value => value < 0);
    C.push(negativeElements.length);
}

console.log('Matriz M:')
console.table(M);
console.log('Vetor C:')
console.table(C);