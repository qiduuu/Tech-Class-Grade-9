function start() {
    move();
    turnLeft();
    for(var i = 0; i < 4; i++){
        move();
    }
    turnRight();
    move();
    takeBall();
    turnAround();
    move();
    turnLeft();
    for(var i = 0; i < 4; i++){
        move1();
    }
    turnRight1();
    move();
    putBall();
    turnAround();
}

// useless
function move1(){
    move();
}

// useless
function turnRight1(){
    turnRight();
}