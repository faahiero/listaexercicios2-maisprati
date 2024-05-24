function somaElementos(matriz) {
    let somaAcimaDiagonal = 0;
    let somaAbaixoDiagonal = 0;
    let elementosAcimaDiagonal = [];
    let elementosAbaixoDiagonal = [];

    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz[i].length; j++) {
            if(j > i) {
                somaAcimaDiagonal += matriz[i][j];
                elementosAcimaDiagonal.push(matriz[i][j]);
            } else if(j < i) {
                somaAbaixoDiagonal += matriz[i][j];
                elementosAbaixoDiagonal.push(matriz[i][j]);
            }
        }
    }

    return {
        somaAcimaDiagonal,
        somaAbaixoDiagonal,
        elementosAcimaDiagonal,
        elementosAbaixoDiagonal
    };
}

//crie matriz 10x10 e apresente na forma de matriz
let matriz = [];
for(let i = 0; i < 10; i++) {
    matriz[i] = [];
    for(let j = 0; j < 10; j++) {
        matriz[i][j] = Math.floor(Math.random() * 10);
    }
}
console.log('Matriz 10x10:')
console.table(matriz);

let resultado = somaElementos(matriz);
console.log('Elementos acima da diagonal principal:', resultado.elementosAcimaDiagonal);
console.log('Soma acima da diagonal principal:', resultado.somaAcimaDiagonal);
console.log();
console.log('Elementos abaixo da diagonal principal:', resultado.elementosAbaixoDiagonal);
console.log('Soma abaixo da diagonal principal:', resultado.somaAbaixoDiagonal);