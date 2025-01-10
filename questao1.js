// Questão 1
// Calcular o valor final da variável SOMA após o loop
const INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K += 1;
    SOMA += K;
}
console.log(`Valor final da variável SOMA: ${SOMA}`);