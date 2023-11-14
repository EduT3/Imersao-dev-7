const nome = "Eduardo";
const valor = 32;
const cotacaoDoEuro = 5.25;
const cotacaoDoDolar = 4.91;

var valorDolar = valor * cotacaoDoDolar;
valorDolar = valorDolar.toFixed(2);

var valorEuro = valor * cotacaoDoEuro;
valorEuro = valorEuro.toFixed(2);

alert(
  "Olá " +
    nome +
    ", o valor do Dolar em reais = R$" +
    valorDolar +
    ", e o valor do Euro em reais = R$" +
    valorEuro
);
