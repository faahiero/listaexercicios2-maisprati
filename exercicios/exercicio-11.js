const prompt = require('prompt-sync')();

let primeiroTermo = parseFloat(prompt("Digite o primeiro termo da PA: "));
let razao = parseFloat(prompt("Digite a razão da PA: "));
let soma = 0;

console.log("---------- 10 primeiros termos da PA ----------");
for (let i = 0; i < 10; i++) {
  let termoAtual = primeiroTermo + i * razao;
  console.log(`Termo ${i+1}: ${termoAtual}`);
  soma += termoAtual;
}

console.log("---------- Soma dos termos ----------");
console.log(`Soma: ${soma}`);