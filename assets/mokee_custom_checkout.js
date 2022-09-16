
var x = document.getElementsByClassName("order-summary-toggle");
x[0].click();
		
console.log();
if(document.getElementsByClassName("breadcrumb")[0].children.length==4){

var cart = document.querySelectorAll(".breadcrumb li:nth-child(1)");
	
  if(cart.length>0){
		cart[0].classList.add("hide");		
	}
	else{
var cart1 = document.querySelectorAll(".breadcrumb li:nth-child(1)");
cart1[0].classList.add("hide");	
}  
  
  
var customer = document.querySelectorAll(".breadcrumb li:nth-child(2) .breadcrumb__text");
	if(customer.length>0){
		customer[0].textContent='Enter Address';		
	}
	else{
var customer1 = document.querySelectorAll(".breadcrumb li:nth-child(2) .breadcrumb__link");
customer1[0].textContent='Enter Address';
}
var Shippingd = document.querySelectorAll(".breadcrumb li:nth-child(3) .breadcrumb__text");
	if(Shippingd.length>0){
Shippingd[0].textContent='Delivery Options';
}
else{
var Shippingd1 = document.querySelectorAll(".breadcrumb li:nth-child(3) .breadcrumb__link");
Shippingd1[0].textContent='Delivery Options';
}
var payment = document.querySelectorAll(".breadcrumb li:nth-child(4) .breadcrumb__text");
if(payment.length>0){
payment[0].textContent='Payment';
}
else{
var payment1 = document.querySelectorAll(".breadcrumb li:nth-child(4) .breadcrumb__link");
payment1[0].textContent='Payment';
}
}

if(document.getElementsByClassName("breadcrumb")[0].children.length==3){
  var cart = document.querySelectorAll(".breadcrumb li:nth-child(1)");
	
  if(cart.length>0){
		cart[0].classList.add("hide");	
	}
	else{
var cart1 = document.querySelectorAll(".breadcrumb li:nth-child(1)");
cart1[0].classList.add("hide");	
}
  
  
var customer = document.querySelectorAll(".breadcrumb li:nth-child(2) .breadcrumb__text");
	if(customer.length>0){
		customer[0].textContent='Enter Address';		
	}
	else{
var customer1 = document.querySelectorAll(".breadcrumb li:nth-child(2) .breadcrumb__link");
customer1[0].textContent='Enter Address';
}
var Shippingd = document.querySelectorAll(".breadcrumb li:nth-child(3) .breadcrumb__text");
	if(Shippingd.length>0){
Shippingd[0].textContent='Delivery Options';
}
else{
var Shippingd1 = document.querySelectorAll(".breadcrumb li:nth-child(3) .breadcrumb__link");
Shippingd1[0].textContent='Delivery Options';
}
var payment = document.querySelectorAll(".breadcrumb li:nth-child(4) .breadcrumb__text");
if(payment.length>0){
payment[0].textContent='Payment';
}
else{
var payment1 = document.querySelectorAll(".breadcrumb li:nth-child(4) .breadcrumb__link");
payment1[0].textContent='Payment';
}

}
if(document.getElementsByClassName("breadcrumb")[0].children.length==2){
	
var customer = document.querySelectorAll(".breadcrumb li:nth-child(1) .breadcrumb__text");
	if(customer.length>0){
		customer[0].textContent='Enter Address';
	}
	else{
var customer1 = document.querySelectorAll(".breadcrumb li:nth-child(1) .breadcrumb__link");
customer1[0].textContent='Enter Address';
}

var payment = document.querySelectorAll(".breadcrumb li:nth-child(2) .breadcrumb__text");
if(payment.length>0){
payment[0].textContent='Payment';
}
else{
var payment1 = document.querySelectorAll(".breadcrumb li:nth-child(2) .breadcrumb__link");
payment1[0].textContent='Payment';
}

var address = document.querySelectorAll(".breadcrumb li:nth-child(1)");
address[0].style.width = "50%";
var payment = document.querySelectorAll(".breadcrumb li:nth-child(2)");
payment[0].style.width = "50%";
}

