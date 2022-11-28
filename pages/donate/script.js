// The button submit should be in the mistake position. If the field email passes validation, it goes into the default state.

const buttonSubmit = document.getElementById("submit");
buttonSubmit.addEventListener("click", event => {
    event.preventDefault();
    if (input.validity.valid) {
        alert("You are subscribed =)");
    } else {
        alert("Please, write a correct email to subscribe!");
    }
});

const updateButtonState = () => {
    if (!input.validity.valid) {
        buttonSubmit.classList.add("invalid");
    } else {
        buttonSubmit.classList.remove("invalid");
    }
}

const input = document.getElementById("email");
input.addEventListener("input", event =>{
    updateButtonState();
});

input.addEventListener("focusout", event => {
    buttonSubmit.classList.remove("invalid");
});

// Mobile Navigation Menu
function showTopNav() {
    let menu = document.getElementById('menu-links');
    let header = document.getElementById('header');
    let topMenuWrap = document.getElementById('top-nav');
    let logo = document.getElementById('top-logo');
    let logoText = document.getElementById('top-petstory');
    let menuIcon = document.getElementById('top-icon-menu');
    if(menu.style.display === 'block') {
        menu.style.display = 'none';
        header.classList.remove('menu-isopened');
        topMenuWrap.classList.remove('menu-isopened-wrap');
        logo.classList.remove('m-logo');
        logo.classList.add('sm-logo');
        logoText.classList.remove('m-logo-tx');
        menuIcon.style.color = '#FFFFFF';
    } else {
        menu.style.display = 'block';
        header.classList.add('menu-isopened');
        topMenuWrap.classList.add('menu-isopened-wrap');
        logo.classList.remove('sm-logo');
        logo.classList.add('m-logo');
        logoText.classList.add('m-logo-tx');
        menuIcon.style.color = '#000000';
    }
}

let rangeDotSm = document.getElementById('checked-dot-sm');
let rangeDotLg = document.getElementById('checked-dot-lg');

window.onload = (event) => {
    adjustCheckedDot();
}

window.addEventListener('resize', adjustCheckedDot);

// Set checked attribute = true when view width <= 640px
function adjustCheckedDot() {
    console.log('window.innerWidth', window.innerWidth)
    if(window.innerWidth > 640) {
        rangeDotLg.checked = true;
        rangeDotSm.checked = false;
    } else if (window.innerWidth <= 780) {
        rangeDotLg.checked = false;
        rangeDotSm.checked = true;
    }
}