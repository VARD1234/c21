function bounceoff(movingRect,fixedRect)
{
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2)
     {
  movingRect.velocityX = (-1)*movingRect.velocityX;
}
else if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)
   {
    movingRect.velocityY = (-1)*movingRect.velocityY;
 
}
}