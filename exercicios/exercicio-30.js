function calculaSomas(matriz) {
    let SL = new Array(5).fill(0);
    let SC = new Array(5).fill(0);

    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz[i].length; j++) {
            SL[i] += matriz[i][j]; 
            SC[j] += matriz[i][j]; 
        }
    }

    return {
        SL,
        SC
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
console.log('Vetor SL (somas das linhas):', resultado.SL);
console.log('Vetor SC (somas das colunas):', resultado.SC);