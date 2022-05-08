document.querySelector("form").addEventListener("submit",myfunction)


var addressData=JSON.parse(localStorage.getItem("addressDetails")) || []
function myfunction(){
event.preventDefault()
var obj1={
    
name1:document.querySelector(".name1").value,

name2:document.querySelector(".name2").value,


address:document.querySelector(".add1").value,

addresss:document.querySelector(".add2").value,

country:document.querySelector("#country").value,

state:document.querySelector(".state").value,

city:document.querySelector(".city").value,

mobileno:document.querySelector(".mobno").value,

emaiid:document.querySelector(".email").value,

}
console.log(obj1)

addressData.push(obj1)
console.log(addressData)
localStorage.setItem("addressDetails",JSON.stringify(addressData))

window.location.href = "payment.html";

}