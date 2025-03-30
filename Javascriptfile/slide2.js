document.addEventListener('DOMContentLoaded', function () {
    let list1 = document.querySelector('.slider1 .list1');
    let items1 = document.querySelectorAll('.slider1 .list1 .item11');
    let slideWidth = items1[0].offsetWidth; // Get width of one slide

    // Clone all images and append them to the end for a seamless loop
    items1.forEach(item => {
        let clone = item.cloneNode(true);
        list1.appendChild(clone);
    });

    let active1 = 0;
    let lengthitems1 = items1.length; // Original image count

    function reloadSlider() {
        list1.style.transition = "transform 0.5s ease-in-out";
        list1.style.transform = `translateX(-${active1 * slideWidth}px)`;
    }

    function autoSlide() {
        active1++;

        if (active1 >= lengthitems1) {
            setTimeout(() => {
                list1.style.transition = "none"; // Disable transition for instant reset
                list1.style.transform = `translateX(0px)`; // Instantly move back
                active1 = 0;
            }, 500); // Wait for animation before resetting
        }

        reloadSlider();
    }

    setInterval(autoSlide, 3000); // Slides every 3 seconds
});
