const boxes = ['.box.b1.animate-left', '.box.b2.animate-right', '.box.b3.animate-left', '.box.b4.animate-right'];

function activateAnimation(box) {
    const isActive = box.getBoundingClientRect().top < window.innerHeight * 0.6;
    box.classList.toggle('active', isActive);
}

function activateAllAnimations() {
    boxes.map(selector => document.querySelector(selector)).forEach(activateAnimation);
}

window.addEventListener('scroll', activateAllAnimations);
window.addEventListener('resize', activateAllAnimations);
window.addEventListener('load', activateAllAnimations);