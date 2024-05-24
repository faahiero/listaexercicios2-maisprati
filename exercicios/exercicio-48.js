function combinarInventarios(inventarioLojaA, inventarioLojaB) {
    let inventarioCombinado = {};

    for(let item in inventarioLojaA) {
        inventarioCombinado[item] = inventarioLojaA[item];
    }

    for(let item in inventarioLojaB) {
        if(inventarioCombinado[item] === undefined) {
            inventarioCombinado[item] = inventarioLojaB[item];
        } else {
            inventarioCombinado[item] += inventarioLojaB[item];
        }
    }

    return inventarioCombinado;
}

let inventarioLojaA = {
    "maçãs": 5,
    "bananas": 10,
    "laranjas": 7
};

let inventarioLojaB = {
    "maçãs": 8,
    "bananas": 5,
    "peras": 12
};


console.log("Inventário da loja A: ", inventarioLojaA);
console.log("Inventário da loja B: ", inventarioLojaB);
console.log("Inventário combinado: ", combinarInventarios(inventarioLojaA, inventarioLojaB));
