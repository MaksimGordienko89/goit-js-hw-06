const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const liArray = [];

ingredients.forEach((ingredient) => {
  const liItem = document.createElement("li");
  liItem.className = "item";
  liItem.textContent = ingredient;
  liArray.push(liItem);
});

console.log(...liArray);
// const ul = document.createElement('ul');

// names.forEach((name) => {
// const li = document.createElement('li');

// li.classList = 'item';
// li.textContent = ім'я;
// ul.appendChild(li);
// });

// document.querySelector('body').appendChild(ul);
