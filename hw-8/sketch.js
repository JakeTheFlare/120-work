//creating the setup function
function setup() {

//setting up the canvas
  createCanvas ( windowWidth, 400 );

//setting up the framerate
  frameRate ( 4 );

//turning off the cursor
  noCursor ();

}

//creating the draw function
function draw() {

//moving the sketch a little to the center
  translate ( 20, 20 );

//assigning the background color
  background ( 219, 73, 172 );

//drawing out the ellipse 'for' loop
  for ( var x = 0; x <= width; x += 60 ) {
    for ( var y = 0; y <= height; y += 40 ) {
      fill ( random(255), 0, random(255) );
      ellipse ( x, y, 45, 45 );
      stroke( 0, random(255), random(255) );
      strokeWeight ( 3 );
   }
 }

//drawing out the line 'for' loop
  for ( var i = 30; i < 1300; i += 60 ) {
    translate ( 0, -20 )
    line ( i, i*20, i, 0 );
    strokeWeight ( 3 );
    stroke ( random(255), 0, random(255) );
  }
}
