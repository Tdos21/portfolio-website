document.addEventListener("DOMContentLoaded", () => {
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const menu = document.querySelector(".menu-links");

    hamburgerIcon.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default action
        menu.classList.toggle("open"); // Toggle the dropdown visibility
    });
});

// Dark and Light mode 
const btn = document.getElementById("modeToggle1");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon"); // Fix selector
const currentTheme = localStorage.getItem("theme");

// Set the initial theme from localStorage
if (currentTheme === "dark") {
    setDarkMode();
} else {
    setLightMode();
}

// Toggle theme on button clicks
btn.addEventListener("click", setTheme);
btn2.addEventListener("click", setTheme);

function setTheme() {
    let currentTheme = document.body.getAttribute("theme");

    if (currentTheme === "dark") {
        setLightMode();
    } else {
        setDarkMode();
    }
}

function setDarkMode() {
    document.body.setAttribute("theme", "dark");
    localStorage.setItem("theme", "dark");

    themeIcons.forEach((icon) => {
        icon.src = icon.getAttribute("src-dark");
    });
}

function setLightMode() {
    document.body.removeAttribute("theme");
    localStorage.setItem("theme", "light");

    themeIcons.forEach((icon) => {
        icon.src = icon.getAttribute("src-light");
    });
}
