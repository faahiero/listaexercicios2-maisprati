function calculaSomas(matriz) {
    let somaLinha4 = 0;
    let somaColuna2 = 0;
    let somaDiagonalPrincipal = 0;
    let somaTotal = 0;

    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz[i].length; j++) {
            if(i === 3) { // linha 4
                somaLinha4 += matriz[i][j];
            }
            if(j === 1) { // coluna 2
                somaColuna2 += matriz[i][j];
            }
            if(i === j) { // diagonal principal
                somaDiagonalPrincipal += matriz[i][j];
            }
            somaTotal += matriz[i][j]; // soma total
        }
    }

    return {
        somaLinha4,
        somaColuna2,
        somaDiagonalPrincipal,
        somaTotal
    };
}

let matriz = [];
for(let i = 0; i < 5; i++) {
    matriz[i] = [];
    for(let j = 0; j < 5; j++) {
        matriz[i][j] = Math.floor(Math.random() * 10);
    }
}

console.table(matriz);

let resultado = calculaSomas(matriz);
console.log('Soma da linha 4:', resultado.somaLinha4);
console.log('Soma da coluna 2:', resultado.somaColuna2);
console.log('Soma da diagonal principal:', resultado.somaDiagonalPrincipal);
console.log('Soma total:', resultado.somaTotal);