let loginInitial = document.getElementById("loginForm").innerHTML
const url = "http://localhost:8080/"

function userLogin(form){
    let username = form.username.value
    let password = form.password.value
    fetch(`${URL}login`)
}