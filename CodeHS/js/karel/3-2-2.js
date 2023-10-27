/* This program will have Karel run around the racetrack
 * 8 times. */
function start() {
    for(var i = 0; i < 32; i++){
        while(frontIsClear()){
            move1();
        }
        if(frontIsClear()){
            
        }else{
            move2();
            putBall();
        }
    }

}

// useless
function move1(){
    move();
}

// useless
function move2(){
    turnLeft();
}