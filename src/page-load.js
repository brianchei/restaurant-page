function pageLoad() {
    /* create DOM content */
    let content = document.querySelector("#content");

    // create sections

    // hero section
    let hero = document.createElement('div');
    hero.classList.add('hero');

    let heroImg = document.createElement('img');
    heroImg.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg/1600px-The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg";
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
    breadImg.src = "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2019/04/b-1200x675.jpg";
    breadImg.id = 'bread';

    // structure elements
    bread.appendChild(breadText);
    bread.appendChild(breadImg);

    // wine
    let wine = document.createElement('div');
    wine.classList.add('wine');
    let wineText = document.createElement('p');
    let wineImg = document.createElement('img');
    wineImg.src = "https://halleckvineyard.com/wp-content/uploads/2021/03/red-wine-feature.jpg";
    wineImg.id = 'wine';

    // structure elements
    wine.appendChild(wineText);
    wine.appendChild(wineImg);

    // menu
    let menu = document.createElement('div');
    menu.classList.add('menu');
    let menuText = document.createElement('p');
    let menuImg = document.createElement('img');
    menuImg.src = "https://assets.epicurious.com/photos/57041b13f2e39cee31a5038c/4:3/w_1776,h_1332,c_limit/EP_03292016_persianpassover_210.jpg";
    menuImg.id = 'menu';

    // structure elements
    menu.appendChild(menuText);
    menu.appendChild(menuImg);

    // reservations
    let reservations = document.createElement('div');
    reservations.classList.add('reservations');
    let reservationsText = document.createElement('p');
    let reservationsImg = document.createElement('img');
    reservationsImg.src = "https://cdn.shopify.com/s/files/1/0239/1477/4608/files/29426-DSC_5879-Edit.jpg?v=1711091974";
    reservationsImg.id = 'reservations';

    // structure elements
    reservations.appendChild(reservationsText);
    reservations.appendChild(reservationsImg);

    // add all to section
    squares.appendChild(bread);
    squares.appendChild(wine);
    squares.appendChild(menu);
    squares.appendChild(reservations);

    content.appendChild(squares);

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

    content.appendChild(referenceContainer);
}

export default pageLoad;