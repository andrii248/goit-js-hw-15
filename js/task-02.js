const ingredientsList = document.querySelector("#ingredients");

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

function createMarkup(arr) {
  const markup = arr.map((el) => {
    const li = document.createElement("li");
    li.textContent = el;
    li.classList.add("item");

    return li;
  });

  ingredientsList.append(...markup);
}

createMarkup(ingredients);
