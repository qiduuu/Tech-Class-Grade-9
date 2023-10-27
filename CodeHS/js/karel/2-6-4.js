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

function turnRight(){
    turnLeft();
    turnLeft();
    turnLeft();
}

function placeBalls(){
    putBall();
    move();
    putBall();
    move();
    putBall();
}