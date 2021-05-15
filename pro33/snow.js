class snow {
    constructor(x, y, radius, angle) {
      var options = { 
        isStatic:true,
        density: 1, 
        friction:0.1};
  
      this.body = Bodies.circle(x, y, radius,  options);
      this.radius = radius
      World.add(world, this.body);
    }
    update(){
      if(this.rain.position.y>700){
         Matter .Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
     
     
       }


    }
  
    display() {
     var angle = this.body.angle
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      fill("brown");
      ellipseMode (RADIUS)
      ellipse(0, 0, this.radius);
      pop();
    }
  }