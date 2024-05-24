let matrix = [];
for (let i = 0; i < 15; i++) {
    let row = [];
    for (let j = 0; j < 20; j++) {
                let value = Math.floor(Math.random() * 101);
        row.push(value);
    }
    matrix.push(row);
}

let sums = Array(20).fill(0);

for (let j = 0; j < 20; j++) {
    for (let i = 0; i < 15; i++) {
        sums[j] += matrix[i][j];
    }
}
console.log('Matrix:')
console.table(matrix);
console.log('Somatório de cada coluna:')
console.table(sums);
