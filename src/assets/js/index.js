function initCanvas() {
  const canvas = document.getElementById('heroCanvas');
  const ctx = canvas.getContext('2d');

  let width, height;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight; // Section height roughly
    canvas.width = width;
    canvas.height = document.getElementById('hero').offsetHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  // Particles
  const particles = [];
  const particleCount = 50;

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.size = Math.random() * 2 + 1;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      // NOTE: Use 'p.y' instead of 'this.y' inside the loop below
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = '#cbe1e7'; // blue-500
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) particles.push(new Particle());

  function animate() {
    ctx.clearRect(0, 0, width, canvas.height);

    particles.forEach((p, index) => {
      p.update();
      p.draw();

      // Connect lines
      for (let j = index + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          ctx.beginPath();
          ctx.strokeStyle = `rgb(203, 225, 231)`; // Fade out
          // ctx.strokeStyle = `rgba(12, 115, 140, ${1 - distance / 300})`; // Fade out
          ctx.lineWidth = 1.2;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    });
    requestAnimationFrame(animate);
  }
  animate();
}

window.addEventListener('DOMContentLoaded', () => {
  initCanvas();
});