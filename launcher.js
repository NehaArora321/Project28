class Launcher{
    constructor(vbodyA,vpointB){
        var options={
            bodyA:vbodyA,
            pointB:vpointB,
            stiffness:0.004,
            length:1
        }
        this.bodyA=vbodyA
        this.launch=Constraint.create(options);
        World.add(world,this.launch);
    }

    attach(){
        this.launch.bodyA=this.bodyA;  
    }

    fly(){
        this.launch.bodyA=null;
    }

    display(){
        if(this.launch.bodyA){
        var posA=this.launch.bodyA.position;
        var posB=this.launch.pointB;
        line(posA.x,posA.y,posB.x,posB.y);
        }
    }
}