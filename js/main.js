document.addEventListener('DOMContentLoaded', () => {

    // -- HAMBURGER TOGGLE LOGIC (FIX) --
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');

    if (hamburger && mainNav) {
        hamburger.addEventListener('click', () => {
            mainNav.classList.toggle('show');
        });

        // -- MOBILE MENU CLONE FIX --
        // Inject Login/Request Access buttons into the mobile menu list
        const navActions = document.querySelector('.nav-actions');
        const navList = document.querySelector('.main-nav > ul');

        if (navActions && navList && !document.querySelector('.mobile-actions-clone')) {
            const clone = navActions.cloneNode(true);
            clone.className = 'mobile-actions-clone';
            clone.style.display = 'flex';
            clone.style.flexDirection = 'column';
            clone.style.gap = '12px';
            clone.style.marginTop = '20px';
            clone.style.width = '100%';

            // Convert to list item for semantics or just append
            const li = document.createElement('li');
            li.className = 'mobile-action-item'; // Add class for CSS targeting
            li.style.width = '100%';
            li.appendChild(clone);
            navList.appendChild(li);
        }
    }

    // Animation Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(el);
    });

    // Glass Panel Hover Effect (Mouse Move)
    const cards = document.querySelectorAll('.glass-panel');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });

});
