const scrollButton = document.getElementById("scrollButton");
let buttonVisible = false; // Ajout d'une variable pour suivre l'état du bouton

scrollButton.addEventListener("click", () => {
    const scrollDuration = 2000;
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    function scroll() {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
            setTimeout(scroll, 15);
        }
    }
    scroll();
});

window.onscroll = () => {
    const scrollThreshold = window.innerHeight * 2.50; // 230% de la hauteur de la fenêtre
    if (!buttonVisible && (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold)) {
        scrollButton.style.display = "block";
        buttonVisible = true; // Définir le bouton comme visible
    } else if (buttonVisible && (document.body.scrollTop <= scrollThreshold && document.documentElement.scrollTop <= scrollThreshold)) {
        scrollButton.style.display = "none";
        buttonVisible = false; // Définir le bouton comme invisible
    }
};
