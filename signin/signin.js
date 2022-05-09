

var form = document.querySelector("form");
var userData=JSON.parse(localStorage.getItem("userData"));


form.addEventListener("submit",function(event){
    event.preventDefault();
    var data={
            email: form.email.value,
            password: form.password.value
    }

    if(userData === null){
        alert("Please Create an Account");
    } else if(userData.email==data.email && userData.password == data.password){
     alert("Sign In Successful");
     localStorage.setItem("signin",JSON.stringify
     (userData));
     window.location.href ="/index.html" 
    }else{
        alert("user Does Not Exists")
    }
})