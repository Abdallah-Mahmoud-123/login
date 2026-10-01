let container = document.querySelector(".container");
let e = 0;
function forgot_password() {
    var name = document.getElementById("name").value;
    if (name === "") {
        alert("Please enter your email address.");
        return;
    }
}

function create_account() {
    container.style.transform = "scale(0)";
    setTimeout(() => {
        container.innerHTML = `
    <h1>Create Account</h1>
    <input type="text" placeholder="Name" id="name">
    <input type="email" placeholder="Email" id="email">
    <input type="password" placeholder="Password" id="password">
    <p>Already have an account? <a href="#" onclick="login()">Login</a></p>
    <button id="createAccountBtn">Create Account</button>
    `;
        let createAccountBtn = document.getElementById("createAccountBtn");
        createAccountBtn.style.width = '150px'

        container.style.height = "420px";
        container.style.transform = "scale(1)";
    }, 1000);
}

function login() {

    container.style.transform = "scale(0)";
    setTimeout(() => {
        container.innerHTML = `
    <h1>Login</h1>
    <input type="text" placeholder="Name" id="name">
    <input type="password" placeholder="Password" id="password">
    <div class="create_acount_forgot_password">
            <a onclick="forgot_password()" href="#forgot_password">Forgot Password?</a>
            <a onclick="create_account()" href="#create_account">Create Account?</a>
            </div>
    <button id="loginBtn">Login</button>
    `;
        let loginBtn = document.getElementById("loginBtn");
        loginBtn.style.width = '100px'

        container.style.height = "300px";
        container.style.transform = "scale(1)";
    }, 1000);
}