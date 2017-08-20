function Mato() {
  this.x = 0;
  this.y = pal;
  this.xspeed = 1;
  this.yspeed = 0;
  this.häntä = [];
  this.total = 0;

  this.update = function() {
    if (this.total === this.häntä.length) {
      for (var i = 0; i < this.häntä.length - 1; i++) {
        this.häntä[i] = this.häntä[i + 1];
      }
    }

    this.häntä[this.total - 1] = createVector(this.x, this.y);

    this.x += this.xspeed * grid;
    this.y += this.yspeed * grid;

    this.takasin();
    this.kuoli();
  }

  this.dir = function(a, b) {
    this.xspeed = a;
    this.yspeed = b;
  }

  this.kuoli = function() {
    for (var i = 0; i < this.häntä.length; i++) {
      var d = dist(this.x, this.y, this.häntä[i].x, this.häntä[i].y);
      if (d < 1) {
        this.resetoi();
        console.log("KUOLIT");
      }
    }
  }

  this.resetoi = function() {
    this.total = 0;
    this.häntä = [];
    this.xspeed = 0;
    this.yspeed = 0;
    this.x = 0;
    this.y = pal;
    ruoka.uusipaikka();
  }

  this.takasin = function() {
    if (this.x > width - grid) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = width;
    }
    if (this.y > height - grid) {
      this.y = pal;
    }
    if (this.y < pal) {
      this.y = height;
    }
  }

  this.show = function() {
    fill(255);
    for (var i = 0; i < this.häntä.length; i++) {
      rect(this.häntä[i].x, this.häntä[i].y, grid, grid);
    }
    rect(this.x, this.y, grid, grid);
  }
}
