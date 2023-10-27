function start() {
    buildTower();
    
    while(frontIsClear()){
        move();
        if(frontIsClear()){
            move();
            buildTower();
        }
    }
}

// builds a tower
function buildTower(){
    turnLeft();
    putBall();
    move();
    putBall();
    move();
    putBall();
    turnAround();
    move();
    move();
    turnLeft();
}