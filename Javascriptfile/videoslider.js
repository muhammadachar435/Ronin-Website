document.addEventListener('DOMContentLoaded', function () {
    let listvideo1 = document.querySelector('.slidervideo1 .listvideo1');
    let itemsvideo1 = document.querySelectorAll('.slidervideo1 .listvideo1 .itemvideo21');
    let slideWidthvideo = itemsvideo1[0].offsetWidth; // Get width of one slide

    // Clone all images and append them to the end for a seamless loop
itemsvideo1.forEach(item => {
    let clonevideo = item.cloneNode(true);
    listvideo1.appendChild(clonevideo);
});

let activevideo = 0;
let lengthitemsvideo = itemsvideo1.length; // Original image count

function reloadSlidervideo() {
    listvideo1.style.transition = "transform 0.5s ease-in-out";
    listvideo1.style.transform = `translateX(-${activevideo * slideWidthvideo}px)`;
}

function autoSlidevidro() {
    activevideo++;

    if (activevideo >= lengthitemsvideo) {
        setTimeout(() => {
    listvideo1.style.transition = "none"; // Disable transition for instant reset
    listvideo1.style.transform = `translateX(0px)`; // Instantly move back
    activevideo = 0;
}, 2000); // Wait for animation before resetting
}

reloadSlidervideo();
}

setInterval(autoSlidevidro, 3000); // Slides every 3 seconds
});
