function start(){
	move10();
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

// function to place 3 balls in a vertical line
function placeBalls(){
    putBall();
    move();
    putBall();
    move();
    putBall();
}