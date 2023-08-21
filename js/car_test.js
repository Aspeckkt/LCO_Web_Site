document.addEventListener('DOMContentLoaded', function () {
    const testimonials = document.querySelectorAll('.testimonial');
    const indicators = document.querySelectorAll('.indicator');
    const container = document.querySelector('.testimonials-list');
    let currentIndex = 0;
    let isAnimating = false;

    function showTestimonial(index) {
        if (isAnimating) return;

        isAnimating = true;

        const currentTestimonial = document.querySelector('.testimonial.active');
        const currentIndicator = document.querySelector('.indicator.active');

        currentTestimonial.classList.remove('active');
        currentIndicator.classList.remove('active');

        testimonials[index].classList.add('active');
        indicators[index].classList.add('active');

        setTimeout(() => {
            isAnimating = false;
        }, 1000); // Durée de la transition

        currentIndex = index;
    }

    function nextTestimonial() {
        if (isAnimating) return;
        const nextIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(nextIndex);
    }

    function autoSlide() {
        nextTestimonial();
        setTimeout(autoSlide, 6000); // Ralentissement de la transition
    }

    autoSlide();

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showTestimonial(index);
        });
    });

    // Initialize the carousel
    showTestimonial(currentIndex);
});
