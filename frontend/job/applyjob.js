document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let formData = new FormData(this);
    
    fetch('http://localhost:5000/attachResume', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      let imageUrl = data.imageUrl;
      let imageElement = document.createElement('img');
      imageElement.src = imageUrl;
      document.getElementById('image-container').appendChild(imageElement);
    })
    .catch(error => console.error(error));
  });
  




// document.getElementById("attachResume").addEventListener("click", function(e){
//     e.preventDefault();
    
//     fetch("http://localhost:5000/attachResume" , {
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify(data)
//     }).then(res => {
//         if(res.status === 200) {
//             document.getElementById("login-form").reset();
//             return res.json();
//         } else {
//             throw new Error("Login failed");
//         }
//     }).then(data => {
//         if(data.user.role === "student") {
//             let errorMsg = document.getElementById("error");
//                 errorMsg.innerHTML = "Login Successful!";
//                 errorMsg.style.color = "green";
//                  window.location.href = "/frontend/index.html";
//            }
//              else {
//                 let errorMsg = document.getElementById("error");
//                 errorMsg.innerHTML = "*wrong username or password";
//                 errorMsg.style.color = "red";
//             }
//         //console.log(data);
//     }).catch(err => {
//         if ( err) {
//             let errorMsg = document.getElementById("error");
//             errorMsg.innerHTML = "*wrong username or password";
//             errorMsg.style.color = "red";
//         } else {
//             console.log(err);
//         }
//     });
// });