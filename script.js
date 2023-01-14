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
    
    // //hamburger menu
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
    
    //account menu
    // let accMenuOpen = false
    // document.getElementsByClassName('account-manager')[0].addEventListener('click', () => {
    //     toggleAccMenu()
    // })
    // document.getElementsByClassName('acc-ham-item')[0].addEventListener('click', () => {
    //     toggleAccMenu()
    // })
    // document.getElementById('acc-manager-footer').addEventListener('click', () => {
    //     toggleAccMenu()
    // })
    // function toggleAccMenu() {
    //     if (accMenuOpen) {
    //         accMenuOpen = false
    //         document.getElementById('account-menu').style.animationName = "fadeoutMenu"
    //         setTimeout(() => {
    //             document.getElementById('account-menu').style.display = "none"
    //         }, 300);
    //     } else {
    //         accMenuOpen = true
    //         document.getElementById('account-menu').style.display = "inline-block"
    //         document.getElementById('account-menu').style.animationName = "fadeinMenu"
    //     }
    // }
    
    // add account functionality
    // const firebaseConfig = {
    //     apiKey: "AIzaSyC2H1zDQZwFXgv4Mrvfkamm71oXtKAqvzE",
    //     authDomain: "forget-me-not-ebf9d.firebaseapp.com",
    //     databaseURL: "https://forget-me-not-ebf9d.firebaseio.com",
    //     projectId: "forget-me-not-ebf9d",
    //     storageBucket: "forget-me-not-ebf9d.appspot.com",
    //     messagingSenderId: "447944625667",
    //     appId: "1:447944625667:web:b3a5c93793261a78864836",
    //     measurementId: "G-3NZBDHRR4M"
    // };
    // firebase.initializeApp(firebaseConfig)
    
    // document.getElementById('login-form').addEventListener('submit', (e) => {
    //     e.preventDefault()
    //     if (resetAction) { return }
    //     login(e.target.elements[0].value, e.target.elements[1].value)
    // })
    
    // firebase.auth().onAuthStateChanged(function (user) {
    //     if (user) {
    //         // User is signed in.
    //         if (user.photoURL !== null) {
    //             document.getElementById('accimg').src = user.photoURL;
    //         }
    //         document.getElementById('accname').innerText = user.displayName;
    
    //         localStorage.setItem('uid', user.uid)
    //         loggedIn()
    //     } else {
    //         // User is signed out.
    //         document.getElementsByClassName('pricing-button')[1].innerText = "Sign up"
    //         document.getElementsByClassName('pricing-button')[2].innerText = "Sign up"
    
    //         document.getElementsByClassName('pricing-button')[1].href = "/account/signup.html"
    //         document.getElementsByClassName('pricing-button')[2].href = "/account/signup.html"
    //     }
    // });
    
    // function loggedIn() {
    //     var user = firebase.auth().currentUser;
        
    //     if (user != null) {
            
    //         // profile pic
    //         if (user.photoURL !== null) {
    //             document.getElementById('accimg').src = user.photoURL;
    //             document.getElementById('accimg-ham').src = user.photoURL;
    //             document.getElementById('accimg').style.display = 'initial'
    //             document.getElementsByClassName('accimg-container')[0].style.display = 'inline-block'
    //             document.getElementById('accimg_p').src = user.photoURL;
    //         }
            
    //         // User is signed out.
    //         document.getElementsByClassName('pricing-button')[1].innerText = "Subscribe"
    //         document.getElementsByClassName('pricing-button')[2].innerText = "Subscribe"
            
    //         document.getElementsByClassName('pricing-button')[1].removeAttribute('href')
    //         document.getElementsByClassName('pricing-button')[2].removeAttribute('href')
            
    //         // menu on landing page
    //         document.getElementById('accname').innerText = user.displayName;
    
    //         // hamburger menu
    //         document.getElementById('accname-ham').innerText = user.displayName;
    //         document.getElementById('accmail-ham').innerText = user.email;
    
    //         // account preview
    //         document.getElementById('accname_p').innerText = user.displayName;
    //         document.getElementById('accmail_p').innerText = user.email;
    
    //         // buttons
    //         document.getElementById('account_p').style.display = 'grid'
    //         document.getElementById('login-form').style.display = 'none'
    //         document.getElementById('sign-up').style.display = 'none'
    //         document.getElementById('reset-password').style.display = 'none'
    //         document.getElementById('open-account-manager').style.display = 'block'
    //         document.getElementById('sign-out').style.display = 'block'
    //     }
    // }
    
    // let failedLoginAttempt = false
    // function login(email, password) {
    //     firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    //         .then(() => {
    //             return firebase.auth().signInWithEmailAndPassword(email, password);
    //         })
    //         .catch(function (error) {
    //             console.log(error.code)
    
    //             if (failedLoginAttempt === false) {
    //                 let failed = document.createElement('h2')
    //                 failed.setAttribute('class', 'failed-login')
    //                 failed.innerText = error.message
    //                 document.getElementById('login-form').prepend(failed)
    //                 failedLoginAttempt = true
    //             } else {
    //                 document.getElementsByClassName('failed-login')[0].innerText = error.message
    //             }
    //         });
    // }
    
    // function signout() {
    //     firebase.auth().signOut()
    // }
    
    // //log out
    // document.getElementById('sign-out').addEventListener('click', () => {
    //     firebase.auth().signOut().then(() => {
    //         location.reload()
    //     })
    // })
    
    // //reset password
    // let resetAction = false
    // document.getElementById('reset-password').addEventListener('click', () => {
    //     document.getElementById('reset-password').style.display = "none"
    //     document.getElementById('password').style.display = "none"
    //     document.getElementById('sign-up').style.display = "none"
    //     document.getElementById('log-in').style.display = "none"
    //     document.getElementById('reset-password-confirm').style.display = "block"
    //     document.getElementById('reset-password-text').style.display = "block"
    //     resetAction = true
    // })
    // document.getElementById('reset-password-confirm').addEventListener('click', () => {
    //     resetPassword(document.getElementById('email').value)
    // })
    // function resetPassword(email) {
    //     firebase.auth().sendPasswordResetEmail(email).then(function () {
    //         document.getElementById('reset-password-confirm').style.background = "#fba944"
    //         document.getElementById('reset-password-confirm').style.color = "white"
    //         document.getElementById('reset-password-confirm').innerText = "Sent!"
    //         document.getElementById('reset-password-confirm').style.pointerEvents = "none"
    //         document.getElementById('email').style.display = 'none'
    //         // Email sent.
    //         document.getElementById('reset-password-text').innerText = "An Email with instructions on how to reset your password has been sent. Check your Inbox."
    //         setTimeout(() => {
    //             document.getElementById('reset-password-text').innerText = "We will soon reload the page so you can log in."
    //             setTimeout(() => {
    //                 location.reload()
    //             }, 5000);
    //         }, 5000);
    //     }).catch(function (error) {
    //         // An error happened.
    //         console.log('Password reset request failed')
    //     });
    // }
    
    // Update link with correct platform is on linux
    // if (navigator.userAgent.indexOf("Linux") != -1) {
    //     document.getElementById('download-app-link').href = "https://update.forget-me-not.app/download/deb"
    //     document.getElementById('download-app-link').innerText = "Download for Linux"
    // } else if (navigator.userAgent.indexOf("Macintosh")!= -1) {
    //     document.getElementById('download-app-link-apple-silicon').style.display = 'inline-block'
    //     document.getElementById('download-app-link').innerText = "Download for Mac"
    //     document.getElementById('download-app-link').href = "https://update.forget-me-not.app/download/dmg"
    // } else if (navigator.userAgent.indexOf("Windows")!= -1) {
    //     document.getElementById('download-app-link').innerText = "Download for Windows"
    // } else {
    //     document.getElementById('download-app-link').innerText = "Platform not supported"
    //     document.getElementById('download-app-link').style.opacity = 0.6;
    //     document.getElementById('download-app-link').style.pointerEvents = 'none';
    // }
    
    // Checkoutsession for logged in users
    // document.getElementById('premiumM').addEventListener('click', () => {
    //     document.getElementById('premiumM').innerText = 'Loading...'
    
    //     firebase.database().ref('users/' + localStorage.getItem('uid') + '/tier').once("value").then(function readData(snapshot) {
    //         if (snapshot.val().customerId === undefined) {
    //             const createCustomer = firebase.functions().httpsCallable('createCustomer');
    //             createCustomer({ uid: localStorage.getItem('uid'), email: localStorage.getItem('email') })
    //                 .then((result) => {
    //                     console.log('Customer created')
    //                     setTimeout(() => {
    //                         createPortal(snapshot.val())
    //                     }, 1000);
    //                     return
    //                 })
    //         } else {
    //             createCheckout(snapshot.val(), 0)
    //         }
    //     })
    // })
    // document.getElementById('premiumY').addEventListener('click', () => {
    //     document.getElementById('premiumY').innerText = 'Loading...'
        
    //     firebase.database().ref('users/' + localStorage.getItem('uid') + '/tier').once("value").then(function readData(snapshot) {
    //         if (snapshot.val().customerId === undefined) {
    //             const createCustomer = firebase.functions().httpsCallable('createCustomer');
    //             createCustomer({ uid: localStorage.getItem('uid'), email: localStorage.getItem('email') })
    //                 .then((result) => {
    //                     console.log('Customer created')
    //                     setTimeout(() => {
    //                         createPortal(snapshot.val())
    //                     }, 1000);
    //                     return
    //                 })
    //         } else {
    //             createCheckout(snapshot.val(), 1)
    //         }
    //     })
    // })
    
    // function createCheckout(tier, subscriptionId) {
    //     const createCheckoutSession = firebase.functions().httpsCallable('createCheckoutSession');
    //     createCheckoutSession({ customerId: tier.customerId, subscription: subscriptionId }) //get actual id of user
    //         .then((result) => {
    //             // Read result of the Cloud Function.
    //             window.location.assign(result.data)
    //         })
    //         .catch((error) => {
    //             document.getElementById('premiumM').innerText = 'Unavailable'
    //             document.getElementById('premiumY').innerText = 'Unavailable'
    //             document.getElementById('premiumM').style.opacity = '0.6'
    //             document.getElementById('premiumY').style.opacity = '0.6'
    //             document.getElementById('premiumM').style.pointerEvents = 'none'
    //             document.getElementById('premiumY').style.pointerEvents = 'none'
    //             console.log(error)
    //         });
    // }
    