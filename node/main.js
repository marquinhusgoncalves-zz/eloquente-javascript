var garble = require("./garble");

// O índice 2 possui o valor do primeiro parâmetro da linha de comando
var parametro = process.argv[2];

console.log(garble(parametro));
