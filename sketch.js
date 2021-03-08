var ball1,ball2,ball3,ball4;

function setup(){
    createCanvas(1200,800);
  ball1 = createSprite(300,500,60,120);
  ball1.shapeColor="red";

  ball2 = createSprite(160,100,60,80);
  ball2.shapeColor="red";
  
  ball3 = createSprite(450,300,60,130);
  ball3.shapeColor="yellow"

  ball4 = createSprite(600,650,70,140);
  ball4.shapeColor="blue";
}

function draw(){
    background(0)
    

    ball2.y = World.mouseY
    ball2.x = World.mouseX

    


    if(isTouching(ball2,ball3)){

        
        ball3.shapeColor="green"
        ball2.shapeColor="green"


    }else{

        ball2.shapeColor="red"
        ball3.shapeColor="yellow"

    }

drawSprites();    
}



