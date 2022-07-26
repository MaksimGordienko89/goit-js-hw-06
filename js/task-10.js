function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//------------------Den version-------------------

const refs = {
  controls: document.querySelector("input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  boxInner: document.querySelector("#boxes"),
};

let inpVal = 0;
controls.addEventListener("input", (e) => {
  console.log(e.target.value);
  return (inpVal = e.target.value);
});

function createStyleOptions() {
  let qrt = inpVal;
  let styleArr = [];
  const minHeight = 30;
  const minWidth = 30;
  for (let i = 0; i < qrt; i++) {
    styleArr.push({
      height: minHeight + i * 10,
      width: minWidth + i * 10,
      color: getRandomHexColor(),
    });
  }
  return styleArr;
}

function createBoxes(amount) {
  amount = createStyleOptions();
  const newBox = amount
    .map(
      (box) =>
        `<div style="width:${box.width}px; height:${box.height}px; background-color:${box.color}"></div>`
    )
    .join("");
  return (refs.boxInner.innerHTML = newBox);
}

const destroyBoxes = () => {
  refs.boxInner.innerHTML = "";
};

refs.btnCreate.addEventListener("click", createBoxes);

refs.btnDestroy.addEventListener("click", destroyBoxes);

//--------------------my code-----------------

// const inputNum = document.querySelector("#controls>input");
// const btnCreate = document.querySelector("button[data-create]");
// const btnDestroy = document.querySelector("button[data-destroy]");
// const boxes = document.querySelector("#boxes");

// const createBoxes = (amount) => {
//   const elementsToAdd = [];
//   for (let i = 0; i < amount; i++) {
//     const divSize = 30;
//     let growingSize = divSize + i * 10;
//     const boxItem = `<div style="width:${growingSize}px;
//     height:${growingSize}px; background-color:${getRandomHexColor()}" ></div>`;
//     elementsToAdd.push(boxItem);
//   }
//   return (boxes.innerHTML = elementsToAdd);
// };

// const destroyBoxes = () => {
//   boxes.innerHTML = "";
// };

// btnCreate.addEventListener("click", () => {
//   let boxesToAdd = createBoxes(inputNum.value);
//   boxes.append(...boxesToAdd);
// });

// console.log(inputNum.value);

// btnDestroy.addEventListener("click", () => {
//   destroyBoxes.call();
// });
