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

// let rangeDotSm = document.getElementById('range#100');
// let rangeDotLg = document.getElementById('range#1000');

// window.onload = (event) => {
//     adjustCheckedDot();
// }

// window.addEventListener('resize', adjustCheckedDot);

// Set checked attribute = true when view width <= 640px
// function adjustCheckedDot() {
//     // console.log('window.innerWidth', window.innerWidth)
//     if(window.innerWidth > 640) {
//         rangeDotLg.checked = true;
//         rangeDotSm.checked = false;
//     } else if (window.innerWidth <= 780) {
//         rangeDotLg.checked = false;
//         rangeDotSm.checked = true;
//     }
// }

// ---------------- **Amount panel** in a block `Pick and feed a friend` ----------------
// The specified amount when clicking on the circle has been written in the `Another amount` field:
let amountOfDonation = document.querySelectorAll('input.yellow-dot');
let amountInput = document.getElementById('amount-input');
let amountSelected = document.getElementById('range#100');
let inputValue = 100;

amountOfDonation.forEach(elem => {
    // console.log('clicl elem: ', elem.value);
    elem.addEventListener('click', (e) => {
        // console.log(e.target.value);
        inputValue = e.target.value;
        amountInput.value = inputValue;
    });
});

// The required field `Another amount` limited to 4 characters of type number:
function limitInputChar(obj) {
    // console.log("value: ", obj.value.length, "length: ", obj.maxLength);
    if(obj.value.length > obj.maxLength) {
        obj.value = obj.value.slice(0, obj.maxLength);
    };
    matchesAmountNum(obj);
}

// At the start of the page display, the number 100 is entered, and the corresponding element (3rd from the right) is highlighted:

window.onload = () => {
    adjustCheckedAmount();
}

function adjustCheckedAmount() {
    amountInput.value = inputValue;
    amountSelected.checked = true;
}

// If enter a number in the `Another amount` field that matches one of the amounts in the Amount bar at the top:
function matchesAmountNum(obj) {
    // If enter a number in the `Another` amount field that does not match any of the amounts in the `Amount` above, none of the circles not highlighted:
    if(
        obj.value !== '5000' ||
        obj.value !== '2000' ||
        obj.value !== '1000' ||
        obj.value !== '500' ||
        obj.value !== '250' ||
        obj.value !== '100' ||
        obj.value !== '50' ||
        obj.value !== '25'
    ) {
        document.getElementById('range#5000').checked = false;
        document.getElementById('range#2000').checked = false;
        document.getElementById('range#1000').checked = false;
        document.getElementById('range#500').checked = false;
        document.getElementById('range#250').checked = false;
        document.getElementById('range#100').checked = false;
        document.getElementById('range#50').checked = false;
        document.getElementById('range#25').checked = false;
    }
    //  corresponding circle become highlighted:
    switch(obj.value) {
        case '5000':
            document.getElementById('range#5000').checked = true;
            break;
        case '2000':
            document.getElementById('range#2000').checked = true;
            break;
        case '1000':
            document.getElementById('range#1000').checked = true;
            break;
        case '500':
            document.getElementById('range#500').checked = true;
            break;
        case '250':
            document.getElementById('range#250').checked = true;
            break;
        case '100':
            document.getElementById('range#100').checked = true;
            break;
        case '50':
            document.getElementById('range#50').checked = true;
            break;
        case '25':
            document.getElementById('range#25').checked = true;
            break;
        default:
            return;
    }
}
// --------------------------------------------------------------------------------------