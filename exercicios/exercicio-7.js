const prompt = require('prompt-sync')();

let tipoCarro = "";
let diasAlugados = 0;
let kmPercorridos = 0;
let valorTotal = 0;
let valorDiaria = 0;
let valorKm = 0;


function calcularValorDiaria(tipoCarro) {
  if (tipoCarro === "popular") {
    valorDiaria = 90;
  } else if (tipoCarro === "luxo") {
    valorDiaria = 150;
  } else {
    console.error("Tipo de carro inválido!");
  }
}


function calcularValorKm(tipoCarro, kmPercorridos) {
  if (tipoCarro === "popular") {
    if (kmPercorridos <= 100) {
      valorKm = kmPercorridos * 0.2;
    } else {
      valorKm = 100 * 0.2 + (kmPercorridos - 100) * 0.1;
    }
  } else if (tipoCarro === "luxo") {
    if (kmPercorridos <= 200) {
      valorKm = kmPercorridos * 0.3;
    } else {
      valorKm = 200 * 0.3 + (kmPercorridos - 200) * 0.25;
    }
  } else {
    console.error("Tipo de carro inválido!");
  }
}


tipoCarro = prompt("Qual o tipo de carro alugado (popular ou luxo)? ").toLowerCase();
diasAlugados = parseInt(prompt("Quantos dias o carro foi alugado? "));
kmPercorridos = parseInt(prompt("Quantos Km foram percorridos? "));


if (isNaN(diasAlugados) || isNaN(kmPercorridos)) {
  console.error("Dados inválidos. Digite apenas números.");
  exit;s
}


calcularValorDiaria(tipoCarro);
calcularValorKm(tipoCarro, kmPercorridos);
valorTotal = valorDiaria * diasAlugados + valorKm;

console.clear()
console.log("---------- Detalhes do Aluguel ----------");
console.log(`Tipo do carro: ${tipoCarro}`);
console.log(`Dias alugados: ${diasAlugados}`);
console.log(`Km percorridos: ${kmPercorridos}`);
console.log("---------------------------------------");
console.log(`Valor da diária: R$ ${valorDiaria}`);
console.log(`Valor por Km rodado: R$ ${valorKm.toFixed(2)}`);
console.log("---------------------------------------");
console.log(`Valor total a pagar: R$ ${valorTotal.toFixed(2)}`);
