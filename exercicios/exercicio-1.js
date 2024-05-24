const prompt = require('prompt-sync')();
const cigarrosPorDia = parseInt(prompt("Quantos cigarros você fuma por dia? "));
const anosFumando = parseInt(prompt("Há quantos anos você fuma? "));
const totalCigarros = cigarrosPorDia * 365 * anosFumando;
const reducaoTempoVida = totalCigarros * 10;
const reducaoTempoVidaDias = (reducaoTempoVida / (60 * 24)).toFixed(2);

console.log("Um fumante perderá aproximadamente", reducaoTempoVidaDias, "dias de vida.");