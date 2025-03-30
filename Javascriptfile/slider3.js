document.addEventListener('DOMContentLoaded', function () {

    let sliderseler = document.querySelectorAll('.sliderseler .listseler .itemseler'); // Get all slides
    let dotseler = document.querySelectorAll('.sliderseler .dots li'); // Get all dots
    let activeseler = 0; // Start with the first slide
    
    // Function to update the slider
    
    function updateSlider() {
        
    sliderseler.forEach(sliderseler => sliderseler.style.display = 'none');
    
    // Show the current slide and highlight the dot
    sliderseler[activeseler].style.display = 'block';
    
    }
    
    let autoSlideseler = setInterval(() => {
    
    activeseler = (activeseler + 1) % sliderseler.length; // Move to next slide (loop back if at last slide)
    updateSlider();
    }, 2000);
    
    
    activeseler = index; // Change to clicked dot's slide
    updateSlider();     
    
    });
    

