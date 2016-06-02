// var mensagem = "Olá mundo";
// console.log(mensagem);

//Subir servidor Node
var http = require("http");
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>Hello!</h1><p>You asked for <code>" +
  request.url + "</code></p>");
  response.end();
});
server.listen(8000);
//abra no navegador a url http://localhost:8000/hello

//Para agir como um cliente HTTP, nós podemos usar a função request no módulo "http".
var http = require("http");
var request = http.request({
  hostname: "eloquentjavascript.net",
  path: "/20_node.html",
  method: "GET",
  headers: {Accept: "text/html"}
}, function(response) {
  console.log("Server responded with status code",
              response.statusCode);
});
request.end();
