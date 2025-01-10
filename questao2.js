// Questão 2
// Programa para verificar se um número pertence à sequência de Fibonacci
function verificaFibonacci(num) {
    let a = 0, b = 1, c = 0;
    while (b <= num) {
        if (b === num) {
            return `${num} pertence à sequência de Fibonacci`;
        }
        c = a + b;
        a = b;
        b = c;
    }
    return `${num} não pertence à sequência de Fibonacci`;
}
console.log(verificaFibonacci(21));