

var cartData=JSON.parse(localStorage.getItem("cartitems")) || []



// Total amount
var total=cartData.reduce(function (sum,el,i,arr){

    return sum+Number(el.price)
    
    
    },0);
    
    console.log(total)


    // total no of items
    
    var length=cartData.length
    console.log(length)
    
    document.querySelector("#p").innerText= `Shoping Cart - Total no of Items :  ${length} `;

    document.querySelector(".button").innerText=`PROCEED TO Pay :$ ${total}`

cartData.map(function(el,index){


    var trow=document.createElement("tr")


    var tcol1=document.createElement("td")
    var img1=document.createElement("img")
img1.src=el.image_url;
img1.setAttribute("class","img1")
tcol1.append(img1)



var tcol2=document.createElement("td")
tcol2.innerText=el.name;

var tcol3=document.createElement("td")
var btn=document.createElement("button")
 btn.innerText="Remove item";
 btn.style.cursor="pointer";
 btn.style.color="white"
 btn.style.backgroundColor="black"
 btn.style.padding="10px"
 btn.style.borderRadius="5px"


 btn.addEventListener("click",function(){
removeItem(el,index)


 })
tcol3.append(btn)

 var tcol4=document.createElement("td")
 tcol4.innerText="$"+" "+el.price;


 var tcol5=document.createElement("td")
 var quantity=document.createElement("select")

 quantity.setAttribute("id","quantity")
 var x=document.createElement("option")
 x.innerText="1"
 x.setAttribute("value","1")

 var y=document.createElement("option")
 y.setAttribute("value","2")
 y.innerText="2"

 var z=document.createElement("option")
 z.innerText="3"
 z.setAttribute("value","3")


 quantity.append(x,y,z)
 tcol5.append(quantity)


 var tcol6=document.createElement("td")
 tcol6.innerText="Standard Delivery By 08 Apr - 10 Apr FREE"



 var tcol7=document.createElement("td")
 tcol7.innerText="$"+" " + el.price;


trow.append(tcol1,tcol2,tcol3,tcol4,tcol5,tcol6,tcol7)

document.querySelector("tbody").append(trow)



})




function removeItem(el, index) {
    console.log(el, index);
    cartData.splice(index, 1);
    console.log(cartData);
    localStorage.setItem("cartitems", JSON.stringify(cartData));
    window.location.reload();
  }




