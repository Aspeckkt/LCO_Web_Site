// Sélectionnez le bouton de menu et la liste des liens de navigation
var menuToggle = document.querySelector('.menu-toggle');
var navLinks = document.querySelector('nav .nav-links');

// Fonction pour activer la classe active
function activateNavLinks() {
    navLinks.classList.add('active');
}

// Fonction pour désactiver la classe active
function deactivateNavLinks() {
    navLinks.classList.remove('active');
}

// Ajoutez un écouteur d'événements au clic sur le bouton de menu
menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');
});

// Ajoutez un écouteur d'événements de redimensionnement de fenêtre
window.addEventListener('resize', function () {
    if (window.innerWidth > 770) {
        deactivateNavLinks();
    }
});