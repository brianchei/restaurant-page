import "./styles.css";

/* create DOM content */
let content = document.querySelector("#content");

// create sections

// hero section
let hero = document.createElement('div');
hero.classList.add('hero');

let heroImg = document.createElement('img');
heroImg.classList.add('hero-img');

hero.appendChild(heroImg);

content.appendChild(hero);

// squares section
let squares = document.createElement('div');
squares.classList.add('squares')

// bread
let bread = document.createElement('div');
bread.classList.add('bread');
let breadText = document.createElement('p');
let breadImg = document.createElement('img');

// structure elements
bread.appendChild(breadText);
bread.appendChild(breadImg);

// wine
let wine = document.createElement('div');
wine.classList.add('wine');
let wineText = document.createElement('p');
let wineImg = document.createElement('img');

// structure elements
wine.appendChild(wineText);
wine.appendChild(wineImg);

// menu
let menu = document.createElement('div');
menu.classList.add('menu');
let menuText = document.createElement('p');
let menuImg = document.createElement('img');

// structure elements
menu.appendChild(menuText);
menu.appendChild(menuImg);

// reservations
let reservations = document.createElement('div');
reservations.classList.add('reservations');
let reservationsText = document.createElement('p');
let reservationsImg = document.createElement('img');

// structure elements
reservations.appendChild(reservationsText);
reservations.appendChild(reservationsImg);

// add all to section
squares.appendChild(bread);
squares.appendChild(wine);
squares.appendChild(menu);
squares.appendChild(reservations);


// reference container section
let referenceContainer = document.createElement('div');
referenceContainer.classList.add('reference-container');
let formContainer = document.createElement('div');
formContainer.classList.add('form-container');
let form = document.createElement('form');

// structure elements
formContainer.appendChild(form);
referenceContainer.appendChild(formContainer);

// footer
let footer = document.createElement('div');
footer.classList.add('footer');
let left = document.createElement('div');
left.classList.add('left');
let links = document.createElement('div');
links.classList.add('links');
let logo = document.createElement('div');
logo.classList.add('logo');

// structure elements
footer.appendChild(left);
footer.appendChild(links);
footer.appendChild(logo);