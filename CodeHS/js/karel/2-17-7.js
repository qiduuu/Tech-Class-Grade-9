/* This program draws a big tower from Karel's starting spot */
function start(){
    putBall();
    turnNorth();
    buildTower();
}

// This function has karel face north, no matter what direction
// karel starts facing.
function turnNorth(){
    if(facingEast()){
        turnLeft();
    }else if(facingWest()){
        turnLeft();
        turnLeft();
        turnLeft();
    }else if(facingSouth()){
        turnLeft();
        turnLeft();
    }
}

// This function builds a tower all the way to the top of the world.
function buildTower(){
    while(frontIsClear()){
        move();
        putBall();
    }
}