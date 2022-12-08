let loginInitial = document.getElementById("loginForm").innerHTML
const url = "http://localhost:8080/"

function userLogin(form){
    let username = form.username.value
    let password = form.password.value
    fetch(`${url}login`,{
        method:'POST',
        headers:{
            'Content-Length':1000
        },
        body: JSON.stringify({
            "employee_username":username,
            "employee_password":password
        })
    })
    .then(response=>{
        console.log(response);
        console.log(...response.headers);
        console.log(response.body);
        if(response.status === 404){
        throw new Error(response.text().then(body=>console.log(body)));
    }
        setTimeout(()=>{},0);
        //document.getElementById("loginForm").innerHTML.append(response.text());
        return response.text();
    })
    .then(data=>{
        document.getElementById("loginForm").innerHTML = `<p>${data}</p><a href='main.html'>Back to main page</a>`;
    })
    .catch(error=>{
        console.error(error);
    })
}