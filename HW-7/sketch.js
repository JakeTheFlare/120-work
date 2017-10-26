var ball = {};

//changing the ball.width
ball.width = 55;

ball.x = 10;
ball.y = 10;

//altering the ball's spacing along the canvas
ball.delta_x = 3;
ball.delta_y = 3;
ball.scale_x = 3;
ball.scale_y = 3;

function setup() {

//changing the canvas' size and background color
    createCanvas ( windowWidth, windowHeight );
    background ( 'silver' );

}

function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if ( ball.x >= width || ball.x <= 0 ) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if ( ball.y >= height || ball.y <= 0 ) {
        ball.delta_y = -1 * ball.delta_y;
    }

//changing the ball's color and appearence
    fill( 'gold' );
    ellipse ( ball.x, ball.y, ball.width, ball.width );
    stroke ( 'black' );
    strokeWeight ( 7 );

}

function mousePressed() {

//changing the ball's speed
    ball.scale_x = map( mouseX, 2, width, 1, 30 );
    ball.scale_y = map( mouseY, 2, height, 1, 30 );;

}
