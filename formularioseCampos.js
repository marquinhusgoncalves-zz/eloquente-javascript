// <p><input type="text" value="abc">(text)</p>
// <p><input type="password" value="abc">(password)</p>
// <p><input type="checkbox" checked>(checkbox)</p>
// <p><input type="radio" value="A" name="choice">
// <input type="radio" value="B" name="choice" checked>
// <input type="radio" value="C" name="choice">(radio)</p>
// <p><input type="file" checked> (file)</p>

// <input type="text" tabindex=1> <a href=".">(help)</a>
// <button onclick="console.log('ok')" tabindex=2>OK</button>

//Cor
var buttons = document.getElementsByName("color");
function setColor(event) {
  document.body.style.background = event.target.value;
}
for (var i = 0; i < buttons.length; i++)
buttons[i].addEventListener("change", setColor);
