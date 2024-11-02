// 1 - Com parâmetro e sem retorno
function tipoUm(saudacao) {
    console.log(saudacao + ", tudo bem?");
}

// Exemplos de uso:
// tipoUm("Bom dia");
// tipoUm("Boa tarde");
// tipoUm("Boa noite");

// 2 - Sem parâmetro e sem retorno
function latir() {
    console.log("Au au au");
}

// Exemplo de uso:
// latir();

// 3 - Com parâmetro e com retorno
function soma(numero1, numero2) {
    return numero1 + numero2;
}

// Exemplos de uso:
// console.log(soma(5, 5));
// console.log(soma(10, 5));
// console.log(soma(20, 5));

// 4 - Sem parâmetro e com retorno
function falaBomDia() {
    return "Olá, bom dia! Tudo bem?";
}

// Exemplo de uso:
console.log(falaBomDia());

// 5 - Com parâmetro e retorno condicional
function verificaIdade(idade) {
    if (idade >= 18) {
        return "Você é maior de idade!";
    } else {
        return "Você é menor de idade!";
    }
}

// Exemplo de uso:
console.log(verificaIdade(20));
console.log(verificaIdade(15));