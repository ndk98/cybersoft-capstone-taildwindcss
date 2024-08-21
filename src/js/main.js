// Click
let dropdownBtn = document.querySelector('a[data-dropdown="dropdown-menu"]');
let dropdownMenu = document.querySelector("#dropdown-menu");

dropdownBtn.onclick = function (e) {
    this.classList.toggle("open");
    this.querySelector(".dropdown-icon").toggleAttribute("open");
    dropdownMenu.classList.toggle("hidden");
};

let navbarStickyBtn = document.querySelector(
    'button[data-collapse-toggle="navbar-sticky"]'
);

navbarStickyBtn.onclick = function (e) {
    this.querySelector(".astronav-close-icon").classList.toggle("hidden");
    this.querySelector(".astronav-open-icon").classList.toggle("hidden");
};

// Scroll
const topThreshold = 10,
    header = document.querySelector("header.header");
window.addEventListener("scroll", () => {
    if (window.scrollY > topThreshold) {
        header.classList.add("header-active");
    } else {
        header.classList.remove("header-active");
    }
});
