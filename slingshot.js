class Slingshot
{
constructor(bodyA,pointB)
{
var options={
bodyA:bodyA,
pointB:pointB,
stiffness:0.04,
length:10
}
this.pointB=pointB
this.slingShot=Constraint.create(options)
World.add(world,this.slingShot)
}

fly()
{
this.slingShot.bodyA= null
}

display()
{
if(this.slingShot.bodyA)
{
var pointA=this.slingShot.bodyA.position
var pointB=this.pointB
push()
strokeWeight(5)
stroke(0)
line(pointA.x,pointA.y,pointB.x,pointB.y)
pop()
}

}

}