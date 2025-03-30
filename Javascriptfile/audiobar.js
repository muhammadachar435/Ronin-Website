document.addEventListener("DOMContentLoaded", () => {
    
const items = {
    earBuds: "popupearbuds",
    Handsfree: "popuphandsfree",
    Neckbands: "popupneckband",
    Headphone: "popupheadphone"
};

Object.keys(items).forEach(id => {

const trigger = document.getElementById(id);
const popup = document.getElementById(items[id]);

trigger.addEventListener("mouseover", () => popup.classList.remove("hidden"));
trigger.addEventListener("mouseleave", () => setTimeout(() => popup.classList.add("hidden"), 1000));

});
});



//smartwatches

document.addEventListener("DOMContentLoaded", () => {

const itemwatch = {
    Men: "menwatchpop",
    Women: "womenpopup"
};

Object.keys(itemwatch).forEach(id => {

const triggerwatch = document.getElementById(id);
const popupwatch = document.getElementById(itemwatch[id]);

triggerwatch.addEventListener("mouseover", () => popupwatch.classList.remove("hidden"));
triggerwatch.addEventListener("mouseleave", () => setTimeout(() => popupwatch.classList.add("hidden"), 1000));

});
});

//charging

document.addEventListener("DOMContentLoaded",function(){

const itemcharging={
    cable :"popupcable",
    powerBnk :"popupbank",
    Mobilecharger :"popupmobile"
};


Object.keys(itemcharging).forEach(id=>{
  
const triggercharging= document.getElementById(id);
const popcharging=document.getElementById(itemcharging[id]);

triggercharging.addEventListener("mouseover",()=>{
    popcharging.classList.remove("hidden");
});

triggercharging.addEventListener("mouseleave", () => {
    
setTimeout(() => {
popcharging.classList.add("hidden");
}, 1000);
});


})

})



//Asseccories


document.addEventListener("DOMContentLoaded",function(){

const itemAsseccories={
    ascable :"watchble",
    livetracker :"Tracker",
    watchstrap :"Strap"
};
    
Object.keys(itemAsseccories).forEach(id=>{
      
const triggerasseccor= document.getElementById(id);
const popaccseccor=document.getElementById(itemAsseccories[id]);
    
triggerasseccor.addEventListener("mouseover",()=>{
popaccseccor.classList.remove("hidden");
});
    

triggerasseccor.addEventListener("mouseleave", () => {
setTimeout(() => {
    console.log("show")
    popaccseccor.classList.add("hidden");
}, 1000);
});
    
})
    
})