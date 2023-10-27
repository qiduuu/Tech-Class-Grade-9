function start() {
    cleanRow();
    comeBack();
    if(rightIsClear()){
        moveUp();
    }
    while(leftIsClear()){
        cleanRow();
        comeBack();
        moveUp();
    }
    cleanRow();
    comeBack();
    turnLeft();
    while(frontIsClear()){
        move();
    }
    turnLeft();
    if(facingWest()){
        while(frontIsClear()){
            move();
        }
        turnAround();
    }
}

function cleanRow(){
    while(frontIsClear()){
        if(ballsPresent()){
            takeBall();
        }
        move();
        if(ballsPresent()){
            takeBall();
        }
    }
}

function comeBack(){
    turnAround();
    while(frontIsClear()){
        move();
    }
}

// moves up
function moveUp(){
    if(ballsPresent()){
        takeBall();    
    }
    turnRight();
    move();
    turnRight();
    if(ballsPresent()){
        takeBall();    
    }
}