let M = [];
for (let i = 0; i < 6; i++) {
    let row = [];
    for (let j = 0; j < 6; j++) {
                let value = Math.floor(Math.random() * 11);
        row.push(value);
    }
    M.push(row);
}

console.log("Matriz M:");
console.table(M);

let A = Math.floor(Math.random() * 11);

console.log("Valor de A:", A);

let V = [];

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        V.push(M[i][j] * A);
    }
}

console.log("Vetor V:");
console.table(V);