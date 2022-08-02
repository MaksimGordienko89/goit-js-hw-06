const input = document.querySelector("#validation-input");
const valid = Number(input.dataset.length);

input.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length !== valid) {
    input.classList.remove("valid");
    input.classList.add("invalid");
  } else {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
});
