const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("div#boxes");

createBtn.addEventListener("click", function () {
  createBoxes(Number(input.value));
});
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let markup = [];

  for (let i = 0; i <= amount; i += 1) {
    const div = `<div style="width: ${30 + i * 10}px; height: ${
      30 + i * 10
    }px; background-color: ${getRandomHexColor()}"></div>`;
    markup.push(div);
  }

  boxesDiv.insertAdjacentHTML("afterbegin", markup.join(""));
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
