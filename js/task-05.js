const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
console.log(nameInput);
console.log(nameOutput);

nameInput.addEventListener("input", (e) => {
  nameOutput.textContent = e.currentTarget.value
    ? e.currentTarget.value
    : "Anonymous";
});
