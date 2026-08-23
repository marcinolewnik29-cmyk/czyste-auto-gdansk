// =========================
// NAVBAR
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// =========================
// MOBILE MENU
// =========================

const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", () => {

    navbar.classList.toggle("menu-open");

});


// =========================
// CLOSE MENU AFTER CLICK
// =========================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("menu-open");

    });

});