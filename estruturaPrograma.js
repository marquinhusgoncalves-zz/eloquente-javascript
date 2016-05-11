alert("Bom dia!"); // abre uma tela

var x = 30;
console.log("o valor de x é ", x); // mostra o resultado no console

console.log(Math.max(2, 4)); // Match.max mostra o maior valor entre os valores

console.log(Math.min(2, 4) + 100); // Match.min mostra o menor valor entre os valores

confirm(""); // abre uma janela com questão ok/cancel retornando true/false

prompt("Diga-me algo que você saiba.", "..."); //questão aberta, retornando o que o usuário digita

var theNumber = Number(prompt("Pick a number", "")); //Number converte o returno do prompt em número
alert("Your number is the square root de " + theNumber * theNumber);

var theNumber = Number(prompt("Digite um número", "")); // usando if para condições
  if (!isNaN(theNumber)) //is NaN return true se o return for NaN usamos o ! para inverter
  alert("Seu número é a raiz quadrada de " +
theNumber * theNumber);

var theNumber = Number(prompt("Digite um número", ""));
  if (!isNaN(theNumber))
  alert("Seu número é a raiz quadrada de " +
  theNumber * theNumber);
  else
  alert("Ei! Por que você não me deu um número?");

var number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
}
