// Fonction pour faire défiler la page vers le haut
function scrollToTop() {
    // Faites défiler la page de manière fluide vers le haut
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Afficher ou masquer le bouton en fonction de la position de défilement
window.onscroll = function () {
    toggleScrollButton();
};

function toggleScrollButton() {
    var scrollButton = document.getElementById("scrollButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}