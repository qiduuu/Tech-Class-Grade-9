function start(){
    var baller = 0;
    move();
    while(ballsPresent()){
        takeBall();
        baller += 1;
    }
    while(noBallsPresent()){
        for(var i = 0; i < baller; i++){
            putBall();
            putBall();
        }
    }
    turnAround1();
    move1();
    turnAround2();
}

// useless
function move1(){
    move();
}

// useless
function turnAround1(){
    turnAround();
}

// useless
function turnAround2(){
    turnAround();
}