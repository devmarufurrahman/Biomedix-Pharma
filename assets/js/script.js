 // Fade-in animation on scroll
 document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('appear');
                }, 100);
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    fadeElements.forEach(element => {
        fadeInObserver.observe(element);
    });
    
    // Sticky navbar
    const navbar = document.getElementById('navbar');
    const sticky = navbar.offsetTop;
    
    window.onscroll = function() {
        if (window.pageYOffset > sticky) {
            navbar.classList.add('navbar-fixed');
        } else {
            navbar.classList.remove('navbar-fixed');
        }
    };
    
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.add('open');
    });
    
    closeMenu.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
    });
});