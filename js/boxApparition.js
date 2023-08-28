const boxes = ['.box.b1.animate-left', '.box.b2', '.box.b3.animate-left', '.box.b4'];
const [b2, b4] = ['.box.b2', '.box.b4'].map(selector => document.querySelector(selector));
const activate = (box) => box.classList.toggle('active', box.getBoundingClientRect().top < window.innerHeight * 0.66);
const replace = () => [b2, b4].forEach(box => {
    const shouldReplace = window.innerWidth < 1000;
    box.classList.toggle('animate-right', !shouldReplace);
    box.classList.toggle('animate-left', shouldReplace);
});
const handleWindow = () => (activateAll(), replace());

const activateAll = () => boxes.forEach(selector => activate(document.querySelector(selector)));

window.addEventListener('load', handleWindow);
window.addEventListener('scroll', activateAll);
window.addEventListener('resize', handleWindow);