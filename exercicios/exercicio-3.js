const prompt = require('prompt-sync')();
const distancia = parseFloat(prompt("Qual é a distância que você deseja percorrer em Km? "));

if (distancia <= 200) {
  const preco = distancia * 0.50;
  console.log("O preço da passagem é R$ " + preco.toFixed(2));
} else {
  const preco = distancia * 0.45;
  console.log("O preço da passagem é R$ " + preco.toFixed(2));
}