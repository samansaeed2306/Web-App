document.getElementById("addJob-form").addEventListener("submit", function(e){
    
    e.preventDefault();
    let title = document.getElementById("title").value;
    // let email = document.getElementById("email").value;
    let description = document.getElementById("desc").value;
    // let contact = document.getElementById("contact").value;
    let salary = document.getElementById("salary").value;
    // let role = "student";
    let required_Qualification = document.getElementById("qualification").value;
    
    
    
    let data = {
        title,
        description,
        salary,
        required_Qualification,
    }
    
    fetch("http://localhost:5000/addJob" , {
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
            document.getElementById("addJob-form").reset();
            return res.json();
        }
    })
    .then(data=>{
       let titleField = document.getElementById("title");
         titleField.setAttribute("placeholder", "job123");
         titleField.style.border = "1px solid black";
         alert(`${title} is successfully added.`);
         
        console.log(data)
    }).catch(err=>{
        console.log(err)
    })
});
