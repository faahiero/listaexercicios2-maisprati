function aplicarFuncao(obj, fn) {
    let resultado = {};
    for(let prop in obj) {
        resultado[prop] = fn(obj[prop]);
    }
    return resultado;
}

let obj = {
    a: 1,
    b: 2,
    c: 3
};

let quadrado = function(n) {
    return n * n;
};

console.log('Objeto:', obj);

console.log('Operação:', quadrado.name);
console.log(aplicarFuncao(obj, quadrado)); 