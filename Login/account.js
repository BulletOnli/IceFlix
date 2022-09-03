
// LOG IN CONTAINER
const createAccount = document.getElementById('signUp')
const loginContainer = document.querySelector('.login-container')

createAccount.addEventListener('click', () => {
    loginContainer.style.display = "none"
    signupContainer.style.display = "flex"
})

// SIGN UP CONTAINER
const loginAccount = document.getElementById('login')
const signupContainer = document.querySelector('.signup-container')

loginAccount.addEventListener('click', () => {
    signupContainer.style.display = "none"
    loginContainer.style.display = "flex"
})


// Login
let email = document.getElementById("email")
let password = document.getElementById("password")
let error = document.getElementById('error-text')
let loginBtn = document.getElementById('login-btn')

loginBtn.addEventListener('click', () => {
    if (email.value == "admin@gmail.com" && password.value == "admin") {
        document.location.href = "../movies/movie.html"
    } else {
        error.textContent = "Invalid Email or Password!"
    }
})


// create
let createBtn = document.getElementById('create-btn')

createBtn.addEventListener("click", () => {
    console.log("sfsf")
})