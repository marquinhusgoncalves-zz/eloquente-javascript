//O Document Object Model

//Estrutura do Documento
DOM Modelo de Objeto de Documentos (Document Object Model)
document da acesso aos objetos
documentElement se refere ao objeto que representa a tag

//Simplificando um nó de árvore, pegar o href da primeira tag "a"
var link = document.body.getElementsByTagName("a")[0];
console.log(link.href);

/*Todos os nós possuem um método getElementsByTagName, o qual coleta todos os elementos com o nome passado que
são descendentes (filhos diretos ou indiretos) do nó dado e retorna-os no formato de um objeto parecido com
um array.
Para encontrar um nó único específico, você pode dar à ele um atributo id e usar o
método document.getElementById.*/

<p>Minha avestruz Gertrude:</p>
<p><img id="gertrude" src="img/ostrich.png"></p>

<script>
  var ostrich = document.getElementById("gertrude");
  console.log(ostrich.src);
</script>

// Tem tb o método getElementsByClassName

//Alterando um Documento
método removeChild remove um dado nó filho do documento.
Para adicionar um filho, nós podemos usar o método appendChild

//função que retira todas imagens e substitui por texto do seu "alt"
<p>The <img src="img/cat.png" alt="Cat"> in the
<img src="img/hat.png" alt="Hat">.</p<
<p><button onclick="replaceImages()">Substituir</button></p>
<script>
function replaceImages() {
  var images = document.body.getElementsByTagName("img");
  for (var i = images.length - 1; i >= 0; i--) {
    var image = images[i];
    if (image.alt) {
      var text = document.createTextNode(image.alt);
      image.parentNode.replaceChild(text, image);
    }
  }
}
</script>
