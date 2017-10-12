// creating the setup function
function setup() {

// creating the canvas
createCanvas(700,700);

// creating the background and adding color to it
background('cyan');
}

// creating the drawing function
function draw(){

// creating the main sandbox
// **CHARACTER SANDBOX********************************
push();

// moving the grid to the center of the canvas
translate(325, 275);

// **HORNS********************************
push();

// creating left horn code
noStroke();
fill('rgb(218, 206, 166)');
arc(-105, -135, 120, 145, QUARTER_PI, HALF_PI);

// creating right horn code
noStroke();
scale(-1,1);
fill('rgb(218, 206, 166)');
arc(-145, -135, 120, 145, QUARTER_PI, HALF_PI);

pop();
// **END HORNS**

// **BODY********************************
push();

// creating the body code
noStroke();
fill('rgb(219, 226, 61)');
ellipse(20, 20, 300, 300);

pop();
// **END BODY**

// **EYE********************************
push();

// creating the eye code
stroke('rgb(96, 133, 40)');
strokeWeight(5);
fill('rgb(252, 253, 245)');
ellipse(20, -35, 135, 135);

// creating eye color code
noStroke();
fill('rgb(17, 116, 95)');
ellipse(20, -35, 50, 50);

// creating eye pupil code
noStroke();
fill('black');
ellipse(20, -35, 25, 25);

// creating eye light code
noStroke();
fill('white');
ellipse(7, -45, 12, 12);

pop();
// **END EYE**

// **MOUTH********************************
push();

// creating the mouth code
noStroke();
fill('black');
arc(20, 53, 197, 170, 0, PI);

// creating first tooth code
noStroke();
fill('rgb(218, 206, 166)');
triangle(-60, 53, -40, 83, -20, 53);

// creating second tooth code
noStroke();
fill('rgb(218, 206, 166)');
triangle(-20, 53, 0, 83, 20, 53);

// creating third tooth code
noStroke();
fill('rgb(218, 206, 166)');
triangle(20, 53, 40, 83, 60, 53);

// creating fourth tooth code
noStroke();
fill('rgb(218, 206, 166)');
triangle(60, 53, 80, 83, 100, 53);

pop();
// **END MOUTH**

// **RIGHT ARM********************************
push();

// creating fingernail code
noStroke();
fill('rgb(218, 206, 166)');
triangle(-245, -150, -255, -145, -255, -170);

// creating finger code
stroke('rgb(219, 226, 61)');
strokeWeight(17);
line(-240, -90, -250, -150);

// creating thumbnail code
noStroke();
fill('rgb(218, 206, 166)');
triangle(-206, -130, -197, -125, -190, -138);

// creating thumb code
stroke('rgb(219, 226, 61)');
strokeWeight(17);
line(-240, -90, -204, -125);

// creating right arm code
stroke('rgb(219, 226, 61)');
strokeWeight(17);
line(-133, 35, -235, 40);
line(-235, 40, -240, -90);
line(-240, -90, -204, -125);

pop();
// **END RIGHT ARM**

// **LEFT ARM********************************
push();

//creating fist code
noStroke();
fill('rgb(219, 226, 61)');
ellipse(252, 139, 37, 37)

// creating left arm code
stroke('rgb(219, 226, 61)');
strokeWeight(17);
line(173, 35, 250, 45);
line(250, 45, 252, 139);

pop();
// **END LEFT ARM**

// **RIGHT LEG********************************
push();

// creating right leg code
stroke('rgb(219, 226, 61)');
strokeWeight(17);
line(-50, 155, -70, 217);
line(-70, 217, -70, 305);

// creating toe code
line(-70, 305, -110, 305);

// creating toenail code
noStroke();
fill('rgb(218, 206, 166)');
triangle(-130, 303, -115, 313, -115, 300);

pop();
// **END RIGHT LEG**

// **LEFT LEG********************************
push();

// creating left leg code
stroke('rgb(219, 226, 61)');
strokeWeight(17);
line(85, 155, 105, 217);
line(105, 217, 105, 305);

// creating toe code
line(105, 305, 145, 305);

// creating toenail code
noStroke();
scale(-1,1);
fill('rgb(218, 206, 166)');
triangle(-165, 303, -150, 313, -150, 300);

pop();
// **END LEFT LEG**

// **END CHARACTER SANDBOX******************************
pop();

}
