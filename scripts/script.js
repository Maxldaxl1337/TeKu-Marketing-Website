//hamburger menu
// let hamMenuOpen = false
// document.getElementById('hamburger-menu-button').addEventListener('click', () => {
//     toggleHamMenu()
// })
// function toggleHamMenu() {
//     if (hamMenuOpen) {
//         hamMenuOpen = false
//         document.getElementsByTagName('body')[0].style.overflow = ""
//         document.getElementById('hamburger-menu').style.animationName = "slide-out-menu"
//         setTimeout(() => {
//             document.getElementById('hamburger-menu').style.display = "none"
//         }, 200);
//     } else if (accMenuOpen) {
//         toggleAccMenu()
//     } else {
//         hamMenuOpen = true
//         document.getElementsByTagName('body')[0].style.overflow = "hidden"
//         document.getElementById('hamburger-menu').style.display = "inline-block"
//         document.getElementById('hamburger-menu').style.animationName = "slide-in-menu"
//     }
// }

// document.addEventListener('click', (e) => {
//     if (e.target.id !== 'hamburger-menu' && hamMenuOpen == true && e.target.id !== 'hamburger-menu-button') {
//         toggleHamMenu()
//     }
// })

// scoial links impressum 
document.getElementById("facebooklink").style.cursor = "pointer";
facebooklink.addEventListener("click", (e) => {
  window.open("https://www.instagram.com/");
})

document.getElementById("twitterlink").style.cursor = "pointer";
twitterlink.addEventListener("click", (e) => {
  window.open("https://www.instagram.com/");
})

document.getElementById("instagramlink").style.cursor = "pointer";
instagramlink.addEventListener("click", (e) => {
  window.open("https://www.instagram.com/");
})


// handle cookie disclaimer
if (localStorage.getItem('cookies') == undefined) {
  document.getElementById('cookie-disclaimer-overlay').style.display = 'initial'
}

document.getElementById('cookie-consent').addEventListener('click', () => {
  localStorage.setItem('cookies', true)
  document.getElementById('cookie-disclaimer-overlay').style.display = ''
})

// customer reviews
// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) { slideIndex = 1 }
//   if (n < 1) { slideIndex = slides.length }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
// }

// Mails 
function sendMail() {

  var formattedBody = document.getElementById('contact-us-email').value + "\n" + document.getElementById('contact-us-phone').value + "\n" + document.getElementById('contact-us-name').value + " " + document.getElementById('contact-us-surname').value + "\n" + document.getElementById('contact-us-content').value;
  var mailToLink = `mailto:maxihuetter123@gmail.com?subject=${document.getElementById('contact-us-object').value}&body=${encodeURIComponent(formattedBody)}`;
  window.location.href = mailToLink;
}

// document.getElementById('conact-us-email').addEventListener('click', (e) => {
// e.preventDefault()
// sendMail()
// })


// document.getElementById("send-mail").style.cursor = "pointer"; 
// send-mail.addEventListener("click", (e) => {
//         var newDataRef = database.ref().push();
//         newDataRef.set({
//           document.getElementById('contact-us-email').value + "\n" + document.getElementById('contact-us-phone').value + "\n" + document.getElementById('contact-us-name').value + " " + document.getElementById('contact-us-surname').value + "\n" + document.getElementById('contact-us-content').value;
//         });
//     })


// VIEW MORE BUTTON
container1.addEventListener("click", (e) => {
  // window.open("./viewmore.html");
  location.href = "./viewmore.html"
})

const slider = document.querySelector('.review-slider');
const slides = slider.querySelectorAll('.review-slide');
let currentSlide1 = 0;

function showSlide(n) {
  // Remove the active class from all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  // Set the current slide to active
  slides[n].classList.add('active');
  // Update the current slide index
  currentSlide1 = n;
}

function autoSlide() {
  // Show the next slide or start over if the current slide is the last slide
  if (currentSlide1 === slides.length - 1) {
    showSlide(0);
  } else {
    showSlide(currentSlide1 + 1);
  }
}

let itemHovered = false;

function itemHoveredEvent(arg) {
  itemHovered = arg;
}

// Automatically show the next slide every 5 seconds
setInterval(() => {
  if (!itemHovered) {
    autoSlide();
  }
}, 6300);