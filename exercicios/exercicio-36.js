let gabarito = [];
for(let i = 0; i < 13; i++) {
    gabarito.push(Math.floor(Math.random() * 10));
}
console.log('Resultado: ', gabarito);

for(let apostador = 1; apostador <= 100; apostador++) {
    let respostas = [];
    for(let i = 0; i < 13; i++) {
        respostas.push(Math.floor(Math.random() * 10));
    }

    let acertos = 0;
    for(let i = 0; i < 13; i++) {
        if(gabarito[i] === respostas[i]) {
            acertos++;
        }
    }

    console.log(`Apostador ${apostador}, número de acertos: ${acertos}`);

    if(acertos === 13) {
        console.log("Parabéns, tu foi o GANHADOR");
    }
}