function observeAndAnimate(sectionId, threshold) {
    const section = document.querySelector(sectionId);
    const observer = new IntersectionObserver(entries => {
        section.style.opacity = entries[0].isIntersecting ? 1 : 0;
    }, { root: null, rootMargin: '0px', threshold: threshold });

    observer.observe(section);
}

const sectionsToAnimate = ['.carrousel', '.footer-logo', '.footer-contact', '.footer-social', '#testimonials', '#partenaires', '#membership'];
sectionsToAnimate.forEach(section => observeAndAnimate(section, 0.30));
observeAndAnimate('#boxs', 0.12);
observeAndAnimate('#art-gb', 0.04); 