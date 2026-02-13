
document.addEventListener('DOMContentLoaded', () => {
    initScrollReveals();
    initHeroAnimation();
});

function initScrollReveals() {
    const observerOptions = {
        threshold: 0.1, // Trigger earlier/snappier
        rootMargin: "0px 0px -20px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.fade-up, .campfire-card, .cta-strip');
    revealElements.forEach(el => observer.observe(el));
}

function initHeroAnimation() {
    // 3D Tilt Effect for Hero Mockup
    const container = document.querySelector('.hero-mockup-container');
    const card = document.querySelector('.mockup-card');

    if (!container || !card) return;

    // Reset transition on mouse enter to avoid lag
    container.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
    });

    container.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 30;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 30;

        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    // Reset on leave
    container.addEventListener('mouseleave', () => {
        card.style.transition = 'transform 0.5s ease';
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
}
