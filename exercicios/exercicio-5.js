const prompt = require("prompt-sync")();
const choices = ["pedra", "papel", "tesoura"];
const randomIndex = Math.floor(Math.random() * choices.length);
let escolhaJogador;
let escolhaComputador;
let resultado;

escolhaJogador = prompt("Escolha sua jogada: pedra, papel ou tesoura: ").toLowerCase();

while (!["pedra", "papel", "tesoura"].includes(escolhaJogador)) {
  escolhaJogador = prompt("Escolha inválida. Digite pedra, papel ou tesoura:").toLowerCase();
}

escolhaComputador = choices[randomIndex];

if (escolhaJogador === escolhaComputador) {
  resultado = "Empate!";
} else if (
  (escolhaJogador === "pedra" && escolhaComputador === "tesoura") ||
  (escolhaJogador === "papel" && escolhaComputador === "pedra") ||
  (escolhaJogador === "tesoura" && escolhaComputador === "papel")
) {
  resultado = "Você ganhou!";
} else {
  resultado = "Você perdeu!";
}

console.log(`Você escolheu ${escolhaJogador} e o computador escolheu ${escolhaComputador}. ${resultado}`);
