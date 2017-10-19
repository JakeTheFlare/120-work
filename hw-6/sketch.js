//creating the global variables

var myObj = {
  x: 10,
  y: 50
};

var col = {
  r: 255,
  g: 0,
  b: 0
};

var col_n = {
  r: 0,
  g: 0,
  b: 255
};

var xc = constrain ( 500, 500 );

//assigning the color variables

  col.r = random ( 100, 255 );
  col.g = 0;
  col.b = random ( 100, 300 );

//creating the setup function

function setup() {

//creating the canvas

  createCanvas ( windowWidth, windowHeight );

//setting the frame rate for the sketch

  frameRate ( 200 );

}

//creating the drawing function

function draw() {

//creating the map function

  col = map ( mouseX, 0, 600, 0, 300 );
  col_n = map ( mouseX, 0, 600, 300, 0 );
  background ( col, col_n );

//creating the ellipses

  myObj.x = random ( 0, width+20 );
  myObj.y = random ( 0, height+20 );
  ellipse( myObj.x+3, myObj.y-5, 40, 40 );
  fill( 'orange' );
  stroke( 'red' );
  strokeWeight( 8 );

  myObj.x = random ( 0, width-20 );
  myObj.y = random ( 0, height-20 );
  ellipse( myObj.x+5, myObj.y-3, 24, 24 );
  fill( 'yellow' );
  stroke( 'green' );
  strokeWeight( 8 );

  myObj.x = random ( 0, width );
  myObj.y = random ( 0, height );
  ellipse( myObj.x*2, myObj.y/2, 24, 24 );
  fill( 'blue' );
  noStroke();

}
