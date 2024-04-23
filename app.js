let vowelInput = document.querySelector("#userInput");
let totalVowel = document.querySelector("#total-counter");
let vowels = [
    "a",
    "e",
    "i",
    "o",
    "u",
    "A",
    "E",
    "I",
    "O",
    "U"
];
let count = 0;



function updateCounter() {

    let countVowel = vowelInput.value;
    countVowel.split("").forEach((char) => {
        if (vowels.includes(char)) {
            count++;
        }
    })

    totalVowel.innerHTML = count;
    vowelInput.value = "";
    count = 0;
}
document.body.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        updateCounter();
    }
})