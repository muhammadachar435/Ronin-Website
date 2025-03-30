document.addEventListener("DOMContentLoaded", () => {
 
    const loginTrigger = document.getElementById("formlogin"); 
    const popuplogin = document.getElementById("pop-up1");
    const closeButton = document.getElementById("close1");

if (loginTrigger && popuplogin && closeButton) {
    loginTrigger.addEventListener("click", function(event) {
    event.preventDefault(); 
    popuplogin.classList.remove("hidden");
});

closeButton.addEventListener("click", function() {
    popuplogin.classList.add("hidden"); 
});

} 
else {
        console.error("One or more elements were not found.");
    }
});


// Audiobar

const audiobar  = document.getElementById("audiobar1");
const popupaudio = document.getElementById("pop-up");


let timeraudio;

if (audiobar && popupaudio ) {
    audiobar.addEventListener("mouseover", function(event) {
    event.preventDefault();
    popupaudio.classList.remove("hidden");
});

audiobar.addEventListener("mouseleave", function() {
    timeraudio = setTimeout(() => {
    popupaudio.classList.add("hidden");
}, 200);
});

popupaudio.addEventListener("mouseenter", function() {
    clearTimeout(timeraudio);
});

popupaudio.addEventListener("mouseleave", function() {
    popupaudio.classList.add("hidden");
});
}
else {
console.error("One or more elements (watchform) were not found.");
}


// Smartwatches

const smartwatch = document.getElementById("watches1");
const popupwatch = document.getElementById("pop-upwatch");

let timer;

if (smartwatch && popupwatch ) {
    smartwatch.addEventListener("mouseover", function(event) {
    event.preventDefault();
    popupwatch.classList.remove("hidden");
});

smartwatch.addEventListener("mouseleave", function() {
timer = setTimeout(() => {
    popupwatch.classList.add("hidden");
}, 200);
});

popupwatch.addEventListener("mouseenter", function() {
    clearTimeout(timer);
});

popupwatch.addEventListener("mouseleave", function() {
    popupwatch.classList.add("hidden");
});
}
else {
console.error("One or more elements (watchform) were not found.");
}

// Charging Devices

const chargid = document.getElementById("product3");
const popupchid = document.getElementById("pop-upcharging");

let timercharger;

if (chargid && popupchid) {
    chargid.addEventListener("mouseover", function(event) {
    event.preventDefault();
    popupchid.classList.remove("hidden");
});

chargid.addEventListener("mouseleave", function() {
    timercharger = setTimeout(() => {
    popupchid.classList.add("hidden");
}, 200);
});

popupchid.addEventListener("mouseenter", function() {
    clearTimeout(timercharger);
});

popupchid.addEventListener("mouseleave", function() {
popupchid.classList.add("hidden");
});
}
else {
    console.error("One or more elements (watchform) were not found.");
}


// Accessories


const Asseccores = document.getElementById("product4");
const popupaccseccor = document.getElementById("pop-upasseccories");

let timerAsseccores;

if (Asseccores && popupaccseccor) {
    Asseccores.addEventListener("mouseover", function(event) {
    event.preventDefault();
    popupaccseccor.classList.remove("hidden");
});

Asseccores.addEventListener("mouseleave", function() {
    timercharger = setTimeout(() => {
    popupaccseccor.classList.add("hidden");
},200);
});

popupaccseccor.addEventListener("mouseenter", function() {
    clearTimeout(timercharger);
});

popupaccseccor.addEventListener("mouseleave", function() {
    popupaccseccor.classList.add("hidden");
});
}
else{
    console.error("One or more elements (watchform) were not found.");
}
