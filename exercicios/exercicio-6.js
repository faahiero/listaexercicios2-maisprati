const prompt = require("prompt-sync")();

let numeroComputador = Math.floor(Math.random() * 5) + 1;
let tentativas = 0;
let chuteUsuario;

function adivinharNumero() {
  while (tentativas < 5) {
    chuteUsuario = parseInt(prompt("Advinhe um número entre 1 e 5: "));
    tentativas++;

    if (chuteUsuario === numeroComputador) {
      console.log(`Parabéns! Você adivinhou o número em ${tentativas} tentativas.`);
      return;
    } else if (chuteUsuario > numeroComputador) {
      console.log("Seu chute é muito alto. Tente novamente!");
    } else {
      console.log("Seu chute é muito baixo. Tente novamente!");
    }
  }

  console.log(`Você não adivinhou o número em 5 tentativas. O número era ${numeroComputador}.`);
}

adivinharNumero();