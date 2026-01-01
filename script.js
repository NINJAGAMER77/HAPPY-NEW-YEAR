// Show / hide secret message
function showLoveMessage() {
  const box = document.getElementById("extraMessage");
  box.style.display = box.style.display === "none" ? "block" : "none";
}

// Random pastel color
function randomColor() {
  const colors = ["#ff9a9e", "#fad0c4", "#ffecd2", "#fcb69f", "#a18cd1", "#fbc2eb", "#ffeaa7"];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Firework particles
function launchFirework(x, y) {
  for (let i = 0; i < 18; i++) {
    const fw = document.createElement("div");
    fw.className = "firework";
    fw.style.left = x + "px";
    fw.style.top = y + "px";
    fw.style.background = randomColor();
    fw.style.boxShadow =
      "0 0 15px " + randomColor() + ", 0 0 40px " + randomColor();

    const angle = (Math.PI * 2 * i) / 18;
    const distance = 80 + Math.random() * 40;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;

    fw.animate(
      [
        { transform: "translate(0,0) scale(0.3)", opacity: 1 },
        { transform: "translate(" + tx + "px," + ty + "px) scale(1.2)", opacity: 0 }
      ],
      {
        duration: 900,
        easing: "ease-out",
        fill: "forwards"
      }
    );

    document.body.appendChild(fw);
    setTimeout(el => el.remove(), 950, fw);
  }
}

function makeFireworks() {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 3;
  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      const x = centerX + (Math.random() * 160 - 80);
      const y = centerY + (Math.random() * 80 - 40);
      launchFirework(x, y);
    }, i * 300);
  }
}

// Fireworks on any click
window.addEventListener("click", e => {
  launchFirework(e.clientX, e.clientY);
});

// Create floating hearts (love rain)
function createHearts() {
  const container = document.getElementById("hearts-container");
  for (let i = 0; i < 22; i++) {
    const h = document.createElement("div");
    h.className = "heart-floating";
    h.style.left = Math.random() * 100 + "vw";
    h.style.bottom = -20 - Math.random() * 80 + "px";
    h.style.animationDuration = 6 + Math.random() * 5 + "s";
    h.style.animationDelay = Math.random() * 5 + "s";
    container.appendChild(h);
  }
}

createHearts();
