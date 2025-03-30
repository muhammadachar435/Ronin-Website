document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.getElementById("scroll-container");
    const slider = document.getElementById("scroll-slider");

    let isDown = false;
    let startX;
    let scrollLeft;

    // Mouse Drag Scroll
    scrollContainer.addEventListener("mousedown", (e) => {
        isDown = true;
        scrollContainer.classList.add("grabbing");
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener("mouseleave", () => {
        isDown = false;
        scrollContainer.classList.remove("grabbing");
    });

    scrollContainer.addEventListener("mouseup", () => {
        isDown = false;
        scrollContainer.classList.remove("grabbing");
    });

    scrollContainer.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 2; // Adjust the speed
        scrollContainer.scrollLeft = scrollLeft - walk;
    });

    // Hide/Show Slider on Small Screens
    function checkScreenSize() {
        if (window.innerWidth < 150) {
            slider.classList.remove("hidden");
        } else {
            slider.classList.add("hidden");
        }
    }

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
});
