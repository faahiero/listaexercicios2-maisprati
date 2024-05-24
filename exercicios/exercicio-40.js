let resultadoOficial = [12, 23, 34, 45, 56];

for(let apostaNum = 1; apostaNum <= 50; apostaNum++) {
    let aposta = []; 
    for(let i = 0; i < 5; i++) {
        aposta[i] = Math.floor(Math.random() * 60) + 1; 
    }

    let acertos = 0;
    for(let i = 0; i < 5; i++) {
        if(resultadoOficial.includes(aposta[i])) {
            acertos++;
        }
    }

    if(acertos === 5) {
        console.log(`Aposta ${apostaNum}: Ganhador`);
    }
}

console.log('Nenhuma aposta ganhadora.')