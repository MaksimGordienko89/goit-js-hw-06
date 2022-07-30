function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeButton = docment.querySelector("button.change-color");
const body = docment.querySelector("body");
const colorValue = docment.querySelector("span.color");

changeButton.addEventListener("click", (e) => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorValue.textContent = color;
});
