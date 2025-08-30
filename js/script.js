// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const animToggle = document.getElementById('anim-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light');
  themeToggle.textContent = body.classList.contains('light') ? '☀️' : '🌙';
});

// Scroll Reveal
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {threshold:0.2});
sections.forEach(sec => observer.observe(sec));

// Skills animation
const skillFills = document.querySelectorAll('.fill');
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.style.getPropertyValue('--percent');
    }
  });
}, {threshold:0.5});
skillFills.forEach(fill => skillObserver.observe(fill));

// Particle Animation
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
function initParticles() {
  particlesArray = [];
  for (let i = 0; i < 100; i++) {
    particlesArray.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: Math.random() * 1 - 0.5,
      speedY: Math.random() * 1 - 0.5
    });
  }
}
function animateParticles() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particlesArray.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
    ctx.fillStyle = 'rgba(0,255,255,0.7)';
    ctx.fill();
    p.x += p.speedX;
    p.y += p.speedY;
    if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
    if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
  });
  requestAnimationFrame(animateParticles);
}
initParticles();
animateParticles();

// Toggle Particle Animation
let animEnabled = true;
animToggle.addEventListener('click', () => {
  animEnabled = !animEnabled;
  if (!animEnabled) {
    ctx.clearRect(0,0,canvas.width,canvas.height);
  } else {
    animateParticles();
  }
});

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});
