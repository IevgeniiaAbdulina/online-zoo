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
    binddata(1);
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

        const updatedList = randomizeList(animalList);

        const cardHolder = document.createElement('div');
        cardHolder.className = 'slides-content';

        for (let i=0; i < countOfCardsOnScreen; i++) {
            const animal = updatedList[i];
            animalCard(animal, cardHolder);
        }
        removeAllChildNodes(slideshowContainer);
        slideshowContainer.append(cardHolder);
    return updatedList;
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
    binddata(slideIndex += n);

    setTimeout(() => {
        flippedIsActive = false;
    }, 500);
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

function binddata(slideIndex) {
    allAnimalsGroupedByPages = buildList(animals);
    showSlides(slideIndex, slidesContent);
}

// --------------------------------------------------------------
// ----------- **Carousel** in a block `Testimonials` -----------
var testimonials = [];
let testimonialsParent = document.querySelector('.text-block');
let rangeElem = document.querySelector('input[type="range"]');
    rangeElem.min = 1;
    rangeElem.max = 0;

let testimonialsOnPage = 0;
let totalTestimonialsOnPage = 0;

    // count of testimonials on the screen:
function countTestimonials(testimonialsParent) {
    if(testimonialsParent.offsetWidth <= 1000) {
        return 3;
    } else {
        return 4;
    }
};

// get users data:
fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        testimonials = data;
        totalTestimonialsOnPage = testimonials.length;
    })
    .then(() => {
        testimonialsOnPage = countTestimonials(testimonialsParent);
        rangeElem.max = totalTestimonialsOnPage + 1 - testimonialsOnPage;

        removeAllChildNodes(testimonialsParent);
        for(let i=0; i < totalTestimonialsOnPage; i++) {
            let elem = testimonials[i];
            let testimonialItem = testimonilChild(elem, onclicklistener);
            testimonialsParent.append(testimonialItem);
        }
    });

// create Testimonials Card ==========================
const testimonilChild = (testimonial, onclicklistener) => {
    const fragment = document.createDocumentFragment();

    let box = document.createElement('div');
        box.className = 'text-block-box';
        if(onclicklistener){
            box.addEventListener('click', (e) => onclicklistener(testimonial));
        }

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
    return fragment;
}
// =============================================

// Slider move / stop
let testimonialItems = document.querySelector('.text-block');
let testimonialCards = document.getElementsByClassName('text-block-box');
let wrapper = document.querySelector('.text-block-wrapper');

let initCount = 1;
let gap = 30;

function scrollByInterval(wrapper, offsetX) {
    // track data
    let isRightMoving = offsetX > 0;
    let remainOffset = Math.abs(offsetX);

    // calculate speed
    let step = remainOffset / 20;

    setInterval(() => {
        if(remainOffset <= 0 ) {
            return;
        }
        if(remainOffset >= step) {
            if(isRightMoving) {
                wrapper.scrollBy(step, 0);
            } else {
                wrapper.scrollBy(-step, 0);
            }
            remainOffset -= step;
        } else {
            if(isRightMoving) {
                wrapper.scrollBy(remainOffset, 0);
            } else {
                wrapper.scrollBy(-remainOffset, 0);
            }
            remainOffset = 0;
        }
    });
}

let totalPassedWay = 0;

function slide() {
    let width = testimonialCards[0].offsetWidth;
    let newCount = (rangeElem.value - initCount);
    let scrollX = (width + gap) * newCount;

    totalPassedWay += scrollX;
    scrollByInterval(wrapper, scrollX);
    initCount = rangeElem.value;
};

function startSlide() {
    rangeElem.removeEventListener('input', slide);
    totalPassedWay = 0;
};

function endSlide() {
    slide();
    rangeElem.addEventListener('input', slide);
    totalPassedWay = 0;
}

rangeElem.addEventListener('input', slide);
rangeElem.addEventListener('touchstart', startSlide);
rangeElem.addEventListener('touchend', endSlide);
// --------------------------------------------------------------
// ---------------**Popup** when clicking on a review in a block `Testimonials` ---------------

const windowWidth = document.querySelector('main').offsetWidth;
const popupHolder = document.getElementById('modal');
const modalOverlay = document.getElementById('modal-overlay');

const createModalIcon = () => {
    let closeBtn = document.createElement('div');
        closeBtn.className = 'close-btn';
        closeBtn.id = 'x-ic';
        closeBtn.innerHTML = '<span class="material-symbols-outlined">close</span>';
        closeBtn.addEventListener('click', () => closeModal());
    return closeBtn;
}

const onclicklistener = (testimonial) => {
    let testimonialModal = testimonilChild(testimonial);
    let icon = createModalIcon();
    popupHolder.append(icon, testimonialModal);
    showModal();
}

function showModal() {
    if(windowWidth <= 640) {
        modalOverlay.style.display = 'flex';
    }
};

const hideModalWindowOnBlur = (e, target) => {
    if(target === e.currentTarget) {
        closeModal();
    }
}

function closeModal() {
    removeAllChildNodes(popupHolder);
    modalOverlay.style.display = 'none';
};

modalOverlay.addEventListener('click', (e) => hideModalWindowOnBlur(e, e.target));