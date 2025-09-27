import SimpleLightbox from 'simplelightbox';
document.addEventListener('DOMContentLoaded', function () {
    // Initialize SimpleLightbox
    new SimpleLightbox('.gallery a', {
        // options
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});