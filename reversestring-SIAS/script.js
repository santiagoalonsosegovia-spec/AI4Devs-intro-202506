const input = document.getElementById("textInput");
const button = document.getElementById("reverseBtn");
const result = document.getElementById("result");

function reverseString(str) {
    return str.split("").reverse().join("");
}

button.addEventListener("click", function () {
    const text = input.value;
    const reversed = reverseString(text);
    result.textContent = reversed;
});