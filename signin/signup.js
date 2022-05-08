

var form = document.querySelector("form");
let LSData = JSON.parse(localStorage.getItem("userData"));
form.addEventListener("submit", function (event) {
  event.preventDefault();
  var data = {
    username: form.username.value,
    email: form.email.value,
    password: form.password.value,
  };
  if (LSData != null && LSData.email === data.email) {
    alert("Account already exist. Please Signin");
    return;
  }

  localStorage.setItem("userData", JSON.stringify(data));
  alert("Signup successful. Please Signin");
});