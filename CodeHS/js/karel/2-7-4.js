function start(){
	move();
	turnLeft();
	placeBalls();
	move();
	turnRight();
	move();
	move();
	turnRight();
	move();
	placeBalls();
	turnLeft();
	turnLeft();
	move();
	move();
	move();
	turnRight();
}

// Function to turn right
function turnRight(){
    turnLeft();
    turnLeft();
    turnLeft();
}

// function to place 3 balls in a vertical line
function placeBalls(){
    putBall();
    move();
    putBall();
    move();
    putBall();
}