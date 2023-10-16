const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
input.addEventListener("input", handleInputChange);
text.style.fontSize = `${input.value}px`;

function handleInputChange() {
  text.style.fontSize = `${input.value}px`;
}
