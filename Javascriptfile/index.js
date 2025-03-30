document.addEventListener("DOMContentLoaded", function () {
const cartIcon=document.querySelector("#cart-icon");
const cart=document.querySelector(".cart");
const cartClose=document.querySelector("#cart-close");

cartIcon.addEventListener("click",()=>cart.classList.add("active"));
cartClose.addEventListener("click",()=>cart.classList.remove("active"));

const addCartButtons = document.querySelectorAll(".add-cart");
addCartButtons.forEach(button => {
  button.addEventListener("click", event => {
    const productBox = event.target.closest(".product-box");
    addToCart(productBox);
  });
});

const cartcontent=document.querySelector(".cart-content");
const addToCart = (productBox) => {
  const productImgSrc = productBox.querySelector("img").src;
  const productTitle = productBox.querySelector(".product-title").textContent;
  const productPrice = productBox.querySelector(".price").textContent;

  const CardItems=cartcontent.querySelectorAll(".cart-product-title");
  for(let item  of CardItems){
if(item.textContent==productTitle){
    alert("Item is Added in Above Cart Box");
    return;
}
  }

  const cartBox = document.createElement("div");
  cartBox.classList.add("cart-box");
  cartBox.innerHTML = `
    <img src="${productImgSrc}" class="cart-img" alt="Product Image">
<div class="cart-detail">
<h2 class="cart-product-title">${productTitle}</h2>
<span class="cart-price">${productPrice}</span>
<div class="cart-quantity">
<button id="decrement">-</button>
<span class="number">1</span>
<button id="increment">+</button>
</div>
</div>
<i class="cart-remove"><img src="Delete.png" alt=""></i>
  `;
 cartcontent.appendChild(cartBox);
  // Append the cartBox to the cart container
  // (not shown in the provided code snippet)

  cartBox.querySelector(".cart-remove").addEventListener("click",()=>{
    cartBox.remove();
    updateCartCount(-1);
    updatetotalprice(-1);
  });

  updatetotalprice();

cartBox.querySelector(".cart-quantity").addEventListener("click", event=>{
  const numberElement=cartBox.querySelector(".number");
  const decrementButton=cartBox.querySelector("#decrement");
  let quantity=numberElement.textContent;
  
  if(event.target.id === "decrement" && quantity>1){
    quantity--;
    if(quantity==1){
    decrementButton.style.color="#999" ;   
  }
  }
  else if(event.target.id==="increment"){
    quantity++;
    decrementButton.style.color="#333";
  }
  
  numberElement.textContent=quantity;
  updatetotalprice();
});
    updateCartCount(1);
    updatetotalprice();
};

const updatetotalprice = () => {
  const totalpriceElement = document.querySelector(".total-price");
  const cartBoxes = cartcontent.querySelectorAll(".cart-box");
  let total = 0;

  cartBoxes.forEach(cartBox => {
    const priceElement = cartBox.querySelector(".cart-price");
    const quantityElement = cartBox.querySelector(".number");

    // Remove any currency symbols like "$" or "Rs:" and commas, then convert to a number
    const price = parseFloat(priceElement.textContent.replace(/[^0-9.]/g, "").trim());
    const quantity = parseInt(quantityElement.textContent);

    total += price * quantity;
  });

  // Show total price with "Rs:" and formatted with commas
  totalpriceElement.textContent = total > 0 ? `Rs: ${total.toLocaleString()}` : "";
};



let cartItemcount=0;
const updateCartCount= change =>{
  const cartItemCountBadge= document.querySelector(".cart-item-count");
  cartItemcount+=change;
  if(cartItemcount>0){
    cartItemCountBadge.style.visibility="visible";
    cartItemCountBadge.textContent=cartItemcount;
  
  }
  else{
    cartItemCountBadge.style.visibility="hidden";
    cartItemCountBadge.textContent="";
  }
}


const  buyNowButton= document.querySelector(".btn-buy");
buyNowButton.addEventListener("click",()=>{

  const cartBoxes= cartcontent.querySelectorAll(".cart-box");
  if(cartBoxes.length==0){
  alert("Your cart Is empty! Please Add Cart to buy item");
  return;
  }

  cartBoxes.forEach(cartBox=>cartBox.remove());
  cartItemcount=0;
  updateCartCount(0);
  updatetotalprice();
  alert("Thank you for you Purchase!");


});

});


