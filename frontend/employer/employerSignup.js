document.getElementById("signup-form").addEventListener("submit", function(e){
    
    e.preventDefault();
    let username = document.getElementById("username").value;
    // let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    // let contact = document.getElementById("contact").value;
    let confirmpassword = document.getElementById("confirm-password").value;
    let role = "employer";
   
    
    if(password != confirmpassword){
        let confirmpassword = document.getElementById("confirm-password");
        console.log(confirmpassword)
        confirmpassword.value = "";
        confirmpassword.setAttribute("placeholder", "Password doesn't match");
        confirmpassword.style.border = "1px solid red";
        return;
    }
    else{
        let confirmpassword = document.getElementById("confirm-password");    
        confirmpassword = document.getElementById("confirm-password");
        confirmpassword.setAttribute("placeholder", "********");
        confirmpassword.style.border = "1px solid black";    
    }
    
    let data = {
        username,
        password,
        role,
    }
    
    fetch("http://localhost:5000/signup" , {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }).then(res => {
        if(res.status == 300){
            formResetFlag = false;
          
            let usernameField = document.getElementById("username");
            let passwordField = document.getElementById("password");
            let confirmPasswordField = document.getElementById("confirm-password");
            
            usernameField.value=username;
         
           
            passwordField.value = password;
            confirmPasswordField.value = "";
            confirmPasswordField.value = confirmpassword;
            usernameField.value = "";
            usernameField.setAttribute("placeholder", "user already exists");
            usernameField.style.border = "1px solid red";
            

            throw new Error("user already registered.");
        } 
        else {
            document.getElementById("signup-form").reset();
            return res.json();
        }
    })
    .then(data=>{
       let usernameField = document.getElementById("username");
         usernameField.setAttribute("placeholder", "dj123");
         usernameField.style.border = "1px solid black";
         alert(`${username} is successfully registered.`);
         
        console.log(data)
    }).catch(err=>{
        console.log(err)
    })
});
