document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
    
    // Add scroll-based navbar animation
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // Create scroll indicator element
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    document.body.appendChild(scrollIndicator);
    
    // Update scroll indicator width on scroll
    window.addEventListener('scroll', function() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollIndicator.style.width = scrolled + '%';
    });

    // Add subtle parallax effect to hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            heroSection.style.backgroundPosition = 'center ' + (scrollPosition * 0.4) + 'px';
        });
    }

    // Add hover effects to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.feature-icon i').classList.add('fa-beat');
        });
        card.addEventListener('mouseleave', function() {
            this.querySelector('.feature-icon i').classList.remove('fa-beat');
        });
    });
});
