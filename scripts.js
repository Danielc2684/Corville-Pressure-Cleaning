document.addEventListener('DOMContentLoaded', function() {
    // Toggle mobile menu
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Modal functionality
    const contactBtn = document.getElementById('contactBtn');
    const contactModal = document.getElementById('contactModal');
    const closeBtn = document.querySelector('.close');

    contactBtn.addEventListener('click', () => {
        contactModal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        contactModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === contactModal) {
            contactModal.style.display = 'none';
        }
    });

    // Header background change on scroll
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#1c2a36';
        } else {
            header.style.backgroundColor = 'transparent';
        }
    });
});
