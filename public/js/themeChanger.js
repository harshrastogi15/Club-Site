const colorChanger = document.querySelector("#light");
const originalColor = document.querySelector("#dark");

function newColor() {
  const navBar = document.querySelector("nav");
  const Tecnical = document.querySelector("#tecnical");
  //   navBar.setAttribute("sty", "navbar navbar-expand-lg navbar- bg-danger");
  navBar.style.backgroundColor = "#804040d8";
  Tecnical.setAttribute("style", "font-weight: 800; color :#0a0a0a");
  const body = document.querySelector("#carouselExampleControls");
  body.style.backgroundColor = "#FEF5ED";
  const footer = document.querySelector(".footer");
  footer.style.backgroundColor = "#533535";
}
function resetColor() {
  const navBar = document.querySelector("nav");
  const Tecnical = document.querySelector("#tecnical");
  navBar.style.backgroundColor = "black";
  Tecnical.setAttribute("style", "font-weight: bold; color : aqua");
  const body = document.querySelector("#carouselExampleControls");
  body.style.backgroundColor = "rgba(32, 32, 32, 0.849)";
  const footer = document.querySelector(".footer");
  footer.style.backgroundColor = "rgba(26, 24, 24, 0.904)";
}

colorChanger.addEventListener("click", () => {
  newColor();
});
originalColor.addEventListener("click", () => {
  resetColor();
});
