document.querySelector("form").addEventListener("submit",myfunction)


var addressData=JSON.parse(localStorage.getItem("addressDetails")) || []
function myfunction(){
event.preventDefault()
var obj1={
    
name1:form.name.value,

surname:form.Surname.value,


address:form.adress1.value,

addresss:form.adress2.value,

country:form.contry.value,

state:form.state.value,

city:form.City.value,

mobileno:form.mobailno.value,

emaiid:form.email.value,

}
console.log(obj1)

addressData.push(obj1)
console.log(addressData)
localStorage.setItem("addressDetails",JSON.stringify(addressData))

window.location.href = "payment.html";

}