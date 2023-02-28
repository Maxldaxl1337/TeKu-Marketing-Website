// SLIDESHOW PICS TITLESCREEN
let carousell = 0;
let carousellImages = ["assets/bild0.jpg", "assets/bild1.jpg", "assets/bild2.jpg"]

setInterval(() => {
    carousellFunction()
}, 4000);
carousellFunction()

function carousellFunction() {
    if (carousell > carousellImages.length - 1) {
        carousell = 0;
    }
    document.getElementsByClassName("information-wScreen")[0].style.backgroundImage = `url(${carousellImages[carousell]})`
    carousell++
}

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

observer.observe(document.querySelector('.logo420'));
observer.observe(document.querySelector('.title-cloud'));
observer.observe(document.querySelector('.text-cloud'));

observer.observe(document.querySelector('.feature-00'));
observer.observe(document.querySelector('.feature-0'));
observer.observe(document.querySelector('.feature-1'));
observer.observe(document.querySelector('.feature-2'));
observer.observe(document.querySelector('.feature-3'));

observer.observe(document.querySelector('.screen1'));
observer.observe(document.querySelector('.screen2'));
observer.observe(document.querySelector('.screen3'));
observer.observe(document.querySelector('.screen4'));
observer.observe(document.querySelector('.desc1'));
observer.observe(document.querySelector('.desc2'));
observer.observe(document.querySelector('.desc3'));
observer.observe(document.querySelector('.desc4'));
observer.observe(document.querySelector('.desc5'));
observer.observe(document.querySelector('.mehrlesen'));

// observer.observe(document.querySelector('.pricing-title'));
// observer.observe(document.querySelector('.pricing-item-1'));
// observer.observe(document.querySelector('.pricing-item-2'));
// observer.observe(document.querySelector('.pricing-item-3'));

observer.observe(document.querySelector(".certificates"));
observer.observe(document.querySelector('.contact-title'));
observer.observe(document.querySelector('.certificates'));

// VERSTECKTES ELEMENT KUNDEN // 

//one
document.getElementById('proj-one').addEventListener('mouseover', (e) => {
    document.getElementById('proj-text-one').style.top = '-180px'
    document.getElementById('proj-link-one').style.top = '-180px'
    document.getElementById('proj-img-one').style.filter = 'brightness(0.6)'
})
document.getElementById('proj-one').addEventListener('mouseleave', (e) => {
    document.getElementById('proj-text-one').style.top = '0px'
    document.getElementById('proj-link-one').style.top = '0px'
    document.getElementById('proj-img-one').style.filter = ''
})
//two
document.getElementById('proj-two').addEventListener('mouseover', (e) => {
    document.getElementById('proj-text-two').style.top = '-180px'
    document.getElementById('proj-link-two').style.top = '-180px'
    document.getElementById('proj-img-two').style.filter = 'brightness(0.6)'
})
document.getElementById('proj-two').addEventListener('mouseleave', (e) => {
    document.getElementById('proj-text-two').style.top = '0px'
    document.getElementById('proj-link-two').style.top = '0px'
    document.getElementById('proj-img-two').style.filter = ''
})
//three
document.getElementById('proj-three').addEventListener('mouseover', (e) => {
    document.getElementById('proj-text-three').style.top = '-180px'
    document.getElementById('proj-link-three').style.top = '-180px'
    document.getElementById('proj-img-three').style.filter = 'brightness(0.6)'
})
document.getElementById('proj-three').addEventListener('mouseleave', (e) => {

    document.getElementById('proj-text-three').style.top = '0px'
    document.getElementById('proj-link-three').style.top = '0px'
    document.getElementById('proj-img-three').style.filter = ''
})
//four
document.getElementById('proj-four').addEventListener('mouseover', (e) => {
    document.getElementById('proj-text-four').style.top = '-180px'
    document.getElementById('proj-link-four').style.top = '-180px'
    document.getElementById('proj-img-four').style.filter = 'brightness(0.6)'
})
document.getElementById('proj-four').addEventListener('mouseleave', (e) => {
    document.getElementById('proj-text-four').style.top = '0px'
    document.getElementById('proj-link-four').style.top = '0px'
    document.getElementById('proj-img-four').style.filter = ''
})
//five
document.getElementById('proj-five').addEventListener('mouseover', (e) => {
    document.getElementById('proj-text-five').style.top = '-180px'
    document.getElementById('proj-link-five').style.top = '-180px'
    document.getElementById('proj-img-five').style.filter = 'brightness(0.6)'
})
document.getElementById('proj-five').addEventListener('mouseleave', (e) => {
    document.getElementById('proj-text-five').style.top = '0px'
    document.getElementById('proj-link-five').style.top = '0px'
    document.getElementById('proj-img-five').style.filter = ''
})
//six
document.getElementById('proj-six').addEventListener('mouseover', (e) => {
    document.getElementById('proj-text-six').style.top = '-180px'
    document.getElementById('proj-link-six').style.top = '-180px'
    document.getElementById('proj-img-six').style.filter = 'brightness(0.6)'
})
document.getElementById('proj-six').addEventListener('mouseleave', (e) => {
    document.getElementById('proj-text-six').style.top = '0px'
    document.getElementById('proj-link-six').style.top = '0px'
    document.getElementById('proj-img-six').style.filter = ''
})