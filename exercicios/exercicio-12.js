let n1 = 1, n2 = 1, nextTerm;

console.log("---------- 10 primeiros termos da Sequência de Fibonacci ----------");
console.log(n1); // primeiro termo
console.log(n2); // segundo termo

for (let i = 3; i <= 10; i++) {
    nextTerm = n1 + n2;
    console.log(nextTerm);
    n1 = n2;
    n2 = nextTerm;
}