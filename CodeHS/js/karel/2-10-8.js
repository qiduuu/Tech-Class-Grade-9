function start(){
	for(var i = 0; i < 5; i++){
        jumpHurdle();
    }
}

function jumpHurdle(){
    move();
    move();
    turnLeft();
    move();
    turnRight();
    move();
    turnRight();
    move();
    turnLeft();
}