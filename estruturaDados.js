//Arrays
var listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[1]);
// 3
console.log(listOfNumbers[1 - 1]);
// 2

//Métodos
var doh = "Doh";
console.log(typeof  doh.toUpperCase);
//function
console.log(doh.toUpperCase);
//DOH

var mack = [];
mack.push("Mack");
mack.push("the", "Knife");
console.log(mack);
// → ["Mack", "the", "Knife"]
console.log(mack.join(" "));
// → Mack the Knife
console.log(mack.pop());
// → Knife
console.log(mack);

/*
push add valores no final do Arrays
pop delete o último valor do Array e retorna
join acahata todo array e caso seja passado algum valor ele é usado para colar
*/

//Objetos
var day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running",
    "television"]
};
console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false

var anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true

//Exemplo de Array de Objetos
var journal = [
  {events: ["work", "touched tree", "pizza",
            "running", "television"],
   squirrel: false},
  {events: ["work", "ice cream", "cauliflower",
            "lasagna", "touched tree", "brushed teeth"],
   squirrel: false},
  {events: ["weekend", "cycling", "break",
            "peanuts", "beer"],
   squirrel: true},
  /* and so on... */
];


//Mutabilidade
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10

//Exemplo
var journal = [];

function addEntry(events, didITurnIntoASquirrel) {
  journal.push({
    events: events,
    squirrel: didITurnIntoASquirrel
  });
}

addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);

//adicionar e remover itens no início do array são chamados unshift e shift
var todoList = [];
function rememberTo(task) {
   todoLst.push(task);
 };
 function whatIsNext() {
   return todoList.shift();
 };
 function urgentlyRememberTo(task) {
   todoList.unshift(task);
 }
/*
O programa anterior gerencia uma lista de tarefas. Você pode adicionar tarefas no final da lista chamando
rememberTo("eat") e, quando estiver preparado para realizar alguma tarefa, você chama whatIsNext() para
pegar (e remover) o primeiro item da lista. A função urgentlyRememberTo também adiciona uma tarefa, porém,
ao invés de adicionar no final da lista, a adiciona no início.
*/

//indexOf lastIndexOff
/*
O método indexOf tem um irmão chamado lastIndexOf, que começa a pesquisa de um dado elemento pelo final do
array ao invés de começar pelo início
*/

console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3

/*
Outro método fundamental é o slice, que recebe um índice de início e outro de parada, retornando um array
que contém apenas os elementos contidos no intervalo desses índices. O índice de início é inclusivo e o de
parada é exclusivo.
*/
console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]

function remove(array, index) {
  return array.slice(0, index)
    .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]

//String e suas propriedades
/*Valores do tipo string, number e Boolean não são objetos e por isso, mesmo com o fato da linguagem não
reclamar, quando tentamos adicionar novas propriedades, elas não são armazenadas. Os valores são imutáveis e
não podem ser alterados.*/

console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5

console.log("one two three".indexOf("ee"));
// → 11

//método trim remove todos espaços vazios
console.log("  okay \n ".trim());
// → okay

/*Já vimos a propriedade length das strings. Para acessar caracteres individuais de uma string, podemos
usar o método charAt recebendo propriedades numéricas, da mesma forma que você faria com um array.*/

var string = "abc";
console.log(string.length);
// → 3
console.log(string.charAt(0));
// → a
console.log(string[1]);
// → b

function range(start, end) {
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return array.slice(start, end + 1);
}

function sum() {
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var result = 0;
  for (var count = 0; count <= array.length - 1; count++) {
    console.log(result += array[count]);
  }
}
console.log(sum(range(0, 1)));
