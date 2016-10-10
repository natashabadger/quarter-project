function Attractor() {
	this.render = function() {
    push();
  	  strokeWeight(4);
      fill(255);
  		stroke(20);
  		ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
  	pop();
}
}
