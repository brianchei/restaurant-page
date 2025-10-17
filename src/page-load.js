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
    let breadText = document.createElement('p');
    breadText.textContent = 'BREAD';
    breadText.classList.add('left');
    let breadImg = document.createElement('img');
    breadImg.src = "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2019/04/b-1200x675.jpg";
    breadImg.id = 'bread';

    // structure elements
    bread.appendChild(breadText);
    bread.appendChild(breadImg);

    // wine
    let wine = document.createElement('div');
    let wineText = document.createElement('p');
    wineText.textContent = 'WINE';
    wineText.classList.add('right');
    let wineImg = document.createElement('img');
    wineImg.src = "https://halleckvineyard.com/wp-content/uploads/2021/03/red-wine-feature.jpg";
    wineImg.id = 'wine';

    // structure elements
    wine.appendChild(wineText);
    wine.appendChild(wineImg);

    // menu
    let menu = document.createElement('div');
    let menuText = document.createElement('p');
    menuText.textContent = 'MENU';
    menuText.classList.add('left');
    let menuImg = document.createElement('img');
    menuImg.src = "https://assets.epicurious.com/photos/57041b13f2e39cee31a5038c/4:3/w_1776,h_1332,c_limit/EP_03292016_persianpassover_210.jpg";
    menuImg.id = 'menu';

    // structure elements
    menu.appendChild(menuText);
    menu.appendChild(menuImg);

    // reservations
    let reservations = document.createElement('div');
    let reservationsText = document.createElement('p');
    reservationsText.textContent = 'RESERVATIONS';
    reservationsText.classList.add('right');
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
    let form = document.createElement('form');
    let formContainer = document.createElement('div');
    formContainer.classList.add('form-container');

    // sign up header
    let signUp = document.createElement('h2');
    signUp.classList.add('sign-up');
    signUp.textContent = 'RESERVE YOUR SEAT AT THE TABLE';

    // email sign up form control
    let formControlFirst = document.createElement('div');
    formControlFirst.classList.add('form-control');

    let labelFirst = document.createElement('label');
    labelFirst.setAttribute('for', 'email');

    let inputFirst = document.createElement('input');
    inputFirst.setAttribute('type', 'email');
    inputFirst.setAttribute('name', 'email');
    inputFirst.id = 'email';
    inputFirst.setAttribute('placeholder', 'johndoe@gmail.com');
    inputFirst.required = true;

    let spanFirst = document.createElement('span');

    formControlFirst.appendChild(labelFirst);
    formControlFirst.appendChild(inputFirst);
    formControlFirst.appendChild(spanFirst);

    // structure elements
    formContainer.appendChild(signUp);
    formContainer.appendChild(formControlFirst);
    form.appendChild(formContainer);
    referenceContainer.appendChild(form);

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