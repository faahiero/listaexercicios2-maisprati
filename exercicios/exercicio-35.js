let pares = [];
let impares = [];

for(let i = 0; i < 30; i++) {
    let valor = Math.floor(Math.random() * 100); 

    if(valor % 2 === 0) {
        pares.push(valor);
        if(pares.length === 5) {
            console.log('Vetor de pares:', pares);
            pares = [];
        }
    } else {
        impares.push(valor);
        if(impares.length === 5) {
            console.log('Vetor de ímpares:', impares);
            impares = [];
        }
    }
}


console.log('Vetor de pares:', pares);
console.log('Vetor de ímpares:', impares);