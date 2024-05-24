const prompt = require('prompt-sync')();
let somatorio = 0;
let menorValor = Infinity;
let media = 0;
let contagemPares = 0;
let totalNumeros = 0;
let opcao = '';

do {
  let numero = parseFloat(prompt("Digite um número: "));
  somatorio += numero;
  totalNumeros++;

  if (numero < menorValor) {
    menorValor = numero;
  }

  if (numero % 2 === 0) {
    contagemPares++;
  }

  opcao = prompt("Deseja continuar? (S para sim, N para não): ");
} while (opcao.toUpperCase() === 'S');

media = somatorio / totalNumeros;

console.clear()
console.log("---------- Resultado ----------");
console.log(`Somatório entre todos os valores: ${somatorio}`);
console.log(`Menor valor digitado: ${menorValor}`);
console.log(`Média entre todos os valores: ${media.toFixed(2)}`);
console.log(`Quantidade de valores pares: ${contagemPares}`);