const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector("#value");

decrementBtn.addEventListener("click", handleDecrement);
incrementBtn.addEventListener("click", handleIncrement);

let counterValue = 0;

function handleDecrement() {
  counterValue -= 1;
  counter.textContent = counterValue;
}

function handleIncrement() {
  counterValue += 1;
  counter.textContent = counterValue;
}
