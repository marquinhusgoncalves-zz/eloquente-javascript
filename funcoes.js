/*Uma definição de função nada mais é do que uma definição normal de uma variável, na qual o valor recebido pela
variável é uma função. Por exemplo, o código a seguir define uma variável square que se refere a uma função que
retorna o quadrado do número dado:*/

var square = function(x) {
  return x * x;
};

console.log(square(12));
// → 144

//Pode receber ou não parâmetros
var makeNoise = function() {
  console.log("Pling!");
};

makeNoise();
// → Pling!

var power = function(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
};

console.log(power(2, 10));
// → 1024

//Variáveis locais e globais
var x = "outside";
var f1 = function() {
  var x = "inside f1";
};
f1();
console.log(x);
// outside

var f2 = function() {
  var x = "inside f2";
};
f2();
console.log(x);
// inside

// Escopo Aninhado
var landscape = function() {
  var result = "";
  var flat = function(size) {
    for (var count = 0; count < size; count ++)
    result += "_";
  };
  var mountain = function(size) {
    result += "/";
    for (var count = 0; count < size; count ++)
    result += "'";
    result += "\\"
  };
  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};
console.log(landscape());

//Argumentos Opcionais
function power(base, exponent) {
  if (exponent == undefined)
    exponent = 2;
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
}

console.log(power(4));
// → 16
console.log(power(4, 3));
// → 64

//Closure
function wrapValue(n) {
  var localVariable = n;
  return function() { return localVariable; };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2

function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

var twice = multiplier(2);
console.log(twice(5));
// → 10

//Recursão
function power(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    return base * power(base, exponent - 1);
}

console.log(power(2, 3));
// → 8

/*Resumo
Este capítulo ensinou a você como escrever suas próprias funções. A palavra-chave function, quando usada
como uma expressão, pode criar um valor de função. Quando usada como uma declaração, pode ser usada para
declarar uma variável e dar a ela uma função como valor.
*/
// Create a function value f
var f = function(a) {
  console.log(a + 2);
};
// Declare g to be a function
function g(a, b) {
  return a * b * 3.5;
