
const texts = ["أنظمة آمنة","تبادل معلومات","إكتسب خبرات","إكتفاء ذاتي","تقنية متجددة"]
  let index = 0;

  setInterval(() => {
    index = (index + 1) % texts.length;
    document.getElementById("changing-text").textContent = texts[index];
  }, 2000); // Change text every 2 seconds
function home() {
  document.getElementById("main-page").style.display = "block ";  
document.getElementById("news-page").style.display ="none";    
}
function news() {
  document.getElementById("main-page").style.display = "none";  
document.getElementById("news-page").style.display ="block";
}
function confirmYes() {
document.getElementById("overlay").style.display="none"; 
document.getElementById("overlay2").style.display ="flex";
const audio = 
document.getElementById("bg-music");
audio.play();   
    setTimeout(function () {
    document.getElementById("overlay2").style.display = "none";
audio.pause();
audio.currentTime = 0;     
  }, 30000);
  setTimeout(function () {
document.getElementById("eid-overlay").style.display="block"      
  },32000)      
}
window.onload = function () {
  setTimeout(function () {  
document.getElementById("overlay").style.display ="flex";  
  },500);  
};
/*function media() {
document.getElementById("overlay").style.display="flex";  
}*/
const flowerEmojis = ['🌼', '🌹', '🌺', '💫', '🍁', '🪷', '🪻','🎉🎊💝🎊🎉'];

function createEmojiFlower() {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  flower.textContent = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];

  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight;
  const endX = Math.random() * window.innerWidth;
  const endY = Math.random() * window.innerHeight;

  flower.style.left = `${startX}px`;
  flower.style.top = `${startY}px`;

  const duration = 5 + Math.random() * 5;
  flower.style.animation = `none`;

  document.getElementById('flower-container').appendChild(flower);

  gsap.to(flower, {
    x: endX - startX,
    y: endY - startY,
    rotation: 360,
    opacity: 0,
    duration: duration,
    ease: "power1.inOut",
    onComplete: () => flower.remove()
  });
}
setInterval(createEmojiFlower, 250);

gsap.from("h1", { duration: 2, y: 100, opacity: 0, ease: "bounce" });

const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createFirework() {
  const colors = ['#ff0', '#f0f', '#0ff', '#f00', '#0f0', '#00f'];
  const count = 50;
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height / 2;
  for (let i = 0; i < count; i++) {
    particles.push({
      x,
      y,
      radius: 2 + Math.random() * 2,
      angle: Math.random() * 2 * Math.PI,
      speed: Math.random() * 5 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1
    });
  }
}

function animateFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, index) => {
    const dx = Math.cos(p.angle) * p.speed;
    const dy = Math.sin(p.angle) * p.speed;
    p.x += dx;
    p.y += dy;
    p.alpha -= 0.01;
    if (p.alpha <= 0) particles.splice(index, 1);
    ctx.beginPath();
    ctx.globalAlpha = p.alpha;
    ctx.fillStyle = p.color;
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.globalAlpha = 1;
  requestAnimationFrame(animateFireworks);
}

setInterval(createFirework, 1500);
animateFireworks();


      