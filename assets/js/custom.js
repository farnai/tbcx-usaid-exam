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
