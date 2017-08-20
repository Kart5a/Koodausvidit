function Ruoka() {
  this.x = floor(Math.random() * width / grid) * grid;
  this.y = floor(Math.random() * height / grid) * grid;

  this.uusipaikka = function() {
    this.x = floor(Math.random() * width / grid) * grid;
    this.y = floor(Math.random() * height / grid) * grid;
  }

  this.update = function() {
    this.syö();
  }

  this.syö = function() {
    var d = dist(this.x, this.y, mato.x, mato.y);
    if (d < 1) {
      this.uusipaikka();
      mato.total++;
    }
  }

  this.show = function() {
    fill(255, 0, 80);
    rect(this.x, this.y, grid, grid);
  }
}
