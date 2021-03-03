class Hammer{
    constructor(x,y){
       var options = {
         'density':2,
         'friction':1,
        'restitution':0.5
          
       }
       this.body = Bodies.rectangle(x,y,50,50,options);
       this.width = 150;
       this.height = 40;
       World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle = this.body.angle;
        push();
        translate()
        rectMode(CENTER);
        fill("green");
        rect(pos.x, pos.y, this.width, this.height);
     
}
}