function sumarizarVendas(vendas) {
    let totais = {};
    for(let i = 0; i < vendas.length; i++) {
        let venda = vendas[i];
        if(totais[venda.vendedor] === undefined) {
            totais[venda.vendedor] = venda.valor;
        } else {
            totais[venda.vendedor] += venda.valor;
        }
    }
    return totais;
}

let vendas = [
    {vendedor: "João", valor: 200},
    {vendedor: "Maria", valor: 300},
    {vendedor: "João", valor: 150},
    {vendedor: "Ana", valor: 400},
    {vendedor: "Maria", valor: 500},
    {vendedor: "Ana", valor: 300},
    {vendedor: "João", valor: 350}
];

console.log('Vendas: ', vendas);
console.log(sumarizarVendas(vendas)); 