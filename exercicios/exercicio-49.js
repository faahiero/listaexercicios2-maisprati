function agruparTransacoes(transacoes) {
    let categorias = {};

    for(let i = 0; i < transacoes.length; i++) {
        let transacao = transacoes[i];
        let categoria = transacao.categoria;

        if(categorias[categoria] === undefined) {
            categorias[categoria] = { transacoes: [transacao], subtotal: transacao.valor };
        } else {
            categorias[categoria].transacoes.push(transacao);
            categorias[categoria].subtotal += transacao.valor;
        }
    }

    return categorias;
}

let transacoes = [
    {id: 1, valor: 200, data: "2022-01-01", categoria: "Alimentação"},
    {id: 2, valor: 300, data: "2022-01-02", categoria: "Transporte"},
    {id: 3, valor: 150, data: "2022-01-03", categoria: "Alimentação"},
    {id: 4, valor: 400, data: "2022-01-04", categoria: "Lazer"},
    {id: 5, valor: 500, data: "2022-01-05", categoria: "Alimentação"},
    {id: 6, valor: 300, data: "2022-01-06", categoria: "Transporte"},
    {id: 7, valor: 350, data: "2022-01-07", categoria: "Lazer"}
];

console.log(JSON.stringify(agruparTransacoes(transacoes), null, 2));