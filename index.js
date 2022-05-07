var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

var x = setInterval(function() {

 
    var now = new Date().getTime();
      
  
    var distance = countDownDate - now;
      
   
    
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
   
    document.getElementById("hrs").innerHTML =  hours
    document.getElementById("mints").innerHTML = minutes
    document.getElementById("secs").innerHTML =  seconds

    
      
    if (distance < 0) {
      clearInterval(x);
      document.getElementById(timer).innerHTML = "EXPIRED";
    }
  }, 1000);




const user= document.querySelector("#acsection");
const signinData=JSON.parse(localStorage.getItem("signin"));
if(signinData != null){
     user.innerHTML=`<h2>  ${signinData.username.toUpperCase()} </h2>
    <h2> <a href="./cart.html"> Cart </a></h2>`;
 }







 var mensData = [
  {image_url : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15928/goods_thumb_220-v3/591815f358a7.jpg" ,
name : "Men Automatic Self Wind Mechanical Canvas Rubber",
price : "$49.40",
strikedoffprice :"1799",
offprice : "48% Off",
ratingimg : "https://pngtree.com/freepng/five-star-praise_1912476.html" ,

},

{image_url : "https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16514/goods_thumb_220-v5/286a149e4bd4.jpg" ,
name : "XiaoMi Mijia Men Sport Shoes Sneakers Sneaker 4 4th Men",
price : "$44.99",
strikedoffprice :"",
offprice : "48% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},

{image_url : "https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16424/goods_thumb_220-v5/569af0a82ede.jpg" ,
name : "XiaoMi Mijia Men Sport Shoes Sneakers Sneaker 4 4th Men",
price : "$44.99",
strikedoffprice :" 1599",
offprice : "48% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},

{image_url : "https://gloimg.gbtcdn.com/soa/gb/item/6866331803104505856/16389/goods_thumb_220-v1/8522bdcf5601.jpg" ,
name : "XiaoMi Mijia Men Sport Shoes Sneakers Sneaker 4 4th Men",
price : "$44.99",
strikedoffprice :" 1499",
offprice : "48% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},

{image_url : "https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16469/goods_thumb_220-v3/a88032b6dd97.jpg" ,
name : "Original Xiaomi Backpack 7L/10L/15L/20L Travel Light",
price : "$6.99",
strikedoffprice :" 1399",
offprice : "48% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},

{image_url : "https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16514/goods_thumb_220-v3/e8fab8f96c7a.jpg" ,
name : "Original Xiaomi Mi Backpack 10L Urban Leisure Chest",
price : "$9.99",
strikedoffprice :" 2399",
offprice : "48% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},

{image_url : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/06/29/goods_thumb_220-v4/20180629100638_50703.jpg" ,
name : "CURREN 8225 Casual Men Quartz Watch - Brown",
price : " $25.88",
strikedoffprice :" 1799",
offprice : "48% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},

{image_url : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2017/11/22/goods_thumb_220-v1/20171122090633_28624.jpg" ,
name : "Titanium Steel Double Herringbone Bracelet",
price : " $12.64",
strikedoffprice :" 2999",
offprice : "48% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},

{image_url : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/11/30/goods_thumb_220-v1/20181130173553_50630.jpg" ,
name : "New Business Credit Card ID Wallet Mini Magnetic",
price : "$4.58",
strikedoffprice :" 849",
offprice : "48% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},

{image_url : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20180821/T017187/T0171870207/goods_thumb_220-v1/042050-9047.jpg" ,
name : "Portable Sports Water-resistant Anti-theft Phone",
price : "$6.22",
strikedoffprice :"",
offprice : "48% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},

{image_url : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20190531/T034195/T0341950291/goods_thumb_220-v3/175225-4104.jpg" ,
name : "Cotton Printed Breathable Baseball Cap",
price : "$23.99",
strikedoffprice :" 1199",
offprice : "48% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},
//  *************
{image_url : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20181120/goods_thumb_220-v2/2018112018452159973.jpg" ,
name : "JAMONT Men Casual Ancient England Knit Autumn",
price : "$14.78",
strikedoffprice :" 3199",
offprice : "28% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2017/12/13/goods_thumb_220-v1/20171213084822_70954.jpg" ,
name : "Stainless Steel Unique Stylish Men Ring",
price : "$8.99",
strikedoffprice :" 1599",
offprice : "28% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "https://gloimg.gbtcdn.com/gb/pdm-provider-img/straight-product-img/20171112/T010968/T0109680006/goods-goods_thumb_220/1510513943030095901.jpg" ,
name : "Men's Leather Belt Reversible Wide Rotationed Simple",
price : "$23.69",
strikedoffprice :" 1399",
offprice : "28% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20181016/T021828/T0218281173/goods_thumb_220-v1/231654-9945.jpg" ,
name : "Men's Casual Striped Fashion Long Sleeve Shirt",
price : "$25.22",
strikedoffprice :" 1199",
offprice : "28% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2017/08/10/goods_thumb_220-v1/20170810104752_24928.jpg" ,
name : "Men Leisure Breathable Slip-on Oxford Shoes",
price : "$60.00",
strikedoffprice :" 2199",
offprice : "28% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :"",
offprice : "28% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 1199",
offprice : "28% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 1199",
offprice : "28% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 999",
offprice : "28% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 1499",
offprice : "28% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 2099",
offprice : "28% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 889",
offprice : "28% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},

//  **************

{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 1499",
offprice : "40% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 1499",
offprice : "40% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 1099",
offprice : "40% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},

{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 1099",
offprice : "40% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 1499",
offprice : "40% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 1499",
offprice : "40% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 999",
offprice : "40% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 1099",
offprice : "40% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 1299",
offprice : "40% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 1299",
offprice : "40% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 999",
offprice : "40% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 999",
offprice : "40% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},

//  **************


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 6999",
offprice : "25% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 1199",
offprice : "25% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 1999",
offprice : "25% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 3499",
offprice : "25% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 1499",
offprice : "25% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 2599",
offprice : "25% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 2999",
offprice : "25% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 1999",
offprice : "25% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 999",
offprice : "25% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 1999",
offprice : "25% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "",
name : "",
price : "",
strikedoffprice :" 1599",
offprice : "25% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},
  // *************


{image_url : "" ,
  name : "",
  price : "",
  strikedoffprice :" 1499",
  offprice : "23% Off",
  ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
   },

   
{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 1099",
offprice : "23% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 999",
offprice : "23% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 999",
offprice : "23% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 1300",
offprice : "23% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 995",
offprice : "23% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 999",
offprice : "23% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 2199",
offprice : "23% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 1490",
offprice : "23% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 1999",
offprice : "23% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 1099",
offprice : "23% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


{image_url : "" ,
name : " ",
price : "",
strikedoffprice :" 1199",
offprice : "23% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},

{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 1299",
offprice : "23% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},

{image_url : "" ,
name : "",
price : "",
strikedoffprice :" 1200",
offprice : "23% Off",
ratingimg : "https://media.istockphoto.com/vectors/five-stars-rating-vector-icon-vector-id1072182672?k=20&m=1072182672&s=612x612&w=0&h=tHn5kbSN_Rb-7rCNyVpY6p8q9x4qsxDBb2oSurtDTno="
},


];