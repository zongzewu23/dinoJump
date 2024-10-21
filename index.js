import "./style.css";
const dino = document.querySelector("#dino");
const block = document.querySelector("#block");
window.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.code == "Space") {
    console.log("Jump fucking High");
    dino.classList.add("jumpClass");
    setTimeout(() => {
      dino.classList.remove("jumpClass");
    }, 300);
  }
});

setInterval(() => {
  const dinoBottom = parseFloat(
    getComputedStyle(dino).getPropertyValue("bottom")
  );
  const blockLeft = parseFloat(
    getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 20 && blockLeft > -20 && dinoBottom <= 20) {
    console.log("Bloody Death");
  }
}, 10);

