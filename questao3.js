// Questão 3
// Calcular menor, maior faturamento e dias acima da média
const faturamentoMensal = [100, 200, 300, 0, 500, 0, 1000];
const diasComFaturamento = faturamentoMensal.filter(valor => valor > 0);
const menorFaturamento = Math.min(...diasComFaturamento);
const maiorFaturamento = Math.max(...diasComFaturamento);
const mediaMensal = diasComFaturamento.reduce((a, b) => a + b, 0) / diasComFaturamento.length;
const diasAcimaDaMedia = diasComFaturamento.filter(valor => valor > mediaMensal).length;

console.log(`Menor: ${menorFaturamento}, Maior: ${maiorFaturamento}, Dias acima da média: ${diasAcimaDaMedia}`);