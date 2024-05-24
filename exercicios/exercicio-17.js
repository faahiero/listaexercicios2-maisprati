const prompt = require('prompt-sync')();
const faker = require('faker');

let pessoas = [];

for (let i = 0; i < 9; i++) {
    let nome = faker.name.findName();
    let idade = faker.datatype.number({ min: 0, max: 100 });
    pessoas.push({ nome: nome, idade: idade });
}

console.log("---------- Pessoas criadas ----------");
for (let pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
}

let menoresDeIdade = pessoas.filter(pessoa => pessoa.idade < 18);

menoresDeIdade.sort((a, b) => a.idade - b.idade);

console.log("---------- Pessoas menores de idade ----------");
for (let pessoa of menoresDeIdade) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
}

if (menoresDeIdade.length === 0) {
    console.log("Nenhuma pessoa é menor de idade.");
}