const prompt = require('prompt-sync')();

let vetor = Array.from({length: 6}, () => Math.floor(Math.random() * 10));
console.log('Vetor:', vetor);
console.log()


console.log("Escolha uma opção:");
console.log("1 - Soma dos elementos");
console.log("2 - Produto dos elementos");
console.log("3 - Média dos elementos");
console.log("4 - Ordene os elementos em ordem crescente");
console.log("5 - Mostre o vetor");


let identificador = parseInt(prompt("Digite o identificador (1-5): "));

switch(identificador) {
    case 1:
        let soma = vetor.reduce((a, b) => a + b, 0);
        console.log('Soma dos elementos:', soma);
        break;
    case 2:
        let produto = vetor.reduce((a, b) => a * b, 1);
        console.log('Produto dos elementos:', produto);
        break;
    case 3:
        let media = vetor.reduce((a, b) => a + b, 0) / vetor.length;
        console.log('Média dos elementos:', media);
        break;
    case 4:
        vetor.sort((a, b) => a - b);
        console.log('Vetor ordenado:', vetor);
        break;
    case 5:
        console.log('Vetor:', vetor);
        break;
    default:
        console.log('Identificador inválido');
}