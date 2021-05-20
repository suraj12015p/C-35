var ball;
var locnode;
var position;

function setup(){
    database = firebase.database()
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    locnode = database.ref("Ball/Position")
    locnode.on ("value",readposition,showerror);
    
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writeposition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeposition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writeposition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writeposition(0,+1);
    }
    drawSprites();
}


function readposition(data){
position = data.val()
ball.x = position.x 
ball.y = position.y

}

function writeposition(x,y){
    database.ref("Ball/Position").set({ 
        "x": ball.x+x,
        "y": ball.y+y, 
    })
    }     
    function showerror(){
        console.log("error")
    }

