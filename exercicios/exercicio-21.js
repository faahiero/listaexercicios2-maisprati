const prompt = require('prompt-sync')();

function pesoIdeal(altura, sexo) {
    let pesoIdeal;
    if (sexo === 'masculino') {
        pesoIdeal = 72.7 * altura - 58;
    } else if (sexo === 'feminino') {
        pesoIdeal = 62.1 * altura - 44.7;
    }
    return pesoIdeal;
}

let altura = parseFloat(prompt("Digite a altura (m): "));
let sexo = prompt("Digite o sexo (masculino/feminino): ");

let peso = pesoIdeal(altura, sexo);
console.log(`Peso ideal: ${peso.toFixed(2)} kg`);
