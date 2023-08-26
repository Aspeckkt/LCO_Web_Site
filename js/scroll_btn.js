const scrollButton = document.getElementById("scrollButton");

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
    const scrollThreshold = 20;
    scrollButton.style.display = (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) ? "block" : "none";
};