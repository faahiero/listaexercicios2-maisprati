const faker = require('faker');

let employees = [];

for (let i = 0; i < 80; i++) {
    let employee = {};
    employee.matricula = faker.datatype.uuid({min: 1000, max: 9999});
    employee.nome = faker.name.findName();
    employee.salarioBruto = parseFloat(faker.finance.amount(1000, 5000, 2));
    employee.deducaoINSS = (employee.salarioBruto * 0.12).toFixed(2);
    employee.salarioLiquido = (employee.salarioBruto - employee.deducaoINSS).toFixed(2);
    employees.push(employee);
}

console.log("---------- Folha de Pagamento ----------");
for (let employee of employees) {
    console.log(`Matrícula: ${employee.matricula}`);
    console.log(`Nome: ${employee.nome}`);
    console.log(`Salário Bruto: ${employee.salarioBruto}`);
    console.log(`Dedução INSS: ${employee.deducaoINSS}`);
    console.log(`Salário Líquido: ${employee.salarioLiquido}`);
    console.log("---------------------------------------");
}