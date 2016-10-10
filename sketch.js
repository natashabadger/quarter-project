var w = window.innerWidth;
var h = window.innerHeight;

var b;
var r;
var a;

var started;
var ended;


var boids = [];
var maxBoids = 20;
var attractors = [];
var maxAtt = 1;
var repellers = [];
var maxRep = 1;

var hit = false;

function setup(){
  createCanvas(w, h);
  Boid.prototype = new Mover();
  Repeller.prototype = new Mover();
  Attractor.prototype = new Mover();
  b = new Boid();
  r = new Repeller();
  a = new Attractor();

  started = false;
  ended = false;

  loadBoids();
}

function draw(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  background(80);

  if(!started && !ended){
    menu();
  }
  else if (started && !ended){
    layout();
  }
  else if(!started && ended){
    //gameOver();
  }
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function loadBoids(){
  for(var i = 0; i < maxBoids; i++){
    boids.push(i);
    boids[i] = new Boid();
  }
  for(var i = 0; i < maxAtt; i++){
    attractors.push(i);
    attractors[i] = new Boid();
  }
  for(var i = 0; i < maxRep; i++){
    repellers.push(i);
    repellers[i] = new Boid();
  }
}

function runBoids(){
  for(var i = 0; i < maxBoids; i++){
    boids[i].run();
    boids[i].checkEdges();
  }
  // for(var i = 0; i < maxAtt; i++){
  //   attractors[i].run();
  //   attractors[i].checkEdges();
  // }
  // for(var i = 0; i < maxRep; i++){
  //   repellers[i].run();
  //   repellers[i].checkEdges();
  // }
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function layout(){
  runBoids();

  noStroke();
  fill(200, 50, 200);
  rect(400,100,200,100);

  function keyPressed(){
    if(keyCode == UP_ARROW){
      ended = true;
    }
  }
}
function menu(){
  fill(50, 70, 255);
  rect(w/2 - 50, h/2 - 25, 100, 50);
  textSize(20);
  fill(255, 0, 100);
  text("start game", w/2 - 45, h/2 + 5);

  if(collidePointRect(mouseX, mouseY, w/2 - 50, h/2 - 25, 100, 50)){
    fill(255);//change color!\
    rect(w/2 - 50, h/2 - 25, 100, 50);
    textSize(20);
    fill(255, 0, 100);
text("start game", w/2 - 45, h/2 + 5);
  }
  if(collidePointRect(mouseX, mouseY, w/2 - 50, h/2 - 25, 100, 50) && mouseIsPressed){
    fill(255);//change color!\
    rect(w/2 - 50, h/2 - 25, 100, 50);
    textSize(20);
    fill(255, 0, 100);
text("start game", w/2 - 45, h/2 + 5);
    started = true;
  }
}

// function gameOver(){
// }
