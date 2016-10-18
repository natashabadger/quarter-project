

function Boid() {
	this.force = createVector(0,0);
	this.force2 = createVector(0,0);
	this.acc = createVector(random(.1, .9), random(-.9, .1));
	this.vel = createVector(random(-3, 3), random(-3, 3));
	this.loc = createVector(random(w), random(h));

	this.run = function() {
		this.update(this.force);// default = (0,0)
		this.checkEdges();
		this.render();
	}
	this.render = function() {
		push();
		fill(255, 0, 100);
		noStroke();
		ellipse(this.loc.x, this.loc.y, 15, 15);
		pop();

	}
	this.applyForce = function (f) {
		this.acc.add(f);
	}
	this.update = function(force) {
		this.force = force; // Incase we want to send f
		this.force2 = force; // Incase we want to send f

		this.fear = random(100, 200);
		//calc force vector
		this.force = p5.Vector.sub(this.loc,r.loc);
		this.force2 = p5.Vector.sub(this.loc,a.loc);
		this.force.normalize();
		this.force.mult(.1);
		this.force2.normalize();
		this.force2.mult(.1);
		// If in range of r--run for your life!
		for (var i = 0; i < repellers.length; i++){
			if(this.loc.dist(repellers[i].loc) < 50){
				this.applyForce(this.force);
				this.vel.add(this.force);
				this.vel.limit(random(3,6));
			} else if(this.loc.dist(repellers[i].loc) < 90){
				this.applyForce(this.force);
				this.vel.add(this.force);
				this.vel.limit(random(1,2));
			}
			else if(this.loc.dist(attractors[i].loc) < 150){
				this.applyForce(this.force2);
				//this.vel.add(this.force2.mult(state));
				this.vel.limit(random(3,6));
			} else if(this.loc.dist(attractors[i].loc) < 200){
				this.applyForce(this.force2);
				//this.vel.add(this.force2.mult(state));
				this.vel.limit(random(1,2));
			}
			else if (true) {

			}else{
				//this.vel.add(this.force);
				this.vel.limit(1);
			}
		}
		this.loc.add(this.vel);
		this.acc.mult(0);
		//bounce off walls

	}
	this.checkEdges = function() {
		if (this.loc.x > width || this.loc.x < 0) {
			//console.log("velx = " + this.vel.x);
			this.vel.x *= (-1);
		}

		if (this.loc.y > height || this.loc.y < 0) {
			this.vel.y *= (-1);
		}
	}

}
