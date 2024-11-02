// Estoque inicial
let qtdCanetas = 10;
let qtdCadernos = 20;
let qtdLapis = 30;
let qtdBorrachas = 40;

// Produtos e seus preços
let precoCaneta = 1.50;
let precoCaderno = 9.90;
let precoLapis = 2.00;
let precoBorracha = 0.50;

// Exemplo de compra - calcula o valor total de diferentes combinações de produtos
let valorTotal1 = precoCaneta + precoCaderno;           // Compra de 1 caneta e 1 caderno
let valorTotal2 = precoCaneta + precoLapis;             // Compra de 1 caneta e 1 lápis
let valorTotal3 = precoBorracha + precoCaderno + precoLapis; // Compra de 1 borracha, 1 caderno e 1 lápis
let valorTotal4 = precoBorracha + precoCaneta + precoLapis;  // Compra de 1 borracha, 1 caneta e 1 lápis

// Exemplo de desconto no estoque após a venda
qtdCanetas--;
qtdCadernos--;
qtdLapis--;
qtdBorrachas -= 2; // Exemplo de venda de 2 borrachas

// Exibição dos resultados
console.log("Valor total da compra 1: ", valorTotal1);
console.log("Valor total da compra 2: ", valorTotal2);
console.log("Valor total da compra 3: ", valorTotal3);
console.log("Valor total da compra 4: ", valorTotal4);

console.log("Estoque atual de canetas: ", qtdCanetas);
console.log("Estoque atual de cadernos: ", qtdCadernos);
console.log("Estoque atual de lápis: ", qtdLapis);
console.log("Estoque atual de borrachas: ", qtdBorrachas);






