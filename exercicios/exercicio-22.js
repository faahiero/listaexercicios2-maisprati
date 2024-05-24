const prompt = require('prompt-sync')();

const faker = require('faker');

let pessoas = [];
const quantidadePessoas = parseInt(prompt("Digite a quantidade de pessoas que deseja gerar: "));


for (let i = 0; i < quantidadePessoas; i++) {
    let pessoa = {
        nome: faker.name.findName(),
        salario: parseFloat(faker.finance.amount(100, 5000, 2)),
        filhos: faker.datatype.number({min: 0, max: 10})
    };
    pessoas.push(pessoa);
}


function resultadosPesquisa(pessoas) {
    let totalSalario = 0;
    let totalFilhos = 0;
    let maiorSalario = 0;
    let contagemSalarioAte350 = 0;

    for (let pessoa of pessoas) {
        totalSalario += pessoa.salario;
        totalFilhos += pessoa.filhos;
        if (pessoa.salario > maiorSalario) {
            maiorSalario = pessoa.salario;
        }
        if (pessoa.salario <= 350) {
            contagemSalarioAte350++;
        }
    }

    let mediaSalario = (totalSalario / pessoas.length).toFixed(2);
    let mediaFilhos = totalFilhos / pessoas.length;
    let percentualSalarioAte350 = (contagemSalarioAte350 / pessoas.length) * 100;

    return {
        mediaSalario: mediaSalario,
        mediaFilhos: mediaFilhos,
        maiorSalario: maiorSalario,
        percentualSalarioAte350: percentualSalarioAte350
    };
}

let resultado = resultadosPesquisa(pessoas);
console.log(pessoas)
console.log("---------- Resultados da Pesquisa ----------");
console.log(`Média salarial: ${resultado.mediaSalario}`);
console.log(`Média de filhos: ${resultado.mediaFilhos}`);
console.log(`Maior salário: ${resultado.maiorSalario}`);
console.log(`Percentual de pessoas com salário até R$ 350,00: ${resultado.percentualSalarioAte350}%`);
console.log("-------------------------------------------");
