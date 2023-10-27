function start(){
    if(facingEast()){
        turnLeft();
    }else if(facingNorth()){
        
    }else if(facingSouth()){
        turnAround();
    }else if(facingWest()){
        turnRight();
    }
    checkForBalls();
    
	while(frontIsClear()){
	    checkForBalls();
	    useless();
	    checkForBalls();
	}
}

function checkForBalls(){
    if(ballsPresent()){
	        
    }else{
        putBall();
	}
}

function useless(){
    move();
}