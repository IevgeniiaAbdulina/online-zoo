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

input.addEventListener("focus", event =>{
    updateButtonState();
});

input.addEventListener("focusout", event => {
    buttonSubmit.classList.remove("invalid");
})