

function Player() {
  this.force = createVector(0,0);
  this.force2 = createVector(0,0);
  this.acc = createVector(random(.1, .9), random(-.9, .1));
  this.vel = createVector(random(-3, 3), random(-3, 3));
  this.loc = createVector(random(w), random(h));

  this.run = function() {
    this.update();// default = (0,0)
    this.checkEdges();
    this.render();
  }
  this.render = function() {
    fill(200, 30, 200);
    noStroke();
    ellipse(mouseX, mouseY, 50, 50);
  }
  this.applyForce = function (f) {

  }
  this.update = function(force) {


  }
  this.checkEdges = function() {


  }
}
