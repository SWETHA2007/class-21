
function isTouching(ball1,ball2){
    if(  ball1.x - ball2.x  < ball1.width/2  + ball2.width/2      
        &&  ball2.x - ball1.x  < ball1.width/2  + ball2.width/2      
        &&  ball1.y - ball2.y  < ball1.height/2  + ball2.height/2      
        &&  ball2.y - ball1.y  < ball1.height/2  + ball2.height/2             ) {
            return true;
   }
else{
        return false;
}





}
