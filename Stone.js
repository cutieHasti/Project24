class Stone{
    constructor(x,y,width,height,angle){
       var options = {
        'restitution':0.3,
        'friction':5,
        'density':1       
       }
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("blue");
        rect(pos.x, pos.y, this.width, this.height);
    }
}