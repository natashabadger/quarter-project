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
//++++++++++++++++++++  Predator Code
var x = [];
var y = [];
segNum = 33,
segLength = 12;
var head, player;

for (var i = 0; i < segNum; i++) {
  x.push(0);
  y.push(0);
}



function setup(){
  createCanvas(w, h);
  r = new Repeller();
  a = new Attractor();
  started = false;
  ended = false;
  head = new Ball();
  player = new Player();
  loadBoids();
}

function draw(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  background(255);

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
    boids.push(new Boid());
    //boids[i] = new Boid();
  }

}

function runBoids(){
  for(var i = 0; i < maxBoids; i++){
    boids[i].run();
  }
  //console.log("numbods = " + boids.length);
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function menu(){
  fill(30, 100, 255);
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


function layout(){
  fill(30, 100, 255);
  rect(400,100,400,200);
  runBoids();
  player.run();
  noStroke();
  head.run();
  dragSegment(0, head.loc.x, head.loc.y);
  for( var i=0; i < x.length-1; i++) {
    dragSegment(i+1, x[i], y[i], i);
  }

  function keyPressed(){
    if(keyCode == UP_ARROW){
      ended = true;
    }
  }
}


function dragSegment(i, xin, yin, ind) {
  var dx = xin - x[i];
  var dy = yin - y[i];
  var angle = atan2(dy, dx);
  //  alert("dx =" + dx + "dy = " + dy + "angle  = "  angle);
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle, ind);
}

function segment(x, y, a, ind) {
  push();
  translate(x, y);
  strokeWeight(15-(ind/2));
  fill(30, 255, 0);
  //(255-10*ind, 0, 0, 200-ind*10);
  //stroke(255,0,0,100);
  stroke(20,255,100,200);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}

// function gameOver(){
// }
