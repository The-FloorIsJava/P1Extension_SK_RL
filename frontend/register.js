let registerInitial = document.getElementById("registerForm").innerHTML
const url = "http://localhost:8080/"

async function userRegister(form){
    let username = form.username.value
    let password = form.password.value
    let email = form.email.value
    try{
        const response = await fetch(`${url}register`,{
            method:"POST",
            body: JSON.stringify({
                "employee_username":username,
                "employee_password":password,
                "employee_email":email
            })
        })
        const result = await response.text();
        document.getElementById("registerForm").innerHTML = `${result}<br><a href="main.html">return to main</a>`;
    }catch(error){
        console.error(error);
    }
    
}