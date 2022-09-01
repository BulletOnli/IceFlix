
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