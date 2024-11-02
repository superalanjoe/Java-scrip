// Exemplo 1: Verificação de saldo e aceitação de empréstimo
let saldoConta = 490;
let aceitaEmprestimo = true;
let situacaoNomeCliente = "sujo";

if (saldoConta >= 500) {
    console.log("Posso comprar");
// Se não tenho saldo suficiente, verifico se posso fazer um empréstimo.
} else if (aceitaEmprestimo === true && situacaoNomeCliente === "limpo") {
    console.log("Eu aceito fazer um empréstimo");
} else {
    console.log("Infelizmente você não pode comprar");
}

// Exemplo 2: Verificação de idade, situação de correntista, consórcio e financiamento
let idade = 40; 
let correntista = true; 
let temConsorcio = true;
let temFinanciamentoContratado = false;

if (idade >= 30 && correntista === true && temConsorcio === true) {
    console.log("Pode oferecer um limite maior de cartão.");
}

// Exemplo 3: Verificação de nome sujo com operador NOT (!)
let maiorDeIdade = true;
console.log("O valor da variável é " + !maiorDeIdade); // Mostra o valor negado de maiorDeIdade (false)

let nomeSujo = false;

if (nomeSujo === true) {
    console.log("O nome está sujo");
}

// Se o nome não estiver sujo (com NOT !nomeSujo)
if (!nomeSujo) {
    console.log("O nome NÃO está sujo");
}

// Exemplo 4: Verificação de tempo de empresa e curso de RH
let tempoEmpresa = 5;
let fezCursoRH = true;

if (tempoEmpresa >= 5 && fezCursoRH === true) {
    console.log("Pode ser promovido para uma posição de liderança em RH");
}

// Exemplo 5: Verificação de valor nulo
let preco = 10;
let valor = null;

if (valor === null) {
    console.log("O valor não foi definido.");
}
