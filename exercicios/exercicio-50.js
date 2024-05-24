const prompt = require('prompt-sync')({sigint: true});
const sleep = require('system-sleep');
// Array para armazenar os hotéis
let hoteis = [
    {
        id: 1,
        nome: 'Hotel A',
        cidade: 'São Paulo',
        quartosTotais: 20,
        quartosDisponiveis: 20
    },
    {
        id: 2,
        nome: 'Hotel B',
        cidade: 'São Paulo',
        quartosTotais: 30,
        quartosDisponiveis: 30
    },
    {
        id: 3,
        nome: 'Hotel C',
        cidade: 'Rio de Janeiro',
        quartosTotais: 25,
        quartosDisponiveis: 25
    }
];

// Array para armazenar as reservas
let reservas = [
    {
        idReserva: 1,
        idHotel: 1,
        nomeCliente: 'João'
    },
    {
        idReserva: 2,
        idHotel: 2,
        nomeCliente: 'Maria'
    }
];

// Função para adicionar um novo hotel
function adicionarHotel(id, nome, cidade, quartosTotais) {
    id = parseInt(id)
    let hotel = {
        id: id,
        nome: nome,
        cidade: cidade,
        quartosTotais: quartosTotais,
        quartosDisponiveis: quartosTotais
    };
    if (hoteis.find(hotel => hotel.id === id)) {
        console.log()
        console.log(`Hotel com ID ${id} já existe.`);
        sleep(3000)
        console.clear()
        return;
    }
    hoteis.push(hotel);
    console.log()
    console.log(`Hotel ${nome} adicionado com sucesso!`);
    sleep(3000)
    console.clear()
}

// Função para buscar hotéis por cidade
function buscarHoteisPorCidade(cidade) {
    let hoteisNaCidade = hoteis.filter(hotel => hotel.cidade === cidade);
    if (hoteisNaCidade.length > 0) {
        console.log(`Hotéis disponíveis em ${cidade}:`);
        hoteisNaCidade.forEach(hotel => {
            console.log(`- ${hotel.nome} (${hotel.quartosDisponiveis} quartos disponíveis)`);
        });
        console.log()
    } else {
        console.log(`Nenhum hotel encontrado em ${cidade}.`);
        sleep(3000)
        console.clear()
    }
}

// Função para fazer uma reserva
function fazerReserva(nomeHotel, nomeCliente) {
    let idReserva = reservas.length + 1; // Generate the idReserva based on the number of existing reservations
    let hotel = hoteis.find(hotel => hotel.nome === nomeHotel);
    if (!hotel) {
        console.log()
        console.log(`Hotel ${nomeHotel} não encontrado.`);
        sleep(3000)
        console.clear()
        return;
    }

    let reservaExistente = reservas.find(reserva => reserva.idHotel === hotel.id && reserva.nomeCliente === nomeCliente);
    if (reservaExistente) {
        console.log()
        console.log(`Reserva já existente para o cliente ${nomeCliente} no hotel ${hotel.nome}.`); // Changed idHotel to hotel.nome
        sleep(3000)
        console.clear()
        return;
    }
    if (hotel.quartosDisponiveis > 0) {
        let reserva = {
            idReserva: idReserva,
            idHotel: hotel.id,
            nomeCliente: nomeCliente
        };
        reservas.push(reserva);
        hotel.quartosDisponiveis--;
        console.log()
        console.log(`Reserva feita com sucesso para ${nomeCliente} no hotel ${hotel.nome}.`);
        sleep(3000)
        console.clear()
    } else {
        console.log(`Não foi possível fazer a reserva. Hotel lotado.`);
        sleep(3000)
        console.clear()
    }
}

