class PyramidShape
{


  constructor()
  {
    this.p1 = createVector(-50,  50, 0);
    this.p2 = createVector(-50, -50, 0);
    this.p3 = createVector( 50, -50, 0);
    this.p4 = createVector( 50,  50, 0);

    // This points should interpolate up and down the pyramid sides.
    // pi for point interpolation
    this.pi1 = createVector(-12,  12, 60);
    this.pi2 = createVector(-12, -12, 60);
    this.pi3 = createVector( 12, -12, 60);
    this.pi4 = createVector( 12,  12, 60);

    this.p5 = createVector(0, 0, 80); // this is the top point
  }

  update()
  {
  }

  display()
  {
    // this pyramid has 4 sides, each drawn as a separate triangle
    // each side has 3 vertices, making up a triangle shape
    // the parameter " t " determines the size of the pyramid
    push();
    stroke('#08329B');
    strokeWeight(2);
    point(this.p1.x, this.p1.y, this.p1.z);
    point(this.p2.x, this.p2.y, this.p2.z);
    point(this.p3.x, this.p3.y, this.p3.z);
    point(this.p4.x, this.p4.y, this.p4.z);
    
    stroke('#FF329B');
    point(this.p5.x, this.p5.y, this.p5.z);
    pop();

    push();
    // the cap
    stroke('#353535');
    strokeWeight(2);
    point(this.pi1.x, this.pi1.y, this.pi1.z);
    point(this.pi2.x, this.pi2.y, this.pi2.z);
    point(this.pi3.x, this.pi3.y, this.pi3.z);
    point(this.pi4.x, this.pi4.y, this.pi4.z);
    pop();


    push();
    beginShape(TRIANGLES);
    fill('#5a5a5a');
    vertex( this.pi1.x, this.pi1.y, this.pi1.z);
    vertex( this.pi2.x, this.pi2.y, this.pi2.z);
    vertex( this.p5.x, this.p5.y, this.p5.z);
  
    vertex( this.pi2.x, this.pi2.y, this.pi2.z);
    vertex( this.pi3.x, this.pi3.y, this.pi3.z);
    vertex( this.p5.x, this.p5.y, this.p5.z);
  
    vertex( this.pi3.x, this.pi3.y, this.pi3.z);
    vertex( this.pi4.x, this.pi4.y, this.pi4.z);
    vertex( this.p5.x, this.p5.y, this.p5.z);
    
    vertex( this.pi4.x, this.pi4.y, this.pi4.z);
    vertex( this.pi1.x, this.pi1.y, this.pi1.z);
    vertex( this.p5.x, this.p5.y, this.p5.z);
    endShape();
    pop();

    beginShape(TRIANGLES);
    noFill();
    strokeWeight(0.2);
    stroke('#aeaeae');

    vertex( this.p1.x, this.p1.y, this.p1.z);
    vertex( this.p2.x, this.p2.y, this.p2.z);
    vertex( this.p5.x, this.p5.y, this.p5.z);
  
    vertex( this.p2.x, this.p2.y, this.p2.z);
    vertex( this.p3.x, this.p3.y, this.p3.z);
    vertex( this.p5.x, this.p5.y, this.p5.z);
  
    vertex( this.p3.x, this.p3.y, this.p3.z);
    vertex( this.p4.x, this.p4.y, this.p4.z);
    vertex( this.p5.x, this.p5.y, this.p5.z);
    
    vertex( this.p4.x, this.p4.y, this.p4.z);
    vertex( this.p1.x, this.p1.y, this.p1.z);
    vertex( this.p5.x, this.p5.y, this.p5.z);
  
    endShape();
  }
}