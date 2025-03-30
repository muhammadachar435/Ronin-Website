const latestcontainer = document.querySelector(".scroll-containerlatest");

let Isdown= false;
let StartX;
let scrollLeft;
let velocity=0;
let momentID;

latestcontainer.addEventListener("mousedown",(e)=>{

Isdown=true;
latestcontainer.classList.add('active');
StartX=e.pageX- latestcontainer.offsetLeft;
scrollLeft=latestcontainer.scrollLeft;
velocity=0;
cancalmomentum();
e.preventDefault();


});


latestcontainer.addEventListener("mouseleave",()=>{

Isdown=false;
latestcontainer.classList.remove('active');
beginmomentum();

});

latestcontainer.addEventListener("mouseup",()=>{

Isdown=false;
latestcontainer.classList.remove('active');
beginmomentum();

});

latestcontainer.addEventListener("mousemove",(e)=>{

if(!Isdown) return;  //Isdown = false
e.preventDefault();
const x= e.pageX-latestcontainer.offsetLeft;
const walk=(x-StartX)*2;
latestcontainer.scrollLeft=scrollLeft-walk;
velocity-=walk;

});

function beginmomentum(){

    cancalmomentum();
    momentID= requestAnimationFrame(momentloop)

}

function cancalmomentum(){

    cancelAnimationFrame(momentID);
}

function momentloop(){

    latestcontainer.scrollLeft+=velocity;
    velocity*=0.92;

    if(Math.abs(velocity)>0.5){
        momentID=requestAnimationFrame(momentloop)
    }
}

// // Prevent text selection when dragging
    document.addEventListener('mouseup', () => {
        Isdown = false;
        latestcontainer.classList.remove('active');
    });

    // // Make the container focusable for keyboard navigation
    latestcontainer.setAttribute('tabindex', '0');



