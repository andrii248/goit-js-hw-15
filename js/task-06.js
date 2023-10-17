const input = document.querySelector("#validation-input");

input.addEventListener("blur", handleBlur);
input.addEventListener("focus", handleFocus);

function handleBlur(event) {
  const requiredLength = Number(event.currentTarget.dataset.length);
  const valueLength = event.currentTarget.value.length;

  event.currentTarget.classList.add("invalid");
  event.currentTarget.classList.remove("valid");

  if (valueLength === requiredLength) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  }
}

function handleFocus(event) {
  event.currentTarget.classList.remove("valid", "invalid");
}
