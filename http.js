// A resposta do servidor irá iniciar com a versão, em seguida pelo status da resposta,
// representado primeiramente por um código de três dígitos e, em seguida, por um texto legível.
//
// HTTP/1.1 200 OK
//
// Os status code (códigos de status) que iniciam com o número 2
// indicam que a requisição foi bem-sucedida.
// Códigos que começam com 4,
// indicam que houve algum problema com a requisição.
// O código de resposta HTTP provavelmente mais famoso é o 404, que significa que o recurso solicitado
// não foi encontrado.
// Códigos que começam com 5
// indicam que houve um erro no servidor e que a culpa não é da requisição.

//XMLHttpRequest
var req = new XMLHttpRequest();
req.open("GET", "example/data.txt", false);
req.send(null);
console.log(req.responseText);
// → This is the content of data.txt
