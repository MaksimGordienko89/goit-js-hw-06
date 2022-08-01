const categoriesUl = Array.from(
  document.querySelectorAll("ul#categories>li.item")
);
console.log(`Number of categories: ${categoriesUl.length}`);

// --- corrections after the mentor's instructions ---
const ul = Array.from(document.querySelector("#categories").children);
ul.forEach((elem) => {
  let category = elem.firstElementChild.textContent;
  let quantityElem = elem.lastElementChild.children.length;
  console.log(`Category: ${category} \nElements: ${quantityElem}`);
});
// --------------------- my old code ------------------
// for (let elem of ul) {
//   let category = elem.firstElementChild.textContent;
//   let quantityElem = elem.lastElementChild.children.length;
//   console.log(`Category: ${category} \nElements: ${quantityElem}`);
// }
