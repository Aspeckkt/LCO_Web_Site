const carrouselContainer = document.querySelector('.carrousel-container');
let currentIndex = 0;

function startCarrousel() {
    setInterval(() => carrouselContainer.style.transform = `translateX(-${(currentIndex = (currentIndex + 1) % carrouselContainer.children.length) * 100}%)`, 6500);
}

startCarrousel();