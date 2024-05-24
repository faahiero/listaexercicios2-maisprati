const prompt = require('prompt-sync')();

function validarHorario(horario) {
    let partes = horario.split(":");
    if (partes.length !== 3) {
        return false;
    }
    let horas = parseInt(partes[0]);
    let minutos = parseInt(partes[1]);
    let segundos = parseInt(partes[2]);
    if (isNaN(horas) || isNaN(minutos) || isNaN(segundos)) {
        return false;
    }
    return !(horas < 0 || horas > 23 || minutos < 0 || minutos > 59 || segundos < 0 || segundos > 59);

}

let horarios = [];

for (let i = 0; i < 5; i++) {
    let horario;
    do {
        horario = prompt("Digite um horário (HH:MM:SS): ");
    } while (!validarHorario(horario));
    horarios.push(horario);
}

console.log("---------- Horários ----------");
for (let horario of horarios) {
    console.log(horario.replace(/:/g, "."));
}