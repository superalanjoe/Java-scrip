// Variáveis
let carro = "Gol";
let tanqueCombustivel = 40;
let tanqueAtual = 35;
let tipoCombustivel = "Gasolina";
let valorParaAbastecer = 20;
let qtdeCombustivel = 0;

let precoGasolina = 5.50;
let precoAlcool = 3.50;

let formaPagamento = "Crédito";
let temCupom = true;
let descontoDinheiro = 0.05; // 5%
let descontoCupom = 0.05; // 5%
let descontoApp = 0.05; // 5%
let impostoGasolina = 1.05; // 5% de imposto
let impostoAlcool = 1.02; // 2% de imposto

// Funcionalidades

function abastecer(tipoCombustivel, valorParaAbastecer) {
    if (tipoCombustivel === "Gasolina") {
        // Calculo gasolina
        qtdeCombustivel = (valorParaAbastecer / precoGasolina).toFixed(3);    
        tanqueAtual = parseFloat(tanqueAtual) + parseFloat(qtdeCombustivel);
        console.log(`A quantidade abastecida foi ${qtdeCombustivel} litros. Agora o tanque possui ${tanqueAtual} litros.`);
    } else if (tipoCombustivel === "Álcool") {
        // Calculo álcool
        qtdeCombustivel = (valorParaAbastecer / precoAlcool).toFixed(3);    
        tanqueAtual = parseFloat(tanqueAtual) + parseFloat(qtdeCombustivel);
        console.log(`A quantidade abastecida foi ${qtdeCombustivel} litros. Agora o tanque possui ${tanqueAtual} litros.`);
    } else {
        console.log("O tipo de combustível informado não existe.");
    }
}

function pagamento(formaPagamento) {
    let valorFinal = valorParaAbastecer;

    switch (formaPagamento) {
        case "Dinheiro": 
        case "Pix":
            valorFinal -= valorFinal * descontoDinheiro; // Aplica desconto
            console.log(`O valor total a pagar é: R$ ${valorFinal.toFixed(2)}`);
            break;
        case "Crédito":
            valorFinal *= impostoGasolina; // Aplicando imposto
            console.log(`O valor total a pagar com crédito (Gasolina) é: R$ ${valorFinal.toFixed(2)}`);
            break;
        case "Aplicativo":
            valorFinal -= valorFinal * descontoApp; // Aplica desconto
            console.log(`O valor total a pagar com aplicativo é: R$ ${valorFinal.toFixed(2)}`);
            break;
        default:
            console.log("A forma de pagamento desejada, não temos.");
            break;
    }
}

function verificaQtdeCombustivel(tanqueCombustivel, tanqueAtual) {
    if (tanqueCombustivel > tanqueAtual) {
        console.log("O tanque não está cheio.");
    } else {
        console.log("O tanque está cheio ou possui combustível suficiente.");
    }
}

function utilizaAplicativo() {
    console.log("Aplicativo utilizado para pagamento.");
}

function calculaDescontoAplicativo(valorParaAbastecer) {
    return valorParaAbastecer - (valorParaAbastecer * descontoApp);
}

// Lista de cortes
let qtdeCortes = [1, 2, 3, 4, 5, 6, 7];
function adicionaCorteCliente(numeroDoCorte) {
    if (qtdeCortes.length >= 10) {
        console.log("Ganhou um corte!");
    }
    qtdeCortes.push(numeroDoCorte);
    console.log("Cortes atuais:", qtdeCortes);
}

let salariosClientes = [1000, 2000, 1500, 2500, 3000, 3500, 4000];

function calculaMediaRenda(salariosClientes) {
    let somaSalarios = salariosClientes.reduce((acc, salario) => acc + salario, 0);
    let mediaRenda = somaSalarios / salariosClientes.length;
    console.log(`A média de renda dos clientes é: R$ ${mediaRenda.toFixed(2)}`);
}

// Testes
abastecer("Gasolina", 30);
abastecer("Álcool", 25);

pagamento("Dinheiro");
pagamento("Crédito");
pagamento("Aplicativo");

verificaQtdeCombustivel(tanqueCombustivel, tanqueAtual);
utilizaAplicativo();
calculaMediaRenda(salariosClientes);

// Adicionando cortes de cliente
adicionaCorteCliente(8);
adicionaCorteCliente(9);
adicionaCorteCliente(10);

// Testes de tipos de dados
console.log(typeof "AlanCleber"); // string
console.log(typeof 10); // number
console.log(typeof false); // boolean
