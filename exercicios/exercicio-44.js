function contarPropriedadesString(obj) {
    let contagem = 0;
    for(let prop in obj) {
        if(typeof obj[prop] === 'string') {
            contagem++;
        }
    }
    return contagem;
}

let obj = {
    nome: "João",
    idade: 25,
    cidade: "São Paulo",
    email: "joao@example.com",
    notas: [8, 7, 9, 6]
};

console.log(obj)
console.log("O objeto tem " + contarPropriedadesString(obj) + " propriedades que são strings."); 