const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('slide-up-animation-running');
        }
    });
});

// observer.observe(document.querySelector('.title-cloud'));
// observer.observe(document.querySelector('.text-cloud'));

observer.observe(document.querySelector('.feature-1'));
observer.observe(document.querySelector('.feature-2'));
observer.observe(document.querySelector('.feature-3'));

observer.observe(document.querySelector('.screen1'));
observer.observe(document.querySelector('.screen2'));
observer.observe(document.querySelector('.screen3'));
// observer.observe(document.querySelector('.screen4'));
observer.observe(document.querySelector('.desc1'));
observer.observe(document.querySelector('.desc2'));
observer.observe(document.querySelector('.desc3'));
// observer.observe(document.querySelector('.desc4'));

observer.observe(document.querySelector('.pricing-title'));
observer.observe(document.querySelector('.pricing-item-1'));
observer.observe(document.querySelector('.pricing-item-2'));
observer.observe(document.querySelector('.pricing-item-3'));

observer.observe(document.querySelector('.contact-title'));