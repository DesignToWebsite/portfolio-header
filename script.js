//narbar for small screen

const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar-menu");

menuIcon.addEventListener("click", function () {
    navbar.classList.toggle("active");
})