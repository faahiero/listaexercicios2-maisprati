function combinarObjetos(obj1, obj2) {
    const novoObjeto = {};
    for (const chave in obj1) {
        novoObjeto[chave] = obj1[chave];
    }
    for (const chave in obj2) {
        novoObjeto[chave] = obj2[chave];
    }
    return novoObjeto;
}

const obj1 = { nome: "João", idade: 30 };
const obj2 = { cidade: "São Paulo", idade: 31 };

const objCombinado = combinarObjetos(obj1, obj2);

console.log('Objeto 1:', obj1); 
console.log('Objeto 2:', obj2); 
console.log('Objeto combinado:', objCombinado);