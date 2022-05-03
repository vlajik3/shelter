let burgerButton = document.querySelector(".burger-container");
let burgerMenu = document.querySelector(".nav-list");
let navWrapper = document.querySelector(".nav-wrapper");
let petsHeaderActive = document.querySelector(".header-logo");
let help = document.querySelector("#help-link");
let footer = document.querySelector("#footer-link");
let pageWrapper = document.querySelector(".page-wrapper");
let body = document.querySelector(".body");

const toggleBurgerMenu = () => {
    burgerMenu.classList.toggle("active");
    burgerButton.classList.toggle("active-burger");
    navWrapper.classList.toggle("active");
    petsHeaderActive.classList.toggle("active-pets");
    body.classList.toggle("active");
};

burgerButton.onclick = () => {
    toggleBurgerMenu();
};
navWrapper.onclick = () => {
    toggleBurgerMenu();
};
help.onclick = () => {
    toggleBurgerMenu();
};
footer.onclick = () => {
    toggleBurgerMenu();
};
