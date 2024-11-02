// Estrutura de Controle: IF
// Se -> IF
/*
    Se estiverSol 
        Vamos a padaria
*/

// Exemplo básico de IF
// if (true) 
//     console.log("Vamos a padaria!");

// if (false) 
//     console.log("Não vamos a padaria!");

// Exemplo 2: Verificação de idade
let idade = 18;

if (idade >= 18)
    console.log("Pode entrar!"); // A primeira linha é executada se a condição for verdadeira.

if (idade < 18)
    console.log("Não pode entrar!");

// Exemplo 3: Verificação de idade e carteira de motorista
let idadeCliente = 10;
let temCarteira = false;

if (idadeCliente >= 18 || temCarteira === true)
    console.log("Pode dirigir");

// Exemplo 4: Usando bloco de código
let saldoConta = 15;

if (saldoConta > 0) {
    console.log("Pode realizar uma compra!");
    console.log("Volte sempre");
}

console.log("Fim da execução!");

// Exemplo 5: Lidando com valores em uma condição
let chocolate = 2;

if (saldoConta > 0) {
    console.log("Pode realizar uma compra!");

    saldoConta = saldoConta - chocolate;

    console.log("Querido(a) cliente seu saldo é " + saldoConta);
    console.log("Volte sempre");
}

console.log("Fim da execução!");

// Else -> Senão
saldoConta = 0;

if (saldoConta > 0) {
    console.log("Pode realizar uma compra!");

    saldoConta = saldoConta - chocolate;

    console.log("Querido(a) cliente seu saldo é " + saldoConta);
    console.log("Volte sempre");
} else {
    console.log("Realize um empréstimo conosco.");
}

// Else IF - Adicionando uma condição extra
let notaAluno = 8;

if (notaAluno >= 5) {
    console.log("Parabéns, você foi aprovado(a)!");
} else if (notaAluno >= 3) {
    console.log("Você está de recuperação!")
} else {
    console.log("Infelizmente, você foi reprovado(a)!");
}
