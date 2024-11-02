// Estrutura básica de um loop While
// Enquanto (condição ou expressão) for verdadeira, execute o código no bloco

// Exemplo simples (cuidado, pois esse é um loop infinito!)
// while (true) {
//     console.log("Isso vai executar indefinidamente");
// }

// Exemplo 1: Contador com While
let contador = 0;

while (contador <= 5) {
    console.log("Isso vai executar " + contador);
    contador++;  // Incrementa o contador para evitar um loop infinito
}
// O loop se encerra quando `contador` atinge 6

// Exemplo 2: Lavando Pratos com While
let quantidadePratos = 0;

while (quantidadePratos <= 5) {
    console.log("Lavando o prato " + quantidadePratos);
    quantidadePratos += 2;  // A cada iteração, incrementa em 2
    console.log("Valor somado " + quantidadePratos);
}

console.log("Fim da execução");

// Exemplo 3: Controle de repetição com limites
let quantidade = 1;

while (quantidade >= 1 && quantidade <= 5) {
    console.log("Entrou na repetição, quantidade atual: " + quantidade);
    quantidade++; // Incrementa a quantidade até que a condição se torne falsa
}