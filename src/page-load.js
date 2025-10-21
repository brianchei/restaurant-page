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

    // left
    let left = document.createElement('div');
    left.classList.add('left');

    let title = document.createElement('h3');
    title.textContent = 'THE UPPERROOM';

    let subtitle = document.createElement('p');
    subtitle.classList.add('subtitle');
    subtitle.textContent = 'LAST SUPPER';

    let socials = document.createElement('div');
    socials.classList.add('socials');

    let insta = document.createElement('img');
    insta.classList.add('icon');
    insta.src = 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png';
    let fb = document.createElement('img');
    fb.classList.add('icon');
    fb.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png';
    let x = document.createElement('img');
    x.classList.add('icon');
    x.src = 'https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?semt=ais_hybrid&w=740&q=80';
    let tiktok = document.createElement('img');
    tiktok.classList.add('icon');
    tiktok.src = 'https://thumbs.dreamstime.com/b/tik-tok-icon-tiktok-logo-design-graphic-template-vector-illustration-211007983.jpg';
    let copyright = document.createElement('p');
    copyright.classList.add('copyright');
    copyright.textContent = 'COPYRIGHT 2025';

    // structure elements
    socials.appendChild(insta);
    socials.appendChild(fb);
    socials.appendChild(x);
    socials.appendChild(tiktok);

    left.appendChild(title);
    left.appendChild(subtitle);
    left.appendChild(socials);
    left.appendChild(copyright);
    
    
    // links
    let links = document.createElement('div');
    links.classList.add('links');
    let linkList = document.createElement('ul');
    let link1 = document.createElement('li');
    link1.textContent = 'menu';
    let link2 = document.createElement('li');
    link2.textContent = 'careers'
    let link3 = document.createElement('li');
    link3.textContent = 'locations';
    let link4 = document.createElement('li');
    link4.textContent = 'rewards';
    let link5 = document.createElement('li');
    link5.textContent = 'culture';
    let link6 = document.createElement('li');
    link6.textContent = 'contact';
    let link7 = document.createElement('li');
    link7.textContent = 'about us';
    let link8 = document.createElement('li');
    link8.textContent = 'gifts';

    // structure elements
    linkList.appendChild(link1);
    linkList.appendChild(link2);
    linkList.appendChild(link3);
    linkList.appendChild(link4);
    linkList.appendChild(link5);
    linkList.appendChild(link6);
    linkList.appendChild(link7);
    linkList.appendChild(link8);

    links.appendChild(linkList);

    // logo
    let logo = document.createElement('div');
    logo.classList.add('logo');
    let logoImg = document.createElement('img');
    logoImg.classList.add('logo-img');
    logoImg.src = 'https://pbs.twimg.com/profile_images/1009856713132920832/lfeb9wDH_400x400.jpg';

    logo.appendChild(logoImg);

    // structure elements
    footer.appendChild(left);
    footer.appendChild(links);
    footer.appendChild(logo);

    referenceContainer.appendChild(footer);
    content.appendChild(referenceContainer);
}

export default pageLoad;