document.addEventListener("DOMContentLoaded", function () {
  const cartIconindex=document.querySelector("#cart-index");
  const cartindex=document.querySelector(".cart");
  const cartCloseindex=document.querySelector("#cart-close");
  
  cartIconindex.addEventListener("click",()=>cartindex.classList.add("active"));
  cartCloseindex.addEventListener("click",()=>cartindex.classList.remove("active"));
  
  const addCartButtonsindex = document.querySelectorAll(".add-cart");
  addCartButtonsindex.forEach(button => {
    button.addEventListener("click", event => {
      const productBoxindex = event.target.closest(".product-box");
      addToCart(productBoxindex);
    });
  });
  
  const cartcontentindex=document.querySelector(".cart-content");
  const addToCartindex = (productBoxindex) => {
    const productImgSrcindex = productBoxindex.querySelector("img").src;
    const productTitleindex = productBoxindex.querySelector(".product-title").textContent;
    const productPriceindex = productBoxindex.querySelector(".price").textContent;
  
    const CardItemsindex=cartcontentindex.querySelectorAll(".cart-product-title");
    for(let itemindex  of CardItemsindex){
  if(itemindex.textContent==productTitleindex){
      alert("Item is Added in Above Cart Box");
      return;
  }
    }
  
    const cartBoxindex = document.createElement("div");
    cartBoxindex.classList.add("cart-box");
    cartBoxindex.innerHTML = `
      <img src="${productImgSrcindex}" class="cart-img" alt="Product Image">
  <div class="cart-detail">
  <h2 class="cart-product-title">${productTitleindex}</h2>
  <span class="cart-price">${productPriceindex}</span>
  <div class="cart-quantity">
  <button id="decrement">-</button>
  <span class="number">1</span>
  <button id="increment">+</button>
  </div>
  </div>
  <i class="cart-remove"><img src="Delete.png" alt=""></i>
    `;
   cartcontentindex.appendChild(cartBoxindex);
    // Append the cartBox to the cart container
    // (not shown in the provided code snippet)
  
cartBoxindex.querySelector(".cart-remove").addEventListener("click",()=>{
  cartBoxindex.remove();
  updateCartCount(-1);
  updatetotalprice(-1);
});
  
updatetotalprice();
  
cartBoxindex.querySelector(".cart-quantity").addEventListener("click", event=>{
    const numberElementindex=cartBoxindex.querySelector(".number");
    const decrementButtonindex=cartBoxindex.querySelector("#decrement");
    let quantityindex=numberElementindex.textContent;
    
    if(event.target.id === "decrement" && quantityindex>1){
      quantityindex--;
      if(quantityindex==1){
      decrementButtonindex.style.color="#999" ;   
    }
    }
    else if(event.target.id==="increment"){
      quantityindex++;
      decrementButtonindex.style.color="#333";
    }
    
    numberElementindex.textContent=quantityindex;
    updatetotalpriceindex();
  });
      updateCartCountindex(1);
      updatetotalpriceindex();
  };
  
  const updatetotalpriceindex = () => {
    const totalpriceElementindex = document.querySelector(".total-price");
    const cartBoxesindex = cartcontent.querySelectorAll(".cart-box");
    let totalindex = 0;
  
    cartBoxesindex.forEach(cartBoxindex => {
      const priceElementindex = cartBoxindex.querySelector(".cart-price");
      const quantityElementindex = cartBoxindex.querySelector(".number");
  
      // Remove any currency symbols like "$" or "Rs:" and commas, then convert to a number
      const priceindex = parseFloat(priceElementindex.textContent.replace(/[^0-9.]/g, "").trim());
      const quantityindex1 = parseInt(quantityElementindex.textContent);
  
      totalindex += priceindex * quantityindex1;
    });
  
    // Show total price with "Rs:" and formatted with commas
    totalpriceElementindex.textContent = totalindex > 0 ? `Rs: ${totalindex.toLocaleString()}` : "";
  };
  
  
  
  let cartItemcountindex=0;
  const updateCartCountindex= change =>{
    const cartItemCountBadgeindex= document.querySelector(".cart-item-count");
    cartItemcountindex+=change;
    if(cartItemcountindex>0){
      cartItemCountBadgeindex.style.visibility="visible";
      cartItemCountBadgeindex.textContent=cartItemcountindex;
    
    }
    else{
      cartItemCountBadgeindex.style.visibility="hidden";
      cartItemCountBadgeindex.textContent="";
    }
  }
  
  
  const  buyNowButtonindex= document.querySelector(".btn-buy");
  buyNowButtonindex.addEventListener("click",()=>{
  
    const cartBoxesindx1= cartcontent.querySelectorAll(".cart-box");
    if(cartBoxes.length==0){
    alert("Your cart Is empty! Please Add Cart to buy item");
    return;
    }
  
    cartBoxesindx1.forEach(cartBoxindex=>cartBoxindex.remove());
    cartItemcountindex=0;
    updateCartCountindex(0);
    updatetotalpriceindex();
    alert("Thank you for you Purchase!");
  
  
  });
  
  });