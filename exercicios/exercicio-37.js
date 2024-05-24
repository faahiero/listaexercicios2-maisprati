
let G = [];
for(let i = 0; i < 20; i++) {
    G[i] = String.fromCharCode(65 + Math.floor(Math.random() * 4)); 
}
console.log('Gabarito: ' +G.join(' '));
console.log()


for(let aluno = 1; aluno <= 50; aluno++) {
    let R = [];
    for(let i = 0; i < 20; i++) {
        R[i] = String.fromCharCode(65 + Math.floor(Math.random() * 4)); 
    }

    let acertos = 0;
    for(let i = 0; i < 20; i++) {
        if(G[i] === R[i]) {
            acertos++;
        }
    }

    console.log(`Aluno ${aluno}, número de acertos: ${acertos}`);
    console.log('Respostas: ' + R.join(' '));
    if(acertos >= 12) {
        console.log("APROVADO");
        console.log()
    } else {
        console.log("REPROVADO");
        console.log()
    }
}