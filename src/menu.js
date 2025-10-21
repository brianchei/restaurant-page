function menuLoad() {
    /* create DOM content */
    let content = document.querySelector("#content");

    // create sections

    // header section
    let header = document.createElement('header');
    let heading = document.createElement('h1');
    heading.classList.add('heading-menu');
    heading.textContent = 'MENU';

    // structure elements
    header.appendChild(heading);

    content.appendChild(header);


    // body section
    let body = document.createElement('div');
    body.classList.add('body-menu');

    let squares = document.createElement('div');
    squares.classList.add('squares')
    squares.classList.add('squares-menu');

    // bread
    let bread = document.createElement('div');
    bread.classList.add('bread');
    let breadText = document.createElement('p');
    breadText.textContent = 'BREAD';
    let breadImg = document.createElement('img');
    breadImg.src = "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2019/04/b-1200x675.jpg";

    // structure elements
    bread.appendChild(breadText);
    bread.appendChild(breadImg);

    // wine
    let wine = document.createElement('div');
    wine.classList.add('wine');
    let wineText = document.createElement('p');
    wineText.textContent = 'WINE';
    let wineImg = document.createElement('img');
    wineImg.src = "https://halleckvineyard.com/wp-content/uploads/2021/03/red-wine-feature.jpg";

    // structure elements
    wine.appendChild(wineText);
    wine.appendChild(wineImg);

    // lamb
    let lamb = document.createElement('div');
    lamb.classList.add('lamb');
    let lambText = document.createElement('p');
    lambText.textContent = 'LAMB';
    let lambImg = document.createElement('img');
    lambImg.src = 'https://wp.en.aleteia.org/wp-content/uploads/sites/2/2017/09/web3-lamb-symbolism-art-christ-tara-swan-via-shutterstock_527451874.jpg?resize=620,350&q=75';

    // structure elements
    lamb.appendChild(lambText);
    lamb.appendChild(lambImg);

    // goat
    let goat = document.createElement('div');
    goat.classList.add('goat');
    let goatText = document.createElement('p');
    goatText.textContent = 'GOAT';
    let goatImg = document.createElement('img');
    goatImg.src = 'https://www.woldswildlife.co.uk/images/uploads/animal_introduction_images/boer_vpse.jpeg';

    // structure elements
    goat.appendChild(goatText);
    goat.appendChild(goatImg);

    // add all to section
    squares.appendChild(bread);
    squares.appendChild(wine);
    squares.appendChild(lamb);
    squares.appendChild(goat);

    body.appendChild(squares);

    content.appendChild(body);
}

export default menuLoad;