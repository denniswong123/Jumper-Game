function barrier() {
  this.leftPull = 3;
  this.velocity = 0;
  this.height = 10;
  this.width = 60;
  this.x = w + this.width;
  this.y = Math.floor((Math.random() * h) + 50);
  this.show = function () {
      this.x;
      this.y;
      fill(color('red'));
      strokeWeight(0);
      rect(this.x, this.y, this.width, this.height);

  }
  this.move = function () {
      this.velocity += this.leftPull;
      this.x -= this.velocity;
      if (this.x < 0) {
          this.x = w + this.width;
          this.y = Math.floor((Math.random() * h) + 10);
          this.velocity = 0;
          points += 1;
      }
  }
  
}