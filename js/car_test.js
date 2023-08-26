document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials[currentIndex].classList.remove('active');
        indicators[currentIndex].classList.remove('active');
        testimonials[index].classList.add('active');
        indicators[index].classList.add('active');
        currentIndex = index;
    }

    function nextTestimonial() {
        const nextIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(nextIndex);
    }

    setInterval(nextTestimonial, 4000);

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => showTestimonial(index));
    });

    showTestimonial(currentIndex);
});