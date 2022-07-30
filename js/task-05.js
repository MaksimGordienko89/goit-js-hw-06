const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (inputName.innerHTML === "") {
    outputName.innerHTML = "Anonymous";
  }
  outputName.innerHTML = event.currentTarget.value;
}
