function contarOcorrencias(array) {
    let contagem = {};
    for(let i = 0; i < array.length; i++) {
        let chave = array[i];
        if(contagem[chave] === undefined) {
            contagem[chave] = 1;
        } else {
            contagem[chave]++;
        }
    }
    return contagem;
}

let strings = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"];

console.log(strings);
console.log(contarOcorrencias(strings)); 