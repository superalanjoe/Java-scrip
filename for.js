/*
Estrutura de repetição FOR:
1 - Variável de controle: onde definimos a variável inicial.
2 - Condição de verificação: o loop continua enquanto essa condição for verdadeira.
3 - Incremento ou modificação: ajusta o valor da variável de controle a cada iteração.
*/

// Exemplo 1: Loop For simples
for (let quantidade = 0; quantidade <= 10; quantidade++) {
    console.log("Repetindo " + quantidade);
}
// O loop executa enquanto `quantidade` é menor ou igual a 10, incrementando `quantidade` em 1 a cada iteração.

// Exemplo 2: Usando uma variável externa no loop For
let hora = 20;

for (let quantidade = 0; hora <= 22; quantidade++) {
    console.log("Repetindo com base na hora: " + hora);
    hora++; // Incrementa `hora` até que ela seja maior que 22, encerrando o loop
}

// Exemplo 3: Incremento personalizado no loop For
for (let valor = 0; valor <= 100; valor += 10) {
    console.log(`O valor é: ${valor}`);
}
// O loop incrementa `valor` em 10 a cada iteração, repetindo até `valor` atingir ou ultrapassar 100.


// Exemplo adicional: Condicional para desconto em uma compra
let valorCompra = 100;
let desejaUsarCupom = true;
const imposto = 5;

// Aplica cupom de desconto se o valor da compra for maior que 100
if (valorCompra > 100) {
    console.log("Você ganhou um cupom de desconto de 10 reais.");
}

// Aplica o cupom e ajusta o valor da compra com outras taxas se o cliente optar
if (desejaUsarCupom) {
    valorCompra -= 10;       // Aplica desconto
    valorCompra += 19.90;     // Adiciona outra taxa
    valorCompra += 2.50;      // Adiciona taxa adicional
    console.log("O valor da compra atualizado é " + valorCompra);
}
