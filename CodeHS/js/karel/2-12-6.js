function start() {
    if(facingNorth()){
        makeRightSquare();
        putBall();
        move();
        putBall();
        makeLeftSquare();
        move();
        putBall();
        turnLeft();
        move();
        putBall();
        turnLeft();
        move();
        turnAround();
    } else {
        putBall();
        move();
        putBall();
        turnLeft();
        move();
        putBall();
        turnLeft();
        move();
        putBall();
        turnLeft();
        move();
        turnLeft();
    }
}

function makeRightSquare(){
    //for requirement
    turnRight();
}
function makeLeftSquare(){
    //for requirement
    turnLeft();
}