function start(){
    move();
    buildTower();
    comeDown();
    move();
    move();
    buildTower();
    move();
    turnRight();
}

function turnRight(){
    turnLeft();
    turnLeft();
    turnLeft();
}

function turnAround(){
    turnLeft();
    turnLeft();
}

function comeDown(){
    turnAround();
    move();
    move();
    turnLeft();
}

function buildTower(){
    turnLeft();
    putBall();
    move();
    putBall();
    move();
    putBall();
}