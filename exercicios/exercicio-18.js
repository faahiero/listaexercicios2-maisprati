const prompt = require('prompt-sync')();

let funcionario = {};

funcionario.nome = prompt("Digite o nome do funcionário: ");
funcionario.cargo = prompt("Digite o cargo do funcionário: ");
funcionario.salario = parseFloat(prompt("Digite o salário do funcionário: "));

console.log("---------- Dados do funcionário ----------");
console.log(`Nome: ${funcionario.nome}`);
console.log(`Cargo: ${funcionario.cargo}`);
console.log(`Salário: ${funcionario.salario}`);