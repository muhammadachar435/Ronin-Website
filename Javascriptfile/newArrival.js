const boxtrend1= document.getElementById("imgtrend1");
const boxtrend2= document.getElementById("imgtrend2");
const boxtrend3= document.getElementById("imgtrend3");

const clicktrend1 =document.getElementById("clicktrend1")
const clicktrend2 =document.getElementById("clicktrend2")
const clicktrend3 =document.getElementById("clicktrend3")

clicktrend1.addEventListener("click",(Event)=>{
    Event.preventDefault();
    boxtrend1.style.display="block";
    boxtrend2.style.display="none";
    boxtrend3.style.display="none"
    
});

clicktrend2.addEventListener("click",(Event)=>{
    Event.preventDefault();
    boxtrend1.style.display="none";
    boxtrend2.style.display="block";
    boxtrend3.style.display="none"
    
});

clicktrend3.addEventListener("click",(Event)=>{
    Event.preventDefault();
    boxtrend1.style.display="none";
    boxtrend2.style.display="none";
    boxtrend3.style.display="block"
    
});

// box2

const boxtrend21= document.getElementById("imgtrend21");
const boxtrend22= document.getElementById("imgtrend22");
const box2trend23= document.getElementById("imgtrend23");

const clicktrend21 =document.getElementById("clicktrend21")
const clicktrend22 =document.getElementById("clicktrend22")
const clicktrend23 =document.getElementById("clicktrend23")

clicktrend21.addEventListener("click",(Event)=>{
    Event.preventDefault();
    boxtrend21.style.display="block";
    boxtrend22.style.display="none";
    box2trend23.style.display="none"
    
});

clicktrend22.addEventListener("click",(Event)=>{
    Event.preventDefault();
    boxtrend21.style.display="none";
    boxtrend22.style.display="block";
    box2trend23.style.display="none"
    
});

clicktrend23.addEventListener("click",(Event)=>{
    Event.preventDefault();
    boxtrend21.style.display="none";
    boxtrend22.style.display="none";
    box2trend23.style.display="block"
    
});


// // box3

const boxtrend31= document.getElementById("imgtrend31");
const boxtrend32= document.getElementById("imgtrend32");
const boxtrend33= document.getElementById("imgtrend33");

const clicktrend31 =document.getElementById("clicktrend31")
const clicktrend32 =document.getElementById("clicktrend32")
const clicktrend33 =document.getElementById("clicktrend33")

clicktrend31.addEventListener("click",(Event)=>{
    Event.preventDefault();
    boxtrend31.style.display="block";
    boxtrend32.style.display="none";
    boxtrend33.style.display="none"
    
});

clicktrend32.addEventListener("click",(Event)=>{
    Event.preventDefault();
    boxtrend31.style.display="none";
    boxtrend32.style.display="block";
    boxtrend33.style.display="none"
    
});

clicktrend33.addEventListener("click",(Event)=>{
    Event.preventDefault();
    boxtrend31.style.display="none";
    boxtrend32.style.display="none";
    boxtrend33.style.display="block"
    
});


// box4

const boxtrend41= document.getElementById("imgtrend41");
const boxtrend42= document.getElementById("imgtrend42");


const clicktrend41 =document.getElementById("clicktrend41")
const clicktrend42 =document.getElementById("clicktrend42")


clicktrend41.addEventListener("click",(Event)=>{
    Event.preventDefault();
    boxtrend41.style.display="block";
    boxtrend42.style.display="none";
    
});

clicktrend42.addEventListener("click",(Event)=>{
    Event.preventDefault();
    boxtrend41.style.display="none";
    boxtrend42.style.display="block";

    
});


// // box5

const boxtrend51= document.getElementById("imgtrend51");
const boxtrend52= document.getElementById("imgtrend52");
const boxtrend53= document.getElementById("imgtrend53");

const clicktrend51 =document.getElementById("clicktrend51")
const clicktrend52 =document.getElementById("clicktrend52")
const clicktrend53 =document.getElementById("clicktrend53")

clicktrend51.addEventListener("click",(Event)=>{
    Event.preventDefault();
    boxtrend51.style.display="block";
    boxtrend52.style.display="none";
    boxtrend53.style.display="none"
    
});

clicktrend52.addEventListener("click",(Event)=>{
    Event.preventDefault();
    boxtrend51.style.display="none";
    boxtrend52.style.display="block";
    boxtrend53.style.display="none"
    
});

clicktrend53.addEventListener("click",(Event)=>{
    Event.preventDefault();
    boxtrend51.style.display="none";
    boxtrend52.style.display="none";
    boxtrend53.style.display="block"
    
});



const arrivalcontainer = document.querySelector(".scroll-container");

let Isdownarrival= false;
let StartXarrival;
let scrollLeftarrival;
let velocityarrival=0;
let momentIDarrival;

arrivalcontainer.addEventListener("mousedown",(e)=>{

Isdownarrival=true;
arrivalcontainer.classList.add('active');
StartXarrival=e.pageX- arrivalcontainer.offsetLeft;
scrollLeftarrival=arrivalcontainer.scrollLeft;
velocityarrival=0;
cancalmomentumarrival();
e.preventDefault();


});


arrivalcontainer.addEventListener("mouseleave",()=>{

Isdownarrival=false;
arrivalcontainer.classList.remove('active');
beginmomentumarrval();

});

arrivalcontainer.addEventListener("mouseup",()=>{

Isdownarrival=false;
arrivalcontainer.classList.remove('active');
beginmomentumarrval();

});

arrivalcontainer.addEventListener("mousemove",(e)=>{

if(!Isdownarrival) return;  //Isdown = false
e.preventDefault();
const xarrival= e.pageX-arrivalcontainer.offsetLeft;
const walkarrival=(xarrival-StartXarrival)*2;
arrivalcontainer.scrollLeft=scrollLeftarrival-walkarrival;
velocityarrival-=walkarrival;

});

function beginmomentumarrval(){

    cancalmomentumarrival();
    momentIDarrival= requestAnimationFrame(momentlooparrival)

}

function cancalmomentumarrival(){

    cancelAnimationFrame(momentIDarrival);
}

function momentlooparrival(){

    arrivalcontainer.scrollLeft+=velocityarrival;
    velocityarrival*=0.92;

    if(Math.abs(velocityarrival)>0.5){
        momentIDarrival=requestAnimationFrame(momentlooparrival)
    }
}

// // Prevent text selection when dragging
document.addEventListener('mouseup', () => {
    Isdownarrival = false;
    arrivalcontainer.classList.remove('active');
});

// // Make the container focusable for keyboard navigation
arrivalcontainer.setAttribute('tabindex', '0');
