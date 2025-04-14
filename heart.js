// Hearts Animation: Floating hearts in the background
const canvas = document.getElementById('heart-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];

class Heart {
  constructor() {
    this.size = Math.random() * 5 + 5;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    this.opacity = Math.random() * 0.5 + 0.3;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 105, 180, ' + this.opacity + ')';
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
    if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;

    this.draw();
  }
}

// Create hearts on the screen
function createHearts() {
  if (hearts.length < 100) {
    hearts.push(new Heart());
  }
}

// Update hearts on the canvas
function animateHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  createHearts();
  hearts.forEach((heart, index) => {
    heart.update();
    if (heart.opacity <= 0) {
      hearts.splice(index, 1);
    }
  });
  requestAnimationFrame(animateHearts);
}

animateHearts();
