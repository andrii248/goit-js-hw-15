const input = document.querySelector("#validation-input");

input.addEventListener("blur", handleBlur);
input.addEventListener("focus", handleFocus);

function handleBlur(event) {
  const requiredLength = event.currentTarget.dataset.length;
  const valueLength = event.currentTarget.value.length;

  if (valueLength < requiredLength) {
    event.currentTarget.classList.add("invalid");
  } else {
    event.currentTarget.classList.add("valid");
  }
}

function handleFocus(event) {
  event.currentTarget.classList.remove("valid", "invalid");
}
