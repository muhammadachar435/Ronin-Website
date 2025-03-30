const boxtred1= document.getElementById("imgtrend1");
const boxtred2= document.getElementById("imgtrend2");
const boxtred3= document.getElementById("imgtrend3");

const clicktred1 =document.getElementById("clicktrend1")
const clicktred2 =document.getElementById("clicktrend2")
const clicktred3 =document.getElementById("clicktrend3")

clicktred1.addEventListener("click",(Event)=>{
    Event.preventDefault();
    boxtred1.style.display="block";
    boxtrend2.style.display="none";
    boxtrend3.style.display="none"
    
});

clicktred2.addEventListener("click",(Event)=>{
    Event.preventDefault();
    boxtred1.style.display="none";
    boxtred2.style.display="block";
    boxtred3.style.display="none"
    
});

clicktred3.addEventListener("click",(Event)=>{
    Event.preventDefault();
    boxtred1.style.display="none";
    boxtred2.style.display="none";
    boxtred3.style.display="block"
    
});

// box2

const boxtred21= document.getElementById("imgtrend21");
const boxtred22= document.getElementById("imgtrend22");
const box2tred23= document.getElementById("imgtrend23");

const clicktred21 =document.getElementById("clicktrend21")
const clicktred22 =document.getElementById("clicktrend22")
const clicktred23 =document.getElementById("clicktrend23")

clicktred21.addEventListener("click",(Event)=>{
    Event.preventDefault();
    boxtred21.style.display="block";
    boxtred22.style.display="none";
    box2tred23.style.display="none"
    
});

clicktred22.addEventListener("click",(Event)=>{
    Event.preventDefault();
    boxtred21.style.display="none";
    boxtred22.style.display="block";
    box2tred23.style.display="none"
    
});

clicktrend23.addEventListener("click",(Event)=>{
    Event.preventDefault();
    boxtrend21.style.display="none";
    boxtrend22.style.display="none";
    box2trend23.style.display="block"
    
});


// // box3

const boxtred31= document.getElementById("imgtrend31");
const boxtred32= document.getElementById("imgtrend32");
const boxtred33= document.getElementById("imgtrend33");

const clicktred31 =document.getElementById("clicktrend31")
const clicktred32 =document.getElementById("clicktrend32")
const clicktred33 =document.getElementById("clicktrend33")

clicktred31.addEventListener("click",(Event)=>{
    Event.preventDefault();
    boxtred31.style.display="block";
    boxtred32.style.display="none";
    boxtred33.style.display="none"
    
});

clicktred32.addEventListener("click",(Event)=>{
    Event.preventDefault();
    boxtred31.style.display="none";
    boxtred32.style.display="block";
    boxtred33.style.display="none"
    
});

clicktred33.addEventListener("click",(Event)=>{
    Event.preventDefault();
    boxtred31.style.display="none";
    boxtred32.style.display="none";
    boxtred33.style.display="block"
    
});


// box4

const boxtred41= document.getElementById("imgtrend41");
const boxtred42= document.getElementById("imgtrend42");


const clicktred41 =document.getElementById("clicktrend41")
const clicktred42 =document.getElementById("clicktrend42")


clicktred41.addEventListener("click",(Event)=>{
    Event.preventDefault();
    boxtred41.style.display="block";
    boxtred42.style.display="none";
    
});

clicktred42.addEventListener("click",(Event)=>{
    Event.preventDefault();
    boxtred41.style.display="none";
    boxtred42.style.display="block";

    
});


// // box5

const boxtred51= document.getElementById("imgtrend51");
const boxtred52= document.getElementById("imgtrend52");
const boxtred53= document.getElementById("imgtrend53");

const clicktred51 =document.getElementById("clicktrend51")
const clicktred52 =document.getElementById("clicktrend52")
const clicktred53 =document.getElementById("clicktrend53")

clicktred51.addEventListener("click",(Event)=>{
    Event.preventDefault();
    boxtred51.style.display="block";
    boxtred52.style.display="none";
    boxtred53.style.display="none"
    
});

clicktred52.addEventListener("click",(Event)=>{
    Event.preventDefault();
    boxtred51.style.display="none";
    boxtred52.style.display="block";
    boxtred53.style.display="none"
    
});

clicktred53.addEventListener("click",(Event)=>{
    Event.preventDefault();
    boxtred51.style.display="none";
    boxtred52.style.display="none";
    boxtred53.style.display="block"
    
});


    const trendcontainer = document.querySelector(".scroll-containertrend");

    let Isdowntrend = false;
    let StartXtrend;
    let scrollLefttrend;
    let velocitytrend = 0;
    let momentIDtrend;
    
    trendcontainer.addEventListener("mousedown", (e) => {
        Isdowntrend = true;
        trendcontainer.classList.add("active");
        StartXtrend = e.pageX - trendcontainer.offsetLeft;
        scrollLefttrend = trendcontainer.scrollLeft;
        velocitytrend = 0;
        cancelmomentumtrend();  // Fixed function name
        e.preventDefault();
    });
    
    trendcontainer.addEventListener("mouseleave", () => {
        Isdowntrend = false;
        trendcontainer.classList.remove("active");
        beginmomentumtrend();
    });
    
    trendcontainer.addEventListener("mouseup", () => {
        Isdowntrend = false;
        trendcontainer.classList.remove("active");
        beginmomentumtrend();
    });
    
    trendcontainer.addEventListener("mousemove", (e) => {
        if (!Isdowntrend) return;
        e.preventDefault();
        const xtrend = e.pageX - trendcontainer.offsetLeft;
        const walktrend = (xtrend - StartXtrend) * 2;
        trendcontainer.scrollLeft = scrollLefttrend - walktrend;
        scrollLefttrend = trendcontainer.scrollLeft; // Added to track latest position
        velocitytrend = -walktrend;  // Fixed velocity update
    });
    
    function beginmomentumtrend() {
        cancelmomentumtrend();  // Fixed function name
        momentIDtrend = requestAnimationFrame(momentlooptrend);
    }
    
    function cancelmomentumtrend() {  // Fixed function name
        cancelAnimationFrame(momentIDtrend);
    }
    
    function momentlooptrend() {
        trendcontainer.scrollLeft += velocitytrend;
        velocitytrend *= 0.95;  // Adds friction to slow down
    
        if (Math.abs(velocitytrend) > 0.5) {
            momentIDtrend = requestAnimationFrame(momentlooptrend);
        }
    }
    
    // Prevent text selection when dragging
    document.addEventListener("mouseup", () => {
        Isdowntrend = false;
        trendcontainer.classList.remove("active");
    });
    
    // Make the container focusable for keyboard navigation
    trendcontainer.setAttribute("tabindex", "0");
      