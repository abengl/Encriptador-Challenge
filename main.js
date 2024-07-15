const inputElement = document.getElementById("input");
const encryptButton = document.getElementById("button__encrypt");
const decryptButton = document.getElementById("button__decrypt");

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
 * @param {string} input  - The textarea string value
 * @returns {boolean} - According to the function validation true (pass) or false (fails)
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
 * Encripts the string passed modifying the vowels.
 * @param {string} inputText - Textarea string it must contain lowercase without special characters
 * @returns {Array} - The array contains the encrypted text and the original text.
 */
function encrypt(inputText) {
  const arrayInput = inputText.split("");
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
  return [encrypted, inputText];
}

function decrypt(encryptedText) {
  const decrypted = encryptedText
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  return [decrypted, encryptedText];
}

document.addEventListener("DOMContentLoaded", () => {
  encryptButton.addEventListener("click", (event) => {
    event.preventDefault();
    const inputText = inputElement.value;

    if (!isValid(inputText)) {
      return;
    }

    outputContainer.innerHTML = "";
    outputContainer.append(outputElement, copyButton);
    outputElement.value = encrypt(inputText)[0];
  });

  decryptButton.addEventListener("click", (event) => {
    event.preventDefault();
    const inputText = inputElement.value;

    if (!isValid(inputText)) {
      return;
    }

    outputContainer.innerHTML = "";
    outputContainer.append(outputElement, copyButton);
    outputElement.value = decrypt(inputText)[0];
  });

  copyButton.addEventListener("click", () => {
    const textCopy = document.getElementById("output").value;
    navigator.clipboard.writeText(textCopy);

    const alertMessage = document.createElement("span");
    alertMessage.id = "copy__alert";
    alertMessage.innerText = "Texto copiado al portapapeles";
    copyButton.before(alertMessage);
  });
});
