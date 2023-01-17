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

// SLIDESHOW //
let slideIndex = 0;
// showSlides();

// observer.observe(document.querySelector('.title-cloud'));
// observer.observe(document.querySelector('.text-cloud'));

// observer.observe(document.querySelector('.feature-1'));
// observer.observe(document.querySelector('.feature-2'));
// observer.observe(document.querySelector('.feature-3'));

observer.observe(document.querySelector('.screen1'));
observer.observe(document.querySelector('.screen2'));
observer.observe(document.querySelector('.screen3'));
//observer.observe(document.querySelector('.screen4'));
observer.observe(document.querySelector('.desc1'));
observer.observe(document.querySelector('.desc2'));
observer.observe(document.querySelector('.desc3'));
//observer.observe(document.querySelector('.desc4'));

// observer.observe(document.querySelector('.pricing-title'));
// observer.observe(document.querySelector('.pricing-item-1'));
// observer.observe(document.querySelector('.pricing-item-2'));
// observer.observe(document.querySelector('.pricing-item-3'));

// observer.observe(document.querySelector('.contact-title'));

// SLIDESHOW PICS TITLESCREEN //
let carousell = 0;
let carousellImages = ["./assets/_DSC8341.jpg", "./assets/_DSC8355.jpg"]

setInterval(() => {
    if (carousell > carousellImages.length - 1) {
        carousell = 0;
    }
    document.getElementsByClassName("information-wScreen")[0].style.backgroundImage = `url(${carousellImages[carousell]})`
    carousell++
}, 3000);