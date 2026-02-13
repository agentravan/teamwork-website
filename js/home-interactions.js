/**
 * PREMIUM SAAS INTERACTIONS
 * Handles scroll reveals, carousel logic, and hero animations.
 */

document.addEventListener('DOMContentLoaded', () => {
    initScrollReveals();
    initTrustCarousel();
    initHeroAnimation();
});

function initScrollReveals() {
    const observerOptions = {
        threshold: 0.15, // Trigger when 15% visible
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Trigger once
            }
        });
    }, observerOptions);

    // Target elements
    const revealElements = document.querySelectorAll('.fade-up, .feature-card, .benefit-block, .cta-strip');
    revealElements.forEach(el => observer.observe(el));
}

function initTrustCarousel() {
    const track = document.querySelector('.trust-track');
    if (!track) return;

    // Clone items for seamless loop
    const items = Array.from(track.children);
    items.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
    });
}

function initHeroAnimation() {
    // Parallax or subtle movement on mouse move for Hero
    const hero = document.querySelector('.hero-mockup-container');
    if (!hero) return;

    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;

        hero.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}
