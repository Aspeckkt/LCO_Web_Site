const textElement = document.getElementById("animated-text");
const words = ["Solutions", "Réalisations", "Projets"];
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingSpeed = 150; // Vitesse de frappe en millisecondes

function typeText() {
    const currentWord = words[currentWordIndex];
    if (!isDeleting) {
        textElement.innerHTML = `<b>${currentWord.substring(0, currentCharIndex)}</b>`;
        currentCharIndex++;

        if (currentCharIndex > currentWord.length) {
            isDeleting = true;
            setTimeout(typeText, 1500); // Pause après l'écriture complète
        } else {
            setTimeout(typeText, typingSpeed);
        }
    } else {
        textElement.innerHTML = `<b>${currentWord.substring(0, currentCharIndex)}</b>`;
        currentCharIndex--;

        if (currentCharIndex < 0) {
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % words.length;
            setTimeout(typeText, 1000); // Pause après la suppression complète
        } else {
            setTimeout(typeText, 50); // Vitesse de suppression plus rapide
        }
    }
}

// Démarrez l'animation
setTimeout(typeText, 1000);