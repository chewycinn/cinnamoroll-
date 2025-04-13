const canvas = document.getElementById('heart-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function Heart() {
  this.x = Math.random() * canvas.width;
  this.y = canvas.height + Math.random() * 100;
  this.size = Math.random() * 20 + 10;
  this.speedY = Math.random() * 1 + 0.5;
  this.alpha = Math.random() * 0.5 + 0.5;
}

Heart.prototype.draw = function () {
  ctx.save();
  ctx.globalAlpha = this.alpha;
  ctx.fillStyle = '#ff69b4';
  ctx.beginPath();
  ctx.moveTo(this.x, this.y);
  ctx.bezierCurveTo(this.x - this.size / 2, this.y - this.size / 2, this.x - this.size, this.y + this.size / 3, this.x, this.y + this.size);
  ctx.bezierCurveTo(this.x + this.size, this.y + this.size / 3, this.x + this.size / 2, this.y - this.size / 2, this.x, this.y);
  ctx.fill();
  ctx.restore();
};

Heart.prototype.update = function () {
  this.y -= this.speedY;
  if (this.y < -this.size) {
    this.y = canvas.height + Math.random() * 100;
    this.x = Math.random() * canvas.width;
  }
};

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((heart) => {
    heart.update();
    heart.draw();
  });
  requestAnimationFrame(animate);
}

for (let i = 0; i < 50; i++) {
  hearts.push(new Heart());
}

animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
