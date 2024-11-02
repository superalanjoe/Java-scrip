// Estrutura de Seleção Switch
// Ideal para selecionar entre múltiplos valores

let nota = 5;

switch (nota) {
    case 10: case 9: case 8: case 7: case 6:
        console.log("Você passou!");
        break; // Encerra o bloco se uma das notas for entre 6 e 10
    
    case 5: case 4: case 3:
        console.log("Você está de recuperação!");
        break; // Encerra o bloco se a nota for 4 ou 3
    
    case 2: case 1: case 0:
        console.log("Você foi reprovado(a)!");
        break; // Encerra o bloco se a nota for entre 0 e 2
    
    default:  // Padrão para valores não reconhecidos
        console.log("A nota informada é inválida");
}
