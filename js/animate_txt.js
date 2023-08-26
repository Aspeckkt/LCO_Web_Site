const textElement = document.getElementById("animated-text");
const words = ["Solutions", "Réalisations", "Projets"];
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingSpeed = 150;
let pauseAfterType = 1500;
let pauseAfterDelete = 1000;
let deleteSpeed = 50;

function typeText() {
    const currentWord = words[currentWordIndex];
    const char = currentWord[currentCharIndex];

    textElement.innerHTML = `<b>${currentWord.substring(0, currentCharIndex)}</b>`;
    currentCharIndex += isDeleting ? -1 : 1;

    if (currentCharIndex === currentWord.length + 1) {
        isDeleting = true;
        setTimeout(typeText, pauseAfterType);
    } else if (currentCharIndex === -1) {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        setTimeout(typeText, pauseAfterDelete);
    } else {
        setTimeout(typeText, isDeleting ? deleteSpeed : typingSpeed);
    }
}

setTimeout(typeText, 1000);