
const menuBTN = document.querySelector(".menu-btn");
const navbar = document.querySelector(".ul");

menuBTN.addEventListener("click", function () {
    const isOpen = navbar.classList.toggle("active");

    menuBTN.setAttribute("aria-expanded", isOpen);
    menuBTN.setAttribute(
        "aria-label",
        isOpen ? "Tutup menu" : "Buka menu"
    );
});
