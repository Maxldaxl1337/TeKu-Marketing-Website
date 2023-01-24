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

    
    // // handle cookie disclaimer
    // if (localStorage.getItem('cookies') == undefined) {
    //     document.getElementById('cookie-disclaimer-overlay').style.display = 'initial'
    // }
    
    // document.getElementById('cookie-consent').addEventListener('click', () => {
    //     localStorage.setItem('cookies', true)
    //     document.getElementById('cookie-disclaimer-overlay').style.display = ''
    // })