const navburg = document.querySelector("#navburg");
const navOverlay = document.querySelector("#nav-overlay");
const close = document.querySelector("#overlay-nav");
const projects = document.querySelector("#projects-cont");
const s1 = document.querySelector("#s1");
const s2 = document.querySelector("#s2");
const red = document.querySelector("#red");

navburg.addEventListener("click", () => {
  navOverlay.style.maxHeight = "200vh";
  s1.style.display = "none";
  s2.style.display = "none";
});

close.addEventListener("click", () => {
  navOverlay.style.maxHeight = "0";
  s1.style.display = "block";
  s2.style.display = "block";
});

document.querySelectorAll(".nlink").forEach((item) => {
  item.addEventListener("click", () => {
    navOverlay.style.maxHeight = "0";
    s1.style.display = "block";
    s2.style.display = "block";
  });
});

let currentPos = window.pageYOffset;

const update = () => {
  const newPos = window.pageYOffset;
  const diff = newPos - currentPos;
  const speed = diff * 0.66;

  projects.style.transform = `skewY(${speed}deg)`;

  currentPos = newPos;

  requestAnimationFrame(update);
};

update();
