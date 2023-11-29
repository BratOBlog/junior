const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".nav__links");

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});