const prompt = require('prompt-sync')();
let nomes = [];

for (let i = 0; i < 7; i++) {
    let nome = prompt("Digite um nome: ");
    nomes.push(nome);
}

nomes.reverse();

console.log("---------- Nomes informados na ordem inversa ----------");
for (let nome of nomes) {
    console.log(nome);
}