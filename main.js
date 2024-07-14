const inputElement = document.getElementById("input");
const encryptButton = document.getElementById("button__encrypt");
const dencryptButton = document.getElementById("button__dencrypt");

const outputContainer = document.querySelector(".main__result");
const outputElement = document.createElement("textarea");
outputElement.id = "output";
outputElement.setAttribute("name", "output");
outputElement.setAttribute("rows", "8");

const copyButton = document.createElement("button");
copyButton.innerText = "Copiar";
copyButton.id = "button__copy";

/**
 * Checks for lowercase non-special characters
 * @param {input}
 */
function isValid(input) {
  const pattern = /^(?=[a-z])[a-z\s]+$/g;
  if (!pattern.test(input)) {
    alert("Por favor, usa minúsculas sin carácteres especiales o acentos.");
    return false;
  }
  return true;
}

/**
 *
 * @param {text} input from textarea, it must contain lowercase without special characters
 */
function encrypt(text) {
  const arrayInput = text.split("");
  const encrypted = arrayInput
    .map((element) => {
      if (element === "e") return "enter";
      else if (element === "i") return "imes";
      else if (element === "a") return "ai";
      else if (element === "o") return "ober";
      else if (element === "u") return "ufat";
      else return element;
    })
    .join("");
  return [encrypted, text];
}

document.addEventListener("DOMContentLoaded", () => {
  encryptButton.addEventListener("click", (event) => {
    event.preventDefault();
    const inputText = inputElement.value;

    if(!isValid(inputText)) {
        return;
    }

    outputContainer.innerHTML = "";
    outputContainer.append(outputElement, copyButton);
    outputElement.value = encrypt(inputText)[0];
  });
});
