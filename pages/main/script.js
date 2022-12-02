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


// --------------- **Carousel** in a block `Pets` ---------------

// creating and initializing an object instance of Animal class:
class Animal {
    constructor(imgUrl, title, description, icon) {
        this.imgUrl = imgUrl;
        this.title = title;
        this.description = description;
        this.icon = icon;
    }
}

// create objects of the type Animal
const animals = [
    new Animal('../../assets/images/pandas.png', 'giant Pandas', 'Native to Southwest China', 'banana-bamboo_icon'),
    new Animal('../../assets/images/eagles.png', 'eagles', 'Native to South America', 'meet-fish_icon'),
    new Animal('../../assets/images/gorillas.png', 'Gorillas', 'Native to Congo', 'banana-bamboo_icon'),
    new Animal('../../assets/images/sloth.png', 'Two-toed Sloth', 'Mesoamerica, South America', 'banana-bamboo_icon'),
    new Animal('../../assets/images/cheetahs.png', 'cheetahs', 'Native to Africa', 'meet-fish_icon'),
    new Animal('../../assets/images/penguins.png', 'Penguins', 'Native to Antarctica', 'meet-fish_icon'),
    new Animal('../../assets/images/alligator.png', 'Alligators', 'Native to Southeastern United States', 'meet-fish_icon')
];

// count of Slides Pages
const pageCount = 6;
let allAnimalsGroupedByPages = [];

let slideIndex = 1;
let slideshowContainer = document.querySelector('.slideshow-container');
const slidesContent = document.getElementsByClassName('slides-content');
// Next/previous controls
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

window.onload = () => {
    allAnimalsGroupedByPages = buildList(animals);
    showSlides(slideIndex, slidesContent);
}

const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};
function updateCountOfCards(viewToCheck) {
    if(viewToCheck.offsetWidth <= 640) {
        return 4;
    } else {
        return 6;
    }
};

// - The order of the pictures is generated randomly:
function randomizeList(sourceList) {
    let copyAnimals = [...sourceList];
    let count = copyAnimals.length;
    const showAnimalsList = [];

    for (let i = 0; i < count; i++) {
      let randomIndex = Math.floor(Math.random() * copyAnimals.length);
      showAnimalsList.push(copyAnimals[randomIndex]);
      copyAnimals.splice(randomIndex, 1);
    }
    return showAnimalsList;
};

function buildList(animalList) {
    const cardsContainer = document.getElementById('pets-container');
    const countOfCardsOnScreen = updateCountOfCards(cardsContainer);

    let allAnimalsGroupedByPages = [];
    for(let pageIndex = 0; pageIndex < pageCount; pageIndex++) {
        const updatedList = randomizeList(animalList);
        allAnimalsGroupedByPages.push(updatedList);

        const cardHolder = document.createElement('div');
        cardHolder.className = 'slides-content';

        for (let i=0; i < countOfCardsOnScreen; i++) {
            const animal = updatedList[i];
            animalCard(animal, cardHolder);
        }
        slideshowContainer.append(cardHolder);
    }
    return allAnimalsGroupedByPages;
};

// create Animal Card ==========================
const animalCard = (animalInfo, parent) => {
    const fragment = document.createDocumentFragment();

    // Card
    const card = document.createElement('div');
        card.className = 'card flipped';

    // card Image
    const imgWrap = document.createElement('div');
        imgWrap.className = 'img-wrap';

    const img = document.createElement('img');
        img.className = 'pets-img';
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
        icon.className = `${animalInfo.icon}`;

    // Append elments
    petsHovered.append(petsTitle, description);
    imgWrap.append(img, petsHovered);
    petsText.append(petsTitle2, description2);
    cardContent.append(petsText, icon);
    card.append(imgWrap, cardContent);

    fragment.appendChild(card);
    parent.appendChild(fragment);
};
// =============================================

// - check the condition to ensure that our blocks perform exactly one movement at a time.
let flippedIsActive = false;

function plusSlides(n, slides) {
    if(flippedIsActive) return;
    flippedIsActive = true;
    showSlides(slideIndex += n, slides);

    setTimeout(() => {
        flippedIsActive = false;
    }, 1100);
};

prev.addEventListener('click', e => {
    plusSlides(-1, slidesContent);
});

next.addEventListener('click', e => {
    plusSlides(1, slidesContent);
});

function showSlides(n, slides) {
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length};

    for (let i=0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex-1].style.display = 'flex';
};
// --------------------------------------------------------------
// ----------- **Carousel** in a block `Testimonials` -----------
var testimonials = [];
let testimonialsParent = document.querySelector('.text-block');

// get users data:
fetch('./data.JSON')
    .then(res => res.json())
    .then(data => {
        data.map(elem => {
            testimonilChild(elem, testimonialsParent);
        });
    });


// create Testimonials Card ==========================
const testimonilChild = (testimonial, parent) => {
    const fragment = document.createDocumentFragment();
    // console.log("create child", testimonial)

    let box = document.createElement('div');
        box.className = 'text-block-box';
        box.addEventListener('click', e => showModal());

    let boxHeader = document.createElement('div');
        boxHeader.className = 'box-header';

        let userIcon = document.createElement('img');
            userIcon.className = 'user-icon';
            userIcon.id = 'user-ic';
            userIcon.style.backgroundImage = `url(${testimonial.userIcon})`;

        let personalInfo = document.createElement('div');
            personalInfo.className = 'personal-info';

                let userName = document.createElement('h4');
                    userName.className = 'user-name';
                    userName.id = 'user-name';
                    userName.innerText = `${testimonial.userName}`;

                let row = document.createElement('div');
                    row.className ='row';

                    let userLocation = document.createElement('p');
                        userLocation.className = 'location';
                        userLocation.id = 'user-location';
                        userLocation.innerText = `${testimonial.location}`;

                    let postDate = document.createElement('p');
                        postDate.className = 'date';
                        postDate.id = 'post-date';
                        postDate.innerText = `${testimonial.date}`;
                row.append(userLocation, postDate);
        personalInfo.append(userName, row);
    boxHeader.append(userIcon, personalInfo);

    let boxBody = document.createElement('div');
        boxBody.className = 'box-body';

        let message = document.createElement('p');
            message.className = 'sm-paaragraph';
            message.id = 'user-message';
            message.innerText = `${testimonial.message}`;
    boxBody.appendChild(message);

    // appending elements
    box.append(boxHeader, boxBody);

    fragment.appendChild(box);
    parent.appendChild(fragment);
}
// =============================================

let rangeElem = document.querySelector('input[type="range"]');
    // rangeElem.min = 0;
    // rangeElem.max;

const rangeValue = () => {
    let newValue = rangeElem.value;
    console.log(newValue);
}
rangeElem.addEventListener('input', rangeValue);
// --------------------------------------------------------------