
// This function has karel move across a world of 14 columns, moving if the
// front is clear, or jumping a hurdle if it is blocked.
function start(){
    for(var i = 0; i <= 12; i++){
        if(frontIsBlocked()){
            jumpHurdle();
        }else if(frontIsClear()){
            move();
        }
    }
}

// This function has karel jump a hurdle and end up on the other side.
// Precondition: Karel is facing east in front of a hurdle (one wall high)
// Postcondition: Karel is facing east on the other side of the hurdle
function jumpHurdle(){
    turnLeft();
    move();
    turnRight();
    move();
    turnRight();
    move();
    turnLeft();
}
function turnRight(){
    turnLeft();
    turnLeft();
    turnLeft();
}