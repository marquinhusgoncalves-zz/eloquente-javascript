//Esse evento é usado para desabilitar sua função default
// event.preventDefault();

// Aqui a função estará monitorando todo o document no caso o window
// addEventListener("click", function() {
//   console.log("You clicked!");
// });

// Aqui a função estará monitorando apenas a referência passada
// var button = document.querySelector("button");
// button.addEventListener("click", function() {
//   console.log("Button clicked.");
// });

// Aqui as funções manipulam as teclas
// addEventListener("keydown", function(event) {
//   if (event.keyCode == 86)
//   document.body.style.background = "blue";
// });
// addEventListener("keyup", function(event) {
//   if (event.keyCode == 86)
//   document.body.style.background = "";
// });

//Teste com manipulação de clique do mouse
// addEventListener("click", function(event) {
//   var dot = document.createElement("div");
//   dot.className = "dot";
//   dot.style.left = (event.pageX - 4) + "px";
//   dot.style.top = (event.pageY - 4) + "px";
//   document.body.appendChild(dot);
// });

//Movimento do mouse
var lastX; // Tracks the last observed mouse X position
 var rect = document.querySelector("div");
 rect.addEventListener("mousedown", function(event) {
   if (event.which == 1) {
     lastX = event.pageX;
     addEventListener("mousemove", moved);
     event.preventDefault(); // Prevent selection
   }
 });

 function moved(event) {
   if (event.which != 1) {
     removeEventListener("mousemove", moved);
   } else {
     var dist = event.pageX - lastX;
     var newWidth = Math.max(10, rect.offsetWidth + dist);
     rect.style.width = newWidth + "px";
     lastX = event.pageX;
   }
 }
