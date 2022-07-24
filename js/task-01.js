const categoriesUl = Array.from(
  document.querySelectorAll("ul#categories>li.item")
);
console.log(`Number of categories: ${categoriesUl.length}`);
const ul = Array.from(document.querySelector("#categories").children);
for (let elem of ul) {
  let category = elem.firstElementChild.textContent;
  let quantityElem = elem.lastElementChild.children.length;
  console.log(`Category: ${category} \nElements: ${quantityElem}`);
}
