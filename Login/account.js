
// LOG IN CONTAINER
const createAccount = document.getElementById('signUp')
const loginContainer = document.querySelector('.login-container')

createAccount.addEventListener('click', function() {
    loginContainer.style.display = "none"
    signupContainer.style.display = "flex"
})

// SIGN UP CONTAINER
const loginAccount = document.getElementById('login')
const signupContainer = document.querySelector('.signup-container')

loginAccount.addEventListener('click', function() {
    signupContainer.style.display = "none"
    loginContainer.style.display = "flex"
})


// Login

let email = document.getElementById('email')
let password = document.getElementById('password')
let error = document.querySelector('.error')
let loginBtn = document.getElementById('login-btn')

let message = "Wrong Email or Password!";

loginBtn.addEventListener('click', function() {
    if (email.value == "admin@gmail.com" && password.value == "admin") {
        window.location.pathname = 'movies/movie.html'
    } else {
        error.innerHTML = message
    }
})