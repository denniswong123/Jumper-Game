function jumper() {
  this.x = 50;
  this.y = h-50;
  this.gravity = 1; //The force of gravity
  this.lift = -20; //Opposing the force of gravity
  this.velocity = 0; //velocity of player
  
  this.show = function() {
    fill(color('red'));
    rect(this.x, this.y, 50, 50);
  };
  
  this.up = function() {
    this.velocity += this.lift;
    this.velocity += this.gravity; //Jumping function
  };
  
  this.move = function() {
        
      if ((keyIsDown(68)) && (this.x < w-30)) { //key D
      this.x += 10;
      }
      
      if ((keyIsDown(65)) && (this.x > 30)) { //key A
      this.x -= 10;
      }
      
      if ((keyIsDown(87)) && (this.y > 30)) { //key W
      this.y -= 10;
      }
      
      if ((keyIsDown(83)) && (this.y < h-30)){ //key S
      this.y += 10;
      }
      
 }
   
  this.update = function() {
    this.velocity += this.gravity; //Gravity applied when not jumping
    this.y += this.velocity;
    this.velocity *= 0.9; //Air resistance
    if (this.y > h-50) { //Jumper hits the floor
      this.y = h-50;
      this.velocity = 0;
    }
    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  };
  
  this.collide = function() {
    if (collideRectRect(barrier.x, barrier.y, barrier.width, barrier.height, this.x, this.y, 50, 50)) {
      noLoop();
    }
  }; //Object ends here
}

 function keyPressed() {
      if (keyCode === 32) {
      jumper.up();
}
   
 }