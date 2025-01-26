document.addEventListener("DOMContentLoaded", () => {
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const menu = document.querySelector(".menu-links");

    hamburgerIcon.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default action
        menu.classList.toggle("open"); // Toggle the dropdown visibility
    });
});
