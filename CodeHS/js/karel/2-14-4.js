function start(){
    for(var i = 0; i < 13; i++){
        abcdefg();
    }

}

function abcdefg(){
    if(frontIsClear()){
	    move();
	}else{
        jumpHurdle();
	}
}

function jumpHurdle(){
    turnLeft();
    move();
    turnRight();
    move();
    turnRight();
    move();
    turnLeft();
}