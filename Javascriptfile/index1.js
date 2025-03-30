document.addEventListener("DOMContentLoaded", function () {
const cartIcon1=document.querySelector("#cart-icon1");
const cart1=document.querySelector(".cart");
const cartClose1=document.querySelector("#cart-close");

cartIcon1.addEventListener("click",()=>cart1.classList.add("active"));
cartClose1.addEventListener("click",()=>cart1.classList.remove("active"));

const addCartButtons1 = document.querySelectorAll(".add-cart");
addCartButtons1.forEach(button => {
  button.addEventListener("click", event => {
    const productBox1 = event.target.closest(".product-box");
    addToCart(productBox1);
  });
});

const cartcontent1=document.querySelector(".cart-content");
const addToCart1 = (productBox1) => {
  const productImgSrc1 = productBox1.querySelector("img").src;
  const productTitle1 = productBox1.querySelector(".product-title").textContent;
  const productPrice1 = productBox1.querySelector(".price").textContent;

  const CardItems1=cartcontent1.querySelectorAll(".cart-product-title");
  for(let item1  of CardItems1){
if(item1.textContent==productTitle1){
    alert("This item is already in the Cart");
    return;
}
  }

  const cartBox1 = document.createElement("div");
  cartBox1.classList.add("cart-box");
  cartBox1.innerHTML = `
    <img src="${productImgSrc1}" class="cart-img" alt="Product Image">
<div class="cart-detail">
<h2 class="cart-product-title">${productTitle1}</h2>
<span class="cart-price">${productPrice1}</span>
<div class="cart-quantity">
<button id="decrement">-</button>
<span class="number">1</span>
<button id="increment">+</button>
</div>
</div>
<i class="cart-remove"><img src="Delete.png" alt=""></i>
  `;
 cartcontent1.appendChild(cartBox1);
  // Append the cartBox to the cart container
  // (not shown in the provided code snippet)

  cartBox1.querySelector(".cart-remove").addEventListener("click",()=>{
    cartBox1.remove();
    updateCartCount(-1);
    updatetotalprice(-1);
  });

  updatetotalprice();

cartBox1.querySelector(".cart-quantity").addEventListener("click", event=>{
  const numberElement1=cartBox1.querySelector(".number");
  const decrementButton1=cartBox1.querySelector("#decrement");
  let quantity1=numberElement1.textContent;
  
  if(event.target.id === "decrement" && quantity1>1){
    quantity1--;
    if(quantity1==1){
    decrementButton1.style.color="#999" ;   
  }
  }
  else if(event.target.id==="increment"){
    quantity1++;
    decrementButton1.style.color="#333";
  }
  
  numberElement1.textContent=quantity1;
  updatetotalprices();
});
    updateCartCounts(1);
    updatetotalprices();
};

const updatetotalprices = () => {
  const totalpriceElement1 = document.querySelector(".total-price");
  const cartBoxes1 = cartcontent1.querySelectorAll(".cart-box");
  let total1 = 0;

  cartBoxes1.forEach(cartBox1 => {
    const priceElement1 = cartBox1.querySelector(".cart-price");
    const quantityElement1 = cartBox1.querySelector(".number");

    // Remove any currency symbols like "$" or "Rs:" and commas, then convert to a number
    const price1 = parseFloat(priceElement1.textContent.replace(/[^0-9.]/g, "").trim());
    const quantity1 = parseInt(quantityElement1.textContent);

    total1 += price1 * quantity1;
  });

  // Show total price with "Rs:" and formatted with commas
  totalpriceElement1.textContent = total1 > 0 ? `Rs: ${total1.toLocaleString()}` : "";
};



let cartItemcount1=0;
const updateCartCounts= change =>{
  const cartItemCountBadge1= document.querySelector(".cart-item-count");
  cartItemcount1+=change;
  if(cartItemcount1>0){
    cartItemCountBadge1.style.visibility="visible";
    cartItemCountBadge1.textContent=cartItemcount;
  
  }
  else{
    cartItemCountBadge1.style.visibility="hidden";
    cartItemCountBadge1.textContent="";
  }
}


const  buyNowButton1= document.querySelector(".btn-buy");
buyNowButton1.addEventListener("click",()=>{

  const cartBoxes1= cartcontent1.querySelectorAll(".cart-box");
  if(cartBoxes1.length==0){
  alert("Your cart Is empty! Please Add Cart to buy item");
  return;
  }

  cartBoxes1.forEach(cartBox1=>cartBox1.remove());
  cartItemcount1=0;
  updateCartCounts(0);
  updatetotalprices();
  alert("Thank you for you Purchase!");


});

});
