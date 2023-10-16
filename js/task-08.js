const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(evt) {
  evt.preventDefault();
  const form = evt.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("Всі поля повинні бути заповнені!");
  }

  const userData = {
    email,
    password,
  };

  console.log(userData);

  form.reset();
}
