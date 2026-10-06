const scene = document.querySelector(".scene");
const orbContainer = document.querySelector(".orb-container");
const particles = document.querySelector(".particles");


// Create particles

for (let i = 0; i < 80; i++) {

  const particle = document.createElement("div");

  particle.classList.add("particle");

  particle.style.left = Math.random() * 100 + "%";

  particle.style.animationDuration =
    4 + Math.random() * 8 + "s";

  particle.style.animationDelay =
    Math.random() * 8 + "s";

  particle.style.opacity =
    Math.random();

  particles.appendChild(particle);
}


// Mouse movement

scene.addEventListener("mousemove", (event) => {

  const x = event.clientX;
  const y = event.clientY;

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const moveX = (x - centerX) / 35;
  const moveY = (y - centerY) / 35;

  orbContainer.style.transform =
    `translate(${moveX}px, ${moveY}px)`;

});


// Click effect

scene.addEventListener("click", (event) => {

  const burst = document.createElement("div");

  burst.style.position = "absolute";
  burst.style.left = event.clientX + "px";
  burst.style.top = event.clientY + "px";

  burst.style.width = "20px";
  burst.style.height = "20px";

  burst.style.border = "2px solid #9d8cff";
  burst.style.borderRadius = "50%";

  burst.style.transform = "translate(-50%, -50%)";

  burst.style.boxShadow =
    "0 0 20px #6d5cff, 0 0 50px #633cff";

  burst.style.pointerEvents = "none";

  burst.animate(
    [
      {
        width: "20px",
        height: "20px",
        opacity: 1
      },

      {
        width: "250px",
        height: "250px",
        opacity: 0
      }
    ],
    {
      duration: 700,
      easing: "ease-out"
    }
  );

  scene.appendChild(burst);

  setTimeout(() => {
    burst.remove();
  }, 700);

});