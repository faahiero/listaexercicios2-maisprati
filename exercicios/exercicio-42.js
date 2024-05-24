let dados = {
    nome: "João",
    idade: 25,
    hobbies: ["futebol", "leitura", "música"],
    notas: [8, 7, 9, 6],
    cidade: "São Paulo"
};

function filtrarArrays(obj) {
    let resultado = {};
    for(let prop in obj) {
        if(Array.isArray(obj[prop])) {
            resultado[prop] = obj[prop];
        }
    }
    return resultado;
}

let arrays = filtrarArrays(dados);

console.log(dados); 
console.log()
console.log(arrays); 