document.addEventListener('DOMContentLoaded', function () {
    let list = document.querySelector('.slider .list');
    let items = document.querySelectorAll('.slider .list .item');
    let dots = document.querySelectorAll('.slider .dots li');

    let active = 0;
    let lengthitems = items.length - 1;

    // Ensure the first dot is active at the start
    dots[0].classList.add('active');
    dots[0].style.backgroundColor = "red";  // Make first dot red initially

    function reloadSlider() {
        let checkleft = items[active].offsetLeft;
        list.style.left = -checkleft + 'px';

        // Remove 'active' class and reset background color for all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
            dot.style.backgroundColor = "white";  // Reset to white
        });

        // Add 'active' class and set background color for current dot
        dots[active].classList.add('active');
        dots[active].style.backgroundColor = "red"; // Change active dot to red
    }

    function autoSlide() {
        active = (active + 1) > lengthitems ? 0 : active + 1;
        reloadSlider();
    }

    let refreshslider = setInterval(autoSlide, 4000);

    dots.forEach((li, key) => {
        li.addEventListener('click', function () {
            active = key;
            reloadSlider();
            clearInterval(refreshslider);
            refreshslider = setInterval(autoSlide, 3000);
        });
    });
});


