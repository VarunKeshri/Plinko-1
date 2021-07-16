class particle{
    constructor(x,y,r){
        var options={
            restitution:0.5

        }
        this.r=r
        this.body=Bodies.circle(x,y,this.r,options)
        this.colors=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);


    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.colors);
        ellipse();
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();

    }
}