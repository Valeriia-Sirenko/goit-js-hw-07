const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");
const textInput = document.querySelector("h1");

nameInput.classList.add("name-input");
textInput.classList.add("text-input");

function updateName() {
  const trimName = nameInput.value.trim();
  nameOutput.textContent = trimName || "Anonymous";
}
nameInput.addEventListener("input", updateName);
