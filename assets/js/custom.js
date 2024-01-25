/// header stick function
document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("header-sticky");
    var scrollPos = 0;

    window.addEventListener("scroll", function () {
        var currentScrollPos = window.pageYOffset;

        if (currentScrollPos > scrollPos) {
            // Scrolling down
            header.classList.add("fixed");
        } else if (currentScrollPos === 0) {
            // At the top of the page
            header.classList.remove("fixed");
        }

        scrollPos = currentScrollPos;
    });
});

//slider
let slideIndex = 1;
showSlides(slideIndex);

// Function to advance to the next slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to set the current slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Function to show slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Autoplay function
function autoPlay() {
    plusSlides(1);
}

// Set interval for autoplay (change the value in milliseconds as needed)
setInterval(autoPlay, 4000);
// Adjust the interval as needed (e.g., 2000 for 2 seconds)
