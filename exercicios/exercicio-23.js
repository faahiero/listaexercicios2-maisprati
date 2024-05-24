let MI = [];

for (let i = 0; i < 7; i++) {
    let row = Array(7).fill(0);
    row[i] = 1;
    MI.push(row);
}

console.table(MI);