// Função para cancelar uma reserva
function cancelarReserva() {
    // Display all existing reservations
    listarReservas();

    // Prompt the user to enter the ID of the reservation they want to cancel
    let idReserva = prompt("ID da Reserva a ser cancelada: ");
    idReserva = parseInt(idReserva); // Convert the idReserva to a number

    let reservaIndex = reservas.findIndex(reserva => reserva.idReserva === idReserva);
    if (reservaIndex !== -1) {
        let reserva = reservas[reservaIndex];
        let hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);
        hotel.quartosDisponiveis++;
        reservas.splice(reservaIndex, 1);
        console.log()
        console.log(`Reserva de ${reserva.nomeCliente} no hotel ${hotel.nome} cancelada com sucesso.`);
        sleep(3000)
        console.clear()
    } else {
        console.log(`Reserva não encontrada.`);
    }
}

// Função para listar todas as reservas
function listarReservas() {
    if (reservas.length > 0) {
        console.log(`Lista de reservas:`);
        reservas.forEach(reserva => {
            let hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);
            console.log(`- Reserva ID: ${reserva.idReserva}, Cliente: ${reserva.nomeCliente}, Hotel: ${hotel.nome}`);
        });
        console.log()
    } else {
        console.log(`Nenhuma reserva encontrada.`);
        console.log()
        sleep(3000)
        console.clear()
    }
}

// Função para listar todos os hotéis
function listarHoteis() {
    if (hoteis.length > 0) {
        console.log(`Lista de hotéis:`);
        hoteis.forEach(hotel => {
            console.log(`- Hotel ID: ${hotel.id}, Nome: ${hotel.nome}, Cidade: ${hotel.cidade}, Quartos Disponíveis: ${hotel.quartosDisponiveis}/${hotel.quartosTotais}`);
        });
        console.log()
    } else {
        console.log(`Nenhum hotel cadastrado.`);
        console.log()
        sleep(3000)
        console.clear()
    }
}

// Função para exibir o menu e processar a escolha do usuário
function exibirMenu() {
    let opcao;
    console.clear()
    do {
        console.log('================================================');
        console.log('\x1b[32m%s\x1b[0m','Bem-vindo ao nosso sistema de reserva de hotéis!');
        console.log('================================================');
        console.log('\x1b[32m%s\x1b[0m','\nMenu de Opções:');
        console.log()
        console.log("1. Adicionar Hotel");
        console.log("2. Listar Hotéis");
        console.log("3. Buscar Hotéis por Cidade");
        console.log("4. Fazer Reserva");
        console.log("5. Listar Reservas");
        console.log("6. Cancelar Reserva");
        console.log("7. Sair");
        console.log()
        opcao = prompt("Escolha uma opção: ");

        switch (opcao) {
            case '1':
                console.clear()
                let idHotel = prompt("ID do Hotel: ");
                let nomeHotel = prompt("Nome do Hotel: ");
                let cidadeHotel = prompt("Cidade do Hotel: ");
                let quartosTotais = prompt("Número total de quartos: ");
                adicionarHotel(idHotel, nomeHotel, cidadeHotel, parseInt(quartosTotais));
                break;
            case '2':
                console.clear()
                listarHoteis();
                break;
            case '3':
                console.clear()
                let cidadeBusca = prompt("Cidade: ");
                console.log()
                buscarHoteisPorCidade(cidadeBusca);
                break;
            case '4':
                console.clear()
                let nomeHotelReserva = prompt("Nome do Hotel: ");
                let nomeCliente = prompt("Nome do Cliente: ");
                fazerReserva(nomeHotelReserva, nomeCliente);
                break;
            case '5':
                console.clear()
                listarReservas();
                break;
            case '6':
                console.clear()
                cancelarReserva();
                break;
            case '7':
                console.log("Saindo...");
                break;
            default:
                console.log()
                console.log("Opção inválida. Tente novamente.");
                sleep(3000)
                console.clear()
        }
    } while (opcao !== '7');
}

process.on('SIGINT', function() {
    console.log("Saindo...");
    process.exit();
});

// Iniciar o menu
exibirMenu();
