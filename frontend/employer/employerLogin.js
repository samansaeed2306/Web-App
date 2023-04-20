document.getElementById("login-form").addEventListener("submit", function(e){
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    let data = {
        username,
        password,
       
    }
    fetch("http://localhost:5000/login" , {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }).then(res => {
        if(res.status === 200) {
            document.getElementById("login-form").reset();
            return res.json();
        } else {
            throw new Error("Login failed");
        }
    }).then(data => {
        if(data.user.role === "employer") {
            let errorMsg = document.getElementById("error");
                errorMsg.innerHTML = "Login Successful!";
                errorMsg.style.color = "green";
                 window.location.href = "/frontend/index.html";
           }
             else {
                let errorMsg = document.getElementById("error");
                errorMsg.innerHTML = "*wrong username or password";
                errorMsg.style.color = "red";
            }
        //console.log(data);
    }).catch(err => {
        if ( err) {
            let errorMsg = document.getElementById("error");
            errorMsg.innerHTML = "*wrong username or password";
            errorMsg.style.color = "red";
        } else {
            console.log(err);
        }
    });
});