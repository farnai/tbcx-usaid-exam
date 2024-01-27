/// header stick function
document.addEventListener("DOMContentLoaded", function () {
    let header = document.getElementById("header-sticky");
    let scrollPos = 0;

    window.addEventListener("scroll", function () {
        let currentScrollPos = window.pageYOffset;

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

// Accordion
document.addEventListener('DOMContentLoaded', function () {
    let accordions = document.querySelectorAll('.accordion-item');

    accordions.forEach(function (item) {
        item.addEventListener('click', function () {
            accordions.forEach(function (accordion) {
                if (accordion !== item) {
                    accordion.classList.remove('active');
                }
            });

            this.classList.toggle('active');
        });
    });
});


//Mobile menu
// Add an event listener to the burger menu
document.getElementById('burger-menu').addEventListener('click', function() {
    // Toggle the 'active' class on the burger menu
    this.classList.toggle('active');

    // Toggle the 'active' class on the primary menu
    document.querySelector('.primary-menu').classList.toggle('active');
});
