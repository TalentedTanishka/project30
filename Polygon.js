class Polygon
{
  constructor(x, y, width , height) {
    var options = { 
      'isStatic' : false,
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width , height, options);
    this.height = height;
    this.width = width;
    this.image = loadImage("sprites/polygone.png")
    World.add(world, this.body);
  }
  display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    fill(180,39,219);
    strokeWeight(2);
    imageMode(CENTER);
   image( this.image , 0, 0, this.width , this.height);
    pop();
  }
  }
  