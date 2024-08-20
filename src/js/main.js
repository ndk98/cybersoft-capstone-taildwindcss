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
