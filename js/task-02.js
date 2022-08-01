const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ul = document.querySelector("#ingredients");
const arr = [];

ingredients.forEach((ingredient) => {
  const liItem = document.createElement("li");
  liItem.className = "item";
  liItem.textContent = ingredient;
  return arr.push(liItem);
});

ul.append(...arr);
