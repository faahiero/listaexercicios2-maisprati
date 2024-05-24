const prompt = require('prompt-sync')();
const segmento1 = parseFloat(prompt("Digite o tamanho do primeiro segmento de reta: "));
const segmento2 = parseFloat(prompt("Digite o tamanho do segundo segmento de reta: "));
const segmento3 = parseFloat(prompt("Digite o tamanho do terceiro segmento de reta: "));

if (
  segmento1 < segmento2 + segmento3 &&
  segmento2 < segmento1 + segmento3 &&
  segmento3 < segmento1 + segmento2
) {
  console.log("É possível formar um triângulo com esses segmentos de reta.");
} else {
  console.log("Não é possível formar um triângulo com esses segmentos de reta.");
}