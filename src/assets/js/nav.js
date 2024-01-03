//
//    Toggle Mobile Navigation
//

const burgerButton = document.querySelector(".burger-input")
const mobileMenu = document.querySelector(".mobile-menu");

burgerButton.addEventListener('click', function() {
    const isNavOpen = mobileMenu.classList.contains("open");

    if (!isNavOpen) {
        burgerButton.setAttribute("aria-expanded", true);
        burgerButton.classList.add("clicked");
        mobileMenu.classList.add("open");
    } else {
        burgerButton.setAttribute("aria-expanded", false);
        burgerButton.classList.remove("clicked");
        mobileMenu.classList.remove("open");
    }
});