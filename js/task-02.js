const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ul = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const liItem = document.createElement("li");
  liItem.className = "item";
  liItem.textContent = ingredient;
  ul.appendChild(liItem);
});
