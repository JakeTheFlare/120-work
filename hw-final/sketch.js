let balloons = [];
let num_of_balloons = 18;

// Creating the setup function.
function setup () {
    createCanvas ( windowWidth, windowHeight );
    frameRate ( 50 );
    noCursor ();

    for ( let i = 0; i < num_of_balloons; i++ ) {
        balloons.push ( new Balloons() );
    }
}

// Creating the drawing function to draw out the background and the balloons.
function draw () {
    background ( 'cyan' );

    for ( var i = 0; i < balloons.length; i++ ) {
        balloons[i].frame();
    }
}



//////////////////////////////////////////////////
//      BALLOON CLASS DEFINITION
//////////////////////////////////////////////////



// Creating a class called, Balloons.
class Balloons {

    // Creating the constructor that will give the balloons their actions and characteristics.
    constructor () {

        this.color = color( random(255), random(0), random(200) );

        this.size = ( 80, 140 );

        this.rad = this.size / 2;

        this.loc_x = random ( width );
        this.loc_y = random ( height );

        this.move_x = random ( -1, 0.5 );
        this.move_y = random ( -1, 0.5 );

    }

    // Giving the sketch their assignments.
    frame () {
        this.display ();
        this.move ();
        this.edgeCheck ();
    }

    // Display function: displays the content on the screen.
    display () {

        // Balloon Sandbox
        push ();

        translate ( this.loc_x, this.loc_y );
        // Tie up thing on the bottom.
        noStroke ();
        fill ( this.color )
        triangle ( -10, 80, 0, 60, 10, 80 );
        // Balloon body.
        noStroke ();
        ellipse ( 0, 0, this.size );
        // Shining spot.
        noStroke ();
        fill ( 'white' );
        ellipse ( 29, -28, 20, 34 );


        pop ();
        //End of Balloon Sandbox

    }

    // Move function: moves the balloons all around the screen.
    move () {
        this.loc_x += this.move_x;
        this.loc_y += this.move_y;
    }

    // edgeCheck function: makes the balloons bounce off the walls when they come in contact with them.
    edgeCheck() {
        // Check if the balloons have hit the left and/ or right walls.
        if ( this.loc_x + this.rad >= width || this.loc_x - this.rad <= 0 ) {
            this.move_x *= -1;
          }
        // Check if the balloons have hit the top and/ or bottom walls.
        if ( this.loc_y + this.rad >= height || this.loc_y - this.rad <= 0 ) {
            this.move_y *= -1;
          }
      }
}
