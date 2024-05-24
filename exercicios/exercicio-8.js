const prompt = require('prompt-sync')();
let horasAtividade = 0;
let pontosTotais = 0;
let valorTotal = 0;

horasAtividade = parseInt(prompt("Quantas horas de atividade física você teve no mês? "));

if (isNaN(horasAtividade)) {
  console.error("Dados inválidos. Digite apenas números.");
  exit;
}


if (horasAtividade <= 10) {
  pontosTotais = horasAtividade * 2;
  valorTotal = pontosTotais * 0.05;
} else if (horasAtividade <= 20) {
  pontosTotais = 10 * 2 + (horasAtividade - 10) * 5;
  valorTotal = pontosTotais * 0.05;
} else {
  pontosTotais = 10 * 2 + 10 * 5 + (horasAtividade - 20) * 10;
  valorTotal = pontosTotais * 0.05;
}

console.clear()
console.log("---------- Resultado ----------");
console.log(`Horas de atividade: ${horasAtividade}`);
console.log(`Pontos totais: ${pontosTotais}`);
console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
