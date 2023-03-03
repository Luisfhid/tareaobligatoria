//INCIALIZAR
function setup() {
  var canvas=createCanvas(450,600);
  //asocio el lienzo al div contenedor de html
  canvas.parent('contenedor');
  //color de fondo gris -> 209, 242, 235
  background(209, 242, 235);
}

//POR SIEMPRE
function draw() {
  background(209, 242, 235);
  fill("green")
  text("BANDERA DE ESPAÑA",50,50);
  fill("red")
  rect(100,75,250,50);
  fill("yellow")
  rect(100,125,250,100);
  fill("red")
  rect(100,225,250,50);
  text("BANDERA DE JAPÓN",50,350);
  fill("white")
  rect(100,375,250,200);  
  fill("red");
  circle(225,475,100);
}

