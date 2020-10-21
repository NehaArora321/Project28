class Stone{
    constructor(x,y,radius){
        var options={
            isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
        }
        this.radius=radius;
        this.body=Bodies.circle(x,y,radius/2,options);
        
        this.image=loadImage("sprites/stone.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        this.body.debug=true;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius*2,this.radius*2);
       
    }
}