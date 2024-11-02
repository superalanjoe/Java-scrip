// Estrutura de repetição Do While
// O bloco `do` sempre será executado ao menos uma vez antes de verificar a condição no `while`.

// Exemplo 1: Condição não satisfeita (idade)
// Aqui, o código será executado uma vez, mesmo que a condição `idade >= 18` seja falsa.
let idade = 16;

do {
    console.log("Entrou na festa"); // Executa ao menos uma vez
} while (idade >= 18); // Como `idade` não é >= 18, o loop para depois da primeira execução

// Exemplo 2: Contador com Do While
let contador = 1;

do {
    console.log("Executou " + contador + " vez(es).");
    contador++; // Incrementa o contador a cada iteração
} while (contador <= 3); // O loop continua até que `contador` seja maior que 3
