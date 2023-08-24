const carrouselContainer = document.querySelector('.carrousel-container');
const carrouselItems = document.querySelectorAll('.carrousel-item');
let currentIndex = 0;

function startCarrousel() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % carrouselItems.length;
        carrouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 7500); // Défilement toutes les 3,5 secondes
}

startCarrousel();