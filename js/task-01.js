// const categoriesList = document.querySelector("#categories");
const items = document.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const categoryName = item.firstElementChild.textContent;
  const categoryList = item.lastElementChild.children;

  console.log(`Category: ${categoryName}
Elements: ${categoryList.length}`);
});
