// Interactive navigation bar.
document.addEventListener("click", navClicked);
function navClicked(event) {
    const li = event.target.closest("li");
    if (li) {
        const clickedMenuValue = li.getAttribute('value');
        const menus = document.querySelectorAll(".nav-link");
        const menuArr = Array.from(menus);

        const simMenus = menuArr.filter(item => item.getAttribute('value') === clickedMenuValue);
        const simMenusArr = Array.from(simMenus);

        menuArr.forEach(element => element.classList.remove("current"));
        simMenusArr.forEach(element => element.classList.add("current"));
    }
}

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
let menu = document.getElementById('menu-links');
let header = document.getElementById('header');
let topMenuWrap = document.getElementById('top-nav');
let logo = document.getElementById('top-logo');
let logoText = document.getElementById('top-petstory');
let menuIcon = document.getElementById('top-icon-menu');
let topNaveOverlay = document.querySelector('.top-menu-overlay');

function hideTopNave() {
    menu.style.display = 'none';
    topNaveOverlay.style.display = 'none';
    header.classList.remove('menu-isopened');
    topMenuWrap.classList.remove('menu-isopened-wrap');
    logo.classList.remove('m-logo');
    logo.classList.add('sm-logo');
    logoText.classList.remove('m-logo-tx');
    menuIcon.innerHTML = '<i class="fa fa-bars"></i>';
    menuIcon.style.color = '#FFFFFF';
}

topNaveOverlay.addEventListener('click', event => {
    if(event.target === event.currentTarget) {
        hideTopNave();
    }
})

function showTopNav() {
    if(menu.style.display === 'block') {
        hideTopNave();
    } else {
        menu.style.display = 'block';
        topNaveOverlay.style.display = 'block';
        header.classList.add('menu-isopened');
        topMenuWrap.classList.add('menu-isopened-wrap');
        logo.classList.remove('sm-logo');
        logo.classList.add('m-logo');
        logoText.classList.add('m-logo-tx');
        menuIcon.innerHTML = '<i class="fa fa-times"</i>';
        menuIcon.style.color = '#000000';
    }
}

// Show Modal Testimonials Pop-Up:
function showModal() {
    document.getElementById('modal-overlay').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
}