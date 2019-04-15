function barrier() {
  this.leftPull = 0.5;
  this.velocity = 0;
  this.height = 47;
  this.width = 75;
  this.x = w + this.width;
  this.y = Math.floor((Math.random() * h) + 50);
  this.show = function () {
      this.x;
      this.y;
      fill(color('green'));
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
      }
  }
}