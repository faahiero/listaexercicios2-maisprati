const prompt = require('prompt-sync')();

function processaMatriz(A, V) {
    let contador = 0;
    let X = [];

    for(let i = 0; i < V.length; i++) {
        X[i] = [];
        for(let j = 0; j < V[i].length; j++) {
            if(V[i][j] === A) {
                contador++;
                X[i][j] = 'x'; // preenche com 'X' se o valor for igual a A
            } else {
                X[i][j] = V[i][j]; // mantém o valor original se for diferente de A
            }
        }
    }

    return {
        contador,
        X
    };
}

// Crie uma matriz V 30x30
let V = [];
for(let i = 0; i < 30; i++) {
    V[i] = [];
    for(let j = 0; j < 30; j++) {
        V[i][j] = Math.floor(Math.random() * 101);
    }
}

let A = prompt('Por favor, insira o valor de A: '); // Solicite do usuário o valor de A
A = Number(A); // Converta a entrada do usuário para um número

console.log('Matriz V:');
console.table(V);


let resultado = processaMatriz(A, V);
console.log('Número de valores iguais a A:', resultado.contador);
console.log('Matriz X:');
console.table(resultado.X);