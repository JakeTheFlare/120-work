//creating global variables

var galaxyRotationRate = 0;
var galaxyWidth = 350;
var galaxyHeight = 350;
var mercAngle = 0;
var venusAngle = 0;
var earthAngle = -15;
var marsAngle = -15;
var jupAngle = -30;
var saturnAngle = -30;
var uranusAngle = -45;
var nepAngle = -45;

//creating the setup function
  function setup() {

//creating the canvas
  createCanvas( windowWidth, windowHeight ) ;

//setting the frame rate for the sketch
  frameRate ( 10 );

}

//creating the drawing function
  function draw() {

//creating the main sandbox
//SOLAR SYSTEM

push();

//making the solar system follow the mouse
  translate ( mouseX, mouseY );

//creating the background
  background( 'black' );

//turning off the cursor
  noCursor();

//starting the rings sandbox
//RINGS

//creating the solar system's ring ellipses
push();

    stroke( 'silver' );
    strokeWeight( 1 );
    noFill();
    translate( 0, -100 );

    //creating the first ring of the solar system
    ellipse( 0, 0, galaxyWidth, galaxyHeight );
    noFill();

    //creating the second ring of the solar system
    ellipse( 0, 0, galaxyWidth*0.8, galaxyHeight*0.8 );
    noFill();

    //creating the third ring of the solar system
    ellipse( 0, 0, galaxyWidth*0.6, galaxyHeight*0.6 );
    noFill();

    // creating the fourth ring of the solar system
    ellipse( 0, 0, galaxyWidth*0.4, galaxyHeight*0.4 );
    noFill();

//ending the rings sandbox
pop();

//creating the Sun
//SUN
push();

    noStroke();
    fill( 'yellow' );
    translate( 0, -100 );
    ellipse ( 0, 0, 90, 90 );

//not going to make the sun rotate because it's in the center and there's no need

//ending the Sun
pop();

//creating Mercury
//MERCURY
push();

    noStroke();
    fill( 'rgb(205, 201, 201)' );
    translate( 0, -100 );
    rotate( radians(mercAngle) );
    ellipse ( -50, -50, 20, 20 );

//update Mercury's angle position
  mercAngle = mercAngle + 10;

//ending Mercury
pop();

//creating Venus
//VENUS
push();

    noStroke();
    fill( 'rgb(255, 140, 0)' );
    translate( 0, -100 );
    rotate( radians(venusAngle) );
    ellipse ( 50, 50, 20, 20 );

//update Venus' angle position
  venusAngle = venusAngle + 10;

//ending Venus
pop();

//creating Earth
//EARTH
push();

    noStroke();
    fill( 'green' );
    translate( 0, -100 );
    rotate( radians(earthAngle) );
    ellipse ( -75, -75, 30, 30 );

//update Earth's angle position
  earthAngle = earthAngle + 10;

//ending Earth
pop();

//creating Mars
//MARS
push();

    noStroke();
    fill( 'red' );
    translate( 0, -100 );
    rotate( radians(marsAngle) );
    ellipse ( 75, 75, 30, 30 );

//update Mars' angle position
  marsAngle = marsAngle + 10;

//ending Mars
pop();

//creating Jupiter
//JUPITER
push();

    noStroke();
    fill( 'tan' );
    translate( 0, -100 );
    rotate( radians(jupAngle) );
    ellipse ( -100, -100, 40, 40 );

//update Jupiter's angle position
  jupAngle = jupAngle + 10;

//ending Jupiter
pop();

//creating Saturn
//Saturn
push();

    noStroke();
    fill( 'rgb(238, 221, 130)' );
    translate( 0, -100 );
    rotate( radians(saturnAngle) );
    ellipse ( 100, 100, 30, 30 );

//update Saturn's angle position
  saturnAngle = saturnAngle + 10;

//ending Saturn
pop();

//creating Uranus
//URANUS
push();

    noStroke();
    fill( 'rgb(224, 255, 255)' );
    translate( 0, -100 );
    rotate( radians(uranusAngle) );
    ellipse ( -125, -125, 25, 25 );

//update Uranus' angle position
  uranusAngle = uranusAngle + 10;

//ending Uranus
pop();

//creating Neptune
//NEPTUNE
push();

    noStroke();
    fill( 'rgb(0, 0, 128)' );
    translate( 0, -100 );
    rotate( radians(nepAngle) );
    ellipse ( 125, 125, 25, 25 );

//update Neptune's angle position
  nepAngle = nepAngle + 10;

//ending Neptune
pop();

//ending the main sandbox
pop();

}
