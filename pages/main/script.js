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

// Slideshow / Carousel
let slideIndex = 1;
const slidesContent = document.getElementsByClassName('slides-content');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// showSlides(slideIndex);

// Next/previous controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

prev.addEventListener('click', e => {
    //plusSlides(-1);
    console.log('left');
    buildList([...animals], true);

});

next.addEventListener('click', e => {
    //plusSlides(1);
    console.log('right');
    buildList([...animals], true);
});

// function showSlides(n) {
//     if (n > slidesContent.length) {slideIndex = 1};
//     if (n < 1) {slideIndex = slidesContent.length};

//     for (let i=0; i < slidesContent.length; i++) {
//         slidesContent[i].style.display = 'none';
//     }
//     slidesContent[slideIndex-1].style.display = 'flex';
// }


// - The order of the pictures is generated randomly:
class Animal {
    constructor(imgUrl, title, description) {
        this.imgUrl = imgUrl;
        this.title = title;
        this.description = description;
    }
}

const animals = [
    new Animal('../../assets/images/pandas.png', 'giant Pandas', 'Native to Southwest China'),
    new Animal('../../assets/images/eagles.png', 'pets-title', 'Native to South America'),
    new Animal('../../assets/images/gorillas.png', 'Gorillas', 'Native to Congo'),
    new Animal('../../assets/images/sloth.png', 'Two-toed Sloth', 'Mesoamerica, South America'),
    new Animal('../../assets/images/cheetahs.png', 'cheetahs', 'Native to Africa'),
    new Animal('../../assets/images/penguins.png', 'Penguins', 'Native to Antarctica'),
];

// const copyAnimals = [...animals];
// console.log(copyAnimals);

var countOfCardsOnScreen = 6;
let cardParent = document.querySelector('.slides-content');

window.onload = (event) => {
    buildList([...animals], true);
}

window.addEventListener('resize', event => {
    buildList([...animals]);
});

const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};
function updateCountOfCards(viewToCheck) {
    if(viewToCheck.offsetWidth <= 640) {
        countOfCardsOnScreen = 4;
    } else {
        countOfCardsOnScreen = 6;
    }
};

function randomizeList(copyAnimals) {
    let count = copyAnimals.length;
    const showAnimalsList = [];

    for (let i = 0; i < count; i++) {
      let randomIndex = Math.floor(Math.random() * copyAnimals.length);
      showAnimalsList.push(copyAnimals[randomIndex]);
      copyAnimals.splice(randomIndex, 1);
    }
    return showAnimalsList;
};

function buildList(animalList, randomize) {
    const cardsContainer = document.getElementById('pets-container');

    removeAllChildNodes(cardParent);
    updateCountOfCards(cardsContainer);
    const updatedList = (randomize) ? randomizeList(animalList) : animalList;

    for (let i=0; i < countOfCardsOnScreen; i++) {
        const animal = updatedList[i];
        animalCard(animal, cardParent);
    }
}

// create Animal Card =====================================
const animalCard = (animalInfo, cardParent) => {
    const fragment = document.createDocumentFragment();

    // Card
    const card = document.createElement('div');
        card.className = 'card';

    // card Image
    const imgWrap = document.createElement('div');
        imgWrap.className = 'img-wrap';

    const img = document.createElement('img');
        img.className = 'pets-img';
        //img.id = `pets-img#${animalInfo.index}`;
        img.src = `${animalInfo.imgUrl}`;
        img.alt = 'pet image';

    const petsHovered = document.createElement('div');
        petsHovered.className = 'pets-text-hovered';
    const petsTitle = document.createElement('p');
        petsTitle.className = 'pets-title';
        petsTitle.textContent = `${animalInfo.title}`;

    const description = document.createElement('p');
        description.className = 'sm-paragraph';
        description.textContent = `${animalInfo.description}`;

    const petsTitle2 = petsTitle.cloneNode(true);
    const description2 = description.cloneNode(true);

    // card content
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    const petsText = document.createElement('div');
        petsText.className = 'pets-text';

    const icon = document.createElement('div');
        icon.className = 'banana-bamboo_icon';

    // Append elments
    petsHovered.append(petsTitle, description);
    imgWrap.append(img, petsHovered);
    petsText.append(petsTitle2, description2);
    cardContent.append(petsText, icon);
    card.append(imgWrap, cardContent);

    fragment.appendChild(card);
    cardParent.appendChild(fragment);
}
// =============================================