class Particle{
    constructor(x, y, r){
        var options = {
            'restitution':0.4
        }
        this.body = Bodies.circle(x, y, this.radius, options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        noStroke();
        FileList(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, thisr);
        image(this.body, 0, 0, this.width, this.height);
        pop();

    }
};
/*
for (var j = 0; j < particles.length; j++) {
    particles[j].display();
}
for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
}
*/