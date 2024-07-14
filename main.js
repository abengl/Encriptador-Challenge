//<textarea name="output" id="" class="main__result__textarea"></textarea>
//<button class="main__result__button" id="button__copy">Copiar</button>

/*Activate output area when there is text in the input */
const inputElement = document.getElementById("input");
const encryptButton = document.getElementById("button__encrypt");
const dencryptButton = document.getElementById("button__dencrypt");

const outputContainer = document.querySelector(".main__result");
const outputElement = document.createElement("textarea");
outputElement.id = "output";

const copyButton = document.createElement("button");
copyButton.innerText =  "Copiar";
copyButton.id = "button__copy";

document.addEventListener("DOMContentLoaded", () => {
    encryptButton.addEventListener("click", (event) => {
        event.preventDefault();
        const inputText = inputElement.value;

        outputContainer.innerHTML = "";
        outputContainer.append(outputElement, copyButton);
        outputElement.value = inputText;
    })
})
