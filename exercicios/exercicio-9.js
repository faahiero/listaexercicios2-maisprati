const prompt = require('prompt-sync')();
let totalSalarioHomens = 0;
let totalSalarioMulheres = 0;
let opcao = '';

do {
    let salario = parseFloat(prompt("Digite o salário do funcionário: "));
    let sexo = prompt("Digite o sexo do funcionário (M para masculino, F para feminino): ");

    if (sexo.toUpperCase() === 'M') {
        totalSalarioHomens += salario;
    } else if (sexo.toUpperCase() === 'F') {
        totalSalarioMulheres += salario;
    } else {
        console.error("Sexo inválido. Digite M para masculino ou F para feminino.");
        continue;
    }

    opcao = prompt("Deseja continuar? (S para sim, N para não): ");
} while (opcao.toUpperCase() === 'S');

console.clear()
console.log("---------- Resultado ----------");
console.log(`Total de salário pago aos homens: R$ ${totalSalarioHomens.toFixed(2)}`);
console.log(`Total de salário pago às mulheres: R$ ${totalSalarioMulheres.toFixed(2)}`);