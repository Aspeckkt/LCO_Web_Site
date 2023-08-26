const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav .nav-links');

function toggleNavMenu() {
    navLinks.classList.toggle('active');
}

menuToggle.addEventListener('click', toggleNavMenu);

window.addEventListener('resize', () => {
    if (window.innerWidth > 770) {
        navLinks.classList.remove('active');
    }
});