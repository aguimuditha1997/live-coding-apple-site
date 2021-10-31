const searchButton = document.getElementById("seach");
const closeButton = document.querySelector(".search-container .link-close");
const desktopNav = document.querySelector(".desktop-navbar");
const searchContainer = document.querySelector(".search-container");
const overlay = document.querySelector(".overlay");


console.log(searchButton)
console.log(closeButton)
console.log(desktopNav)
console.log(searchContainer)
console.log(overlay)

searchButton.addEventListener("click", () => {
    desktopNav.classList.add("hidden");
    searchContainer.classList.remove("hidden");
    overlay.classList.add("show");
})
closeButton.addEventListener("click", () => {
    desktopNav.classList.remove("hidden");
    searchContainer.classList.add("hidden");
    overlay.classList.remove("show");
})

overlay.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hidden");
    overlay.classList.remove("show");
})



const menuIconContainer = document.querySelector("nav .menu-icon-container");
const navContainer = document.querySelector(".navbar-container");

menuIconContainer.addEventListener("click", () => {
    navContainer.classList.toggle("active");
})

const searchBar = document.querySelector(".mobile-search-container .search-bar");
const nav = document.querySelector(".nav-container navbar");
const searchInput = document.querySelector(".mobile-search-container input");
const cancelBtn = document.querySelector(".mobile-search-container .cancel-btn");

searchInput.addEventListener("click", () => {
    searchBar.classList.add("active");
    nav.classList.add("move-up");
    desktopNav.classList.add("move-down");
})

cancelBtn.addEventListener("click", () => {
    searchBar.classList.remove("active");
    nav.classList.remove("move-up");
    desktopNav.classList.remove("move-down");
})