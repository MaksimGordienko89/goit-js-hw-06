const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value === "") {
    return (outputName.innerHTML = "Anonymous");
  }
  return (outputName.innerHTML = event.currentTarget.value);
}

// -------- Den version ------

// const refs = {
//   input: document.querySelector("#name-input"),
//   output: document.querySelector("#name-output"),
// };
// refs.input.addEventListener("input", (event) => {
//   event.currentTarget.value === ""
//     ? (refs.output.innerHTML = "Anonymous")
//     : (refs.output.innerHTML = event.currentTarget.value);
// });
