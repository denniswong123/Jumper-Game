function barrier() {
  this.x = 400;
  this.y = 400;
  this.width = 100;
  this.height = 100;
  var speed = 10;
  var score = 0;
  this.gravity = 1; //The force of gravity
  this.lift = -50; //Opposing the force of gravity
  this.velocity = 0; //velocity of player
  
this.show = function() {
  fill(color('green'));
  rect(this.x, this.y, this.width, this.height);
};

this.up = function() {
    this.velocity += this.lift;
    this.velocity += this.gravity; //Jumping function
  };
  
this.move = function() {
  if (this.x > 0){
    this.x -= this.velocity;
  }
  else {
    this.x = w;
    this.y = Math.floor(Math.random() * h)-10;
    speed += 3;
    score += 1;
   }
   
   this.score = function(){
      document.getElementById('score').innerHTML = "Score:" + " " + points
   };
 };
}
