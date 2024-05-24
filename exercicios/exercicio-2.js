const prompt = require('prompt-sync')();
const velocidade = parseFloat(prompt("Qual é a velocidade do carro em Km/h? "));
if (velocidade > 80) {
  const kmAcima = velocidade - 80;
  const valorMulta = kmAcima * 5;
  console.log("Você foi multado!");
  console.log("O valor da multa é de R$" + valorMulta.toFixed(2));
} else {
  console.log("Você está dentro do limite de velocidade.");
}