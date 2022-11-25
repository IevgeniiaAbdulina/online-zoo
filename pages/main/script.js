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
function showTopNav() {
    let menu = document.getElementById('menu-links');
    let header = document.getElementById('header');
    let logo = document.getElementById('top-logo');
    let logoText = document.getElementById('top-petstory');
    let menuIcon = document.getElementById('top-icon-menu');
    if(menu.style.display === 'block') {
        menu.style.display = 'none';
        header.style.backgroundColor = '#000000';
        logo.style.borderColor = 'white';
        logo.style.width = '55px';
        logo.style.height = '30px';
        logoText.style.color = 'white';
        logoText.style.fontSize = '0.750em';
        menuIcon.style.color = '#FFFFFF';
    } else {
        menu.style.display = 'block';
        header.style.backgroundColor = '#FFFFFF';
        logo.style.borderColor = 'var(--orange)';
        logo.style.width = '77px';
        logo.style.height = '43px';
        logoText.style.color = 'var(--orange)';
        logoText.style.fontSize = '1rem';
        logoText.style.lineHeight = '0.75rem';
        menuIcon.style.color = '#000000';
        
    }
}