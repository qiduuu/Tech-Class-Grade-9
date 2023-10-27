function start(){
    checkForBalls();
    
	while(frontIsClear()){
	    checkForBalls();
	    move();
	    checkForBalls();
	}
}

function checkForBalls(){
    if(ballsPresent()){
	        
    }else{
        putBall();
	}
}