//Desenhando com Canvas
// var canvas = document.querySelector("canvas");
// var context = canvas.getContext("2d");
// context.fillStyle = "red";
// context.fillRect(10, 10, 100, 50);

// var cx = document.querySelector("canvas").getContext("2d");
// cx.strokeStyle = "blue";
// cx.strokeRect(5, 5, 50, 50);
// cx.lineWidth = 5;
// cx.strokeRect(135, 5, 50, 50);

// var cx = document.querySelector("canvas").getContext("2d");
// cx.beginPath();
// for (var y = 10; y < 100; y += 10) {
//   cx.moveTo(10, y);
//   cx.lineTo(90, y);
// }
// cx.stroke();

// var cx = document.querySelector("canvas").getContext("2d");
// cx.beginPath();
// for (var y = 10; y < 100; y += 10) {
//   cx.moveTo(10, y);
//   cx.lineTo(90, y);
// }
// cx.stroke();

// var cx = document.querySelector("canvas").getContext("2d");
// 	cx.beginPath();
// 	cx.moveTo(10, 90);
// 	control=(60,10) goal=(90,90)
// 	cx.quadraticCurveTo(60, 10, 90, 90);
// 	cx.lineTo(60, 10);
// 	cx.closePath();
// 	cx.stroke();

//Desenhando um gráfico de pizza
// var results = [
// 	{name: "Satisfied", count: 1043, color: "lightblue"},
// 	{name: "Neutral", count: 563, color: "lightgreen"},
// 	{name: "Unsatisfied", count: 510, color: "pink"},
// 	{name: "No comment", count: 175, color: "silver"}
// ];
// var cx = document.querySelector("canvas").getContext("2d");
// 	var total = results.reduce(function(sum, choice) {
// 		return sum + choice.count;
// 	}, 0);
// 	// Start at the top
// 	var currentAngle = -0.5 * Math.PI;
// 	results.forEach(function(result) {
// 		var sliceAngle = (result.count / total) * 2 * Math.PI;
// 		cx.beginPath();
// 		// center=100,100, radius=100
// 		// from current angle, clockwise by slice's angle
// 		cx.arc(100, 100, 100,
// 					 currentAngle, currentAngle + sliceAngle);
// 		currentAngle += sliceAngle;
// 		cx.lineTo(100, 100);
// 		cx.fillStyle = result.color;
// 		cx.fill();
// 	});

//Texto
// var cx = document.querySelector("canvas").getContext("2d");
// 	cx.font = "28px Georgia";
// 	cx.fillStyle = "fuchsia";
// 	cx.fillText("I can draw text, too!", 10, 50);

//Transformações
var cx = document.querySelector("canvas").getContext("2d");
function branch(length, angle, scale) {
  cx.fillRect(0, 0, 1, length);
  if (length < 8) return;
  cx.save();
  cx.translate(0, length);
  cx.rotate(-angle);
  branch(length * scale, angle, scale);
  cx.rotate(2 * angle);
  branch(length * scale, angle, scale);
  cx.restore();
}
cx.translate(300, 0);
branch(60, 0.5, 0.8);
