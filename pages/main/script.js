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
