// Simple JavaScript for FAQs, Testimonials Slider, and Lightbox

// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const isVisible = answer.style.display === 'block';
        document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
        answer.style.display = isVisible ? 'none' : 'block';
    });
});

// Testimonials Slider (simple auto-scroll)
const slider = document.querySelector('.reviews-slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
});

// Lightbox for Gallery
document.querySelectorAll('[data-lightbox]').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const lightboxOverlay = document.createElement('div');
        lightboxOverlay.id = 'lightbox-overlay';
        lightboxOverlay.innerHTML = `<img src="${item.href}" alt="${item.children[0].alt}">`;
        document.body.appendChild(lightboxOverlay);
        lightboxOverlay.addEventListener('click', () => {
            document.body.removeChild(lightboxOverlay);
        });
    });
});
