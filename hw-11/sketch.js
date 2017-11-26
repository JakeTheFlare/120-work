let shyguys = [];
let num_of_guys = 40;
let bg_color;

function setup () {
    createCanvas ( windowWidth, windowHeight );
    bg_color = color ( (76), (0), (153) );

    for ( let i = 0; i < num_of_guys; i++ ) {
        shyguys.push( new ShyGuys() );
    }
}

function draw () {
    background ( bg_color );

    for ( var i = 0; i < shyguys.length; i++ ) {
        shyguys[i].frame();
    }
}





/////////////////////////////////////////
//      Shy Guy Class
/////////////////////////////////////////

/**
 * Shy Guy Class. Creates all the Shy Guys running around the screen.
 *
 */
class ShyGuys {

    constructor () {
        this.size_w = 50;
        this.size_h = 80;

        this.loc_x = random ( width );
        this.loc_y = random ( height );

        this.move_x = random ( -2, 2 );
        this.move_y = random ( -2, 2 );

        this.body_color = color ( (255), (0), (0) );

        this.face_w = this.size_w * 0.8;
        this.face_h = this.size_h * 0.5;
        this.face_color = color ( (255), (255), (255) );
        this.mouth_color = color ( (0), (0), (0) );

        this.belt_x = this.size_w / -2;
        this.belt_y = this.size_h / 5;
        this.belt_color = color ( 'brown' );

        this.size_w = this.size_w;
        this.size_h = this.size_h;

        this.eye_x = this.size_w * 0.165;
        this.eye_y = this.size_h * 0.33 * -1;
        this.eye_size = this.size_w * 0.25;

        this.arm_x = this.size_w * 0.50 + ( this.size_w * 0.30 );
        this.arm_y = this.size_h * 0.025;
        this.arm_w = this.size_w * 0.55;
        this.arm_h = this.size_h * 0.2;
        this.arm_angle = -20;

        this.feet_x = this.size_w * 0.25 + ( this.size_w * 0.10 );
        this.feet_y = this.size_h * 0.5;
        this.feet_w = this.size_w * 0.75;
        this.feet_h = this.size_h * 0.4;
        this.left_foot_angle = 0;
        this.right_foot_angle = 0;
        this.foot_angle_delta = 11;
        this.foot_angle_max = -5;
        this.active_foot = 0;

    }

    // the once per frame function
    frame () {
        this.feetAngle ();
        this.display ();
        this.move ();
    }

    // the function that displays the screen content
    display () {

        // Shy Guy Bodies
        push ();

        translate ( this.loc_x, this.loc_y );
        fill ( this.body_color );
        ellipse ( 0, 0, this.size_w, this.size_h );
        stroke ( 'black' );
        strokeWeight ( 1 );

        // belt
        push ();

        translate ( this.belt_x, this.belt_y );
        line ( 2.5, 0, 47.5, 0 );
        stroke ( this.belt_color );
        strokeWeight ( 6 );

        pop ();

        // arms

        // right arm
        push ();

        rotate ( PI * ( this.arm_angle * 0.01) );
        translate ( this.arm_x, this.arm_y );
        fill ( this.body_color );
        ellipse ( 0, 0, this.arm_w, this.arm_h );


        pop ();

        // left arm
        push ();

        rotate( PI * -(this.arm_angle * 0.01) );
        translate ( -this.arm_x, this.arm_y );
        fill ( this.body_color );
        ellipse ( 0, 0, this.arm_w, this.arm_h );

        pop ();

        // face
        push ();

        translate ( 0, -16 );
        fill ( this.face_color );
        noStroke ();
        ellipse ( 0, 0, this.face_w, this.face_h );

        pop ();

        // mouth
        push ();

        translate ( 0, -5 );
        fill ( 0 );
        ellipse ( 0, 0, this.eye_size * 0.5, this.eye_size * 0.5 );

        pop ();


        // eyes
        push ();

        fill ( 0 );
        ellipse ( -this.eye_x, this.eye_y, this.eye_size, this.eye_size );
        ellipse ( this.eye_x, this.eye_y, this.eye_size, this.eye_size );

        pop ();

        // feet

        // right foot
        push ();

        rotate ( PI * ( this.right_foot_angle * 0.01) );
        translate ( this.feet_x, this.feet_y );
        scale ( 1, -1 );
        fill ( 'blue' );
        arc ( 0, 0, this.feet_w, this.feet_h, 0, -PI, CHORD );

        pop ();

        // left foot
        push ();

        rotate( PI * -(this.left_foot_angle * 0.01) );
        translate ( -this.feet_x, this.feet_y );
        scale(-1, -1);
        fill ( 'blue' );
        arc ( 0, 0, this.feet_w, this.feet_h, 0, -PI, CHORD );

        pop ();

        pop ();
        //End of Shy Guy Body Sandbox

    }

    // the function that causes the feet to scatter
    feetAngle () {

        if ( this.active_foot === 0 ) {
            this.left_foot_angle -= this.foot_angle_delta;
            if ( this.left_foot_angle <= this.foot_angle_max ) {
                this.foot_angle_delta *= -1;
            }
            if ( this.left_foot_angle >= 0 ) {
                this.active_foot = 1;
                this.foot_angle_delta *= -1;
            }
        } else if ( this.active_foot === 1 ) {
            this.right_foot_angle -= this.foot_angle_delta;
            if ( this.right_foot_angle <= this.foot_angle_max ) {
                this.foot_angle_delta *= -1;
            }
            if ( this.right_foot_angle >= 0 ) {
                this.active_foot = 0;
                this.foot_angle_delta *= -1;
            }
        }

        // console.log ( this.left_foot_angle );
    }

    // the function that moves the Shy Guys across the screen
    move () {
        this.loc_x += this.move_x;
        this.loc_y += this.move_y;

        if ( this.loc_x >= width ) {
            this.move_x *= -1;
            this.loc_x = width - abs ( this.move_x );
        } else if ( this.loc_x <= 0 ) {
            this.move_x *= -1;
            this.loc_x = abs ( this.move_x );
        } else if ( this.loc_y >= height ) {
            this.move_y *= -1;
            this.loc_y = height - abs ( this.move_y );
        } else if ( this.loc_y <= 0 ) {
            this.move_y *= -1;
            this.loc_y = abs ( this.move_y );
        }
    }
}
