// creating the variables and arrays
var num = [ 250, 40, 75 ];

var index = [ random ];

// creating the setup function
function setup() {
    createCanvas( windowWidth, windowHeight );
    frameRate( 10 );
}

// creating the drawing function for the layout
function draw() {
    background('rgba(0, 0, 0, 75)');

    let num1 = floor(random( 35, 500) );
    let num2 = floor(random( 25, 500) );

    let pos = addThings(num1, num2);

    rings( pos, pos, pos/100, 2 );
    rings( pos, pos, pos/150, 3 );
    rings( pos, pos, pos/200, 4 );
    rings( pos, pos, pos/400, 5 );
}

//creating the addThings function
function addThings( value1, value2 ) {
    // 1. adding the values together
    let result = value1 + value2;

    // 2. making a return value
    return result;
}

// creating the ring function
function rings( pos_x, pos_y, scale_x, scale_y ) {

  push(); // <- Start of Sandbox

  var red = floor( random(num[0]) );
  var green = floor( random(num[1]) );
  var blue = floor( random(num[2]) );

  // 1. scaling and positioning the rings

  translate( windowWidth/ 2, windowHeight/ 2 );
  scale( scale_x, scale_y );

  // 2. drawing the rings

  stroke( red, green, blue );
  strokeWeight( 20 );
  noFill();
  ellipse( 20, -35, 135, 135 );
  rotate(frameCount/ -10.0);

  pop(); // <- End of Sandbox
}
