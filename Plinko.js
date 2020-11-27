class Plinko{
    constructor(x, y, radius){
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x, y, radius);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        circleMode(CENTER);
        radius(10);
    }

}
