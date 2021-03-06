
let ps;

// fix for EasyCam to work with p5 v0.7.2
Dw.EasyCam.prototype.apply = function(n)
{
  var o = this.cam;
  n = n || o.renderer,
  n && (this.camEYE = this.getPosition(this.camEYE), this.camLAT = this.getCenter(this.camLAT), this.camRUP = this.getUpVector(this.camRUP), n._curCamera.camera(this.camEYE[0], this.camEYE[1], this.camEYE[2], this.camLAT[0], this.camLAT[1], this.camLAT[2], this.camRUP[0], this.camRUP[1], this.camRUP[2]))
};


function setup() 
{
  createCanvas(windowWidth, windowHeight, WEBGL);
  setAttributes('antialias', true);

  // define initial state
  var state = {
    distance : 282.316,
    center   : [0, 0, 0],
    rotation : [-0.548, -0.834, 0.066, -0.015],
  };

  easycam = new Dw.EasyCam(this._renderer, {distance:300, center:[0,0,0], rotation:[1,0,0,0]});
  ps = new PyramidShape();
}

function draw() 
{
  background(255);

  easycam.rotateZ(.0005);
  easycam.rotateX(-.0005);

  ps.display();
}
