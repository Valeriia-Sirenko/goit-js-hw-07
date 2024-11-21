const loginForm = document.querySelector(".login-form");

const labels = loginForm.querySelectorAll("label");
const inputs = loginForm.querySelectorAll("input");
const button = loginForm.querySelector("button");

labels.forEach((label) => label.classList.add("form-label"));
inputs.forEach((input) => input.classList.add("form-input"));
button.classList.add("form-button");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();

  if (!email || !password) {
    alert("All form fields must be filled in");
    return;
  }
  const formObject = {
    email,
    password,
  };
  console.log(formObject);
  loginForm.reset();
});
